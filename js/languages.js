// ===================================
// NEAIST Website - Multilingual Support
// Portuguese & English Translations
// ===================================

const translations = {
    pt: {
        // Navigation
        logo_subtext: "Núcleo de Estudantes Africanos no Instituto Superior Técnico",
        nav_home: "Início",
        nav_about: "Sobre Nós",
        nav_who_we_are: "Quem Somos",
        nav_team: "Equipa",
        nav_shop: "Loja",
        nav_academic: "Académico",
        nav_study_squads: "Study Squads",
        nav_news: "Notícias",
        nav_gallery: "Galeria",
        nav_africa_day: "Dia de África",
        nav_resources: "Recursos",
        nav_guide: "Welcome to Técnico",
        nav_mentoring: "Programa Mentorado",
        nav_contact: "Contactos",
        nav_recruitment: "Recrutamento",
        
        // Homepage
        hero_title: "Bem-vindo ao NEAIST",
        hero_subtitle: "Núcleo dos Estudantes Africanos do Instituto Superior Técnico",
        hero_description: "Unidos pela diversidade, crescemos juntos na excelência académica e cultural",
        hero_recruitment_badge: "Recrutamento aberto para colaboradores 2026",
        hero_btn_about: "Conhecer-nos",
        hero_btn_contact: "Contactar",
        // Features
        features_title: "Comunidade africana no Técnico",
        features_subtitle: "Cultura, representação e apoio à integração para estudantes africanos no Instituto Superior Técnico.",
        hero_slide_1_tag: "Evento em destaque",
        hero_slide_1_title: "Dia de África 2026",
        hero_slide_1_desc: "Cartaz oficial e detalhes da celebração no Técnico Innovation Center.",
        hero_slide_2_tag: "Recrutamento",
        hero_slide_2_title: "Colaboradores 2026",
        hero_slide_2_desc: "Junta-te à equipa do NEAIST e participa na organização dos próximos eventos.",
        hero_slide_3_tag: "Arquivo",
        hero_slide_3_title: "Tomada de Posse",
        hero_slide_3_desc: "Momento institucional que marca o início do novo ciclo do núcleo.",
        africa_day_separator_kicker: "Dia de África 2026",
        africa_day_separator_title: "Uma tarde de cultura, memória e comunidade",
        africa_day_separator_text: "O NEAIST reuniu estudantes, convidados, oradores e expositores no Técnico Innovation Center para celebrar a presença africana no Técnico sob o mote “Ubuntu: Eu Sou Porque Nós Somos”.",
        africa_day_separator_cta: "Ler notícia",

        // Recent Highlights
        highlights_kicker: "Atualidade NEAIST",
        highlights_title: "Notícias e iniciativas do NEAIST",
        highlights_subtitle: "Arquivo vivo com eventos, momentos institucionais, oportunidades atuais e iniciativas da comunidade africana no Técnico.",
        news_preview_button: "Ver Arquivo Completo",
        news_title: "Notícias",
        news_subtitle: "Arquivo de atividades, cerimónias, presença institucional e anúncios do NEAIST.",
        news_archive_intro: "Consulta as notícias mais recentes e usa esta secção para continuar a carregar novos eventos ao longo do ano.",
        news_archive_cta: "Recrutamento em curso",
        news_archive_cta_desc: "Estamos a receber candidaturas para colaboradores. Junta-te à equipa e ajuda a construir a próxima fase do NEAIST.",
        news_archive_cta_btn: "Abrir Formulário",

        feature1_title: "Comunidade",
        feature1_desc: "Criamos um espaço acolhedor para todos os estudantes africanos partilharem experiências e cultura",
        
        feature2_title: "Apoio Académico",
        feature2_desc: "Oferecemos recursos e mentorias para garantir o sucesso académico de todos os membros",
        
        feature3_title: "Eventos Culturais",
        feature3_desc: "Organizamos eventos que celebram a diversidade e riqueza cultural africana",
        
        feature4_title: "Programa Mentorado",
        feature4_desc: "Conectamos novos estudantes com veteranos para facilitar a integração",
        
        // Stats
        stat1_label: "Membros Ativos",
        stat2_label: "Eventos por Ano",
        stat3_label: "Países Representados",
        stat4_label: "Anos de História",
        
        // CTA
        cta_title: "Junta-te a Nós!",
        cta_description: "Faz parte de uma comunidade vibrante e acolhedora no IST",
        cta_btn: "Entra em Contacto",
        
        // Footer
        footer_description: "Núcleo dos Estudantes Africanos do Instituto Superior Técnico",
        footer_quick_links: "Links Rápidos",
        footer_contact: "Contacto",
        footer_tech_label: "Instituto Superior Técnico",
        footer_rights: "Todos os direitos reservados.",
        shop_page_title: "Loja NEAIST",
        shop_page_subtitle: "Merchandising oficial do NEAIST: esferográficas, T-shirts, garrafas térmicas e tote bags.",
        shop_intro_kicker: "Merchandising oficial",
        shop_intro_title: "Encomenda pelo formulário do NEAIST",
        shop_intro_text: "Escolhe os artigos, variantes e quantidades diretamente no formulário oficial. Após validação e verificação de stock, receberás os próximos passos para pagamento e entrega.",
        shop_intro_button: "Abrir formulário",
        shop_label_price: "Preço",
        shop_label_colors: "Cores",
        shop_label_sizes: "Tamanhos",
        shop_label_quantities: "Quantidades",
        shop_product_pen_tag: "Esferográficas",
        shop_product_pen_title: "Esferográfica de Ponta Sensível ao Toque",
        shop_product_pen_desc: "Caneta NEAIST com acabamento elegante e ponta sensível ao toque, ideal para escrita e uso em ecrãs táteis.",
        shop_product_pen_price: "2,50 € / unidade",
        shop_product_pen_colors: "Azul e preta",
        shop_product_pen_quantities: "1, 2 ou 3 unidades",
        shop_product_shirt_tag: "T-Shirts",
        shop_product_shirt_title: "T-Shirt do Núcleo",
        shop_product_shirt_desc: "T-shirt oficial do NEAIST disponível em branco ou azul-marinho, com escolha de tamanho e quantidade no formulário.",
        shop_product_shirt_price: "10 € / unidade",
        shop_product_shirt_colors: "Branca e azul-marinho",
        shop_product_shirt_sizes: "XS, S, M, L e XL",
        shop_product_shirt_quantities: "1 ou 2 unidades",
        shop_product_bottle_tag: "Garrafas térmicas",
        shop_product_bottle_title: "Garrafa Térmica de Toque Suave",
        shop_product_bottle_desc: "Garrafa térmica reutilizável com design minimalista e acabamento suave, pensada para uso diário.",
        shop_product_bottle_price: "9 € / unidade",
        shop_product_bottle_colors: "Cinza e preta",
        shop_product_bottle_quantities: "1 ou 2 unidades",
        shop_product_tote_tag: "Tote Bags",
        shop_product_tote_title: "Tote Bag NEAIST",
        shop_product_tote_desc: "Tote bag prática e resistente para o dia a dia, disponível em azul-marinho ou bege.",
        shop_product_tote_price: "4 € / unidade",
        shop_product_tote_colors: "Azul-marinho e bege",
        shop_product_tote_quantities: "1 ou 2 unidades",
        shop_process_kicker: "Como funciona",
        shop_process_title: "Processo de encomenda",
        shop_process_subtitle: "Tudo o que precisas para reservar os teus artigos com o NEAIST.",
        shop_step_1_title: "Escolhe os artigos",
        shop_step_1_text: "Seleciona no formulário os produtos, cores, tamanhos e quantidades pretendidas.",
        shop_step_2_title: "Aguarda validação",
        shop_step_2_text: "A equipa confirma disponibilidade e verifica o stock antes de avançar.",
        shop_step_3_title: "Recebe pagamento e entrega",
        shop_step_3_text: "Depois da validação, receberás os passos seguintes para pagamento e combinação da entrega.",
        shop_note_text: "Se tiveres dúvidas antes de encomendar, usa os contactos do NEAIST ou deixa observações no formulário.",
        africa_day_page_title: "Dia de Africa",
        africa_day_page_subtitle: "Celebracao cultural organizada pelo NEAIST no Tecnico Innovation Center.",
        africa_day_kicker: "Evento em destaque",
        africa_day_title: "Dia de Africa no Tecnico",
        africa_day_description: "O NEAIST convida-te para uma celebracao inesquecivel do Dia de Africa no Tecnico.",
        africa_day_body_1: "Prepara-te para uma tarde cheia de boa musica, cultura, diversao, energia positiva, convivio e muito orgulho africano! 🪘🎶",
        africa_day_body_2: "Vai ser o momento perfeito para conhecer pessoas, celebrar a diversidade e viver o verdadeiro espirito africano. 🌍",
        africa_day_body_3: "Marca na agenda, chama os teus amigos e vem fazer parte desta festa incrivel! 🎉🔥 Todos estao convidados! 🙌🏾✨",
        africa_day_date_label: "Data",
        africa_day_date_value: "27 de Maio de 2026",
        africa_day_time_label: "Horario",
        africa_day_time_value: "14h00 as 18h00",
        africa_day_location_label: "Local",
        africa_day_location_value: "Tecnico Innovation Center (TIC)",
        africa_day_news_link: "Voltar as noticias",
        africa_day_agenda_kicker: "Programa",
        africa_day_agenda_title: "Ubuntu: Eu Sou Porque Nos Somos",
        africa_day_agenda_intro: "Agenda completa do Dia de Africa no Tecnico, com o cartaz de programa e o alinhamento horario do evento.",
        africa_day_agenda_meta_title: "27/05/2026 | 14h00 - 20h00 | Tecnico Innovation Center",
        africa_day_agenda_head_time: "Hora",
        africa_day_agenda_head_activity: "Atividade",
        africa_day_agenda_row_1: "Rececao dos participantes",
        africa_day_agenda_row_2: "Sessao de abertura: discurso do Presidente do NEAIST e convidados",
        africa_day_agenda_row_3: "Apresentacao do Dr. Sostenes Rego e do seu dicionario",
        africa_day_agenda_row_4: "Intervalo",
        africa_day_agenda_row_5: "Apresentacao da historiadora Marta Lourenco",
        africa_day_agenda_row_6: "Intervalo e visita a exposicao cultural",
        africa_day_agenda_row_7: "Quem Conta a Historia? - A Perspetiva de Quem Vive e de Quem Preserva",
        africa_day_agenda_row_8: "Perguntas do publico",
        africa_day_agenda_row_9: "Intervalo",
        africa_day_agenda_row_10: "Ubuntu em Conversa: O Que Nos Une",
        africa_day_agenda_row_11: "Intervalo e exposicao cultural",
        africa_day_agenda_row_12: "Momento de fotografia",
        africa_day_agenda_row_13: "Encerramento e momento musical",
        africa_day_agenda_row_14: "Sunset Picnic",
        africa_day_agenda_row_15: "",
        africa_day_merch_kicker: "Espaco para merch",
        africa_day_merch_title: "Loja online NEAIST",
        africa_day_merch_intro: "Esta pagina destaca alguns artigos de merchandising do NEAIST e encaminha para a loja com o formulario oficial de encomenda.",
        africa_day_merch_card_1_title: "Garrafa NEAIST",
        africa_day_merch_card_1_desc: "Preview do design da garrafa para a colecao do evento e futuras vendas online.",
        africa_day_merch_card_2_title: "Bone NEAIST",
        africa_day_merch_card_2_desc: "Modelo de bone para o merchandising do Dia de Africa e para a loja do nucleo.",
        africa_day_merch_card_3_title: "Tote Bag NEAIST",
        africa_day_merch_card_3_desc: "Tote bag pronta para integrar a loja com outros produtos e edicoes especiais.",
        africa_day_merch_note: "A loja do NEAIST ja esta disponivel com produtos, variantes e formulario oficial de encomenda.",
        
        // About Page
        about_title: "Sobre Nós",
        about_subtitle: "Conheça a nossa história, missão e valores",
        about_who_title: "Quem Somos",
        about_who_p1: "O NEAIST — Núcleo de Estudantes Africanos do Instituto Superior Técnico — nasceu a 23 de outubro de 2019 com a missão de apoiar a integração dos estudantes africanos na vida académica e social do Técnico.",
        about_who_p_middle: "Mais do que um núcleo de representação, somos um espaço de acolhimento, partilha e interajuda. Procuramos acompanhar os estudantes ao longo do seu percurso académico, promovendo redes de apoio, iniciativas culturais, atividades de convívio e momentos de reflexão sobre a experiência africana no IST.",
        about_who_p2: "Acreditamos que a comunidade africana tem um papel essencial na construção de um campus mais diverso, inclusivo e consciente. Por isso, o NEAIST existe não só para apoiar estudantes africanos, mas também para aproximar toda a comunidade estudantil da riqueza, pluralidade e força das culturas africanas.",
        
        about_mission_title: "Missão",
        about_mission_desc: "Apoiar a integração, adaptação e percurso académico dos estudantes africanos no Técnico, promovendo uma rede de suporte, partilha e entreajuda.",
        
        about_vision_title: "Visão",
        about_vision_desc: "Contribuir para um Técnico mais inclusivo, diverso e intercultural, onde a presença africana seja valorizada, ouvida e representada.",
        
        about_values_title: "Valores",
        about_values_desc: "Solidariedade, diversidade cultural, respeito mútuo, inclusão, interajuda, responsabilidade e compromisso com a comunidade.",
        
        about_what_title: "O Que Fazemos",
        about_what_subtitle: "As nossas principais atividades e iniciativas",
        
        activity1_title: "Apoio Académico",
        activity1_desc: "Promovemos grupos de estudo, partilha de recursos e momentos de apoio entre estudantes para facilitar o percurso académico.",
        
        activity2_title: "Eventos Culturais",
        activity2_desc: "Celebramos a diversidade africana através de momentos culturais, gastronomia, música, dança, arte e partilha de experiências.",
        
        activity3_title: "Mentoria",
        activity3_desc: "Conectamos novos estudantes com veteranos para facilitar a integração no IST",
        
        activity4_title: "Comunidade & Rede",
        activity4_desc: "Criamos espaços de encontro entre estudantes, alumni e parceiros, fortalecendo ligações dentro e fora do Técnico.",
        
        activity5_title: "Desporto & Lazer",
        activity5_desc: "Organizamos atividades sociais, recreativas e desportivas que fortalecem os laços da comunidade.",
        
        activity6_title: "Palestras & Workshops",
        activity6_desc: "Promovemos conversas, debates e workshops sobre temas académicos, culturais, sociais e profissionais relevantes para a comunidade.",
        
        // Contact Page
        contact_title: "Contactos",
        contact_subtitle: "Estamos aqui para ajudar. Entre em contacto connosco!",
        contact_direct_title: "Fala connosco",
        contact_direct_intro: "Para dúvidas, parcerias ou informações sobre as nossas atividades, usa um dos canais abaixo.",
        contact_instagram_title: "Instagram",
        contact_instagram_text: "Envia-nos mensagem direta e acompanha as nossas novidades.",
        contact_email_text: "Escreve-nos diretamente para esclarecimentos, propostas ou contacto institucional.",
        contact_form_title: "Envie-nos uma Mensagem",
        contact_info_title: "Informações de Contacto",
        
        form_name: "Nome Completo",
        form_email: "Email",
        form_subject: "Assunto",
        form_message: "Mensagem",
        form_submit: "Enviar Mensagem",
        
        contact_email_title: "Email",
        contact_location_title: "Localização",
        contact_location_text: "Instituto Superior Técnico",
        contact_location_address: "Av. Rovisco Pais, 1049-001 Lisboa",
        contact_hours_title: "Horário",
        contact_hours_text: "Segunda a Sexta: 10h - 18h",
        contact_hours_weekend: "Fins de semana: Eventos especiais",
        contact_social_title: "Redes Sociais",
        contact_map_title: "Como Chegar",
        contact_map_hint: "Alameda Campus - Av. Rovisco Pais, 1049-001 Lisboa",
        
        // Resources Page
        resources_title: "Recursos",
        resources_subtitle: "Ferramentas e materiais para te ajudar no teu percurso académico",
        
        resource_cat1_title: "Recursos Académicos",
        resource1_1_title: "Apontamentos & Resumos",
        resource1_1_desc: "Materiais de estudo partilhados pela comunidade",
        resource1_2_title: "Tutoriais de Estudo",
        resource1_2_desc: "Guias e técnicas de estudo eficazes",
        resource1_3_title: "Ferramentas de Estudo",
        resource1_3_desc: "Calculadoras, simuladores e apps úteis",
        
        resource_cat2_title: "Recursos Administrativos",
        resource2_1_title: "Documentação Legal",
        resource2_1_desc: "Guias sobre vistos, autorizações de residência, etc.",
        resource2_2_title: "Alojamento",
        resource2_2_desc: "Informações sobre residências e apartamentos",
        resource2_3_title: "Apoios Financeiros",
        resource2_3_desc: "Bolsas, fundos de emergência e apoios disponíveis",
        
        resource_cat3_title: "Viver em Lisboa",
        resource3_1_title: "Transportes",
        resource3_1_desc: "Guia de transportes públicos em Lisboa",
        resource3_2_title: "Restaurantes & Cafés",
        resource3_2_desc: "Melhores sítios para comer em Lisboa",
        resource3_3_title: "Pontos de Interesse",
        resource3_3_desc: "Locais a visitar e atividades de lazer",
        
        resource_cat4_title: "Saúde & Bem-estar",
        resource4_1_title: "Serviços de Saúde",
        resource4_1_desc: "Centros de saúde e hospitais próximos",
        resource4_2_title: "Apoio Psicológico",
        resource4_2_desc: "Serviços de apoio psicológico no IST",
        resource4_3_title: "Desporto & Fitness",
        resource4_3_desc: "Ginásios e instalações desportivas",
        
        useful_links_title: "Links Úteis",
        link1_title: "Fénix",
        link1_desc: "Portal académico do IST",
        link2_title: "IST",
        link2_desc: "Website oficial do Técnico",
        link3_title: "Bibliotecas",
        link3_desc: "Sistema de bibliotecas do IST",
        link4_title: "Carreiras",
        link4_desc: "Serviços de apoio à carreira",
        
        // Guide Page
        guide_title: "WELCOME TO TÉCNICO",
        guide_subtitle: "Primeiros passos, apoio NEAIST e Guia para Novos Alunos 2026/27.",
        guide_welcome_title: "Bem-vindo ao Instituto Superior Técnico!",
        guide_welcome_p1: "Parabéns por teres ingressado no IST! Este é o início de uma jornada incrível de aprendizagem, crescimento e novas experiências. Este guia foi criado para te ajudar a navegar pelos primeiros passos desta nova etapa da tua vida.",
        guide_docs_kicker: "Guia PDF",
        guide_docs_title: "Documentos de apoio para novos estudantes",
        guide_docs_subtitle: "Acede ao Guia para Novos Alunos 2026/27, preparado para te acompanhar nos primeiros passos no Técnico.",
        guide_doc1_title: "Guia para Novos Alunos 2026/27",
        guide_doc1_desc: "Informação prática para os primeiros passos no Técnico e em Lisboa.",
        guide_doc2_title: "Guia para Novos Alunos 2026/27",
        guide_doc2_desc: "Informação prática para os primeiros passos no Técnico e em Lisboa.",

        guide_steps_title: "Primeiros Passos",
        guide_step1_title: "Antes de Chegares",
        guide_step2_title: "Primeira Semana",
        guide_step3_title: "Primeiro Mês",
        
        guide_info_title: "Informações Essenciais",
        guide_info1_title: "Sistema Académico",
        guide_info1_desc: "O IST usa o sistema ECTS. Um semestre típico tem 30 ECTS (5-6 cadeiras). Precisas de 180 ECTS para a licenciatura e 120 ECTS para o mestrado.",
        guide_info2_title: "Calendário Académico",
        guide_info2_desc: "O ano académico divide-se em dois semestres: Setembro-Janeiro e Fevereiro-Junho. Há períodos de exames em Janeiro/Fevereiro e Junho/Julho.",
        guide_info3_title: "Métodos de Estudo",
        guide_info3_desc: "O IST é exigente! Organiza o teu tempo, estuda regularmente, participa nas aulas e não hesites em pedir ajuda quando precisares.",
        guide_info4_title: "Apoio Disponível",
        guide_info4_desc: "O IST oferece tutorias, gabinete de apoio ao estudante, serviços de saúde mental e muito mais. O NEAIST também está aqui para ti!",
        
        faq_title: "Perguntas Frequentes",
        
        // Mentoring Page
        mentoring_title: "Programa Mentorado",
        mentoring_subtitle: "Conectamos novos estudantes com veteranos para facilitar a integração",
        mentoring_what_title: "O Que é o Programa Mentorado?",
        mentoring_what_p1: "O Programa Mentorado do NEAIST é uma iniciativa que visa facilitar a integração de novos estudantes africanos no IST, conectando-os com estudantes veteranos que já passaram pelos mesmos desafios.",
        mentoring_what_p2: "Cada caloiro é emparelhado com um mentor que o acompanhará durante o primeiro ano, oferecendo apoio académico, orientação sobre a vida em Lisboa e ajudando na adaptação à cultura universitária portuguesa.",
        
        mentoring_benefits_title: "Benefícios do Programa",
        mentoring_for_mentees: "Para Mentorados",
        mentoring_for_mentors: "Para Mentores",
        
        mentoring_how_title: "Como Funciona?",
        mentoring_step1_title: "Inscrição",
        mentoring_step1_desc: "Caloiros e estudantes veteranos interessados preenchem um formulário de inscrição indicando os seus interesses, curso e disponibilidade.",
        mentoring_step2_title: "Emparelhamento",
        mentoring_step2_desc: "A equipa do NEAIST analisa os perfis e emparelha mentores e mentorados com base em curso, interesses e compatibilidade.",
        mentoring_step3_title: "Primeiro Encontro",
        mentoring_step3_desc: "É organizado um evento de kick-off onde mentores e mentorados se conhecem pessoalmente e recebem orientações sobre o programa.",
        mentoring_step4_title: "Acompanhamento",
        mentoring_step4_desc: "Durante o ano, mentores e mentorados reúnem-se regularmente. O NEAIST organiza eventos e atividades para todos os participantes.",
        
        mentoring_testimonials_title: "O Que Dizem os Participantes",
        mentoring_cta_title: "Quer Participar?",
        mentoring_cta_desc: "Seja como mentor ou mentorado, junta-te ao programa e faz parte desta iniciativa!",
        mentoring_cta_btn1: "Inscrever como Mentorado",
        mentoring_cta_btn2: "Ser Mentor",
    },
    
    en: {
        // Navigation
        logo_subtext: "African Students Association at Instituto Superior Técnico",
        nav_home: "Home",
        nav_about: "About Us",
        nav_who_we_are: "Who We Are",
        nav_team: "Team",
        nav_shop: "Shop",
        nav_academic: "Academic",
        nav_study_squads: "Study Squads",
        nav_news: "News",
        nav_gallery: "Gallery",
        nav_africa_day: "Africa Day",
        nav_resources: "Resources",
        nav_guide: "Welcome to Técnico",
        nav_mentoring: "Mentoring Program",
        nav_contact: "Contact",
        nav_recruitment: "Recruitment",
        
        // Homepage
        hero_title: "Welcome to NEAIST",
        hero_subtitle: "African Students Association at Instituto Superior Técnico",
        hero_description: "United in diversity, we grow together in academic and cultural excellence",
        hero_recruitment_badge: "Open recruitment for 2026 collaborators",
        hero_btn_about: "Learn More",
        hero_btn_contact: "Contact Us",
        // Features
        features_title: "African student community at Técnico",
        features_subtitle: "Culture, representation and integration support for African students at Instituto Superior Técnico.",
        hero_slide_1_tag: "Featured event",
        hero_slide_1_title: "Africa Day 2026",
        hero_slide_1_desc: "Official poster and event details for the celebration at Tecnico Innovation Center.",
        hero_slide_2_tag: "Recruitment",
        hero_slide_2_title: "Collaborators 2026",
        hero_slide_2_desc: "Join the NEAIST team and help organize the next wave of events.",
        hero_slide_3_tag: "Archive",
        hero_slide_3_title: "Inauguration Ceremony",
        hero_slide_3_desc: "An institutional moment marking the beginning of the association's new cycle.",
        africa_day_separator_kicker: "Africa Day 2026",
        africa_day_separator_title: "An afternoon of culture, memory and community",
        africa_day_separator_text: "NEAIST brought together students, guests, speakers and exhibitors at the Técnico Innovation Center to celebrate African presence at Técnico under the theme “Ubuntu: I Am Because We Are”.",
        africa_day_separator_cta: "Read article",

        // Recent Highlights
        highlights_kicker: "NEAIST Updates",
        highlights_title: "NEAIST news and initiatives",
        highlights_subtitle: "A living archive of events, institutional moments, current opportunities and initiatives for African students at Técnico.",
        news_preview_button: "View Full Archive",
        news_title: "News",
        news_subtitle: "Archive of activities, ceremonies, institutional visibility, and announcements from NEAIST.",
        news_archive_intro: "Browse the latest updates and use this section to keep adding new events throughout the year.",
        news_archive_cta: "Recruitment Ongoing",
        news_archive_cta_desc: "We are currently receiving applications for collaborators. Join the team and help shape NEAIST’s next phase.",
        news_archive_cta_btn: "Open Form",

        feature1_title: "Community",
        feature1_desc: "We create a welcoming space for all African students to share experiences and culture",
        
        feature2_title: "Academic Support",
        feature2_desc: "We offer resources and mentoring to ensure academic success for all members",
        
        feature3_title: "Cultural Events",
        feature3_desc: "We organize events that celebrate African diversity and cultural richness",
        
        feature4_title: "Mentoring Program",
        feature4_desc: "We connect new students with veterans to facilitate integration",
        
        // Stats
        stat1_label: "Active Members",
        stat2_label: "Events per Year",
        stat3_label: "Countries Represented",
        stat4_label: "Years of History",
        
        // CTA
        cta_title: "Join Us!",
        cta_description: "Be part of a vibrant and welcoming community at IST",
        cta_btn: "Get in Touch",
        
        // Footer
        footer_description: "African Students Association at Instituto Superior Técnico",
        footer_quick_links: "Quick Links",
        footer_contact: "Contact",
        footer_tech_label: "Instituto Superior Técnico",
        footer_rights: "All rights reserved.",
        shop_page_title: "NEAIST Shop",
        shop_page_subtitle: "Official NEAIST merchandise: pens, T-shirts, thermal bottles, and tote bags.",
        shop_intro_kicker: "Official merchandise",
        shop_intro_title: "Order through the NEAIST form",
        shop_intro_text: "Choose your items, variants, and quantities directly in the official form. After validation and stock verification, you will receive the next steps for payment and delivery.",
        shop_intro_button: "Open form",
        shop_label_price: "Price",
        shop_label_colors: "Colors",
        shop_label_sizes: "Sizes",
        shop_label_quantities: "Quantities",
        shop_product_pen_tag: "Pens",
        shop_product_pen_title: "Touch-Sensitive Stylus Pen",
        shop_product_pen_desc: "NEAIST pen with an elegant finish and touch-sensitive tip, suitable for writing and touchscreen use.",
        shop_product_pen_price: "€2.50 / unit",
        shop_product_pen_colors: "Blue and black",
        shop_product_pen_quantities: "1, 2, or 3 units",
        shop_product_shirt_tag: "T-Shirts",
        shop_product_shirt_title: "Association T-Shirt",
        shop_product_shirt_desc: "Official NEAIST T-shirt available in white or navy blue, with size and quantity selection in the form.",
        shop_product_shirt_price: "€10 / unit",
        shop_product_shirt_colors: "White and navy blue",
        shop_product_shirt_sizes: "XS, S, M, L, and XL",
        shop_product_shirt_quantities: "1 or 2 units",
        shop_product_bottle_tag: "Thermal bottles",
        shop_product_bottle_title: "Soft-Touch Thermal Bottle",
        shop_product_bottle_desc: "Reusable thermal bottle with a minimalist design and soft finish, made for everyday use.",
        shop_product_bottle_price: "€9 / unit",
        shop_product_bottle_colors: "Grey and black",
        shop_product_bottle_quantities: "1 or 2 units",
        shop_product_tote_tag: "Tote Bags",
        shop_product_tote_title: "NEAIST Tote Bag",
        shop_product_tote_desc: "Practical and durable tote bag for daily use, available in navy blue or beige.",
        shop_product_tote_price: "€4 / unit",
        shop_product_tote_colors: "Navy blue and beige",
        shop_product_tote_quantities: "1 or 2 units",
        shop_process_kicker: "How it works",
        shop_process_title: "Ordering process",
        shop_process_subtitle: "Everything you need to reserve your items with NEAIST.",
        shop_step_1_title: "Choose your items",
        shop_step_1_text: "Select the products, colors, sizes, and quantities you want in the form.",
        shop_step_2_title: "Wait for validation",
        shop_step_2_text: "The team confirms availability and checks stock before moving forward.",
        shop_step_3_title: "Receive payment and delivery details",
        shop_step_3_text: "After validation, you will receive the next steps for payment and delivery coordination.",
        shop_note_text: "If you have questions before ordering, use the NEAIST contacts or leave notes in the form.",
        africa_day_page_title: "Africa Day",
        africa_day_page_subtitle: "Cultural celebration hosted by NEAIST at Tecnico Innovation Center.",
        africa_day_kicker: "Featured event",
        africa_day_title: "Africa Day at Tecnico",
        africa_day_description: "NEAIST invites you to an unforgettable celebration of Africa Day at Tecnico.",
        africa_day_body_1: "Get ready for an afternoon full of great music, culture, fun, positive energy, socializing, and lots of African pride! 🪘🎶",
        africa_day_body_2: "It will be the perfect moment to meet new people, celebrate diversity, and experience the true African spirit. 🌍",
        africa_day_body_3: "Save the date, invite your friends, and come be part of this amazing celebration! 🎉🔥 Everyone is invited! 🙌🏾✨",
        africa_day_date_label: "Date",
        africa_day_date_value: "May 27, 2026",
        africa_day_time_label: "Time",
        africa_day_time_value: "2:00 PM to 6:00 PM",
        africa_day_location_label: "Location",
        africa_day_location_value: "Tecnico Innovation Center (TIC)",
        africa_day_news_link: "Back to news",
        africa_day_agenda_kicker: "Programme",
        africa_day_agenda_title: "Ubuntu: I Am Because We Are",
        africa_day_agenda_intro: "Full Africa Day at Tecnico schedule, including the programme poster and the event timeline.",
        africa_day_agenda_meta_title: "27/05/2026 | 2:00 PM - 6:00 PM | Tecnico Innovation Center",
        africa_day_agenda_head_time: "Time",
        africa_day_agenda_head_activity: "Activity",
        africa_day_agenda_row_1: "Participant reception",
        africa_day_agenda_row_2: "Opening session: speech by the NEAIST President and invited guests",
        africa_day_agenda_row_3: "Presentation by Dr. Sostenes Rego and his dictionary",
        africa_day_agenda_row_4: "Break",
        africa_day_agenda_row_5: "Presentation by historian Marta Lourenco",
        africa_day_agenda_row_6: "Break and visit to the cultural exhibition",
        africa_day_agenda_row_7: "Who Tells the Story? - The Perspective of Those Who Live It and Those Who Preserve It",
        africa_day_agenda_row_8: "Audience questions",
        africa_day_agenda_row_9: "Break",
        africa_day_agenda_row_10: "Ubuntu in Conversation: What Unites Us",
        africa_day_agenda_row_11: "Break and cultural exhibition",
        africa_day_agenda_row_12: "Group photo moment",
        africa_day_agenda_row_13: "Closing and musical moment",
        africa_day_agenda_row_14: "Sunset Picnic",
        africa_day_agenda_row_15: "",
        africa_day_merch_kicker: "Merch space",
        africa_day_merch_title: "NEAIST online shop",
        africa_day_merch_intro: "This page highlights some NEAIST merchandise items and points to the shop with the official order form.",
        africa_day_merch_card_1_title: "NEAIST Bottle",
        africa_day_merch_card_1_desc: "Preview of the bottle design for the event collection and future online sales.",
        africa_day_merch_card_2_title: "NEAIST Cap",
        africa_day_merch_card_2_desc: "Cap model for the Africa Day merchandise line and the association shop.",
        africa_day_merch_card_3_title: "NEAIST Tote Bag",
        africa_day_merch_card_3_desc: "Tote bag ready to be part of the shop alongside other products and special editions.",
        africa_day_merch_note: "The NEAIST shop is now live with products, variants, and the official order form.",
        
        // About Page
        about_title: "About Us",
        about_subtitle: "Learn about our history, mission and values",
        about_who_title: "Who We Are",
        about_who_p1: "NEAIST — the African Students Association at Instituto Superior Técnico — was founded on October 23, 2019 with the mission of supporting the integration of African students into the academic and social life of Técnico.",
        about_who_p_middle: "More than a representative association, we are a space for welcome, exchange, and mutual support. We aim to accompany students throughout their academic journey by promoting support networks, cultural initiatives, social activities, and moments of reflection on the African experience at IST.",
        about_who_p2: "We believe the African community plays an essential role in building a campus that is more diverse, inclusive, and aware. For that reason, NEAIST exists not only to support African students, but also to bring the wider student community closer to the richness, plurality, and strength of African cultures.",
        
        about_mission_title: "Mission",
        about_mission_desc: "To support the integration, adaptation, and academic journey of African students at Técnico by promoting a network of support, exchange, and mutual help.",
        
        about_vision_title: "Vision",
        about_vision_desc: "To contribute to a more inclusive, diverse, and intercultural Técnico where the African presence is valued, heard, and represented.",
        
        about_values_title: "Values",
        about_values_desc: "Solidarity, cultural diversity, mutual respect, inclusion, mutual support, responsibility, and commitment to the community.",
        
        about_what_title: "What We Do",
        about_what_subtitle: "Our main activities and initiatives",
        
        activity1_title: "Academic Support",
        activity1_desc: "We promote study groups, resource sharing, and peer support moments to make the academic journey easier.",
        
        activity2_title: "Cultural Events",
        activity2_desc: "We celebrate African diversity through cultural moments, gastronomy, music, dance, art, and shared experiences.",
        
        activity3_title: "Mentoring",
        activity3_desc: "We connect new students with veterans to facilitate integration at IST",
        
        activity4_title: "Community & Network",
        activity4_desc: "We create spaces for connection between students, alumni, and partners, strengthening ties inside and outside Técnico.",
        
        activity5_title: "Sports & Leisure",
        activity5_desc: "We organize social, recreational, and sports activities that strengthen community bonds.",
        
        activity6_title: "Talks & Workshops",
        activity6_desc: "We promote talks, debates, and workshops on academic, cultural, social, and professional topics relevant to the community.",
        
        // Contact Page
        contact_title: "Contact",
        contact_subtitle: "We're here to help. Get in touch with us!",
        contact_form_title: "Send Us a Message",
        contact_info_title: "Contact Information",
        
        form_name: "Full Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_submit: "Send Message",
        
        contact_email_title: "Email",
        contact_location_title: "Location",
        contact_location_text: "Instituto Superior Técnico",
        contact_location_address: "Av. Rovisco Pais, 1049-001 Lisbon",
        contact_hours_title: "Hours",
        contact_hours_text: "Monday to Friday: 10am - 6pm",
        contact_hours_weekend: "Weekends: Special events",
        contact_social_title: "Social Media",
        contact_map_title: "How to Get Here",
        contact_map_hint: "Alameda Campus - Av. Rovisco Pais, 1049-001 Lisbon",
        
        // Resources Page
        resources_title: "Resources",
        resources_subtitle: "Tools and materials to help you on your academic journey",
        
        resource_cat1_title: "Academic Resources",
        resource1_1_title: "Notes & Summaries",
        resource1_1_desc: "Study materials shared by the community",
        resource1_2_title: "Study Tutorials",
        resource1_2_desc: "Effective study guides and techniques",
        resource1_3_title: "Study Tools",
        resource1_3_desc: "Calculators, simulators and useful apps",
        
        resource_cat2_title: "Administrative Resources",
        resource2_1_title: "Legal Documentation",
        resource2_1_desc: "Guides on visas, residence permits, etc.",
        resource2_2_title: "Accommodation",
        resource2_2_desc: "Information about residences and apartments",
        resource2_3_title: "Financial Support",
        resource2_3_desc: "Scholarships, emergency funds and available support",
        
        resource_cat3_title: "Living in Lisbon",
        resource3_1_title: "Transportation",
        resource3_1_desc: "Public transportation guide in Lisbon",
        resource3_2_title: "Restaurants & Cafés",
        resource3_2_desc: "Best places to eat in Lisbon",
        resource3_3_title: "Points of Interest",
        resource3_3_desc: "Places to visit and leisure activities",
        
        resource_cat4_title: "Health & Wellbeing",
        resource4_1_title: "Health Services",
        resource4_1_desc: "Nearby health centers and hospitals",
        resource4_2_title: "Psychological Support",
        resource4_2_desc: "Psychological support services at IST",
        resource4_3_title: "Sports & Fitness",
        resource4_3_desc: "Gyms and sports facilities",
        
        useful_links_title: "Useful Links",
        link1_title: "Fénix",
        link1_desc: "IST academic portal",
        link2_title: "IST",
        link2_desc: "Official Técnico website",
        link3_title: "Libraries",
        link3_desc: "IST library system",
        link4_title: "Careers",
        link4_desc: "Career support services",
        
        // Guide Page
        guide_title: "WELCOME TO TÉCNICO",
        guide_subtitle: "First steps, NEAIST support, and the 2026/27 New Students Guide.",
        guide_welcome_title: "Welcome to Instituto Superior Técnico!",
        guide_welcome_p1: "Congratulations on joining IST! This is the beginning of an incredible journey of learning, growth and new experiences. This guide was created to help you navigate the first steps of this new chapter in your life.",
        guide_docs_kicker: "PDF Guide",
        guide_docs_title: "Support documents for new students",
        guide_docs_subtitle: "Access the 2026/27 New Students Guide, prepared to support your first steps at Técnico.",
        guide_doc1_title: "New Students Guide 2026/27",
        guide_doc1_desc: "Practical information for your first steps at Técnico and in Lisbon.",
        guide_doc2_title: "New Students Guide 2026/27",
        guide_doc2_desc: "Practical information for your first steps at Técnico and in Lisbon.",

        guide_steps_title: "First Steps",
        guide_step1_title: "Before Arriving",
        guide_step2_title: "First Week",
        guide_step3_title: "First Month",
        
        guide_info_title: "Essential Information",
        guide_info1_title: "Academic System",
        guide_info1_desc: "IST uses the ECTS system. A typical semester has 30 ECTS (5-6 courses). You need 180 ECTS for a bachelor's degree and 120 ECTS for a master's degree.",
        guide_info2_title: "Academic Calendar",
        guide_info2_desc: "The academic year is divided into two semesters: September-January and February-June. There are exam periods in January/February and June/July.",
        guide_info3_title: "Study Methods",
        guide_info3_desc: "IST is demanding! Organize your time, study regularly, participate in classes and don't hesitate to ask for help when you need it.",
        guide_info4_title: "Available Support",
        guide_info4_desc: "IST offers tutoring, student support office, mental health services and much more. NEAIST is also here for you!",
        
        faq_title: "Frequently Asked Questions",
        
        // Mentoring Page
        mentoring_title: "Mentoring Program",
        mentoring_subtitle: "Connecting new students with veterans to facilitate integration",
        mentoring_what_title: "What is the Mentoring Program?",
        mentoring_what_p1: "NEAIST's Mentoring Program is an initiative aimed at facilitating the integration of new African students at IST by connecting them with veteran students who have already faced the same challenges.",
        mentoring_what_p2: "Each freshman is paired with a mentor who will accompany them during their first year, offering academic support, guidance on life in Lisbon and helping with adaptation to Portuguese university culture.",
        
        mentoring_benefits_title: "Program Benefits",
        mentoring_for_mentees: "For Mentees",
        mentoring_for_mentors: "For Mentors",
        
        mentoring_how_title: "How Does It Work?",
        mentoring_step1_title: "Registration",
        mentoring_step1_desc: "Interested freshmen and veteran students fill out a registration form indicating their interests, course and availability.",
        mentoring_step2_title: "Matching",
        mentoring_step2_desc: "The NEAIST team analyzes the profiles and matches mentors and mentees based on course, interests and compatibility.",
        mentoring_step3_title: "First Meeting",
        mentoring_step3_desc: "A kick-off event is organized where mentors and mentees meet in person and receive guidance about the program.",
        mentoring_step4_title: "Follow-up",
        mentoring_step4_desc: "Throughout the year, mentors and mentees meet regularly. NEAIST organizes events and activities for all participants.",
        
        mentoring_testimonials_title: "What Participants Say",
        mentoring_cta_title: "Want to Participate?",
        mentoring_cta_desc: "Whether as a mentor or mentee, join the program and be part of this initiative!",
        mentoring_cta_btn1: "Register as Mentee",
        mentoring_cta_btn2: "Become a Mentor",
    }
};

