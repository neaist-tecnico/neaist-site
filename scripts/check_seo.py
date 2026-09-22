#!/usr/bin/env python3
"""Validate static SEO and optionally HTTP behaviour on Apache or production.

python3 scripts/check_seo.py
python3 scripts/check_seo.py --http http://127.0.0.1:8088 --output docs/seo/redirect-verification.json
python3 scripts/check_seo.py --http https://neaist.tecnico.ulisboa.pt --output /tmp/neaist-production-check.json
"""
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote, quote
from urllib.request import Request, build_opener, HTTPRedirectHandler
from urllib.error import HTTPError
from hashlib import sha256
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime
import argparse
import json
import re
import xml.etree.ElementTree as ET

from bs4 import BeautifulSoup
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://neaist.tecnico.ulisboa.pt"
PAGES = json.loads((ROOT / "scripts/seo-pages.json").read_text())
ERRORS = []


def check(condition, message):
    if not condition: ERRORS.append(message)


def canonical(file):
    return BASE + ("/" if file == "index.html" else "/" + file)


def static_checks():
    titles, descriptions = [], []
    expected_urls = {canonical(name) for name in PAGES}
    root = ET.parse(ROOT / "sitemap.xml").getroot()
    ns = "http://www.sitemaps.org/schemas/sitemap/0.9"
    check(root.tag == "{" + ns + "}urlset", "Invalid sitemap namespace")
    urls = [tag.text for tag in root.findall("{" + ns + "}url/{" + ns + "}loc")]
    check(set(urls) == expected_urls and len(urls) == len(expected_urls), "Sitemap must contain exactly the canonical indexable pages")
    for node in root.findall("{" + ns + "}url/{" + ns + "}lastmod"):
        try: datetime.fromisoformat(node.text)
        except ValueError: ERRORS.append("Invalid sitemap lastmod")
    robots = (ROOT / "robots.txt").read_text()
    check("Sitemap: " + BASE + "/sitemap.xml" in robots, "Missing sitemap in robots.txt")
    check(not re.search(r"^Disallow:\s*/", robots, re.M), "Public or legacy paths blocked in robots.txt")
    for path in sorted(ROOT.rglob("*.html")):
        if any(part.startswith(".") for part in path.relative_to(ROOT).parts) or path.is_relative_to(ROOT / "docs"): continue
        name = path.relative_to(ROOT).as_posix()
        html = path.read_text()
        if name.startswith("google"):
            check(html.strip() == "google-site-verification: " + name, "Google verification file must stay unchanged")
            continue
        soup = BeautifulSoup(html, "html.parser")
        check(not soup.select('meta[name="keywords"]'), f"{name}: obsolete keywords")
        check(soup.html.get("lang") == "pt-PT", f"{name}: wrong default language")
        if name not in PAGES:
            robots_tag = soup.select_one('meta[name="robots"]')
            check(robots_tag and "noindex" in robots_tag.get("content", ""), f"{name}: excluded page must be noindex")
            continue
        page = PAGES[name]
        check(soup.title and soup.title.get_text() == page["pt"]["title"], f"{name}: wrong title")
        titles.append(soup.title.get_text())
        for prop, expected in [("description", page["pt"]["description"]), ("twitter:card", "summary_large_image"), ("twitter:title", page["pt"]["title"]), ("twitter:description", page["pt"]["description"]), ("twitter:image:alt", page["imageAlt"]), ("theme-color", "#21A1DE")]:
            tags = soup.select(f'meta[name="{prop}"]')
            check(len(tags) == 1 and tags[0].get("content") == expected, f"{name}: invalid {prop}")
        descriptions.append(soup.select_one('meta[name="description"]')["content"])
        links = soup.select('link[rel="canonical"]')
        check(len(links) == 1 and links[0].get("href") == canonical(name), f"{name}: canonical mismatch")
        check(len(soup.find_all("h1")) == 1, f"{name}: expected one H1")
        check("noindex" not in soup.select_one('meta[name="robots"]')["content"], f"{name}: accidental noindex")
        image = BASE + "/images/social/" + page["image"] + ".jpg"
        og = {"type": "article" if page.get("article") else "website", "site_name": "NEAIST", "title": page["pt"]["title"], "description": page["pt"]["description"], "url": canonical(name), "image": image, "image:width": "1200", "image:height": "630", "image:alt": page["imageAlt"], "locale": "pt_PT"}
        for prop, expected in og.items():
            tags = soup.select(f'meta[property="og:{prop}"]')
            check(len(tags) == 1 and tags[0].get("content") == expected, f"{name}: invalid og:{prop}")
        check(soup.select_one('meta[name="twitter:image"]')["content"] == image, f"{name}: Twitter image mismatch")
        with Image.open(ROOT / urlsplit(image).path.lstrip("/")) as img:
            check(img.size == (1200, 630) and img.format == "JPEG", f"{name}: social image format/dimensions")
        schemas = soup.select('script[type="application/ld+json"]')
        check(len(schemas) == 1, f"{name}: duplicate/missing JSON-LD")
        data = json.loads(schemas[0].string or schemas[0].get_text())
        check(data.get("@context") == "https://schema.org", f"{name}: JSON-LD context")
        graph = data["@graph"]
        types = [entry.get("@type") for entry in graph]
        check("Organization" in types and page["pageType"] in types, f"{name}: missing schema entities")
        org = next(entry for entry in graph if entry["@type"] == "Organization")
        check(org["@id"] == BASE + "/#organization" and org["name"] == "NEAIST" and org["email"] == "neaist.sa@aeist.pt", f"{name}: wrong organisation identity")
        check(org["foundingDate"] == "2019-10-23", f"{name}: founding date")
        check(set(org["sameAs"]) == {"https://www.instagram.com/nea_ist/", "https://www.facebook.com/NEAISTECNICO/", "https://www.tiktok.com/@neaist_"}, f"{name}: unconfirmed social profiles")
        if name == "index.html": check("WebSite" in types, "Homepage missing WebSite")
        else:
            breadcrumb = next(entry for entry in graph if entry["@type"] == "BreadcrumbList")
            items = breadcrumb["itemListElement"]
            check([item["position"] for item in items] == list(range(1, len(items) + 1)), f"{name}: breadcrumb positions")
            check(items[-1]["item"] == canonical(name), f"{name}: breadcrumb canonical")
        if page.get("article"):
            article = next(entry for entry in graph if entry["@type"] == "NewsArticle")
            check(article["url"] == canonical(name) and article["headline"] == page["pt"]["title"], f"{name}: article metadata")
            check(article["publisher"]["@id"] == org["@id"], f"{name}: publisher reference")
            check("datePublished" not in article or article["datePublished"] == page.get("datePublished"), f"{name}: unsupported publication date")
        check("StudentOrganization" not in types and "CollegeOrUniversity" not in types and "Event" not in types, f"{name}: incorrect entity/event type")
        check(not re.search(r'chat\.whatsapp\.com|[?&]token=|/edit\b', json.dumps(data)), f"{name}: private URL in schema")
        for image_tag in soup.find_all("img"):
            check(image_tag.has_attr("alt"), f"{name}: missing alt")
            check(image_tag.has_attr("width") and image_tag.has_attr("height"), f"{name}: missing image dimensions: {image_tag.get('src')}")
        # Resolve all local links/assets (query strings don't form part of filenames).
        for tag in soup.select("a[href], img[src], script[src], link[href], source[src]"):
            value = tag.get("href", tag.get("src"))
            target = urlsplit(urljoin(canonical(name), value))
            if target.scheme not in ("https", "http") or target.netloc != urlsplit(BASE).netloc: continue
            target_path = unquote(target.path).lstrip("/") or "index.html"
            disk = ROOT / target_path
            if disk.is_dir(): disk /= "index.html"
            check(disk.is_file(), f"{name}: broken internal reference {value}")
            if tag.name == "a": check(target.path != "/index.html", f"{name}: homepage link should use /")
            if disk.is_file() and re.fullmatch(r'v=[a-f0-9]{12}', target.query):
                check(target.query[2:] == sha256(disk.read_bytes()).hexdigest()[:12], f"{name}: stale asset version {value}")
    check(len(set(titles)) == len(titles), "Duplicate indexable page titles")
    check(len(set(descriptions)) == len(descriptions), "Duplicate indexable page descriptions")
    print(f"Static audit: {len(PAGES)} indexable pages; 8 tournament pages and 404 excluded; Google verification preserved.")


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs): return None


