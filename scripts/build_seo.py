#!/usr/bin/env python3
"""Generate static SEO metadata; no build step or Python dependency on the server.

Run from any directory with the optional dependencies in requirements-seo.txt.
Page copy is maintained in seo-pages.json. HTML remains the deployable source.
"""
from pathlib import Path
from hashlib import sha256
from html import escape
from datetime import datetime
from urllib.parse import unquote, urlsplit
import json
import re
import subprocess
import xml.etree.ElementTree as ET

from bs4 import BeautifulSoup
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://neaist.tecnico.ulisboa.pt"
PAGES = json.loads((ROOT / "scripts/seo-pages.json").read_text())
OFFICIAL_NAME = "Núcleo de Estudantes Africanos do Instituto Superior Técnico"
ORG = {
    "@type": "Organization", "@id": BASE + "/#organization", "name": "NEAIST",
    "alternateName": [OFFICIAL_NAME, "African Students Association at Instituto Superior Técnico"],
    "url": BASE + "/", "logo": {"@type": "ImageObject", "url": BASE + "/images/branding/neaist-logo.png", "width": 1080, "height": 1146},
    "description": "O NEAIST representa e apoia a comunidade de estudantes africanos no Instituto Superior Técnico através de apoio académico, integração, cultura e representação estudantil.",
    "foundingDate": "2019-10-23", "email": "neaist.sa@aeist.pt",
    "location": {"@type": "Place", "name": "Instituto Superior Técnico", "address": {"@type": "PostalAddress", "addressLocality": "Lisboa", "addressCountry": "PT"}},
    "sameAs": ["https://www.instagram.com/nea_ist/", "https://www.facebook.com/NEAISTECNICO/", "https://www.tiktok.com/@neaist_"]
}


def canonical(name):
    return BASE + ("/" if name == "index.html" else "/" + name)


def content_signature(html):
    """Ignore shared navigation, metadata and scripts when finding source dates."""
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup.select("head, nav, footer, script, .back-to-top, .hamburger"):
        tag.decompose()
    return soup.get_text(" ", strip=True)


def content_date(name):
    # Commit dates document substantive source changes, not assumed event/publication dates.
    history = subprocess.check_output(["git", "log", "--format=%H %cI", "--", name], cwd=ROOT, text=True).splitlines()
    previous = None
    previous_date = None
    for line in history:
        commit, date = line.split(" ", 1)
        result = subprocess.run(["git", "show", f"{commit}:{name}"], cwd=ROOT, text=True, capture_output=True)
        if result.returncode:
            continue
        signature = content_signature(result.stdout)
        if previous is not None and signature != previous:
            return previous_date
        previous, previous_date = signature, date
    return previous_date


def page_date(name, page):
    """Include content supplied by a data file or a linked guide edition."""
    dates = [content_date(name)]
    for source in page.get("contentSources", []):
        date = subprocess.check_output(
            ["git", "log", "-1", "--format=%cI", "--", source], cwd=ROOT, text=True
        ).strip()
        if date:
            dates.append(date)
    return max(filter(None, dates), key=datetime.fromisoformat, default=None)