const pageCopy = {
    common: {
        pt: {
            footerLocation: "Instituto Superior Técnico, Lisboa",
            footerCopyright: "© 2026 NEAIST. Todos os direitos reservados."
        },
        en: {
            footerLocation: "Instituto Superior Técnico, Lisbon",
            footerCopyright: "© 2026 NEAIST. All rights reserved."
        }
    },
    "index.html": {
        pt: {
            title: "NEAIST — Núcleo de Estudantes Africanos do Instituto Superior Técnico",
            description: "Website oficial do NEAIST, Núcleo de Estudantes Africanos do Instituto Superior Técnico. Comunidade, integração, cultura e apoio académico para estudantes africanos no IST.",
            heroKicker: "NEAIST 2026",
            heroTitle: "NEAIST — Núcleo de Estudantes Africanos do Instituto Superior Técnico",
            heroDescriptions: [
                "Comunidade, integração, cultura e apoio académico para estudantes africanos no IST. O NEAIST promove a representação estudantil, a vida associativa e a ligação entre estudantes africanos no Técnico e em Lisboa.",
                "O NEAIST, também conhecido em inglês como African Students Association at Instituto Superior Técnico, representa e apoia estudantes africanos no IST através de iniciativas culturais, académicas e comunitárias."
            ],
            heroPills: [
                "Integração académica",
                "Eventos culturais",
                "Apoio entre estudantes"
            ],
            heroButtons: [
                "Ver Loja",
                "Juntar-me ao NEAIST"
            ]
        },
        en: {
            title: "NEAIST — African Students Association at Instituto Superior Técnico",
            description: "Official website of NEAIST, the African Students Association at Instituto Superior Técnico. Community, integration, culture and academic support for African students at IST.",
            heroKicker: "NEAIST 2026",
            heroTitle: "NEAIST — African Students Association at Instituto Superior Técnico",
            heroDescriptions: [
                "Community, integration, culture and academic support for African students at IST. NEAIST promotes student representation, association life, and connection among African students at Técnico and in Lisbon.",
                "NEAIST, also known in Portuguese as Núcleo de Estudantes Africanos do Instituto Superior Técnico, represents and supports African students at IST through cultural, academic, and community initiatives."
            ],
            heroPills: [
                "Academic integration",
                "Cultural events",
                "Peer support"
            ],
            heroButtons: [
                "Visit the Shop",
                "Join NEAIST"
            ]
        }
    },
    "loja.html": {
        pt: {
            title: "Loja | Merchandising Oficial NEAIST",
            description: "Loja do NEAIST com esferográficas, T-shirts, garrafas térmicas e tote bags. Encomenda através do formulário oficial."
        },
        en: {
            title: "Shop | Official NEAIST Merchandise",
            description: "NEAIST shop with pens, T-shirts, thermal bottles, and tote bags. Order through the official form."
        }
    },
    "contactos.html": {
        pt: {
            title: "Contactos | NEAIST",
            description: "Contacta o NEAIST por email ou Instagram para dúvidas, parcerias e informações sobre a comunidade africana no Técnico.",
            kicker: "Contacto direto",
            directTitle: "Fala connosco",
            directIntro: "Para dúvidas, parcerias ou informações sobre as nossas atividades, usa um dos canais abaixo.",
            infoTexts: [
                "Escreve-nos diretamente para esclarecimentos, propostas ou contacto institucional.",
                "Envia-nos mensagem direta e acompanha as nossas novidades."
            ],
            buttons: ["Enviar email", "Instagram"]
        },
        en: {
            title: "Contact | NEAIST",
            description: "Contact NEAIST by email or Instagram for questions, partnerships, and information about the African student community at Técnico.",
            kicker: "Direct contact",
            directTitle: "Talk to us",
            directIntro: "For questions, partnerships, or information about our activities, use one of the channels below.",
            infoTexts: [
                "Write to us directly for clarifications, proposals, or institutional contact.",
                "Send us a direct message and follow our latest updates."
            ],
            buttons: ["Send email", "Instagram"]
        }
    },
    "sobre-nos.html": {
        pt: {
            title: "Sobre Nós | NEAIST — Núcleo de Estudantes Africanos do IST",
            description: "Conhece o NEAIST, Núcleo de Estudantes Africanos do Instituto Superior Técnico, a sua missão, valores e papel no apoio aos estudantes africanos no IST."
        },
        en: {
            title: "About Us | NEAIST — African Students Association at IST",
            description: "Learn about NEAIST, the African Students Association at Instituto Superior Técnico, its mission, values, and role in supporting African students at IST."
        }
    },
    "guia-caloiro.html": {
        pt: {
            title: "Welcome to Técnico | Guia para Novos Alunos 2026/27 — NEAIST",
            description: "Novo no Técnico? Encontra informação útil para os teus primeiros passos, Guia para Novos Alunos 2026/27, Mentorado NEAIST, Study Squads e respostas às dúvidas mais frequentes.",
            stepLists: [
                "Confirmar matrícula e inscrição",
                "Organizar alojamento",
                "Tratar de documentação necessária (visto, autorização de residência)",
                "Abrir conta bancária (se possível online)",
                "Juntar-te aos grupos do NEAIST nas redes sociais",
                "Participar na Semana de Receção aos Caloiros",
                "Conhecer o campus e as instalações",
                "Ativar conta Fénix",
                "Fazer o cartão de estudante",
                "Conhecer outros estudantes africanos no NEAIST",
                "Familiarizar-te com o Fénix e os recursos online",
                "Organizar horário de estudo",
                "Explorar Lisboa e os arredores",
                "Participar em eventos do NEAIST",
                "Juntar-te a grupos de estudo"
            ],
            faqQuestions: [
                "Como faço para me inscrever nas cadeiras?",
                "Onde posso encontrar alojamento?",
                "Como funciona o sistema de avaliação?",
                "O NEAIST pode ajudar-me com questões administrativas?"
            ],
            faqAnswers: [
                "A inscrição nas cadeiras é feita através do sistema Fénix durante o período de inscrições. Consulta o calendário académico para as datas exatas.",
                "Podes candidatar-te às residências universitárias através dos Serviços de Ação Social. Também há grupos no Facebook para partilha de apartamentos. O NEAIST pode ajudar-te a conectar com outros estudantes à procura de alojamento.",
                "A avaliação varia por cadeira mas geralmente inclui testes, projetos, trabalhos e exames finais. A nota mínima de aprovação é 9.5 (em 20). Consulta o Fénix para detalhes específicos de cada cadeira.",
                "Sim. O NEAIST está aqui para apoiar estudantes africanos em todas as questões, desde integração académica até questões administrativas como vistos e autorizações de residência. Não hesites em contactar-nos."
            ]
        },
        en: {
            title: "Welcome to Técnico | New Students Guide 2026/27 — NEAIST",
            description: "New at Técnico? Find useful first-step information, the 2026/27 New Students Guide, NEAIST Mentoring, Study Squads, and frequent questions.",
            stepLists: [
                "Confirm enrolment and registration",
                "Arrange accommodation",
                "Handle the necessary documentation (visa, residence permit)",
                "Open a bank account (if possible online)",
                "Join NEAIST groups on social media",
                "Take part in Freshers' Reception Week",
                "Get to know the campus and facilities",
                "Activate your Fénix account",
                "Get your student card",
                "Meet other African students through NEAIST",
                "Become familiar with Fénix and online resources",
                "Set up a study schedule",
                "Explore Lisbon and the surrounding area",
                "Take part in NEAIST events",
                "Join study groups"
            ],
            faqQuestions: [
                "How do I register for courses?",
                "Where can I find accommodation?",
                "How does the assessment system work?",
                "Can NEAIST help me with administrative issues?"
            ],
            faqAnswers: [
                "Course registration is done through the Fénix system during the registration period. Check the academic calendar for the exact dates.",
                "You can apply for university residences through the Social Services. There are also Facebook groups for apartment sharing. NEAIST can help connect you with other students looking for accommodation.",
                "Assessment varies by course but usually includes tests, projects, assignments, and final exams. The minimum passing grade is 9.5 out of 20. Check Fénix for the specific details of each course.",
                "Yes. NEAIST is here to support African students in everything from academic integration to administrative matters such as visas and residence permits. Feel free to contact us."
            ]
        }
    },
    "mentoria.html": {
        pt: {
            title: "Programa Mentorado | NEAIST",
            description: "Programa Mentorado do NEAIST para apoiar a integração de novos estudantes africanos no Instituto Superior Técnico.",
            benefitsMentees: [
                "Integração mais fácil na comunidade IST",
                "Apoio académico personalizado",
                "Orientação sobre vida em Lisboa",
                "Rede de contactos desde o início",
                "Dicas práticas de quem já passou por isso"
            ],
            benefitsMentors: [
                "Desenvolvimento de competências de liderança",
                "Satisfação de ajudar outros estudantes",
                "Fortalecimento da comunidade NEAIST",
                "Reconhecimento no CV",
                "Networking com outros mentores"
            ],
            testimonialTexts: [
                "\"O programa de mentoria foi essencial para a minha adaptação ao IST. O meu mentor ajudou-me com tudo, desde organizar o horário de estudo até conhecer Lisboa!\"",
                "\"Ser mentor foi uma experiência incrível. Ajudar novos estudantes e ver o seu progresso é muito gratificante. Recomendo a todos!\"",
                "\"Através do programa conheci pessoas incríveis que se tornaram grandes amigos. O apoio do meu mentor fez toda a diferença no meu primeiro ano.\""
            ],
            testimonialRoles: [
                "Mentorada 2025 - LEIC",
                "Mentor 2024 - LEGI",
                "Mentorada 2024 - LMAC"
            ],
            squadsKicker: "Study Squads",
            squadsTitle: "Novo projeto de apoio académico",
            squadsSubtitle: "Os Study Squads do NEAIST entram agora na fase de recrutamento de Tutores. A participação de estudantes nos grupos será aberta mais tarde.",
            squadsCardTitle: "Study Squads NEAIST",
            squadsCardText: "Conhece o projeto, o papel do Tutor e o modelo de funcionamento previsto.",
            squadsTutorTitle: "Candidatura a Tutor",
            squadsTutorText: "Formulário para estudantes que queiram integrar a primeira fase do projeto."
        },
        en: {
            title: "Mentoring Program | NEAIST",
            description: "NEAIST Mentoring Program designed to support the integration of new African students at Instituto Superior Técnico.",
            benefitsMentees: [
                "Easier integration into the IST community",
                "Personalized academic support",
                "Guidance on life in Lisbon",
                "A network from the very beginning",
                "Practical tips from someone who has already been through it"
            ],
            benefitsMentors: [
                "Development of leadership skills",
                "The satisfaction of helping other students",
                "Strengthening the NEAIST community",
                "Recognition on your CV",
                "Networking with other mentors"
            ],
            testimonialTexts: [
                "\"The mentoring program was essential for my adaptation to IST. My mentor helped me with everything, from organizing my study schedule to getting to know Lisbon.\"",
                "\"Being a mentor was an incredible experience. Helping new students and seeing their progress is very rewarding. I recommend it to everyone.\"",
                "\"Through the program I met amazing people who became close friends. My mentor's support made all the difference during my first year.\""
            ],
            testimonialRoles: [
                "Mentee 2025 - LEIC",
                "Mentor 2024 - LEGI",
                "Mentee 2024 - LMAC"
            ],
            squadsKicker: "Study Squads",
            squadsTitle: "New academic support project",
            squadsSubtitle: "NEAIST Study Squads are now in the Tutor recruitment phase. Student participation in the groups will open later.",
            squadsCardTitle: "Study Squads NEAIST",
            squadsCardText: "Learn about the project, the Tutor role, and the planned operating model.",
            squadsTutorTitle: "Apply as a Tutor",
            squadsTutorText: "Form for students who want to join the first phase of the project."
        }
    },
    "equipa.html": {
        pt: {
            title: "Equipa 2026 | NEAIST",
            description: "Conhece os órgãos sociais e departamentos do NEAIST para o mandato de 2026, com a equipa responsável pela coordenação, cultura, apoio académico, comunicação e comunidade.",
            pageTitle: "Direção e Equipa NEAIST 2026",
            pageSubtitle: "Conhece a equipa responsável pela coordenação das atividades, projetos e representação do NEAIST durante o mandato de 2026.",
            overviewKicker: "Mandato 2026",
            overviewTitle: "A equipa que coordena o NEAIST",
            overviewSubtitle: "A equipa do NEAIST 2026 reúne os órgãos sociais e os departamentos responsáveis pela representação institucional, organização interna, projetos, cultura, comunicação, apoio académico e atividades da comunidade.",
            statLabels: ["Membros", "Órgãos sociais", "Departamentos"],
            sectionKickers: ["Órgãos sociais", "Departamentos"],
            sectionTitles: [
                "Estrutura institucional",
                "Áreas de trabalho"
            ],
            sectionSubtitles: [
                "Os órgãos sociais asseguram a coordenação, a participação democrática, a supervisão e o funcionamento formal do NEAIST.",
                "Os departamentos desenvolvem o trabalho mais próximo da comunidade e tornam possíveis as iniciativas académicas, culturais, desportivas e institucionais do NEAIST."
            ],
            cardLabels: [
                "Órgão social",
                "Órgão social",
                "Órgão social",
                "Departamento",
                "Departamento",
                "Departamento",
                "Departamento",
                "Departamento"
            ],
            cardTitles: [
                "Presidência",
                "Mesa da Assembleia Geral",
                "Conselho Fiscal",
                "Projetos & Parcerias",
                "Desporto",
                "Assuntos Académicos",
                "Comunidade e Cultura",
                "Comunicação e Imagem"
            ],
            descriptions: [
                "Assegura a coordenação geral, a representação institucional, a gestão interna e o acompanhamento estratégico do mandato.",
                "Organiza e conduz os trabalhos assembleares, garantindo a participação dos membros e o registo das decisões.",
                "Acompanha a atividade interna do NEAIST, zelando pelo cumprimento dos estatutos, regulamentos e boas práticas.",
                "Desenvolve contactos, colaborações, apoios e iniciativas com entidades internas e externas, criando oportunidades que fortalecem o impacto do NEAIST.",
                "Promove atividades desportivas, recreativas e de lazer que incentivam o convívio, a participação e o espírito de equipa.",
                "Trabalha no apoio à integração e ao percurso académico dos estudantes africanos, através de mentoria, recursos, acompanhamento e canais de apoio.",
                "Promove a valorização da diversidade africana no Técnico através de atividades culturais, momentos de convívio, integração e partilha.",
                "Gere a presença pública do NEAIST, incluindo redes sociais, identidade visual, criação de conteúdos, divulgação de eventos e comunicação com a comunidade."
            ],
            memberLists: [
                ["Eric Muthami — Presidente", "Celine Machaieie — Vice-Presidente", "Miza Mabunda — Tesoureira"],
                ["Evanio Rodrigues — Presidente", "Jennifer de Matos — 1.ª Vogal", "Simone Langa — 2.ª Vogal"],
                ["Tarissa Pinto — Presidente", "Bibiana Abrantes — 1.ª Vogal", "Denilson Vieira — Vogal"],
                ["Haiani Antonio — Coordenadora"],
                ["Ndully Malate — Coordenador"],
                ["Feliciana Carlos — Coordenadora", "Amabel André — Membro", "Prosperity Oguama — Membro"],
                ["Francisco Davane — Coordenador", "Ayanda Amone — Membro"],
                ["Alayna Lalgy — Coordenadora", "Andreia Andrade — Membro"]
            ]
        },
        en: {
            title: "Team 2026 | NEAIST",
            description: "Meet the NEAIST governing bodies and departments for the 2026 term, including the team responsible for coordination, culture, academic support, communication, and community work.",
            pageTitle: "NEAIST Board and Team 2026",
            pageSubtitle: "Meet the team responsible for coordinating NEAIST activities, projects, and representation during the 2026 term.",
            overviewKicker: "2026 Term",
            overviewTitle: "The team coordinating NEAIST",
            overviewSubtitle: "The 2026 NEAIST team brings together the governing bodies and departments responsible for institutional representation, internal organization, projects, culture, communication, academic support, and community activities.",
            statLabels: ["Members", "Governing bodies", "Departments"],
            sectionKickers: ["Governing bodies", "Departments"],
            sectionTitles: [
                "Institutional structure",
                "Working areas"
            ],
            sectionSubtitles: [
                "The governing bodies ensure NEAIST’s coordination, democratic participation, oversight, and formal functioning.",
                "The departments carry out the work closest to the community and make NEAIST’s academic, cultural, sports, and institutional initiatives possible."
            ],
            cardLabels: [
                "Governing body",
                "Governing body",
                "Governing body",
                "Department",
                "Department",
                "Department",
                "Department",
                "Department"
            ],
            cardTitles: [
                "Presidency",
                "General Assembly Bureau",
                "Supervisory Board",
                "Projects & Partnerships",
                "Sports",
                "Academic Affairs",
                "Community and Culture",
                "Communication and Image"
            ],
            descriptions: [
                "Ensures overall coordination, institutional representation, internal management, and strategic follow-up of the term.",
                "Organizes and conducts assembly work, ensuring member participation and the recording of decisions.",
                "Monitors NEAIST’s internal activity, safeguarding compliance with statutes, regulations, and good practices.",
                "Develops contacts, collaborations, support, and initiatives with internal and external entities, creating opportunities that strengthen NEAIST’s impact.",
                "Promotes sports, recreational, and leisure activities that encourage connection, participation, and team spirit.",
                "Works to support the integration and academic journey of African students through mentoring, resources, guidance, and support channels.",
                "Promotes the appreciation of African diversity at Técnico through cultural activities, social moments, integration, and sharing.",
                "Manages NEAIST’s public presence, including social media, visual identity, content creation, event promotion, and communication with the community."
            ],
            memberLists: [
                ["Eric Muthami — President", "Celine Machaieie — Vice-President", "Miza Mabunda — Treasurer"],
                ["Evanio Rodrigues — President", "Jennifer de Matos — 1st Member", "Simone Langa — 2nd Member"],
                ["Tarissa Pinto — President", "Bibiana Abrantes — 1st Member", "Denilson Vieira — Member"],
                ["Haiani Antonio — Coordinator"],
                ["Ndully Malate — Coordinator"],
                ["Feliciana Carlos — Coordinator", "Amabel André — Member", "Prosperity Oguama — Member"],
                ["Francisco Davane — Coordinator", "Ayanda Amone — Member"],
                ["Alayna Lalgy — Coordinator", "Andreia Andrade — Member"]
            ]
        }
    },
    "noticias.html": {
        pt: {
            title: "Notícias | NEAIST — Estudantes Africanos no Técnico",
            description: "Arquivo de notícias, eventos, oportunidades e momentos institucionais do NEAIST no Instituto Superior Técnico.",
            pageTitle: "Notícias e Arquivo NEAIST",
            pageSubtitle: "Acompanha os principais momentos, eventos, oportunidades e iniciativas do NEAIST.",
            kicker: "Arquivo NEAIST",
            archiveTitle: "Momentos institucionais, cultura e oportunidades",
            archiveText: "Explora os destaques mais recentes do núcleo, desde eventos culturais a iniciativas de integração, representação e participação académica.",
            archiveButton: "Recrutamento 2026",
            filters: ["Todos", "Eventos", "Institucional", "Oportunidades", "Arquivo"]
        },
        en: {
            title: "News | NEAIST — African Students at Técnico",
            description: "Archive of NEAIST news, events, opportunities, and institutional moments at Instituto Superior Técnico.",
            pageTitle: "NEAIST News and Archive",
            pageSubtitle: "Follow the main moments, events, opportunities, and initiatives of NEAIST.",
            kicker: "NEAIST Archive",
            archiveTitle: "Institutional moments, culture, and opportunities",
            archiveText: "Explore the association’s most recent highlights, from cultural events to initiatives focused on integration, representation, and academic participation.",
            archiveButton: "Recruitment 2026",
            filters: ["All", "Events", "Institutional", "Opportunities", "Archive"]
        }
    },
    "galeria.html": {
        pt: {
            title: "Galeria | NEAIST",
            description: "Galeria fotográfica do NEAIST com arquivos institucionais, eventos culturais e momentos recentes da comunidade africana no Técnico.",
            pageTitle: "Galeria",
            pageSubtitle: "Arquivo visual do NEAIST com galerias organizadas por evento, incluindo Dia de África, tomada de posse e Game Day."
        },
        en: {
            title: "Gallery | NEAIST",
            description: "NEAIST photo gallery with institutional archives, cultural events, and recent moments from the African student community at Técnico.",
            pageTitle: "Gallery",
            pageSubtitle: "NEAIST’s visual archive with event-based galleries, including Africa Day, the inauguration ceremony, and Game Day."
        }
    },
    "recursos.html": {
        pt: {
            title: "Recursos Académicos | NEAIST",
            description: "Documentos, Guia para Novos Alunos 2026/27 e recursos académicos do NEAIST, incluindo Study Squads, apoio institucional e repositórios por curso.",
            introKicker: "Apoio académico e institucional",
            introTitle: "Documentos, guias e recursos por curso",
            introText: "Reunimos nesta página os principais documentos do NEAIST, guias para novos estudantes, materiais de mentoria e ligações úteis para apoio académico no Técnico.",
            introButton: "Candidatura a Tutor",
            sectionLabels: ["NEAIST", "Apoio Académico", "Apoio por Curso"],
            sectionTitles: ["Destaques NEAIST", "Apoio Institucional", "Recursos por Curso"],
            sectionTexts: [
                "Os principais documentos, projetos e pontos de entrada académicos do núcleo, reunidos numa secção mais direta e fácil de consultar.",
                "Serviços e plataformas do Técnico que ajudam na vida académica, integração no campus e acesso a apoio institucional.",
                "Repositórios e bibliotecas úteis organizados por área, com uma apresentação mais limpa e consistente para consulta rápida."
            ],
            featureTags: ["Projeto académico", "Oportunidade", "Documento", "PDF", "2026/2027"],
            featureTitles: [
                "Study Squads NEAIST",
                "Candidatura a Tutor",
                "Estatutos do NEAIST",
                "Projeto Study Squads",
                "Guia para Novos Alunos - 2026/27"
            ],
            featureTexts: [
                "Conhece a iniciativa de grupos de estudo criada para reforçar a aprendizagem colaborativa ao longo do semestre.",
                "Formulário para estudantes que queiram integrar a primeira fase do projeto Study Squads como Tutores.",
                "Consulta institucional dos estatutos do núcleo em formato PDF.",
                "Documento complementar com o enquadramento, objetivos e estrutura base da iniciativa.",
                "Informação prática para os primeiros passos no Técnico e em Lisboa, incluindo matrícula, ferramentas digitais, ação social, alojamento, NIF, SNS e autorização de residência."
            ],
            supportTitles: [
                "Fénix",
                "Técnico",
                "Associação de Estudantes / AEIST",
                "NAPE",
                "NDA",
                "Serviços de Saúde",
                "Residências e Alojamento",
                "Bolsas e Apoio Financeiro",
                "Mobilidade / Núcleo de Mobilidade e Cooperação Internacional"
            ],
            supportTexts: [
                "Portal académico principal para inscrições, notas, horários e unidades curriculares.",
                "Website oficial do Instituto Superior Técnico com informação institucional e académica.",
                "Portal da associação de estudantes com apoio institucional, associativo e académico.",
                "Apoio ao estudante, integração, acompanhamento e serviços úteis ao longo do percurso académico.",
                "Núcleo de Desenvolvimento Académico com orientação e recursos para organização do estudo.",
                "Acesso aos serviços de saúde associados ao Técnico e apoio em bem-estar estudantil.",
                "Informação sobre residências do Técnico e opções de apoio ligadas ao alojamento estudantil.",
                "Informação sobre apoios financeiros, bolsas e acompanhamento social para estudantes.",
                "Mobilidade, programas internacionais e oportunidades de intercâmbio académico."
            ],
            supportTags: ["Portal", "Institucional", "Associação", "Apoio", "Académico", "Saúde", "Residências", "Bolsas", "Mobilidade"],
            courseTitles: [
                "LEAer e MEAer",
                "LEBiom e MEBiom",
                "LEEC e MEEC",
                "LEIC e MEIC — Eden Box",
                "LEIC e MEIC — Dropbox",
                "LEIC e MEIC — Dropbox Shelf LEIC",
                "LEIC e MEIC — Resumos LEIC-A",
                "LEIC e MEIC — LEIC My Box",
                "LENO e MENO",
                "LETI e METI",
                "LMAC e MMAC"
            ],
            courseTexts: [
                "Repositório de apoio para estudantes de engenharia aeroespacial.",
                "Materiais académicos organizados para engenharia biomédica.",
                "Recursos úteis para engenharia eletrotécnica e de computadores.",
                "Repositório de materiais académicos para estudantes de informática.",
                "Biblioteca partilhada com materiais de apoio e ficheiros de estudo.",
                "Arquivo complementar para estudantes de LEIC com materiais de várias cadeiras.",
                "Coleção de resumos de apoio para estudantes de LEIC-A.",
                "Biblioteca adicional de materiais académicos para informática.",
                "Recursos de apoio para engenharia naval e oceânica.",
                "Materiais partilhados para telecomunicações e informática.",
                "Recursos e repositórios para matemática aplicada e computação."
            ],
            courseTags: ["Repositório", "Repositório", "Repositório", "Repositório", "Dropbox", "Biblioteca", "Resumo", "Biblioteca", "Repositório", "Repositório", "Repositório"]
        },
        en: {
            title: "Academic Resources | NEAIST",
            description: "NEAIST documents, the 2026/27 New Students Guide, and academic resources, including Study Squads, institutional support, and course repositories.",
            introKicker: "Academic and institutional support",
            introTitle: "Documents, guides, and course resources",
            introText: "This page brings together NEAIST’s main documents, guides for new students, mentoring materials, and useful links for academic support at Técnico.",
            introButton: "Apply as a Tutor",
            sectionLabels: ["NEAIST", "Academic Support", "Support by Course"],
            sectionTitles: ["NEAIST Highlights", "Institutional Support", "Resources by Course"],
            sectionTexts: [
                "The association’s main documents, projects, and academic entry points, gathered in a more direct and easier-to-browse section.",
                "Técnico services and platforms that support academic life, campus integration, and access to institutional support.",
                "Useful repositories and libraries organized by area, with a cleaner and more consistent presentation for quick consultation."
            ],
            featureTags: ["Academic project", "Opportunity", "Document", "PDF", "2026/2027"],
            featureTitles: [
                "Study Squads NEAIST",
                "Apply as a Tutor",
                "NEAIST Statutes",
                "Study Squads Project",
                "New Students Guide - 2026/27"
            ],
            featureTexts: [
                "Learn about the study-group initiative created to strengthen collaborative learning throughout the semester.",
                "Form for students who want to join the first phase of the Study Squads project as Tutors.",
                "Institutional PDF version of the association’s statutes.",
                "Complementary document with the initiative’s framework, goals, and core structure.",
                "Practical information for first steps at Técnico and in Lisbon, including enrollment, digital tools, social support, accommodation, NIF, SNS, and residence permits."
            ],
            supportTitles: [
                "Fénix",
                "Técnico",
                "Students' Union / AEIST",
                "NAPE",
                "NDA",
                "Health Services",
                "Residences and Accommodation",
                "Scholarships and Financial Support",
                "Mobility / International Mobility and Cooperation Office"
            ],
            supportTexts: [
                "Main academic portal for registration, grades, schedules, and course information.",
                "Official Instituto Superior Técnico website with institutional and academic information.",
                "Students’ union portal with institutional, associative, and academic support.",
                "Student support, integration, follow-up, and useful services throughout the academic journey.",
                "Academic development office with guidance and resources for study organization.",
                "Access to Técnico-related health services and student wellbeing support.",
                "Information about Técnico residences and support options related to student housing.",
                "Information on financial support, scholarships, and social support for students.",
                "Mobility, international programmes, and academic exchange opportunities."
            ],
            supportTags: ["Portal", "Institutional", "Association", "Support", "Academic", "Health", "Housing", "Scholarships", "Mobility"],
            courseTitles: [
                "LEAer and MEAer",
                "LEBiom and MEBiom",
                "LEEC and MEEC",
                "LEIC and MEIC — Eden Box",
                "LEIC and MEIC — Dropbox",
                "LEIC and MEIC — Dropbox Shelf LEIC",
                "LEIC and MEIC — LEIC-A Summaries",
                "LEIC and MEIC — LEIC My Box",
                "LENO and MENO",
                "LETI and METI",
                "LMAC and MMAC"
            ],
            courseTexts: [
                "Support repository for aerospace engineering students.",
                "Academic materials organized for biomedical engineering.",
                "Useful resources for electrical and computer engineering.",
                "Academic materials repository for computer science students.",
                "Shared library with support materials and study files.",
                "Complementary archive for LEIC students with materials from multiple courses.",
                "Collection of support summaries for LEIC-A students.",
                "Additional library of academic materials for computer science.",
                "Support resources for naval and ocean engineering.",
                "Shared materials for telecommunications and informatics.",
                "Resources and repositories for applied mathematics and computation."
            ],
            courseTags: ["Repository", "Repository", "Repository", "Repository", "Dropbox", "Library", "Summary", "Library", "Repository", "Repository", "Repository"]
        }
    },
    "study-squads.html": {
        pt: {
            title: "Study Squads | Apoio Académico NEAIST",
            description: "Study Squads NEAIST: apoio académico e grupos de estudo para estudantes do Técnico, com candidaturas abertas para Tutores.",
            heroSubtitle: "Candidaturas abertas para Tutores",
            heroTitle: "Study Squads NEAIST",
            heroTexts: [
                "Os Study Squads são grupos de estudo organizados pelo NEAIST para promover a aprendizagem colaborativa, o apoio entre colegas e hábitos de estudo mais consistentes ao longo do semestre.",
                "Nesta primeira fase, estamos à procura de Tutores: estudantes responsáveis, disponíveis e com vontade de apoiar colegas numa ou mais disciplinas."
            ],
            heroButton: "Candidatar-me a Tutor",
            heroNote: "As inscrições para estudantes interessados em participar nos grupos serão abertas numa fase seguinte, após a seleção dos tutores e definição das disciplinas disponíveis.",
            documentTitle: "Projeto Study Squads NEAIST",
            documentText: "Consulta o documento base do projeto para conhecer melhor o enquadramento, os objetivos e a estrutura pensada para esta iniciativa académica.",
            documentButton: "Abrir PDF do Projeto",
            sectionKickers: [
                "Projeto académico",
                "Tutoria",
                "Perfil procurado",
                "Disciplinas previstas",
                "Funcionamento"
            ],
            sectionTitles: [
                "O que são os Study Squads?",
                "O papel do Tutor",
                "Quem pode candidatar-se?",
                "Áreas inicialmente consideradas",
                "Como será o funcionamento?"
            ],
            sectionSubtitles: [
                "Os Study Squads são pequenos grupos de estudo por disciplina, criados para tornar o estudo mais regular, colaborativo e acessível. O objetivo é criar um espaço informal e produtivo onde estudantes possam partilhar dúvidas, resolver exercícios e preparar avaliações em conjunto.",
                "Os Tutores são estudantes que acompanham e orientam os Study Squads. Não substituem professores nem aulas formais. O seu papel é facilitar a organização do grupo, apoiar na discussão de dúvidas, incentivar a participação e ajudar a manter uma rotina de estudo consistente.",
                "Procuramos estudantes responsáveis, disponíveis e com vontade de apoiar colegas no seu percurso académico. Não precisas de saber tudo, mas deves sentir-te confortável com a disciplina, comunicar bem e ter espírito de entreajuda.",
                "As disciplinas poderão ser ajustadas conforme a procura dos estudantes e a disponibilidade dos tutores selecionados.",
                "Durante o semestre, os Study Squads terão sessões regulares de estudo. Em época de avaliações, poderão existir sessões de reforço. O formato poderá ser presencial, online ou híbrido, dependendo da disponibilidade dos tutores e participantes."
            ],
            roleCards: [
                "Organizar sessões de estudo",
                "Facilitar a discussão de exercícios",
                "Apoiar colegas com dúvidas",
                "Promover regularidade",
                "Criar um ambiente seguro e colaborativo",
                "Encaminhar dúvidas mais complexas quando necessário"
            ],
            badges: [
                "Disponibilidade semanal",
                "Conforto com a disciplina",
                "Boa comunicação",
                "Responsabilidade",
                "Espírito de entreajuda"
            ],
            disciplines: [
                "Cálculo II",
                "Programação",
                "Física",
                "Termodinâmica",
                "Probabilidade e Estatística"
            ],
            operationCards: [
                "Durante o semestre: sessões regulares",
                "Época de avaliações: reforço",
                "Formato: presencial, online ou híbrido",
                "Horários definidos conforme disponibilidade"
            ],
            ctaTitle: "Queres ser Tutor?",
            ctaText: "Se gostas de ajudar colegas, tens facilidade numa disciplina e queres contribuir para uma comunidade académica mais colaborativa, candidata-te.",
            posterAlt: "Study Squads NEAIST — grupos de estudo com apoio de tutores"
        },
        en: {
            title: "Study Squads | NEAIST Academic Support",
            description: "NEAIST Study Squads: academic support and study groups for Técnico students, with Tutor applications now open.",
            heroSubtitle: "Applications open for Tutors",
            heroTitle: "Study Squads NEAIST",
            heroTexts: [
                "Study Squads are study groups organized by NEAIST to promote collaborative learning, peer support, and more consistent study habits throughout the semester.",
                "In this first phase, we are looking for Tutors: responsible students who are available and willing to support peers in one or more courses."
            ],
            heroButton: "Apply as a Tutor",
            heroNote: "Registration for students interested in joining the groups will open later, after tutors are selected and the available courses are defined.",
            documentTitle: "NEAIST Study Squads Project",
            documentText: "Read the project document to better understand the framework, objectives, and structure designed for this academic initiative.",
            documentButton: "Open Project PDF",
            sectionKickers: [
                "Academic project",
                "Tutoring",
                "Who can apply",
                "Planned subjects",
                "How it will work"
            ],
            sectionTitles: [
                "What are Study Squads?",
                "The Tutor role",
                "Who can apply?",
                "Areas initially considered",
                "How will it work?"
            ],
            sectionSubtitles: [
                "Study Squads are small study groups by subject, created to make studying more regular, collaborative, and accessible. The goal is to create an informal yet productive space where students can share questions, solve exercises, and prepare assessments together.",
                "Tutors are students who accompany and guide the Study Squads. They do not replace professors or formal classes. Their role is to help organize the group, support discussion of questions, encourage participation, and help maintain a consistent study routine.",
                "We are looking for responsible, available students who are willing to support peers in their academic journey. You do not need to know everything, but you should feel comfortable with the subject, communicate well, and have a spirit of mutual support.",
                "The subjects may be adjusted according to student demand and the availability of the selected tutors.",
                "Throughout the semester, Study Squads will have regular study sessions. During assessment periods, there may be additional reinforcement sessions. The format may be in person, online, or hybrid, depending on the availability of tutors and participants."
            ],
            roleCards: [
                "Organize study sessions",
                "Facilitate exercise discussions",
                "Support classmates with questions",
                "Promote regularity",
                "Create a safe and collaborative environment",
                "Refer more complex questions when needed"
            ],
            badges: [
                "Weekly availability",
                "Comfort with the subject",
                "Good communication",
                "Responsibility",
                "Peer-support mindset"
            ],
            disciplines: [
                "Calculus II",
                "Programming",
                "Physics",
                "Thermodynamics",
                "Probability and Statistics"
            ],
            operationCards: [
                "During the semester: regular sessions",
                "Assessment season: reinforcement",
                "Format: in person, online, or hybrid",
                "Schedules defined by availability"
            ],
            ctaTitle: "Do you want to be a Tutor?",
            ctaText: "If you enjoy helping peers, feel confident in a subject, and want to contribute to a more collaborative academic community, apply now.",
            posterAlt: "Study Squads NEAIST — study groups supported by tutors"
        }
    },
    "dia-de-africa.html": {
        pt: {
            title: "Dia de África no Técnico | NEAIST",
            description: "Notícia do Dia de África no Técnico, promovido pelo NEAIST a 27 de Maio de 2026, com artigo, programa e registos fotográficos do encontro.",
            kicker: "Notícia",
            subtitle: "Ubuntu: Eu Sou Porque Nós Somos",
            pageTitle: "NEAIST promove Dia de África no Técnico",
            descriptions: [
                "No dia 27 de maio de 2026, o NEAIST promoveu o Dia de África no Técnico, uma iniciativa dedicada à celebração da presença africana na comunidade académica e à criação de um espaço de reflexão, partilha e convívio no Instituto Superior Técnico."
            ],
            metaLabels: ["Data", "Local", "Organização"],
            metaValues: ["27 de Maio de 2026", "Técnico Innovation Center", "NEAIST"],
            buttons: ["Voltar às notícias", "Ver fotografias"],
            articleTitle: "Dia de África no Técnico: Ubuntu — Eu Sou Porque Nós Somos",
            articleParagraphs: [
                "No dia 27 de maio de 2026, o NEAIST — Núcleo de Estudantes Africanos do Instituto Superior Técnico — organizou o <strong>Dia de África no Técnico</strong>, um encontro cultural, académico e comunitário dedicado à celebração da identidade africana, da memória, da criatividade e da presença da comunidade africana no espaço académico do Técnico.",
                "Sob o mote <strong>“Ubuntu: Eu Sou Porque Nós Somos”</strong>, o evento procurou reunir estudantes, membros da comunidade académica, convidados, oradores e expositores num momento comum de aprendizagem, representação e celebração. Mais do que uma comemoração, o Dia de África no Técnico foi pensado como um espaço onde vozes, culturas, memórias e perspetivas africanas pudessem ser vistas, ouvidas e valorizadas.",
                "A tarde começou com a receção dos participantes e uma sessão de abertura conduzida pelo NEAIST, marcada pela presença de representantes institucionais que se juntaram à comunidade nesta celebração. O NEAIST teve o privilégio de receber o <strong>Professor Rogério Colaço</strong>, Presidente do Instituto Superior Técnico, o <strong>Professor Pedro Amaral</strong>, Vice-Presidente do Técnico para a Interface Empresarial, Inovação e Empreendedorismo, e o <strong>Professor Luís Castro</strong>, Vice-Reitor da Universidade de Lisboa.",
                "A presença destes convidados reforçou a relevância institucional do Dia de África no Técnico e sublinhou a importância de apoiar iniciativas que promovem a diversidade cultural, a inclusão, a representação e o diálogo dentro da comunidade académica.",
                "Um dos pontos centrais do evento foi o espaço de exposição cultural, onde tivemos o privilégio de contar com três expositores que representaram diferentes expressões da criatividade e do património africano. A <strong>Pure Handcrafts Kenya</strong> apresentou produtos artesanais inspirados na tradição e arte queniana. A <strong>Jerrosa Nigeria</strong> trouxe uma expressão vibrante da moda, do design e da identidade cultural nigeriana. A <strong>Makonde Nangashinu Ntaluma</strong>, de Moçambique, partilhou trabalhos ligados à rica tradição artística Makonde, destacando a importância da preservação e valorização do património cultural africano através do artesanato e da expressão visual.",
                "O programa continuou com dois convidados cujos contributos ajudaram a aprofundar a reflexão em torno da memória africana, da língua e da preservação cultural. O <strong>Dr. Sóstenes Rego</strong> apresentou o seu trabalho e o seu dicionário, proporcionando aos participantes uma reflexão sobre a importância da língua enquanto arquivo vivo de identidade, conhecimento e continuidade cultural. De seguida, a <strong>Dra. Marta Lourenço</strong>, historiadora e profissional da área do património cultural, partilhou a sua perspetiva sobre história, memória e preservação, convidando o público a pensar sobre a forma como as histórias são guardadas, transmitidas e, por vezes, esquecidas.",
                "Estas apresentações deram lugar à conversa <strong>“Quem Conta a História? — A Perspetiva de Quem Vive e de Quem Preserva”</strong>, moderada por <strong>Celine Machaieie</strong>, Vice-Presidente do NEAIST. Esta discussão criou uma ponte importante entre perspetivas académicas, históricas e vividas, convidando os participantes a refletir sobre quem tem o poder de contar a história, como as narrativas africanas têm sido preservadas ou silenciadas, e porque é essencial que as comunidades participem ativamente na construção e transmissão das suas próprias histórias.",
                "Mais tarde, o evento passou para um momento mais informal, mas igualmente significativo, com o painel <strong>“Achismos”</strong>, organizado e moderado por <strong>Feliciana Carlos</strong>. A conversa juntou <strong>Eric Muthami</strong>, <strong>Herzen Matsinhe</strong>, <strong>Ludovico Tonela</strong>, <strong>Tarissa Pinto</strong> e <strong>Thiago Andrade</strong>, criando um espaço de partilha de experiências, opiniões e reflexões pessoais sobre identidade, comunidade, pertença e o significado de ser africano, ou estar ligado a África, dentro do contexto universitário.",
                "Ao longo de toda a tarde, o evento contou com a presença de muitos estudantes e membros da comunidade, tornando visível aquilo que o NEAIST procura construir: um espaço de encontro, reconhecimento e união. A participação ativa de tantas pessoas mostrou que existe no Técnico uma comunidade africana viva, diversa, presente e com muito para partilhar.",
                "O Dia de África no Técnico terminou com um momento descontraído de convívio no <strong>Jardim do Arco do Cego</strong>, onde os participantes continuaram as conversas do dia num ambiente mais leve e próximo. Este encerramento traduziu de forma simples e bonita o espírito de Ubuntu: comunidade, presença, partilha e união.",
                "O Dia de África no Técnico não foi apenas uma celebração da cultura africana. Foi também um lembrete de que a representação importa, de que os espaços culturais devem ser criados de forma intencional e de que a universidade se torna mais rica quando as identidades, histórias e percursos dos seus estudantes são reconhecidos.",
                "Através da exposição, da conversa, da memória, da cultura e da comunidade, o NEAIST reafirmou o seu compromisso em tornar os estudantes africanos e as culturas africanas mais visíveis no Técnico.",
                "Agradecemos a todos os oradores, expositores, convidados, organizadores, voluntários e participantes que tornaram este evento possível. Que este seja apenas o início de uma tradição que continue a crescer todos os anos.",
                "<strong>Ubuntu: Eu sou porque nós somos.</strong>"
            ],
            agendaKicker: "Programa do evento",
            agendaTitle: "Ubuntu: Eu Sou Porque Nós Somos",
            agendaSubtitle: "O programa reuniu sessões de abertura, apresentações, conversas, exposição cultural e o Sunset Picnic de encerramento.",
            agendaHeaders: ["Hora", "Atividade"],
            agendaRows: [
                "Receção dos participantes",
                "Sessão de abertura: discurso do Presidente do NEAIST e convidados",
                "Apresentação do Dr. Sóstenes Rego e do seu dicionário",
                "Intervalo",
                "Apresentação da historiadora Marta Lourenço",
                "Intervalo e visita à exposição cultural",
                "Quem Conta a História? — A Perspetiva de Quem Vive e de Quem Preserva",
                "Perguntas do público",
                "Intervalo",
                "Ubuntu em Conversa: O Que Nos Une",
                "Intervalo e exposição cultural",
                "Momento de fotografia",
                "Encerramento e momento musical",
                "Sunset Picnic"
            ],
            galleryEyebrow: "Galeria",
            galleryTitle: "Registos do Dia de África no Técnico",
            gallerySubtitle: "Alguns momentos que marcaram a tarde, entre conversas, exposição cultural, convidados e comunidade."
        },
        en: {
            title: "Africa Day at Técnico | NEAIST",
            description: "News article about Africa Day at Técnico, organized by NEAIST on May 27, 2026, with the full article, programme, and photo records from the gathering.",
            kicker: "News",
            subtitle: "Ubuntu: I Am Because We Are",
            pageTitle: "NEAIST holds Africa Day at Técnico",
            descriptions: [
                "On May 27, 2026, NEAIST organized Africa Day at Técnico, an initiative dedicated to celebrating the African presence in the academic community and to creating a space for reflection, exchange, and gathering at Instituto Superior Técnico."
            ],
            metaLabels: ["Date", "Location", "Organization"],
            metaValues: ["May 27, 2026", "Técnico Innovation Center", "NEAIST"],
            buttons: ["Back to news", "View photos"],
            articleTitle: "Africa Day at Técnico: Ubuntu — I Am Because We Are",
            articleParagraphs: [
                "On May 27, 2026, NEAIST — the African Students Association at Instituto Superior Técnico — organized <strong>Africa Day at Técnico</strong>, a cultural, academic, and community gathering dedicated to celebrating African identity, memory, creativity, and the presence of the African community within Técnico’s academic space.",
                "Under the theme <strong>“Ubuntu: I Am Because We Are”</strong>, the event brought together students, members of the academic community, guests, speakers, and exhibitors in a shared moment of learning, representation, and celebration. More than a commemoration, Africa Day at Técnico was designed as a space where African voices, cultures, memories, and perspectives could be seen, heard, and valued.",
                "The afternoon began with the reception of participants and an opening session led by NEAIST, marked by the presence of institutional representatives who joined the community for this celebration. NEAIST had the privilege of welcoming <strong>Professor Rogério Colaço</strong>, President of Instituto Superior Técnico, <strong>Professor Pedro Amaral</strong>, Vice-President of Técnico for Corporate Interface, Innovation and Entrepreneurship, and <strong>Professor Luís Castro</strong>, Vice-Rector of the University of Lisbon.",
                "The presence of these guests reinforced the institutional relevance of Africa Day at Técnico and underlined the importance of supporting initiatives that promote cultural diversity, inclusion, representation, and dialogue within the academic community.",
                "One of the event’s central elements was the cultural exhibition area, where we had the privilege of hosting three exhibitors representing different expressions of African creativity and heritage. <strong>Pure Handcrafts Kenya</strong> presented handmade products inspired by Kenyan tradition and art. <strong>Jerrosa Nigeria</strong> brought a vibrant expression of Nigerian fashion, design, and cultural identity. <strong>Makonde Nangashinu Ntaluma</strong>, from Mozambique, shared work linked to the rich Makonde artistic tradition, highlighting the importance of preserving and valuing African cultural heritage through craftsmanship and visual expression.",
                "The programme continued with two guests whose contributions deepened reflection on African memory, language, and cultural preservation. <strong>Dr. Sóstenes Rego</strong> presented his work and dictionary, offering participants a reflection on the importance of language as a living archive of identity, knowledge, and cultural continuity. Then <strong>Dr. Marta Lourenço</strong>, a historian and cultural heritage professional, shared her perspective on history, memory, and preservation, inviting the audience to think about how stories are stored, passed on, and sometimes forgotten.",
                "These presentations led to the conversation <strong>“Who Tells the Story? — The Perspective of Those Who Live It and Those Who Preserve It”</strong>, moderated by <strong>Celine Machaieie</strong>, NEAIST’s Vice-President. The discussion created an important bridge between academic, historical, and lived perspectives, inviting participants to reflect on who has the power to tell history, how African narratives have been preserved or silenced, and why it is essential for communities to actively participate in building and transmitting their own stories.",
                "Later, the event moved into a more informal but equally meaningful moment with the panel <strong>“Achismos”</strong>, organized and moderated by <strong>Feliciana Carlos</strong>. The conversation brought together <strong>Eric Muthami</strong>, <strong>Herzen Matsinhe</strong>, <strong>Ludovico Tonela</strong>, <strong>Tarissa Pinto</strong>, and <strong>Thiago Andrade</strong>, creating a space to share experiences, opinions, and personal reflections on identity, community, belonging, and what it means to be African, or connected to Africa, within the university context.",
                "Throughout the afternoon, the event welcomed many students and community members, making visible what NEAIST seeks to build: a space of encounter, recognition, and unity. The active participation of so many people showed that Técnico is home to a vibrant, diverse, present African community with much to share.",
                "Africa Day at Técnico ended with a relaxed social moment in <strong>Jardim do Arco do Cego</strong>, where participants continued the day’s conversations in a lighter and more intimate atmosphere. This closing moment translated the spirit of Ubuntu in a simple and beautiful way: community, presence, sharing, and unity.",
                "Africa Day at Técnico was not only a celebration of African culture. It was also a reminder that representation matters, that cultural spaces must be created intentionally, and that the university becomes richer when the identities, stories, and paths of its students are recognized.",
                "Through the exhibition, conversation, memory, culture, and community, NEAIST reaffirmed its commitment to making African students and African cultures more visible at Técnico.",
                "We thank all the speakers, exhibitors, guests, organizers, volunteers, and participants who made this event possible. May this be only the beginning of a tradition that continues to grow every year.",
                "<strong>Ubuntu: I am because we are.</strong>"
            ],
            agendaKicker: "Event programme",
            agendaTitle: "Ubuntu: I Am Because We Are",
            agendaSubtitle: "The programme brought together opening sessions, presentations, conversations, a cultural exhibition, and the closing Sunset Picnic.",
            agendaHeaders: ["Time", "Activity"],
            agendaRows: [
                "Participant reception",
                "Opening session: speech by the NEAIST President and invited guests",
                "Presentation by Dr. Sóstenes Rego and his dictionary",
                "Break",
                "Presentation by historian Marta Lourenço",
                "Break and visit to the cultural exhibition",
                "Who Tells the Story? — The Perspective of Those Who Live It and Those Who Preserve It",
                "Audience questions",
                "Break",
                "Ubuntu in Conversation: What Unites Us",
                "Break and cultural exhibition",
                "Group photo moment",
                "Closing and musical moment",
                "Sunset Picnic"
            ],
            galleryEyebrow: "Gallery",
            galleryTitle: "Records from Africa Day at Técnico",
            gallerySubtitle: "Some of the moments that shaped the afternoon, among conversations, the cultural exhibition, guests, and community."
        }
    },
    "semana-africa-ulisboa.html": {
        pt: {
            title: "Semana de África ULisboa — Sem Margem | NEAIST",
            description: "Participação do NEAIST na Semana de África Sem Margem, iniciativa da Universidade de Lisboa dedicada à cultura africana, ao pensamento e ao encontro entre comunidades académicas.",
            heroMeta: "25 a 30 de Maio de 2026",
            heroTitle: "Semana de África ULisboa — Sem Margem",
            heroSubtitle: "Participação do NEAIST na programação da Universidade de Lisboa",
            heroIntros: [
                "A Semana de África da ULisboa está a decorrer com uma programação dedicada à cultura, história, literatura, gastronomia, música e expressões artísticas africanas.",
                "O NEAIST junta-se a esta iniciativa como parte de um movimento maior: aproximar comunidades, desafiar narrativas e celebrar a presença africana na vida académica."
            ],
            heroButtons: ["Voltar às notícias", "Página oficial da ULisboa"],
            participationKicker: "Participação institucional",
            participationTitle: "Participação do NEAIST",
            participationTexts: [
                "O NEAIST integrou esta programação através do Africa Quiz Challenge: Challenge the Narrative, um quiz presencial organizado pelo Núcleo de Estudantes Africanos do Técnico ULisboa, realizado no Caleidoscópio.",
                "Mais do que uma atividade de entretenimento, o quiz procurou promover o conhecimento sobre África de forma participativa, moderna e acessível, juntando espírito de equipa, curiosidade e reflexão."
            ],
            highlightKicker: "Atividade em destaque",
            quizTitle: "Africa Quiz Challenge: Challenge the Narrative",
            quizLabels: ["Data", "Hora", "Local", "Organização"],
            quizValues: ["28 de Maio", "16h00", "Caleidoscópio", "Núcleo de Estudantes Africanos do Técnico ULisboa"],
            quizText: "Este quiz aconteceu em formato de trívia presencial, onde equipas competiram respondendo a perguntas entregues no momento. Antes de cada ronda, um sorteio definiu o tema, dando à atividade um ritmo mais espontâneo, divertido e imprevisível.",
            quizButton: "Ver página oficial da ULisboa",
            timelineKicker: "Programa selecionado",
            timelineTitle: "Momentos em destaque",
            timelineText: "Uma seleção compacta de iniciativas da Semana de África Sem Margem, com ligação à página oficial da ULisboa para o programa completo.",
            timelineItems: [
                "28 de Maio, 10h00 — África e Portugal: Saberes, Mobilidades e Futuro Universitário",
                "28 de Maio, 12h00 — Sabores de África",
                "28 de Maio, 16h00 — Africa Quiz Challenge: Challenge the Narrative",
                "28 de Maio, 17h30 — Oficina Performar Poesia",
                "29 de Maio, 17h30 — Pensar África a partir da literatura",
                "30 de Maio, 14h00 — Festa de Encerramento"
            ],
            finalTitle: "Explorar o programa completo",
            finalText: "Para conhecer o enquadramento completo da iniciativa e acompanhar o restante programa da Universidade de Lisboa, consulta a página oficial da Semana de África Sem Margem.",
            finalButton: "Ver página oficial da ULisboa"
        },
        en: {
            title: "ULisboa Africa Week — Sem Margem | NEAIST",
            description: "NEAIST participation in Sem Margem Africa Week, a University of Lisbon initiative dedicated to African culture, thought, and shared academic encounters.",
            heroMeta: "May 25 to 30, 2026",
            heroTitle: "ULisboa Africa Week — Sem Margem",
            heroSubtitle: "NEAIST participation in the University of Lisbon programme",
            heroIntros: [
                "ULisboa Africa Week is taking place with a programme dedicated to African culture, history, literature, gastronomy, music, and artistic expressions.",
                "NEAIST joins this initiative as part of a broader movement: bringing communities closer together, challenging narratives, and celebrating the African presence in academic life."
            ],
            heroButtons: ["Back to news", "Official ULisboa page"],
            participationKicker: "Institutional participation",
            participationTitle: "NEAIST Participation",
            participationTexts: [
                "NEAIST joined this programme through Africa Quiz Challenge: Challenge the Narrative, an in-person quiz organized by the African Students' Association of Técnico ULisboa and held at Caleidoscópio.",
                "More than an entertainment activity, the quiz aimed to promote knowledge about Africa in a participatory, modern, and accessible way, bringing together teamwork, curiosity, and reflection."
            ],
            highlightKicker: "Featured activity",
            quizTitle: "Africa Quiz Challenge: Challenge the Narrative",
            quizLabels: ["Date", "Time", "Location", "Organization"],
            quizValues: ["May 28", "4:00 PM", "Caleidoscópio", "African Students' Association of Técnico ULisboa"],
            quizText: "This quiz took place as an in-person trivia activity, where teams competed by answering questions handed out on the spot. Before each round, a draw defined the topic, giving the activity a more spontaneous, playful, and unpredictable rhythm.",
            quizButton: "View the official ULisboa page",
            timelineKicker: "Selected programme",
            timelineTitle: "Highlighted moments",
            timelineText: "A compact selection of Sem Margem Africa Week activities, with a link to the official ULisboa page for the full programme.",
            timelineItems: [
                "May 28, 10:00 AM — Africa and Portugal: Knowledge, Mobilities, and the University Future",
                "May 28, 12:00 PM — Flavours of Africa",
                "May 28, 4:00 PM — Africa Quiz Challenge: Challenge the Narrative",
                "May 28, 5:30 PM — Performing Poetry Workshop",
                "May 29, 5:30 PM — Thinking Africa through literature",
                "May 30, 2:00 PM — Closing Celebration"
            ],
            finalTitle: "Explore the full programme",
            finalText: "To see the full context of the initiative and follow the rest of the University of Lisbon programme, visit the official Sem Margem Africa Week page.",
            finalButton: "View the official ULisboa page"
        }
    },
    "noticia-game-day-2026.html": {
        pt: {
            title: "Game Day NEAIST | 23 de Abril de 2026",
            description: "Notícia do NEAIST sobre o Game Day de 23 de Abril de 2026, uma tarde de jogos, convívio e comunidade entre estudantes no Técnico.",
            heroMeta: "23 de Abril de 2026",
            heroTitle: "Game Day NEAIST",
            heroIntro: "No dia 23 de Abril de 2026, o NEAIST viveu um Game Day bonito, leve e cheio de energia positiva, marcado por jogos, risadas e um convívio que tornou a tarde verdadeiramente enriquecedora.",
            heroButtons: ["Voltar às notícias", "Ver momentos", "Instagram do NEAIST"],
            previewBadge: "Quiz . Games . Fun",
            gratitudeTitle: "Obrigado por terem vindo 💫",
            gratitudeText: "Muito obrigada a todos por terem vindo ao nosso primeiro evento. Significou imenso para nós e deu-nos ainda mais motivação para continuar a criar momentos especiais como este. 🥹💫<br><br>Para quem não conseguiu estar presente, não se preocupem — fiquem atentos, porque vêm aí muitas novidades e próximos eventos. 💕✨",
            recapTitle: "Como foi a tarde",
            recapSubtitle: "Um encontro simples, mas cheio de energia, partilha e comunidade.",
            recapTitles: [
                "Uma tarde feita de convívio",
                "Jogos, alegria e partilha",
                "O primeiro de muitos"
            ],
            recapTexts: [
                "No dia 23 de Abril de 2026, reunimo-nos para um Game Day especial no C9, pensado como um momento simples mas marcante de encontro entre estudantes.",
                "Entre jogos, quiz, conversas e muitos sorrisos, a tarde ganhou vida com a presença de estudantes que trouxeram entusiasmo, abertura e vontade de estar juntos num ambiente leve e acolhedor.",
                "Este encontro mostrou mais uma vez o valor de criar espaços de pausa, proximidade e comunidade dentro da vida académica. Foi uma experiência bonita e enriquecedora para todos os que participaram."
            ],
            mediaEyebrow: "Poster e vídeo",
            mediaTitle: "Momentos do Game Day",
            mediaText: "Alguns registos que guardam a energia e o ambiente vivido nesta tarde.",
            mediaCardTitles: ["O convite para o Game Day", "Um pouco da energia que se viveu"],
            mediaCardTexts: [
                "Foi com esta imagem que convidámos a comunidade a juntar-se a nós para uma tarde de quiz, jogos e convívio no C9.",
                "Um pequeno registo da boa disposição, participação e ambiente leve que marcaram o nosso primeiro evento."
            ],
            photoEyebrow: "Mais memórias",
            photoTitle: "Imagens do encontro",
            photoText: "Alguns dos momentos que ficaram guardados deste primeiro Game Day do NEAIST.",
            ctaTitle: "Fica atento aos próximos eventos",
            ctaText: "O NEAIST continuará a criar momentos de convívio, partilha e comunidade. Acompanha-nos para não perderes as próximas iniciativas.",
            ctaButton: "Ver mais eventos"
        },
        en: {
            title: "NEAIST Game Day | April 23, 2026",
            description: "NEAIST article about the Game Day held on April 23, 2026, an afternoon of games, connection, and student community at Técnico.",
            heroMeta: "April 23, 2026",
            heroTitle: "NEAIST Game Day",
            heroIntro: "On April 23, 2026, NEAIST enjoyed a beautiful and lively Game Day filled with games, laughter, and a sense of community that made the afternoon truly enriching.",
            heroButtons: ["Back to news", "See moments", "NEAIST Instagram"],
            previewBadge: "Quiz . Games . Fun",
            gratitudeTitle: "Thank you for coming 💫",
            gratitudeText: "Thank you so much to everyone who came to our first event. It meant a lot to us and gave us even more motivation to keep creating special moments like this one. 🥹💫<br><br>For those who could not be there, do not worry — stay tuned, because many more updates and upcoming events are on the way. 💕✨",
            recapTitle: "How the afternoon felt",
            recapSubtitle: "A simple gathering, but one full of energy, sharing, and community.",
            recapTitles: [
                "An afternoon built around connection",
                "Games, joy, and shared moments",
                "The first of many"
            ],
            recapTexts: [
                "On April 23, 2026, we gathered for a special Game Day in C9, designed as a simple but memorable moment of connection among students.",
                "Between games, quizzes, conversations, and plenty of smiles, the afternoon came alive through the students who brought enthusiasm, openness, and the willingness to share time together in a warm atmosphere.",
                "This gathering once again showed the value of creating spaces for pause, closeness, and community within academic life. It was a beautiful and enriching experience for everyone who took part."
            ],
            mediaEyebrow: "Poster and video",
            mediaTitle: "Game Day moments",
            mediaText: "A few records that keep the energy and atmosphere of that afternoon alive.",
            mediaCardTitles: ["The invitation to Game Day", "A little of the energy we felt"],
            mediaCardTexts: [
                "This was the image we used to invite the community to join us for an afternoon of quiz, games, and connection in C9.",
                "A short record of the good mood, participation, and light atmosphere that shaped our first event."
            ],
            photoEyebrow: "More memories",
            photoTitle: "Images from the gathering",
            photoText: "Some of the moments that remained from this first NEAIST Game Day.",
            ctaTitle: "Stay tuned for upcoming events",
            ctaText: "NEAIST will keep creating moments of connection, sharing, and community. Follow us so you do not miss our next initiatives.",
            ctaButton: "See more events"
        }
    },
    "noticia-tomada-posse-2026.html": {
        pt: {
            title: "Tomada de Posse - Mandato 2025/2026 | NEAIST",
            description: "Notícia institucional do NEAIST sobre a tomada de posse do mandato 2025/2026 e o início de um novo ciclo de representação e compromisso no Técnico.",
            heroMeta: "Institucional · 23 de Março de 2026",
            heroTitle: "Tomada de Posse - Mandato 2025/2026",
            heroIntro: "No dia 23 de Março de 2026, o NEAIST realizou a tomada de posse dos seus órgãos sociais e da equipa do mandato 2025/2026, assinalando o início de um novo ciclo de trabalho, representação e compromisso com a comunidade africana no Instituto Superior Técnico.",
            heroButtons: ["Voltar às notícias", "Ver fotografias"],
            articleTitles: [
                "Um novo ciclo para o NEAIST",
                "Representação, união e continuidade",
                "Agradecimento à comunidade"
            ],
            articleParagraphs: [
                "No dia 23 de Março de 2026, o NEAIST realizou a tomada de posse dos seus órgãos sociais e da equipa do mandato 2025/2026, num momento que marcou oficialmente o início de um novo ciclo de representação, compromisso e serviço à comunidade africana no Instituto Superior Técnico.",
                "Esta cerimónia foi mais do que uma formalidade. Foi um momento de afirmação do propósito do núcleo: representar, unir e apoiar os estudantes africanos no Técnico, reforçando a continuidade do trabalho coletivo e da presença institucional do NEAIST.",
                "Deixamos um agradecimento especial à direção cessante, em particular ao Presidente cessante, Pedro Aguiar, pelo trabalho desenvolvido, pela dedicação ao NEAIST e pela passagem de testemunho.",
                "Agradecemos também ao Vice-Reitor, Prof. Luís Castro, ao Presidente da AEIST, António Jarmela, e à AEIST pelo apoio e presença neste momento tão importante para o nosso núcleo.",
                "O nosso agradecimento estende-se ainda aos Núcleos de Estudantes Africanos que estiveram presentes, reforçando os laços entre comunidades estudantis africanas, bem como a todos os estudantes do Técnico, colegas e amigos que se juntaram a nós para assinalar este novo ciclo.",
                "A presença da comunidade neste momento reforçou aquilo que o NEAIST procura construir todos os dias: uma estrutura mais próxima, mais representativa e mais unida.",
                "Com este novo mandato, o NEAIST reafirma o compromisso de continuar a criar espaços de apoio, proximidade, representação e valorização da presença africana no Técnico."
            ],
            galleryEyebrow: "Fotografias",
            galleryTitle: "Momentos da tomada de posse",
            galleryText: "Uma seleção de imagens da cerimónia, da nova equipa e dos convidados presentes neste início de mandato.",
            socialEyebrow: "Redes sociais",
            socialTitle: "Momentos partilhados pelo NEAIST",
            socialText: "Consulta as publicações oficiais relacionadas com a tomada de posse e o convite lançado à comunidade antes da cerimónia.",
            socialCardTitles: ["Publicação oficial", "Convite à comunidade"],
            socialCardTexts: [
                "Registo da cerimónia e do início do novo mandato, partilhado após este momento institucional.",
                "Convite partilhado antes da cerimónia, convocando estudantes e parceiros para o início do novo mandato."
            ],
            quote: "Gostaríamos de avisar que a tomada de posse da nova lista já tem data marcada!<br><br>Será um momento importante para darmos início a este novo ciclo, e contamos com a presença de todos para tornar este momento ainda mais especial.<br><br>Apareçam para dar as boas-vindas à nova equipa e celebrar este início connosco!",
            socialLink: "Ver publicação no Instagram"
        },
        en: {
            title: "Inauguration - 2025/2026 Term | NEAIST",
            description: "Institutional NEAIST article about the inauguration of the 2025/2026 term and the beginning of a new cycle of representation and commitment at Técnico.",
            heroMeta: "Institutional · March 23, 2026",
            heroTitle: "Inauguration - 2025/2026 Term",
            heroIntro: "On March 23, 2026, NEAIST held the inauguration of its governing bodies and team for the 2025/2026 term, marking the beginning of a new cycle of work, representation, and commitment to the African community at Instituto Superior Técnico.",
            heroButtons: ["Back to news", "View photos"],
            articleTitles: [
                "A new cycle for NEAIST",
                "Representation, unity, and continuity",
                "Thanks to the community"
            ],
            articleParagraphs: [
                "On March 23, 2026, NEAIST held the inauguration of its governing bodies and team for the 2025/2026 term, in a moment that officially marked the beginning of a new cycle of representation, commitment, and service to the African community at Instituto Superior Técnico.",
                "This ceremony was more than a formality. It reaffirmed the association’s purpose: to represent, unite, and support African students at Técnico, while strengthening the continuity of NEAIST’s collective work and institutional presence.",
                "We leave a special word of thanks to the outgoing board, in particular to the outgoing President, Pedro Aguiar, for the work carried out, for his dedication to NEAIST, and for the handover of responsibilities.",
                "We also thank the Vice-Rector, Prof. Luís Castro, the President of AEIST, António Jarmela, and AEIST for their support and presence at such an important moment for our association.",
                "Our thanks also extend to the African Student Associations that were present, strengthening the ties between African student communities, as well as to all Técnico students, colleagues, and friends who joined us to mark this new cycle.",
                "The presence of the community at this moment reinforced what NEAIST works to build every day: a structure that is closer, more representative, and more united.",
                "With this new term, NEAIST reaffirms its commitment to continue creating spaces of support, connection, representation, and visibility for the African presence at Técnico."
            ],
            galleryEyebrow: "Photos",
            galleryTitle: "Moments from the inauguration",
            galleryText: "A selection of images from the ceremony, the new team, and the guests present at the start of the new term.",
            socialEyebrow: "Social media",
            socialTitle: "Moments shared by NEAIST",
            socialText: "See the official posts related to the inauguration ceremony and the invitation shared with the community beforehand.",
            socialCardTitles: ["Official post", "Community invitation"],
            socialCardTexts: [
                "Record of the ceremony and the beginning of the new term, shared after this institutional moment.",
                "Invitation shared before the ceremony, calling students and partners to the start of the new term."
            ],
            quote: "We would like to let you know that the inauguration of the new list already has a confirmed date.<br><br>It will be an important moment to begin this new cycle, and we are counting on everyone’s presence to make it even more special.<br><br>Come welcome the new team and celebrate this beginning with us.",
            socialLink: "View post on Instagram"
        }
    }
};