def http_checks(origin):
    mapping = json.loads((ROOT / "scripts/legacy-redirects.json").read_text())
    tests = [(row["old"], 301, BASE + row["new"]) for row in mapping["paths"]]
    for number, target in mapping["wordpressIds"].items():
        for route in [f"/?p={number}", f"/?page_id={number}", f"/index.php?p={number}", f"/index.html?p={number}.html", f"/index.html%3Fp={number}.html"]:
            tests.append((route, 301, BASE + target))
    for route in ["/index.html", "/index.htm", "/index.php", "/INDEX.HTML", "/index.html/"]:
        tests.append((route, 301, BASE + "/"))
    for name in PAGES:
        if name == "index.html": continue
        for route in ["/" + name[:-5], "/" + name[:-5] + "/", "/" + name + "/", "/" + name.upper()]:
            tests.append((route, 301, BASE + "/" + name))
    tests += [("/seo-check-missing/nested-page", 404, None), ("/?p=999999999", 410, None), ("/wp-includes/obsolete-file.js", 404, None), ("/wp-content/uploads/unrelated-old-file.pdf", 404, None)]
    tests += [(urlsplit(canonical(name)).path, 200, None) for name in PAGES]
    tests += [("/images/social/" + image + ".jpg", 200, None) for image in sorted({page["image"] for page in PAGES.values()})]
    local = urlsplit(origin).hostname in ("localhost", "127.0.0.1")
    opener = build_opener(NoRedirect)
    def fetch(route, forwarded=True, host=None):
        headers = {"User-Agent": "NEAIST-SEO-verification", "Cache-Control": "no-cache"}
        if local:
            headers["Host"] = host or "neaist.tecnico.ulisboa.pt"
            if forwarded: headers["X-Forwarded-Proto"] = "https"
        try: response = opener.open(Request(origin.rstrip("/") + quote(route, safe="/%?=&"), headers=headers), timeout=20)
        except HTTPError as error: response = error
        with response: return response.status, response.headers.get("Location"), response.read()
    def verify(test):
        route, expected_status, expected_location = test
        try:
            status, location, body = fetch(route)
            result = {"path": route, "status": status, "location": location, "expectedStatus": expected_status, "passed": status == expected_status and location == expected_location}
            if expected_location and result["passed"]:
                dest = urlsplit(expected_location)
                dest_status, next_location, _ = fetch(dest.path + ("?" + dest.query if dest.query else ""))
                result.update(destinationStatus=dest_status, singleHop=dest_status == 200 and next_location is None)
                result["passed"] = result["singleHop"]
            if expected_status == 404:
                result["custom404"] = "Página não encontrada".encode() in body
                result["passed"] = result["passed"] and result["custom404"]
            if not result["passed"]: ERRORS.append("HTTP check failed: " + json.dumps(result))
            return result
        except Exception as error:
            ERRORS.append(f"HTTP {route}: {error}")
            return {"path": route, "passed": False, "error": str(error)}
    results = list(ThreadPoolExecutor(max_workers=6).map(verify, tests))
    if local:
        for route, host in [("/", None), ("/sobre-nos.html", None), ("/sobre-nos/", "www.neaist.tecnico.ulisboa.pt")]:
            status, location, _ = fetch(route, forwarded=False, host=host)
            expected = BASE + ("/sobre-nos.html" if "sobre-nos" in route else "/")
            passed = status == 301 and location == expected
            check(passed, f"HTTP to HTTPS/host failed: {route}")
            results.append({"path": route, "requestScheme": "http", "host": host or "neaist.tecnico.ulisboa.pt", "status": status, "location": location, "passed": passed})
    print(f"HTTP audit: {sum(result['passed'] for result in results)}/{len(results)} passed against {origin}.")
    return {"origin": origin, "localApache": local, "checkedAt": datetime.now().astimezone().isoformat(), "results": results}


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--http", help="Apache/production origin, not Python's simple HTTP server")
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    static_checks()
    if args.http:
        results = http_checks(args.http)
        if args.output: args.output.write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n")
    if ERRORS:
        for error in ERRORS: print("FAIL:", error)
        raise SystemExit(1)
    print("All checks passed.")