def structured_data(name, page, modified):
    url = canonical(name)
    image = BASE + "/images/social/" + page["image"] + ".jpg"
    graph = []
    if name == "index.html":
        graph += [ORG, {"@type": "WebSite", "@id": BASE + "/#website", "url": BASE + "/", "name": "NEAIST", "alternateName": OFFICIAL_NAME, "publisher": {"@id": ORG["@id"]}, "inLanguage": "pt-PT"}]
    else:
        graph.append(ORG)
    web_page = {"@type": page["pageType"], "@id": url + "#webpage", "url": url, "name": page["pt"]["title"], "description": page["pt"]["description"], "inLanguage": "pt-PT", "isPartOf": {"@id": BASE + "/#website"}, "about": {"@id": ORG["@id"]}, "primaryImageOfPage": {"@type": "ImageObject", "url": image, "width": 1200, "height": 630}}
    if name != "index.html":
        items = [{"@type": "ListItem", "position": 1, "name": "Início", "item": BASE + "/"}]
        if page.get("article"):
            items.append({"@type": "ListItem", "position": 2, "name": "Notícias", "item": BASE + "/noticias.html"})
        items.append({"@type": "ListItem", "position": len(items) + 1, "name": page["name"], "item": url})
        web_page["breadcrumb"] = {"@id": url + "#breadcrumb"}
        graph.append({"@type": "BreadcrumbList", "@id": url + "#breadcrumb", "itemListElement": items})
    if page.get("article"):
        article = {"@type": "NewsArticle", "@id": url + "#article", "headline": page["pt"]["title"], "description": page["pt"]["description"], "url": url, "mainEntityOfPage": {"@id": url + "#webpage"}, "image": [image], "inLanguage": "pt-PT", "author": {"@id": ORG["@id"]}, "publisher": {"@id": ORG["@id"]}}
        if modified:
            article["dateModified"] = modified
        # The visible dates are EVENT dates, not verified publication dates.
        # Add datePublished only when the editorial publication date is confirmed.
        if page.get("datePublished"):
            article["datePublished"] = page["datePublished"]
        web_page["mainEntity"] = {"@id": url + "#article"}
        graph.append(article)
    graph.append(web_page)
    if name == "equipa.html":
        # Preserve the public team member facts already maintained with the page.
        soup = BeautifulSoup((ROOT / name).read_text(), "html.parser")
        for tag in soup.select('script[type="application/ld+json"]'):
            data = json.loads(tag.string or tag.get_text())
            for entity in data.get("@graph", [data]):
                if entity.get("member"):
                    graph[0] = {**graph[0], "member": entity["member"]}
    return {"@context": "https://schema.org", "@graph": graph}


def icon_tags():
    return '''    <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32 48x48">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/branding/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/branding/favicon-16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/branding/apple-touch-icon.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#21A1DE">'''


def head_block(name, page, modified):
    copy = page["pt"]
    image = BASE + "/images/social/" + page["image"] + ".jpg"
    tags = [f'    <title>{escape(copy["title"])}</title>', f'    <meta name="description" content="{escape(copy["description"], quote=True)}">', f'    <link rel="canonical" href="{canonical(name)}">', '    <meta name="robots" content="index, follow, max-image-preview:large">']
    og = {"type": "article" if page.get("article") else "website", "site_name": "NEAIST", "title": copy["title"], "description": copy["description"], "url": canonical(name), "image": image, "image:type": "image/jpeg", "image:width": "1200", "image:height": "630", "image:alt": page["imageAlt"], "locale": "pt_PT"}
    tags += [f'    <meta property="og:{key}" content="{escape(value, quote=True)}">' for key, value in og.items()]
    twitter = {"card": "summary_large_image", "title": copy["title"], "description": copy["description"], "image": image, "image:alt": page["imageAlt"]}
    tags += [f'    <meta name="twitter:{key}" content="{escape(value, quote=True)}">' for key, value in twitter.items()]
    tags += [icon_tags(), '    <script type="application/ld+json">\n' + json.dumps(structured_data(name, page, modified), ensure_ascii=False, indent=2) + '\n    </script>']
    return "\n".join(tags)


def replace_head(html, block):
    head = re.search(r"<head>(.*?)</head>", html, re.S).group(1)
    head = re.sub(r"\s*<title>.*?</title>", "", head, flags=re.S)
    head = re.sub(r'\s*<script\s+type="application/ld\+json">.*?</script>', "", head, flags=re.S)
    def retain(match):
        tag = BeautifulSoup(match.group(0), "html.parser").find()
        if tag.name == "meta" and (tag.get("name") in ["description", "robots", "theme-color"] or (tag.get("property") or "").startswith(("og:", "article:")) or (tag.get("name") or "").startswith("twitter:")):
            return ""
        if tag.name == "link" and set(tag.get("rel", [])) & {"canonical", "icon", "apple-touch-icon", "manifest"}:
            return ""
        return match.group(0)
    head = re.sub(r"\s*<(?:meta|link)\b[^>]*>", retain, head)
    head = re.sub(r'(\s*<meta name="viewport"[^>]*>)', r'\1\n' + block.replace('\\', '\\\\'), head, count=1)
    head = re.sub(r"\n[ \t]*\n(?:[ \t]*\n)+", "\n\n", head)
    head = re.sub(r"(?m)^[ \t]+$", "", head)
    return re.sub(r"<head>.*?</head>", lambda _: "<head>" + head + "</head>", html, count=1, flags=re.S)