function getCurrentPageName() {
    const pageName = window.location.pathname.split("/").pop();
    return pageName || "index.html";
}

function getTranslationValue(key) {
    return translations[currentLanguage]?.[key] ?? translations.pt?.[key] ?? "";
}

function getPageCopy(pageName) {
    const pageData = pageCopy[pageName];
    if (!pageData) {
        return null;
    }

    return pageData[currentLanguage] || pageData.pt || null;
}

function applyText(selector, value) {
    const element = document.querySelector(selector);
    if (element && value != null) {
        element.textContent = value;
    }
}

function applyHTML(selector, value) {
    const element = document.querySelector(selector);
    if (element && value != null) {
        element.innerHTML = value;
    }
}

function applyAttr(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element && value != null) {
        element.setAttribute(attribute, value);
    }
}

function applyTextList(selector, values) {
    if (!Array.isArray(values)) {
        return;
    }

    document.querySelectorAll(selector).forEach((element, index) => {
        if (values[index] != null) {
            element.textContent = values[index];
        }
    });
}

function applyHTMLList(selector, values) {
    if (!Array.isArray(values)) {
        return;
    }

    document.querySelectorAll(selector).forEach((element, index) => {
        if (values[index] != null) {
            element.innerHTML = values[index];
        }
    });
}

