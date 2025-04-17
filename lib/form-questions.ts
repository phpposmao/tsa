// Common questions for both forms
export const commonQuestions = [
    {
        id: "nome",
        question: "Olá, qual é o seu nome?",
        type: "text",
        placeholder: "Digite seu nome completo",
        required: true,
    },
    {
        id: "email",
        question: "Qual é o seu e-mail?",
        type: "email",
        placeholder: "seuemail@empresa.com",
        required: true,
    },
    {
        id: "telefone",
        question: "Qual é o seu telefone de contato?",
        type: "tel",
        placeholder: "(00) 00000-0000",
        required: true,
    },
    {
        id: "nome_empresa",
        question: "Qual é o nome da sua empresa?",
        type: "text",
        placeholder: "Digite o nome da sua empresa",
        required: true,
    },
    {
        id: "ramo_empresa",
        question: "Em que ramo a sua empresa atua?",
        type: "text",
        placeholder: "Digite o ramo da sua empresa.",
        required: true,
    },
    {
        id: "como_chegou",
        question: "Como chegou até este formulário?",
        type: "radio",
        options: [
        { value: "redes_sociais", label: "Atráves das nossas redes sociais" },
        { value: "anuncio", label: "Atráves de um anúncio" },
        { value: "parceiro", label: "Indicação de um parceiro" },
        ],
        required: true,
    },
    {
        id: "site",
        question: "Tem site?",
        type: "radio",
        options: [
        { value: "sim", label: "Sim" },
        { value: "nao", label: "Não" },
        ],
        required: true,
    },
    {
        id: "instagram",
        question: "Qual o instagram da sua empresa?",
        type: "text",
        placeholder: "@suaempresa",
        required: true,
    },
    {
        id: "descricao_empresa",
        question: "Pode nos descrever sua empresa?",
        type: "text",
        placeholder: "Descreva sua empresa",
        required: true,
    },
    {
        id: "tempo_mercado",
        question: "Há quanto tempo sua empresa está no mercado?",
        type: "radio",
        options: [
        { value: "less_than_1", label: "Menos de 1 ano" },
        { value: "1_3", label: "Entre 1 e 3 anos" },
        { value: "3_5", label: "Entre 3 e 5 anos" },
        { value: "5_10", label: "Entre 5 e 10 anos" },
        { value: "more_than_10", label: "Mais de 10 anos" },
        ],
        required: true,
    },
    {
        id: "ticket_medio",
        question: "Qual o ticket médio dos seus produtos e/ou serviços?",
        type: "text",
        placeholder: "Responda aqui",
        required: true,
    },
    {
        id: "pontos_fortes",
        question: "Quais os pontos FORTES da sua empresa?",
        type: "textarea",
        placeholder: "Responda aqui",
        required: true,
    },
    {
        id: "pontos_fracos",
        question: "Agora nos diga como a sua empresa pode melhorar?",
        type: "textarea",
        placeholder: "Responda aqui",
        required: true,
    },
    {
        id: "disponibilidade_inicio",
        question: "Quantos funcionários sua empresa possui?",
        type: "radio",
        options: [
        { value: "amanha", label: "Amanhã" },
        { value: "proxima_semana", label: "Próxima semana" },
        { value: "esse_mes", label: "Este mês" },
        { value: "proximo_mes", label: "Próximo mês" },
        { value: "outra_data", label: "Outra data" },
        ],
        required: true,
    },
    {
        id: "faturamento",
        question: "Qual é a média de faturamento mensal da sua empresa?",
        type: "radio",
        options: [
        { value: "ate_50k", label: "Até R$ 50 mil" },
        { value: "50k_100k", label: "Entre R$ 50 mil e R$ 100 mil" },
        { value: "100k_360k", label: "Entre R$ 100 mil e R$ 360 mil" },
        { value: "360k_1kk", label: "Entre R$ 360 mil e R$ 1 milhão" },
        { value: "acima_1kk", label: "Acima de R$ 1 milhão" },
        ],
        required: true,
    },
    {
        id: "conhece_trafego_pago",
        question: "Você sabe o que é tráfego pago?",
        type: "radio",
        options: [
        { value: "sim", label: "Sim, conheço bem" },
        { value: "um_pouco", label: "Sim, conheço um pouco" },
        { value: "nao", label: "Não conheço" },
        ],
        required: true,
    },
    {
        id: "objetivo",
        question: "Qual o seu objetivo com Tráfego Pago hoje?",
        type: "text",
        placeholder: "Responda aqui.",
        required: true,
    },
    {
        id: "valor_minimo_de_acordo",
        question: "Recomendamos um valor a partir de R$ 50,00 por dia para serem investidos nos anúncios, desconsiderando nossa mão de obra. Esse valor mínimo está de acordo com sua realidade hoje?",
        type: "radio",
        options: [
        { value: "sim", label: "Sim" },
        { value: "nao", label: "Não" },
        ],
        required: true,
    },
    ]

    // Marketing form specific questions (with scoring)
    export const marketingQuestions = [
    {
        id: "investimento_trafego_pago",
        question: "Você já investe em tráfego pago atualmente?",
        type: "radio",
        options: [
            { value: "sim_regularmente", label: "Sim, regularmente", score: 2 },
            { value: "sim_pontualmente", label: "Sim, mas de forma pontual", score: 1 },
            { value: "nao", label: "Não", score: 0 },
            { value: "investiu_parou", label: "Já investi, mas parei", score: 0 },
        ],
        required: true,
    },
    {
        id: "objetivo_marketing_digital",
        question: "Qual o principal objetivo atual do seu marketing digital?",
        type: "radio",
        options: [
            { value: "gerar_leads", label: "Gerar mais leads", score: 1 },
            { value: "agendar_reunioes", label: "Agendar reuniões com clientes ideais", score: 2 },
            { value: "aumentar_vendas", label: "Aumentar vendas diretas", score: 0 },
            { value: "fortalecer_marca", label: "Fortalecer a marca", score: 0 },
        ],
        required: true,
    },
    {
        id: "responsavel_marketing",
        question: "Sua empresa tem alguém responsável exclusivamente por marketing e tráfego?",
        type: "radio",
        options: [
            { value: "equipe_interna", label: "Sim, equipe interna", score: 2 },
            { value: "terceirizado", label: "Sim, terceirizado (freela ou agência)", score: 1 },
            { value: "nao_faco_eu", label: "Não, faço eu mesmo", score: 1 },
            { value: "nao_ninguem_focado", label: "Não temos ninguém focado nisso", score: 0 },
        ],
        required: true,
    },
    {
        id: "responsavel_marketing",
        question: "Sua empresa tem alguém responsável exclusivamente por marketing e tráfego?",
        type: "radio",
        options: [
            { value: "ate_1k", label: "Até R$ 1.000", score: 0 },
            { value: "1k_5k", label: "De R$ 1.000 a R$ 5.000", score: 1 },
            { value: "acima_5k", label: "Acima de R$ 5.000", score: 2 },
            { value: "nao_tem_orcamento", label: "Ainda não definimos um orçamento", score: 0 },
        ],
        required: true,
    },
    {
        id: "conhece_funil_de_vendas",
        question: "Você conhece com clareza os números do seu funil de vendas? (ex: CPL, ROI, taxa de conversão etc.)",
        type: "radio",
        options: [
            { value: "sim_frequencia", label: "Sim, monitoramos tudo com frequência", score: 2 },
            { value: "sim_basica", label: "Acompanhamos de forma básica", score: 1 },
            { value: "nao", label: "Não temos esses dados organizados", score: 0 },
        ],
        required: true,
    },
    {
        id: "oferta_estruturada",
        question: "Você tem uma oferta principal estruturada (produto ou serviço carro-chefe)?",
        type: "radio",
        options: [
            { value: "sim", label: "Sim, bem definida", score: 2 },
            { value: "mais_ou_menos", label: "Mais ou menos, temos várias", score: 1 },
            { value: "nao", label: "Não está clara ainda", score: 0 },
        ],
        required: true,
    },
    {
        id: "anuncios_consistentes",
        question: "Seus anúncios e conteúdos nas redes geram engajamento e leads consistentes?",
        type: "radio",
        options: [
        { value: "sim", label: "Sim, os resultados são previsíveis", score: 2 },
        { value: "alguns", label: "Alguns funcionam, outros não", score: 1 },
        { value: "nao", label: "Não temos bons resultados", score: 0 }, 
        ],
        required: true,
    },
    {
        id: "anuncios_consistentes",
        question: "Você já utiliza vídeos, provas sociais e criativos com storytelling nas campanhas?",
        type: "radio",
        options: [
        { value: "sim", label: "Sim", score: 2 },
        { value: "nao_ainda", label: "Não ainda", score: 0 },
        { value: "nao_sei", label: "Não sei o que é isso", score: 1 }, 
        ],
        required: true,
    },
    {
        id: "novos_clientes",
        question: "Se 10 novos clientes chegassem amanhã, sua operação estaria pronta para atender?",
        type: "radio",
        options: [
        { value: "sim", label: "Sim, estamos preparados para crescer", score: 2 },
        { value: "sim_ajustes", label: "Sim, mas com ajustes", score: 1 },
        { value: "nao", label: "Não, precisamos estruturar mais", score: 0 },
        ],
        required: true,
    },
    {
        id: "estrategia_bem_pensada",
        question: "Você sente que está deixando dinheiro na mesa por falta de uma estratégia de tráfego bem pensada?",
        type: "radio",
        options: [
        { value: "sim", label: "Sim, com certeza", score: 2 },
        { value: "talvez", label: "Talvez", score: 1 },
        { value: "nao", label: "Não sei / nunca pensei nisso", score: 0 },
        ],
        required: true,
    },
    ]

    // Branding form specific questions (with scoring)
    export const brandingQuestions = [
        {
            id: "perfil_ativo",
            question: "Sua empresa já tem um Perfil da Empresa ativo no Google?",
            type: "radio",
            options: [
                { value: "sim", label: "Sim", score: 2 },
                { value: "nao", label: "Ainda não", score: 0 },
                { value: "nao_sabe", label: "Não sei dizer", score: 1 },
            ],
            required: true,
        },
        {
            id: "informacoes_basicas",
            question: "Todas as informações básicas estão atualizadas? (nome, telefone, endereço, site, horários)",
            type: "radio",
            options: [
                { value: "sim", label: "Sim, tudo em dia", score: 2 },
                { value: "desatualizado", label: "Algumas coisas desatualizadas", score: 1 },
                { value: "nao", label: "Nem lembro a última vez que revisei", score: 0 },
            ],
            required: true,
        },
        {
            id: "descricao_estrategica",
            question: "Seu perfil contém uma descrição estratégica com palavras-chave do seu segmento?",
            type: "radio",
            options: [
                { value: "sim", label: "Sim", score: 2 },
                { value: "nao_sei", label: "Não sei se está bem escrita", score: 1 },
                { value: "nao", label: "Não temos descrição ou está genérica", score: 0 },
            ],
            required: true,
        },
        {
            id: "categorias_secundarias",
            question: "Você já criou categorias secundárias no seu perfil?",
            type: "radio",
            options: [
                { value: "sim", label: "Sim", score: 2 },
                { value: "nao_sei", label: "Não sei o que é isso", score: 1 },
                { value: "nao", label: "Ainda não fazemos", score: 0 },
            ],
            required: true,
        },
        {
            id: "posta_fotos_atualizacoes",
            question: "Você posta fotos ou atualizações com frequência no seu perfil do Google?",
            type: "radio",
            options: [
                { value: "sim_frequencia", label: "Sim, toda semana", score: 2 },
                { value: "as_vezes", label: "De vez em quando", score: 1 },
                { value: "nao", label: "Não publicamos nada", score: 0 },
            ],
            required: true,
        },
        {
            id: "fotos_profissionais",
            question: "Seu perfil tem fotos profissionais, atualizadas e que mostram bem o seu negócio?",
            type: "radio",
            options: [
                { value: "sim", label: "Sim, fotos de qualidade", score: 2 },
                { value: "fotos_antigas", label: "Algumas, mas estão antigas", score: 1 },
                { value: "nao", label: "Só tem a foto do mapa mesmo", score: 0 },
            ],
            required: true,
        },
        {
            id: "recebeu_avaliacoes",
            question: "Sua empresa já recebeu avaliações no Google?",
            type: "radio",
            options: [
            { value: "sim", label: "Sim, várias", score: 2 },
            { value: "alguns", label: "Só algumas", score: 1 },
            { value: "nao", label: "Ainda nenhuma", score: 0 }, 
            ],
            required: true,
        },
        {
            id: "responde_comentarios",
            question: "Você responde os comentários (bons e ruins) que recebe?",
            type: "radio",
            options: [
            { value: "sim", label: "Sim, sempre", score: 2 },
            { value: "talvez", label: "Às vezes", score: 1 },
            { value: "nao", label: "Nunca", score: 0 },
            ],
            required: true,
        },
        {
            id: "acessos_via_perfil",
            question: "Você sabe quantas ligações, rotas ou acessos ao site vêm do seu perfil no Google?",
            type: "radio",
            options: [
            { value: "sim", label: "Sim, monitoramos isso", score: 2 },
            { value: "as_vezes", label: "Já vi, mas não acompanho sempre", score: 1 },
            { value: "nunca", label: "Nunca olhei esses dados", score: 0 },
            ],
            required: true,
        },
        {
            id: "cta_ativo",
            question: "Seu perfil tem botão de WhatsApp, link de agendamento ou CTA ativo?",
            type: "radio",
            options: [
            { value: "sim", label: "Sim", score: 2 },
            { value: "nao_sei", label: "Não sei se está configurado", score: 1 },
            { value: "nao", label: "Não tem nenhum desses", score: 0 },
            ],
            required: true,
        },
    ]

    // Results based on score ranges
    export const marketingResults = [
    {
        range: [0, 6],
        title: "Você ainda não está pronto para escalar.",
        description:
        "Sua estrutura de marketing precisa de base antes de pensar em escalar com tráfego pago. O bom? Você está no lugar certo para dar o primeiro passo certo.",
        recommendations: [
        "Comece investindo em uma presença básica nas redes sociais mais relevantes para seu negócio",
        "Desenvolva um site otimizado para conversões e experiência do usuário",
        "Implemente ferramentas básicas de analytics para começar a medir resultados",
        "Considere uma estratégia inicial de conteúdo para atrair seu público-alvo",
        ],
    },
    {
        range: [7, 13],
        title: "Você já começou, mas ainda está longe do potencial total.",
        description:
        "Com ajustes de estrutura, verba e estratégia, você pode sair do modo “tentativa e erro” e gerar resultados consistentes. Bora conversar?",
        recommendations: [
        "Aprimore sua estratégia de conteúdo com um calendário editorial consistente",
        "Invista em campanhas de tráfego pago com objetivos claros e mensuráveis",
        "Implemente segmentação em suas estratégias de email marketing",
        "Desenvolva um processo de análise regular dos resultados de marketing",
        ],
    },
    {
        range: [14, 20],
        title: "Seu negócio tem potencial real para escalar!",
        description:
        "Com um empurrão estratégico — criativos certos, páginas otimizadas, funil redondo — você pode multiplicar seus resultados. Que tal uma sessão com nossos especialistas para dar esse salto?",
        recommendations: [
        "Implemente testes A/B para otimizar continuamente suas campanhas",
        "Desenvolva estratégias de automação de marketing para escalar resultados",
        "Invista em análises avançadas para identificar oportunidades de crescimento",
        "Considere estratégias omnichannel para uma experiência integrada do cliente",
        ],
    },
    ]

    export const brandingResults = [
    {
        range: [0, 6],
        title: "Seu perfil está invisível para o mercado.",
        description:
        "Você está perdendo oportunidades todos os dias. Com ajustes simples, já é possível começar a atrair mais clientes locais. Vamos te ajudar a virar esse jogo.",
        recommendations: [
        "Desenvolva um manual de identidade visual básico para garantir consistência",
        "Defina claramente seu posicionamento de marca e proposta de valor",
        "Estabeleça diretrizes de comunicação para manter a voz da marca consistente",
        "Realize uma auditoria de marca para identificar pontos de melhoria",
        ],
    },
    {
        range: [7, 13],
        title: "Você está no caminho, mas ainda deixando dinheiro na mesa.",
        description:
        "Seu perfil já tem pontos positivos, mas faltam ajustes estratégicos que fazem diferença na hora do cliente escolher com quem falar. Que tal revisar isso com nosso time?",
        recommendations: [
        "Aprimore seu manual de identidade visual com aplicações mais detalhadas",
        "Desenvolva uma estratégia de storytelling para conectar emocionalmente com seu público",
        "Implemente treinamentos internos para garantir que todos os colaboradores sejam embaixadores da marca",
        "Realize pesquisas de percepção de marca para entender como é vista pelo mercado",
        ],
    },
    {
        range: [14, 20],
        title: "Muito bom! Seu perfil está bem encaminhado.",
        description:
        "Com alguns ajustes finos e uma estratégia contínua, dá pra transformar seu Google em uma fonte recorrente de leads qualificados. Quer uma análise profissional pra dar o próximo passo?",
        recommendations: [
        "Desenvolva estratégias para transformar clientes em advogados da marca",
        "Considere extensões de marca estratégicas para novos mercados ou segmentos",
        "Implemente um programa de gestão de experiência do cliente alinhado aos valores da marca",
        "Realize auditorias regulares para garantir que a marca permaneça relevante e competitiva",
        ],
    },
]
  