def update_images(html, path):
    seen = 0
    def image_tag(match):
        nonlocal seen
        raw = match.group(0)
        tag = BeautifulSoup(raw, "html.parser").img
        src = tag.get("src", "")
        if urlsplit(src).scheme:
            return raw
        image_path = (path.parent / unquote(urlsplit(src).path)).resolve() if not src.startswith("/") else ROOT / src.lstrip("/")
        if not image_path.is_file():
            return raw
        try:
            with Image.open(image_path) as img:
                width, height = ImageOps.exif_transpose(img).size
        except Exception:
            return raw
        alt = tag.get("alt", "")
        if alt == "NEAIST logo": alt = "Logótipo do NEAIST"
        if alt == "Técnico logo": alt = "Logótipo do Instituto Superior Técnico"
        brand = "branding/" in src
        if not brand: seen += 1
        updates = {"width": str(width), "height": str(height), "decoding": "async", "alt": alt}
        if not brand and seen > (2 if path.name == "loja.html" else 1):
            updates["loading"] = "lazy"
        else:
            updates["loading"] = "eager"
        for key, value in updates.items():
            attr = f'{key}="{escape(value, quote=True)}"'
            if re.search(r'\b' + key + r'="[^"]*"', raw): raw = re.sub(r'\b' + key + r'="[^"]*"', lambda _: attr, raw)
            else: raw = raw[:-1] + " " + attr + ">"
        return raw
    return re.sub(r"<img\b[^>]*>", image_tag, html)


def main():
    dates = {}
    for name, page in PAGES.items():
        path = ROOT / name
        dates[name] = page_date(name, page)
        html = replace_head(path.read_text(), head_block(name, page, dates[name]))
        html = html.replace('href="index.html"', 'href="/"')
        html = update_images(html, path)
        path.write_text(html)
    # Keep the existing language switch from restoring obsolete metadata on load.
    path = ROOT / "js/languages.js"
    language_js = path.read_text()
    for name, page in PAGES.items():
        start = language_js.index('    "' + name + '": {')
        match = re.search(r'\n    "[^"]+": \{', language_js[start + 1:])
        end = start + 1 + match.start() if match else language_js.index('\n};', start)
        segment = language_js[start:end]
        for lang in ["pt", "en"]:
            pattern = r'(' + lang + r': \{\s*)title: "(?:\\.|[^"\\])*",\s*description: "(?:\\.|[^"\\])*"'
            replacement = lambda m: m.group(1) + 'title: ' + json.dumps(page[lang]["title"], ensure_ascii=False) + ',\n            description: ' + json.dumps(page[lang]["description"], ensure_ascii=False)
            segment, count = re.subn(pattern, replacement, segment, count=1)
            assert count == 1, (name, lang)
        language_js = language_js[:start] + segment + language_js[end:]
    path.write_text(language_js)
    # Only canonical public HTML pages; tournament remains intentionally unindexed.
    namespace = "http://www.sitemaps.org/schemas/sitemap/0.9"
    ET.register_namespace("", namespace)
    root = ET.Element("{" + namespace + "}urlset")
    for name in PAGES:
        url = ET.SubElement(root, "{" + namespace + "}url")
        ET.SubElement(url, "{" + namespace + "}loc").text = canonical(name)
        if dates[name]:
            ET.SubElement(url, "{" + namespace + "}lastmod").text = dates[name]
    ET.indent(root, space="  ")
    ET.ElementTree(root).write(ROOT / "sitemap.xml", encoding="utf-8", xml_declaration=True)
    (ROOT / "docs/seo/content-dates.json").write_text(json.dumps(dates, indent=2) + "\n")
    # Refresh versioned asset references after all runtime edits.
    for page in ROOT.rglob("*.html"):
        if ".git" in page.parts or "docs" in page.parts: continue
        html = page.read_text()
        def version(match):
            asset = ROOT / match.group(1).lstrip("/")
            return '"' + match.group(1) + '?v=' + sha256(asset.read_bytes()).hexdigest()[:12] + '"'
        html = re.sub(r'"(/?(?:css|js)/[^"?]+\.(?:css|js))(?:\?v=[a-f0-9]+)?"', version, html) if page.parent == ROOT else html
        page.write_text(html)
    print(f"Updated {len(PAGES)} indexable pages, language metadata and sitemap.")


if __name__ == "__main__":
    main()