function applyCommonTranslations() {
    const commonCopy = pageCopy.common[currentLanguage] || pageCopy.common.pt;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        const value = getTranslationValue(key);

        if (!value) {
            return;
        }

        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.getAttribute("data-i18n-html");
        const value = getTranslationValue(key);

        if (value) {
            element.innerHTML = value;
        }
    });

    applyTextList(".footer-heading", [
        getTranslationValue("footer_quick_links"),
        getTranslationValue("footer_contact")
    ]);
    applyTextList(".footer-links a", [
        getTranslationValue("nav_home"),
        getTranslationValue("nav_who_we_are"),
        getTranslationValue("nav_team"),
        getTranslationValue("nav_gallery"),
        getTranslationValue("nav_shop"),
        getTranslationValue("nav_news"),
        getTranslationValue("nav_africa_day"),
        getTranslationValue("nav_resources"),
        getTranslationValue("nav_contact")
    ]);
    applyHTMLList(".footer-contact li", [
        `<i class="fas fa-envelope"></i> neaist.sa@aeist.pt`,
        `<i class="fas fa-map-marker-alt"></i> ${commonCopy.footerLocation}`
    ]);
    applyText(".footer-bottom p", commonCopy.footerCopyright);
    applyText(".footer-description", getTranslationValue("footer_description"));
}

