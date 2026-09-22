(function () {
    // Intrinsic sizes reserve space before gallery photos load.
    const GALLERY_IMAGE_DIMENSIONS = {"DiadeAfricaPics":{"Achismos1.JPEG":[1330,2364],"Achismos2.JPEG":[3762,6688],"Achismos3.JPEG":[1330,2364],"Achismos4.JPEG":[1330,2364],"Achismos_1.JPEG":[1330,2364],"Celine_Rogerio.JPEG":[1330,2364],"DDA_Group.JPG":[6072,3416],"DDA_group2.JPG":[8064,4536],"Dra Marta.JPEG":[1330,2364],"Eric_Celine_Rogerio.JPEG":[1330,2364],"Eric_DraMarta_Miza.JPEG":[3762,6688],"Eric_LuisCastro.JPEG":[1330,2364],"Eric_LuisCastro1.JPEG":[1330,2364],"Eric_Luis_Rogerio.JPEG":[1330,2364],"Eric_Miza_Marta.JPEG":[3762,6688],"Eric_Rogerio.JPEG":[1330,2364],"Eric_Rogerio_Celine.JPEG":[1330,2364],"Eric_Rogerio_Celine2.JPEG":[1330,2364],"Eric_Sostenes_Miza.JPEG":[3762,6688],"Eric_Sostenes_Miza_Ludo.JPEG":[3762,6688],"Eric_Tarissa_Feliciana.JPEG":[1330,2364],"Eric_Tarissa_Fely.JPEG":[1330,2364],"EricwithFunnyFace.JPEG":[1330,2364],"FullSizeRender.JPEG":[1330,2364],"Great_DDA_group.JPG":[6072,3416],"Group Dia de Africa Foto.JPG":[6072,3416],"IMG_8980.JPEG":[1330,2364],"IMG_8997.JPEG":[1330,2364],"IMG_8999.JPEG":[1330,2364],"IMG_9002.JPEG":[1330,2364],"IMG_9004.JPEG":[1330,2364],"IMG_9012.JPEG":[1330,2364],"IMG_9014.JPEG":[1330,2364],"IMG_9018.JPEG":[1330,2364],"IMG_9019.JPEG":[1330,2364],"IMG_9020.JPEG":[1330,2364],"IMG_9022.JPEG":[1330,2364],"IMG_9024.JPEG":[1330,2364],"IMG_9025.JPEG":[1330,2364],"IMG_9026.JPEG":[1330,2364],"IMG_9027.JPEG":[1330,2364],"IMG_9029.JPEG":[1330,2364],"IMG_9034.JPEG":[1330,2364],"IMG_9035.JPEG":[1330,2364],"IMG_9036.JPEG":[1330,2364],"IMG_9043.JPEG":[1330,2364],"IMG_9050.JPEG":[1330,2364],"IMG_9051.JPEG":[1330,2364],"IMG_9054.JPEG":[1330,2364],"IMG_9065.JPEG":[1330,2364],"IMG_9068.JPEG":[1330,2364],"IMG_9081.JPEG":[1330,2364],"IMG_9082.JPEG":[1330,2364],"IMG_9086.JPEG":[1330,2364],"IMG_9088.JPEG":[1330,2364],"IMG_9090.JPEG":[1330,2364],"IMG_9091.JPEG":[1330,2364],"IMG_9092.JPEG":[1330,2364],"IMG_9098.JPEG":[3762,6688],"IMG_9099.JPEG":[3762,6688],"IMG_9100.JPEG":[3762,6688],"IMG_9101.JPEG":[3762,6688],"IMG_9102.JPEG":[1330,2364],"IMG_9103.JPEG":[1330,2364],"IMG_9104.JPEG":[1330,2364],"IMG_9105.JPEG":[1330,2364],"IMG_9112.JPEG":[3762,6688],"IMG_9113.JPEG":[1330,2364],"IMG_9114.JPEG":[3762,6688],"IMG_9115.JPEG":[3762,6688],"IMG_9116.JPEG":[3762,6688],"IMG_9119.JPEG":[3762,6688],"IMG_9121.JPEG":[3762,6688],"IMG_9122.JPEG":[3762,6688],"IMG_9130.JPEG":[1330,2364],"IMG_9134.JPEG":[1330,2364],"IMG_9135.JPEG":[1330,2364],"IMG_9155.JPG":[8064,4536],"IMG_9156.JPG":[4536,8064],"IMG_9157.JPG":[4536,8064],"LuisCastro_Rogerio_Eric.JPEG":[1330,2364],"Luis_Eric.JPEG":[1330,2364],"Luis_Rogerio_Eric.JPEG":[1330,2364],"NicePic.JPEG":[1330,2364],"NicePic2.JPEG":[1330,2364],"NicePic3.JPEG":[1330,2364],"NicePic4.JPEG":[1330,2364],"NicePic5.JPEG":[1330,2364],"NicePic6.JPEG":[1330,2364],"Prof Rego.JPEG":[2364,1330],"ProfRogerioDDA.JPEG":[1330,2364],"Profs Pedro_Marta_Luis.JPEG":[1330,2364],"Proper_DDA_Group.JPG":[6072,3416],"Rogerio_LuisCastro_Eric.JPEG":[1330,2364],"Rogerio_Marta_Pedro.JPEG":[1330,2364],"Rogerio_Pedro.JPEG":[1330,2364],"Rogerio_Pedro2.JPEG":[1330,2364],"TIC_Entrance.JPEG":[1330,2364],"Top_Rogerio.JPEG":[1330,2364]},"tomadadePosse26":{"Alayna1.jpeg":[1600,1200],"Andreia1.jpeg":[1600,1200],"Ayanda1.jpeg":[1600,1200],"Ayanda2.jpeg":[1600,1200],"Bibiana Abrantes.jpeg":[1600,1200],"Bibiana2.jpeg":[1600,1200],"Bibiana_Jenifer_Simone.jpeg":[1600,1200],"CelineAcia.jpeg":[1600,1200],"Celine_Simone.jpeg":[1600,1200],"Celine_Tarissa.jpeg":[1600,1200],"Davane1.jpeg":[1600,1200],"Davane2.jpeg":[1600,1200],"Davane3.jpeg":[1600,1200],"EquipaTomadaDePosse.jpeg":[1600,1200],"EquipaTomadaDePosse26.jpeg":[1600,1200],"EricSoloVibe.jpeg":[1600,1200],"EvanioTarissaEricCeline.jpeg":[1600,1200],"Feliciana.jpeg":[1600,1200],"Feliciana2.jpeg":[1600,1200],"GroupTomadaDePosse26needsLight.jpeg":[1600,1200],"GroupTomadaDePosseneedsLight2.jpeg":[1600,1200],"Jenifer.jpeg":[1600,1200],"Jenifer2.jpeg":[1600,1200],"LuisCastro.jpeg":[1600,1200],"LuisCastro_DanielRocha.jpeg":[852,1200],"Miza2.jpeg":[1600,1200],"MizaMabunda.jpeg":[1600,1200],"Ndully1.jpeg":[1600,1200],"Ndully2.jpeg":[1600,1200],"NdullyEricDavane.jpeg":[1600,1200],"Nice Group Pic.jpeg":[1600,1200],"Nice Sala Pic.jpeg":[1600,1200],"PicComEvanioSimoneEricLuisCastro.jpeg":[1600,1200],"PresEric.jpeg":[1600,1200],"ProfLuis.jpeg":[1200,1600],"Simone.jpeg":[1600,1200],"Simone_Feliciana.jpeg":[1600,1200],"Tarissa1.jpeg":[1200,1600],"Tarissa2.jpeg":[1200,1600],"WhatsApp Image 2026-05-23 at 18.35.21.jpeg":[1600,1200],"WhatsApp Image 2026-05-23 at 18.35.22.jpeg":[1600,1200],"WhatsApp Image 2026-05-23 at 18.35.28.jpeg":[1600,1200],"WhatsApp Image 2026-05-23 at 18.35.50 (1).jpeg":[1600,1200],"WhatsApp Image 2026-05-23 at 18.35.51.jpeg":[1600,1200],"WhatsApp Image 2026-05-23 at 18.35.52 (1).jpeg":[1600,1200],"WhatsApp Image 2026-05-23 at 18.35.52 (2).jpeg":[1600,1200],"WhatsApp Image 2026-05-23 at 18.35.52.jpeg":[1600,1200],"WhatsApp Image 2026-05-23 at 18.35.53 (6).jpeg":[1600,1200],"WhatsApp Image 2026-05-23 at 18.35.53 (7).jpeg":[1200,1600],"WhatsApp Image 2026-05-23 at 18.35.53.jpeg":[1600,1200],"WhatsApp Image 2026-05-23 at 18.35.54 (1).jpeg":[1200,1600],"WhatsApp Image 2026-05-23 at 18.35.54 (6).jpeg":[1200,1600],"WhatsApp Image 2026-05-23 at 18.35.55 (1).jpeg":[1200,1600],"WhatsApp Image 2026-05-23 at 18.35.55 (2).jpeg":[1200,1600],"WhatsApp Image 2026-05-23 at 18.35.55 (3).jpeg":[1200,1600],"WhatsApp Image 2026-05-23 at 18.35.55 (4).jpeg":[1200,1600],"WhatsApp Image 2026-05-23 at 18.35.55 (5).jpeg":[1200,1600],"WhatsApp Image 2026-05-23 at 18.35.55 (6).jpeg":[1200,1600]},"Game Day":{"IMG_7705.JPEG":[2066,3672],"IMG_7714.JPEG":[3762,6688],"IMG_7765.JPEG":[3762,6688],"IMG_7774.JPEG":[3762,6688],"IMG_7775.JPEG":[1330,2364],"IMG_7778.JPEG":[2066,3672],"NEAIST GAME DAY (1).png":[1055,1491],"game_day_C9_clean.jpeg":[1080,1920]}};
    const GALLERY_SECTION_COPY = {
        pt: {
            dia: {
                kicker: "Evento em destaque",
                title: "Dia de África",
                subtitle: "Arquivo visual do encontro organizado pelo NEAIST no Técnico, com momentos de convívio, exposição cultural, convidados e comunidade.",
                button: "Ver página do evento",
                href: "dia-de-africa.html",
                folder: "DiadeAfricaPics",
                captions: [
                    "Momento do Dia de África no Técnico",
                    "Registo da exposição cultural",
                    "Participantes durante o Dia de África",
                    "Momento de convívio da comunidade"
                ],
                files: ["Achismos1.JPEG", "Achismos2.JPEG", "Achismos3.JPEG", "Achismos4.JPEG", "Achismos_1.JPEG", "Celine_Rogerio.JPEG", "DDA_Group.JPG", "DDA_group2.JPG", "Dra Marta.JPEG", "Eric_Celine_Rogerio.JPEG", "Eric_DraMarta_Miza.JPEG", "Eric_LuisCastro.JPEG", "Eric_LuisCastro1.JPEG", "Eric_Luis_Rogerio.JPEG", "Eric_Miza_Marta.JPEG", "Eric_Rogerio.JPEG", "Eric_Rogerio_Celine.JPEG", "Eric_Rogerio_Celine2.JPEG", "Eric_Sostenes_Miza.JPEG", "Eric_Sostenes_Miza_Ludo.JPEG", "Eric_Tarissa_Feliciana.JPEG", "Eric_Tarissa_Fely.JPEG", "EricwithFunnyFace.JPEG", "FullSizeRender.JPEG", "Great_DDA_group.JPG", "Group Dia de Africa Foto.JPG", "IMG_8980.JPEG", "IMG_8997.JPEG", "IMG_8999.JPEG", "IMG_9002.JPEG", "IMG_9004.JPEG", "IMG_9012.JPEG", "IMG_9014.JPEG", "IMG_9018.JPEG", "IMG_9019.JPEG", "IMG_9020.JPEG", "IMG_9022.JPEG", "IMG_9024.JPEG", "IMG_9025.JPEG", "IMG_9026.JPEG", "IMG_9027.JPEG", "IMG_9029.JPEG", "IMG_9034.JPEG", "IMG_9035.JPEG", "IMG_9036.JPEG", "IMG_9043.JPEG", "IMG_9050.JPEG", "IMG_9051.JPEG", "IMG_9054.JPEG", "IMG_9065.JPEG", "IMG_9068.JPEG", "IMG_9081.JPEG", "IMG_9082.JPEG", "IMG_9086.JPEG", "IMG_9088.JPEG", "IMG_9090.JPEG", "IMG_9091.JPEG", "IMG_9092.JPEG", "IMG_9098.JPEG", "IMG_9099.JPEG", "IMG_9100.JPEG", "IMG_9101.JPEG", "IMG_9102.JPEG", "IMG_9103.JPEG", "IMG_9104.JPEG", "IMG_9105.JPEG", "IMG_9112.JPEG", "IMG_9113.JPEG", "IMG_9114.JPEG", "IMG_9115.JPEG", "IMG_9116.JPEG", "IMG_9119.JPEG", "IMG_9121.JPEG", "IMG_9122.JPEG", "IMG_9130.JPEG", "IMG_9134.JPEG", "IMG_9135.JPEG", "IMG_9155.JPG", "IMG_9156.JPG", "IMG_9157.JPG", "LuisCastro_Rogerio_Eric.JPEG", "Luis_Eric.JPEG", "Luis_Rogerio_Eric.JPEG", "NicePic.JPEG", "NicePic2.JPEG", "NicePic3.JPEG", "NicePic4.JPEG", "NicePic5.JPEG", "NicePic6.JPEG", "Prof Rego.JPEG", "ProfRogerioDDA.JPEG", "Profs Pedro_Marta_Luis.JPEG", "Proper_DDA_Group.JPG", "Rogerio_LuisCastro_Eric.JPEG", "Rogerio_Marta_Pedro.JPEG", "Rogerio_Pedro.JPEG", "Rogerio_Pedro2.JPEG", "TIC_Entrance.JPEG", "Top_Rogerio.JPEG"]
            },
            tomada: {
                kicker: "Mandato 2025/2026",
                title: "Tomada de Posse",
                subtitle: "Registo da cerimónia que marcou o início do novo mandato do NEAIST, reunindo equipa, convidados institucionais e comunidade académica.",
                button: "Ler artigo completo",
                href: "noticia-tomada-posse-2026.html",
                folder: "tomadadePosse26",
                captions: [
                    "Momento da cerimónia de tomada de posse",
                    "Fotografia de grupo da tomada de posse",
                    "Registo da equipa e convidados",
                    "Momento institucional da cerimónia"
                ],
                files: ["Alayna1.jpeg", "Andreia1.jpeg", "Ayanda1.jpeg", "Ayanda2.jpeg", "Bibiana Abrantes.jpeg", "Bibiana2.jpeg", "Bibiana_Jenifer_Simone.jpeg", "CelineAcia.jpeg", "Celine_Simone.jpeg", "Celine_Tarissa.jpeg", "Davane1.jpeg", "Davane2.jpeg", "Davane3.jpeg", "EquipaTomadaDePosse.jpeg", "EquipaTomadaDePosse26.jpeg", "EricSoloVibe.jpeg", "EvanioTarissaEricCeline.jpeg", "Feliciana.jpeg", "Feliciana2.jpeg", "GroupTomadaDePosse26needsLight.jpeg", "GroupTomadaDePosseneedsLight2.jpeg", "Jenifer.jpeg", "Jenifer2.jpeg", "LuisCastro.jpeg", "LuisCastro_DanielRocha.jpeg", "Miza2.jpeg", "MizaMabunda.jpeg", "Ndully1.jpeg", "Ndully2.jpeg", "NdullyEricDavane.jpeg", "Nice Group Pic.jpeg", "Nice Sala Pic.jpeg", "PicComEvanioSimoneEricLuisCastro.jpeg", "PresEric.jpeg", "ProfLuis.jpeg", "Simone.jpeg", "Simone_Feliciana.jpeg", "Tarissa1.jpeg", "Tarissa2.jpeg", "WhatsApp Image 2026-05-23 at 18.35.21.jpeg", "WhatsApp Image 2026-05-23 at 18.35.22.jpeg", "WhatsApp Image 2026-05-23 at 18.35.28.jpeg", "WhatsApp Image 2026-05-23 at 18.35.50 (1).jpeg", "WhatsApp Image 2026-05-23 at 18.35.51.jpeg", "WhatsApp Image 2026-05-23 at 18.35.52 (1).jpeg", "WhatsApp Image 2026-05-23 at 18.35.52 (2).jpeg", "WhatsApp Image 2026-05-23 at 18.35.52.jpeg", "WhatsApp Image 2026-05-23 at 18.35.53 (6).jpeg", "WhatsApp Image 2026-05-23 at 18.35.53 (7).jpeg", "WhatsApp Image 2026-05-23 at 18.35.53.jpeg", "WhatsApp Image 2026-05-23 at 18.35.54 (1).jpeg", "WhatsApp Image 2026-05-23 at 18.35.54 (6).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (1).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (2).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (3).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (4).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (5).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (6).jpeg"]
            },
            game: {
                kicker: "Convívio",
                title: "Game Day",
                subtitle: "Arquivo fotográfico das atividades de lazer e convívio promovidas pelo NEAIST, com jogos e momentos informais entre estudantes.",
                button: "Ler sobre o Game Day",
                href: "noticia-game-day-2026.html",
                folder: "Game Day",
                captions: [
                    "Momento do Game Day",
                    "Atividade de convívio da comunidade",
                    "Participantes durante o Game Day",
                    "Jogos e convívio entre estudantes"
                ],
                files: ["IMG_7705.JPEG", "IMG_7714.JPEG", "IMG_7765.JPEG", "IMG_7774.JPEG", "IMG_7775.JPEG", "IMG_7778.JPEG", "NEAIST GAME DAY (1).png", "game_day_C9_clean.jpeg"]
            }
        },
        en: {
            dia: {
                kicker: "Featured event",
                title: "Africa Day",
                subtitle: "Visual archive of the gathering organized by NEAIST at Técnico, with community moments, the cultural exhibition, guests, and participants.",
                button: "View event page",
                href: "dia-de-africa.html",
                folder: "DiadeAfricaPics",
                captions: [
                    "Moment from Africa Day at Técnico",
                    "Record of the cultural exhibition",
                    "Participants during Africa Day",
                    "Community gathering moment"
                ],
                files: ["Achismos1.JPEG", "Achismos2.JPEG", "Achismos3.JPEG", "Achismos4.JPEG", "Achismos_1.JPEG", "Celine_Rogerio.JPEG", "DDA_Group.JPG", "DDA_group2.JPG", "Dra Marta.JPEG", "Eric_Celine_Rogerio.JPEG", "Eric_DraMarta_Miza.JPEG", "Eric_LuisCastro.JPEG", "Eric_LuisCastro1.JPEG", "Eric_Luis_Rogerio.JPEG", "Eric_Miza_Marta.JPEG", "Eric_Rogerio.JPEG", "Eric_Rogerio_Celine.JPEG", "Eric_Rogerio_Celine2.JPEG", "Eric_Sostenes_Miza.JPEG", "Eric_Sostenes_Miza_Ludo.JPEG", "Eric_Tarissa_Feliciana.JPEG", "Eric_Tarissa_Fely.JPEG", "EricwithFunnyFace.JPEG", "FullSizeRender.JPEG", "Great_DDA_group.JPG", "Group Dia de Africa Foto.JPG", "IMG_8980.JPEG", "IMG_8997.JPEG", "IMG_8999.JPEG", "IMG_9002.JPEG", "IMG_9004.JPEG", "IMG_9012.JPEG", "IMG_9014.JPEG", "IMG_9018.JPEG", "IMG_9019.JPEG", "IMG_9020.JPEG", "IMG_9022.JPEG", "IMG_9024.JPEG", "IMG_9025.JPEG", "IMG_9026.JPEG", "IMG_9027.JPEG", "IMG_9029.JPEG", "IMG_9034.JPEG", "IMG_9035.JPEG", "IMG_9036.JPEG", "IMG_9043.JPEG", "IMG_9050.JPEG", "IMG_9051.JPEG", "IMG_9054.JPEG", "IMG_9065.JPEG", "IMG_9068.JPEG", "IMG_9081.JPEG", "IMG_9082.JPEG", "IMG_9086.JPEG", "IMG_9088.JPEG", "IMG_9090.JPEG", "IMG_9091.JPEG", "IMG_9092.JPEG", "IMG_9098.JPEG", "IMG_9099.JPEG", "IMG_9100.JPEG", "IMG_9101.JPEG", "IMG_9102.JPEG", "IMG_9103.JPEG", "IMG_9104.JPEG", "IMG_9105.JPEG", "IMG_9112.JPEG", "IMG_9113.JPEG", "IMG_9114.JPEG", "IMG_9115.JPEG", "IMG_9116.JPEG", "IMG_9119.JPEG", "IMG_9121.JPEG", "IMG_9122.JPEG", "IMG_9130.JPEG", "IMG_9134.JPEG", "IMG_9135.JPEG", "IMG_9155.JPG", "IMG_9156.JPG", "IMG_9157.JPG", "LuisCastro_Rogerio_Eric.JPEG", "Luis_Eric.JPEG", "Luis_Rogerio_Eric.JPEG", "NicePic.JPEG", "NicePic2.JPEG", "NicePic3.JPEG", "NicePic4.JPEG", "NicePic5.JPEG", "NicePic6.JPEG", "Prof Rego.JPEG", "ProfRogerioDDA.JPEG", "Profs Pedro_Marta_Luis.JPEG", "Proper_DDA_Group.JPG", "Rogerio_LuisCastro_Eric.JPEG", "Rogerio_Marta_Pedro.JPEG", "Rogerio_Pedro.JPEG", "Rogerio_Pedro2.JPEG", "TIC_Entrance.JPEG", "Top_Rogerio.JPEG"]
            },
            tomada: {
                kicker: "2025/2026 term",
                title: "Inauguration Ceremony",
                subtitle: "Record of the ceremony that marked the beginning of NEAIST’s new term, bringing together the team, institutional guests, and the academic community.",
                button: "Read full article",
                href: "noticia-tomada-posse-2026.html",
                folder: "tomadadePosse26",
                captions: [
                    "Moment from the inauguration ceremony",
                    "Group photo from the inauguration",
                    "Record of the team and guests",
                    "Institutional moment from the ceremony"
                ],
                files: ["Alayna1.jpeg", "Andreia1.jpeg", "Ayanda1.jpeg", "Ayanda2.jpeg", "Bibiana Abrantes.jpeg", "Bibiana2.jpeg", "Bibiana_Jenifer_Simone.jpeg", "CelineAcia.jpeg", "Celine_Simone.jpeg", "Celine_Tarissa.jpeg", "Davane1.jpeg", "Davane2.jpeg", "Davane3.jpeg", "EquipaTomadaDePosse.jpeg", "EquipaTomadaDePosse26.jpeg", "EricSoloVibe.jpeg", "EvanioTarissaEricCeline.jpeg", "Feliciana.jpeg", "Feliciana2.jpeg", "GroupTomadaDePosse26needsLight.jpeg", "GroupTomadaDePosseneedsLight2.jpeg", "Jenifer.jpeg", "Jenifer2.jpeg", "LuisCastro.jpeg", "LuisCastro_DanielRocha.jpeg", "Miza2.jpeg", "MizaMabunda.jpeg", "Ndully1.jpeg", "Ndully2.jpeg", "NdullyEricDavane.jpeg", "Nice Group Pic.jpeg", "Nice Sala Pic.jpeg", "PicComEvanioSimoneEricLuisCastro.jpeg", "PresEric.jpeg", "ProfLuis.jpeg", "Simone.jpeg", "Simone_Feliciana.jpeg", "Tarissa1.jpeg", "Tarissa2.jpeg", "WhatsApp Image 2026-05-23 at 18.35.21.jpeg", "WhatsApp Image 2026-05-23 at 18.35.22.jpeg", "WhatsApp Image 2026-05-23 at 18.35.28.jpeg", "WhatsApp Image 2026-05-23 at 18.35.50 (1).jpeg", "WhatsApp Image 2026-05-23 at 18.35.51.jpeg", "WhatsApp Image 2026-05-23 at 18.35.52 (1).jpeg", "WhatsApp Image 2026-05-23 at 18.35.52 (2).jpeg", "WhatsApp Image 2026-05-23 at 18.35.52.jpeg", "WhatsApp Image 2026-05-23 at 18.35.53 (6).jpeg", "WhatsApp Image 2026-05-23 at 18.35.53 (7).jpeg", "WhatsApp Image 2026-05-23 at 18.35.53.jpeg", "WhatsApp Image 2026-05-23 at 18.35.54 (1).jpeg", "WhatsApp Image 2026-05-23 at 18.35.54 (6).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (1).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (2).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (3).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (4).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (5).jpeg", "WhatsApp Image 2026-05-23 at 18.35.55 (6).jpeg"]
            },
            game: {
                kicker: "Community",
                title: "Game Day",
                subtitle: "Photo archive of the leisure and community activities promoted by NEAIST, with games and informal moments among students.",
                button: "Read about Game Day",
                href: "noticia-game-day-2026.html",
                folder: "Game Day",
                captions: [
                    "Moment from Game Day",
                    "Community gathering activity",
                    "Participants during Game Day",
                    "Games and social moments among students"
                ],
                files: ["IMG_7705.JPEG", "IMG_7714.JPEG", "IMG_7765.JPEG", "IMG_7774.JPEG", "IMG_7775.JPEG", "IMG_7778.JPEG", "NEAIST GAME DAY (1).png", "game_day_C9_clean.jpeg"]
            }
        }
    };

    function escapeHtml(value) {
        return value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
    }

    function getDelayClass(index) {
        const delayIndex = index % 3;
        if (delayIndex === 1) {
            return " delay-1";
        }
        if (delayIndex === 2) {
            return " delay-2";
        }
        return "";
    }

    function renderGalleryCards(grid, sectionCopy) {
        grid.innerHTML = sectionCopy.files.map((filename, index) => {
            const caption = `${sectionCopy.captions[index % sectionCopy.captions.length]} — NEAIST`;
            const imagePath = encodeURI(`images/${sectionCopy.folder}/${filename}`);
            const dimensions = GALLERY_IMAGE_DIMENSIONS[sectionCopy.folder]?.[filename];
            const size = dimensions ? `width="${dimensions[0]}" height="${dimensions[1]}"` : "";
            const loading = sectionCopy.folder === "DiadeAfricaPics" && index < 4 ? "eager" : "lazy";
            const photo = `<img src="${imagePath}" alt="${escapeHtml(caption)}" ${size} loading="${loading}" decoding="async">`;
            return `
                <figure class="gallery-photo fade-in-up${getDelayClass(index)}">
                    ${index === 0 && sectionCopy.href ? `<a href="${sectionCopy.href}" aria-label="${escapeHtml(sectionCopy.button)}">${photo}</a>` : photo}
                </figure>
            `;
        }).join("");
    }

    function renderSection(sectionKey, sectionCopy) {
        const section = document.getElementById(
            sectionKey === "dia"
                ? "dia-de-africa"
                : sectionKey === "tomada"
                    ? "tomada-posse-2025-2026"
                    : "game-day"
        );

        if (!section) {
            return;
        }

        const grid = section.querySelector("[data-gallery-grid]");
        const heading = section.querySelector("[data-gallery-heading]");
        if (heading) heading.textContent = sectionCopy.title;

        if (grid) {
            renderGalleryCards(grid, sectionCopy);
        }
    }

    function renderGallerySections() {
        const language = window.currentLanguage === "en" ? "en" : "pt";
        const copy = GALLERY_SECTION_COPY[language];
        renderSection("dia", copy.dia);
        renderSection("tomada", copy.tomada);
        renderSection("game", copy.game);
    }

    window.renderGallery = renderGallerySections;
})();