function applyPageSpecificTranslations() {
    const pageName = getCurrentPageName();
    const copy = getPageCopy(pageName);

    if (!copy) {
        return;
    }

    applyText("title", copy.title);
    applyAttr('meta[name="description"]', "content", copy.description);

    if (pageName === "index.html") {
        applyText(".hero-kicker", copy.heroKicker);
        applyText(".hero-title", copy.heroTitle);
        applyTextList(".hero-copy .hero-description", copy.heroDescriptions);
        applyTextList(".hero-pill-card span", copy.heroPills);
        applyTextList(".hero-buttons .btn", copy.heroButtons);
        return;
    }

    if (pageName === "contactos.html") {
        applyText(".contact-direct-copy .section-kicker", copy.kicker);
        applyText(".contact-direct-copy h2", copy.directTitle);
        applyText(".contact-direct-copy > p", copy.directIntro);
        applyTextList(".contact-info .info-content > p:last-child", copy.infoTexts);
        applyTextList(".contact-action-row .btn", copy.buttons);
        return;
    }

    if (pageName === "sobre-nos.html") {
        return;
    }

    if (pageName === "guia-caloiro.html") {
        applyTextList(".timeline-content li", copy.stepLists.map((item) => `✓ ${item}`));
        document.querySelectorAll(".timeline-content li").forEach((element, index) => {
            if (copy.stepLists[index]) {
                element.innerHTML = `<i class="fas fa-check"></i> ${copy.stepLists[index]}`;
            }
        });
        applyTextList(".faq-question h4", copy.faqQuestions);
        applyTextList(".faq-answer p", copy.faqAnswers);
        return;
    }

    if (pageName === "mentoria.html") {
        applyTextList(".benefit-card:first-child li", copy.benefitsMentees.map((item) => `• ${item}`));
        applyTextList(".benefit-card:last-child li", copy.benefitsMentors.map((item) => `• ${item}`));
        document.querySelectorAll(".benefit-card:first-child li").forEach((element, index) => {
            if (copy.benefitsMentees[index]) {
                element.innerHTML = `<i class="fas fa-check-circle"></i> ${copy.benefitsMentees[index]}`;
            }
        });
        document.querySelectorAll(".benefit-card:last-child li").forEach((element, index) => {
            if (copy.benefitsMentors[index]) {
                element.innerHTML = `<i class="fas fa-check-circle"></i> ${copy.benefitsMentors[index]}`;
            }
        });
        applyTextList(".testimonial-text", copy.testimonialTexts);
        applyTextList(".testimonial-author span", copy.testimonialRoles);
        applyText(".useful-links .section-kicker", copy.squadsKicker);
        applyText(".useful-links .section-title", copy.squadsTitle);
        applyText(".useful-links .section-subtitle", copy.squadsSubtitle);
        applyText(".useful-links .link-card:first-child h4", copy.squadsCardTitle);
        applyText(".useful-links .link-card:first-child p", copy.squadsCardText);
        applyText(".useful-links .link-card:last-child h4", copy.squadsTutorTitle);
        applyText(".useful-links .link-card:last-child p", copy.squadsTutorText);
        return;
    }

    if (pageName === "equipa.html") {
        applyText(".page-header .page-title", copy.pageTitle);
        applyText(".page-header .page-subtitle", copy.pageSubtitle);
        applyText(".team-overview .section-kicker", copy.overviewKicker);
        applyText(".team-overview .section-title", copy.overviewTitle);
        applyText(".team-overview .section-subtitle", copy.overviewSubtitle);
        applyTextList(".team-stat span", copy.statLabels);
        applyTextList(".team-section .section-kicker", copy.sectionKickers);
        applyTextList(".team-section .section-title", copy.sectionTitles);
        applyTextList(".team-section .section-subtitle", copy.sectionSubtitles);
        applyTextList(".team-role-label", copy.cardLabels);
        applyTextList(".org-card h3, .department-row h3", copy.cardTitles);
        applyTextList(".org-card > p, .department-main p", copy.descriptions);
        const memberGroups = copy.memberLists || [];
        document.querySelectorAll(".team-member-list, .department-members").forEach((groupElement, groupIndex) => {
            const members = memberGroups[groupIndex] || [];
            if (groupElement.classList.contains("team-member-list")) {
                groupElement.querySelectorAll("li").forEach((itemElement, itemIndex) => {
                    const member = members[itemIndex];
                    if (!member) return;
                    const [name, role] = member.split(" — ");
                    const nameEl = itemElement.querySelector("strong");
                    const roleEl = itemElement.querySelector("span");
                    if (nameEl) nameEl.textContent = name || member;
                    if (roleEl) roleEl.textContent = role || "";
                });
                return;
            }

            groupElement.querySelectorAll(".member-chip").forEach((itemElement, itemIndex) => {
                const member = members[itemIndex];
                if (!member) return;
                const [name, role] = member.split(" — ");
                const nameEl = itemElement.querySelector("strong");
                const roleEl = itemElement.querySelector("span");
                if (nameEl) nameEl.textContent = name || member;
                if (roleEl) roleEl.textContent = role || "";
            });
        });
        return;
    }

    if (pageName === "noticias.html") {
        applyText(".page-header .page-title", copy.pageTitle);
        applyText(".page-header .page-subtitle", copy.pageSubtitle);
        applyText(".archive-intro-card .section-kicker", copy.kicker);
        applyText(".archive-intro-card .section-title", copy.archiveTitle);
        applyText(".archive-intro-card p", copy.archiveText);
        applyText(".archive-intro-card .btn", copy.archiveButton);
        applyTextList(".news-filter-btn", copy.filters);
        return;
    }

    if (pageName === "galeria.html") {
        applyText(".page-header .page-title", copy.pageTitle);
        applyText(".page-header .page-subtitle", copy.pageSubtitle);
        return;
    }

    if (pageName === "recursos.html") {
        applyText(".archive-intro-card .section-kicker", copy.introKicker);
        applyText(".archive-intro-card .section-title", copy.introTitle);
        applyText(".archive-intro-card p", copy.introText);
        applyText(".archive-intro-card .btn", copy.introButton);
        applyTextList(".resource-section-label", copy.sectionLabels);
        applyTextList(".resource-section-heading h2", copy.sectionTitles);
        applyTextList(".resource-section-heading p", copy.sectionTexts);
        applyTextList("#destaques .resource-feature-card .resource-tag", copy.featureTags);
        applyTextList("#destaques .resource-feature-card h3", copy.featureTitles);
        applyTextList("#destaques .resource-feature-card p", copy.featureTexts);
        applyTextList("#apoio-institucional .resource-course-card h3", copy.supportTitles);
        applyTextList("#apoio-institucional .resource-course-card p", copy.supportTexts);
        applyTextList("#apoio-institucional .resource-course-card .resource-tag", copy.supportTags);
        applyTextList("#recursos-por-curso .resource-course-card h3", copy.courseTitles);
        applyTextList("#recursos-por-curso .resource-course-card p", copy.courseTexts);
        applyTextList("#recursos-por-curso .resource-course-card .resource-tag", copy.courseTags);
        return;
    }

    if (pageName === "study-squads.html") {
        applyText(".study-hero-subtitle", copy.heroSubtitle);
        applyText(".study-hero-copy .page-title", copy.heroTitle);
        applyTextList(".study-hero-text", copy.heroTexts);
        applyText(".study-hero-actions .btn", copy.heroButton);
        applyText(".study-note", copy.heroNote);
        applyAttr(".study-hero-visual img", "alt", copy.posterAlt);
        applyText(".study-document-card h3", copy.documentTitle);
        applyText(".study-document-card p", copy.documentText);
        applyText(".study-document-card .btn", copy.documentButton);
        applyTextList(".study-section .section-kicker", copy.sectionKickers);
        applyTextList(".study-section .section-title", copy.sectionTitles);
        applyTextList(".study-section .section-subtitle", copy.sectionSubtitles);
        applyTextList(".study-card-grid:not(.study-card-grid-compact) .study-card h3", copy.roleCards);
        const requirementGroups = document.querySelectorAll(".study-requirements");
        if (requirementGroups[0]) {
            requirementGroups[0].querySelectorAll(".study-badge").forEach((element, index) => {
                if (copy.badges[index]) {
                    element.textContent = copy.badges[index];
                }
            });
        }
        if (requirementGroups[1]) {
            requirementGroups[1].querySelectorAll(".study-badge").forEach((element, index) => {
                if (copy.disciplines[index]) {
                    element.textContent = copy.disciplines[index];
                }
            });
        }
        applyTextList(".study-card-grid-compact .study-card h3", copy.operationCards);
        applyText(".study-cta .cta-title", copy.ctaTitle);
        applyText(".study-cta .cta-description", copy.ctaText);
        applyText(".study-cta .btn", copy.heroButton);
        return;
    }

    if (pageName === "dia-de-africa.html") {
        applyText(".event-hero .section-kicker", copy.kicker);
        applyText(".event-hero .page-subtitle", copy.subtitle);
        applyText(".event-hero .page-title", copy.pageTitle);
        applyTextList(".event-hero .event-description", copy.descriptions);
        applyTextList(".event-meta-label", copy.metaLabels);
        applyTextList(".event-meta-value", copy.metaValues);
        applyTextList(".event-hero .event-link-row .btn", copy.buttons);
        applyText(".news-article-card .article-content h2", copy.articleTitle);
        applyHTML(".news-article-card .article-lead", copy.articleParagraphs[0]);
        applyHTMLList(".news-article-card .article-content p:not(.article-lead)", copy.articleParagraphs.slice(1));
        applyText(".agenda-section .section-kicker", copy.agendaKicker);
        applyText(".agenda-section .section-title", copy.agendaTitle);
        applyText(".agenda-section .section-subtitle", copy.agendaSubtitle);
        applyTextList(".agenda-table thead th", copy.agendaHeaders);
        applyTextList(".agenda-table tbody td:nth-child(2)", copy.agendaRows);
        applyText(".africa-day-gallery .section-heading .eyebrow", copy.galleryEyebrow);
        applyText(".africa-day-gallery .section-heading h2", copy.galleryTitle);
        applyText(".africa-day-gallery .section-heading p", copy.gallerySubtitle);
        return;
    }

    if (pageName === "semana-africa-ulisboa.html") {
        applyText(".ulisboa-hero-tags .article-category-pill:first-child", currentLanguage === "en" ? "Events" : "Eventos");
        applyText(".ulisboa-hero-tags .article-category-pill-secondary", "ULisboa");
        applyText(".ulisboa-hero-copy .article-meta", copy.heroMeta);
        applyText(".ulisboa-hero-copy .page-title", copy.heroTitle);
        applyText(".ulisboa-hero-copy .page-subtitle", copy.heroSubtitle);
        applyTextList(".ulisboa-hero-copy .hero-intro", copy.heroIntros);
        applyTextList(".ulisboa-hero-actions .btn", copy.heroButtons);
        applyAttr(
            ".ulisboa-poster-card img",
            "alt",
            currentLanguage === "en"
                ? "Poster of the Sem Margem Africa Week at the University of Lisbon"
                : "Cartaz da Semana de África Sem Margem da Universidade de Lisboa"
        );
        applyText(".ulisboa-participation-copy .section-kicker", copy.participationKicker);
        applyText(".ulisboa-participation-copy h2", copy.participationTitle);
        applyTextList(".ulisboa-participation-copy > p", copy.participationTexts);
        applyText(".ulisboa-quiz-card .section-kicker", copy.highlightKicker);
        applyText(".ulisboa-quiz-card h3", copy.quizTitle);
        applyTextList(".ulisboa-quiz-meta-label", copy.quizLabels);
        applyTextList(".ulisboa-quiz-meta-value", copy.quizValues);
        applyText(".ulisboa-quiz-card > p", copy.quizText);
        applyText(".ulisboa-quiz-card .btn", copy.quizButton);
        applyText(".ulisboa-timeline .section-kicker", copy.timelineKicker);
        applyText(".ulisboa-timeline .section-title", copy.timelineTitle);
        applyText(".ulisboa-timeline .section-subtitle", copy.timelineText);
        applyTextList(".ulisboa-timeline-list li", copy.timelineItems);
        applyText(".ulisboa-final-card h2", copy.finalTitle);
        applyText(".ulisboa-final-card p", copy.finalText);
        applyText(".ulisboa-final-card .btn", copy.finalButton);
        return;
    }

    if (pageName === "noticia-tomada-posse-2026.html") {
        applyText(".article-category-pill", currentLanguage === "en" ? "Institutional" : "Institucional");
        applyText(".article-meta", copy.heroMeta);
        applyText(".article-hero .page-title", copy.heroTitle);
        applyText(".article-intro", copy.heroIntro);
        applyTextList(".article-actions .btn", copy.heroButtons);
        applyTextList(".article-content h2", copy.articleTitles);
        applyText(".article-lead", copy.articleParagraphs[0]);
        applyTextList(".article-content p:not(.article-lead)", copy.articleParagraphs.slice(1));
        applyText(".tomada-posse-gallery .eyebrow", copy.galleryEyebrow);
        applyText(".tomada-posse-gallery .section-heading h2", copy.galleryTitle);
        applyText(".tomada-posse-gallery .section-heading p", copy.galleryText);
        applyText(".tomada-posse-social .eyebrow", copy.socialEyebrow);
        applyText(".tomada-posse-social .section-heading h2", copy.socialTitle);
        applyText(".tomada-posse-social .section-heading p", copy.socialText);
        applyTextList(".tomada-posse-social .social-card h3", copy.socialCardTitles);
        applyTextList(".tomada-posse-social .social-card > p:not(.article-quote)", copy.socialCardTexts);
        applyHTML(".article-quote", copy.quote);
        applyTextList(".tomada-posse-social .social-link", [copy.socialLink, copy.socialLink]);
        return;
    }

    if (pageName === "noticia-game-day-2026.html") {
        applyText(".article-category-pill", currentLanguage === "en" ? "Events" : "Eventos");
        applyText(".article-meta", copy.heroMeta);
        applyText(".article-hero .page-title", copy.heroTitle);
        applyText(".article-intro", copy.heroIntro);
        applyTextList(".article-actions .btn", copy.heroButtons);
        applyText(".game-day-preview-badge", copy.previewBadge);
        applyText(".game-day-gratitude-card h2", copy.gratitudeTitle);
        applyHTML(".game-day-gratitude-card p", copy.gratitudeText);
        applyText(".game-day-recap .section-heading h2", copy.recapTitle);
        applyText(".game-day-recap .section-heading p", copy.recapSubtitle);
        applyTextList(".game-day-recap-card h3", copy.recapTitles);
        applyTextList(".game-day-recap-card p", copy.recapTexts);
        applyText(".media-section .eyebrow", copy.mediaEyebrow);
        applyText(".media-section .section-heading h2", copy.mediaTitle);
        applyText(".media-section .section-heading p", copy.mediaText);
        applyTextList(".article-media-card h3", copy.mediaCardTitles);
        applyTextList(".article-media-card > p", copy.mediaCardTexts);
        applyText(".game-day-photo-gallery .eyebrow", copy.photoEyebrow);
        applyText(".game-day-photo-gallery .section-heading h2", copy.photoTitle);
        applyText(".game-day-photo-gallery .section-heading p", copy.photoText);
        applyText(".game-day-cta-card h2", copy.ctaTitle);
        applyText(".game-day-cta-card p", copy.ctaText);
        applyText(".game-day-cta-card .btn", copy.ctaButton);
    }
}

function enableLanguageButtons() {
    document.querySelectorAll('.lang-btn[data-lang="en"]').forEach((button) => {
        button.disabled = false;
        button.removeAttribute("disabled");
        button.removeAttribute("aria-disabled");
        button.classList.remove("lang-btn-disabled");
    });
}

// Language management
const savedLanguage = localStorage.getItem("language");
let currentLanguage = savedLanguage && translations[savedLanguage] ? savedLanguage : "pt";
window.currentLanguage = currentLanguage;

function setLanguage(lang) {
    if (!translations[lang]) {
        return;
    }

    currentLanguage = lang;
    window.currentLanguage = currentLanguage;
    localStorage.setItem("language", lang);
    updatePageLanguage();
    updateLanguageButton();
}

function updatePageLanguage() {
    window.currentLanguage = currentLanguage;
    document.documentElement.lang = currentLanguage === "en" ? "en" : "pt-PT";

    applyCommonTranslations();
    applyPageSpecificTranslations();

    if (typeof window.renderNewsSections === "function") {
        window.renderNewsSections();
    }

    if (typeof window.renderGallery === "function") {
        window.renderGallery();
    }
}

function updateLanguageButton() {
    const langButtons = document.querySelectorAll(".lang-btn");
    langButtons.forEach((button) => {
        const isActive = button.getAttribute("data-lang") === currentLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    enableLanguageButtons();
    updatePageLanguage();
    updateLanguageButton();

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const lang = button.getAttribute("data-lang");
            setLanguage(lang);
        });
    });
});
