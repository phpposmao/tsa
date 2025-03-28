export interface PortfolioProject {
  id: string
  title: string
  client: string
  year: number
  category: string
  description: string
  images: string[]
  video?: string
  mainImage: string
  headerImage?: string
  contentSections?: {
    image: string
    description?: string
  }[]
}

export const categories = [
  "Branding",
  "Marketing",
  "Gestão de Tráfego",
  "Social Media",
  "Motion Design",
  "Campanhas",
  "Eventos",
  "Relações Públicas",
]

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "mes-das-maes",
    title: "Mãe, Cuidado Sempre Presente",
    client: "Nani Sound",
    year: 2024,
    category: "Campanhas",
    description:
      "Campanha com apelo afetivo para o Mês das Mães! Criamos uma comunicação que conecta mães e filhos, destacando o cuidado e dando visibilidade à película antivandalismo da marca.",
    mainImage:
      "/image/cases/mesdasmaes-banner.png",
    headerImage:
      "/image/cases/mesdasmaes-banner.png",
    images: [
      "/image/cases/mesdasmaes-imagem1.png",
      "/image/cases/mesdasmaes-imagem2.png",
    ],
    video: "/placeholder-video.mp4",
    contentSections: [
      {
        image: "/image/cases/mesdasmaes-imagem1.png",
        description: "Campanha Mês das Mães NaniSound - TSA",
      },
      {
        image: "/image/cases/mesdasmaes-imagem2.png",
        description: "Campanha Mês das Mães NaniSound - TSA",
      },
    ],
  },
  {
    id: "semana-da-mulher",
    title: "Semana da Mulher Odonto Special",
    client: "Odonto Special",
    year: 2024,
    category: "Campanhas",
    description:
      "Ação com Sabrina Sato e Dona Kika para celebrar a força feminina! Conteúdo estratégico focado na autoestima e saúde bucal da mulher.",
    mainImage: "/image/cases/semanadamulher-banner.png",
    headerImage:
      "/image/cases/semanadamulher-banner.png",
    images: [
      "/image/cases/semanadamulher-imagem1.png",
      "/image/cases/semanadamulher-imagem2.png",
    ],
    video: "/placeholder-video.mp4",
    contentSections: [
      {
        image: "/image/cases/semanadamulher-imagem1.png",
        description: "Semana da Mulher Odonto Special - TSA",
      },
      {
        image: "/image/cases/semanadamulher-imagem2.png",
        description: "Semana da Mulher Odonto Special - TSA",
      },
    ],
  },
  {
    id: "rotulos-produtos",
    title: "Rótulos de produtos",
    client: "Dra. Jaqueline Salles",
    year: 2024,
    category: "Branding",
    description:
      "Criamos rótulos estratégicos para a linha de cuidados da Dra. Jaqueline! Visual alinhado à marca, transmitindo conceito e informações com clareza.",
    mainImage:
      "/image/cases/rotulodeprodutos-banner.png",
    headerImage:
      "/image/cases/rotulodeprodutos-banner.png",
    images: [
      "/image/cases/rotulodeprodutos-imagem1.png",
      "/image/cases/rotulodeprodutos-imagem2.png",
    ],
    contentSections: [
      {
        image: "/image/cases/rotulodeprodutos-imagem1.png",
        description: "Rótulo de Produtos Jaque Salles - TSA",
      },
      {
        image: "/image/cases/rotulodeprodutos-imagem2.png",
        description: "Rótulo de Produtos Jaque Salles - TSA",
      },
    ],
  },
  {
    id: "hof-day-campaign",
    title: "HOF Day",
    client: "Odonto Special",
    year: 2024,
    category: "Social Media",
    description:
      "Identidade e comunicação estratégica para os eventos mensais de harmonização orofacial. Criamos materiais para redes sociais, WhatsApp e PDV, impulsionando a presença da Odonto Special no nicho.",
    mainImage:
      "/image/cases/instagram-banner.png",
    headerImage:
      "/image/cases/instagram-banner.png",
    images: [
      "/image/cases/instagram-imagem1.png",
    ],
    contentSections: [
      {
        image: "/image/cases/instagram-imagem1.png",
        description: "HOF Day Odonto Special - TSA",
      },
    ],
  }, 
  {
    id: "show-de-premios",
    title: "Show de Prêmios",
    client: "Maislaser",
    year: 2024,
    category: "Campanhas",
    description:
      "Campanha digital do planejamento à entrega! Criamos roteiro, regulamento, materiais de PDV, gestão de tráfego e tudo o que envolve um sorteio de sucesso.",
    mainImage:
      "/image/cases/showdepremios-banner.png",
    headerImage:
      "/image/cases/showdepremios-banner.png",
    images: [
      "/image/cases/showdepremios-imagem1.png",
      "/image/cases/showdepremios-imagem2.png",
      "/image/cases/showdepremios-imagem3.png",
      "/image/cases/showdepremios-imagem4.png",
    ],
    contentSections: [
      {
        image: "/image/cases/showdepremios-imagem1.png",
        description: "Show de Prêmios Maislaser - TSA",
      },
      {
        image: "/image/cases/showdepremios-imagem2.png",
        description: "Show de Prêmios Maislaser - TSA",
      },
      {
        image: "/image/cases/showdepremios-imagem3.png",
        description: "Show de Prêmios Maislaser - TSA",
      },
      {
        image: "/image/cases/showdepremios-imagem4.png",
        description: "Show de Prêmios Maislaser - TSA",
      },
    ],
  },
  {
    id: "coracao-peludo",
    title: "Chega de Coração Peludo",
    client: "Maislaser",
    year: 2024,
    category: "Marketing",
    description:
      "Uma campanha disruptiva para o Dia dos Namorados! Comunicação criativa, chamativa e alinhada ao público de depilação a laser, destacando combos promocionais.",
    mainImage:
      "/image/cases/coracaopeludo-banner.png",
    headerImage:
      "/image/cases/coracaopeludo-banner.png",
    images: [
      "/image/cases/coracaopeludo-imagem1.png",
      "/image/cases/coracaopeludo-imagem2.png",
      "/image/cases/coracaopeludo-imagem3.png",
      "/image/cases/coracaopeludo-imagem4.png",
    ],
    contentSections: [
      {
        image: "/image/cases/coracaopeludo-imagem1.png",
        description: "Chega de Coração Peludo - TSA",
      },
      {
        image: "/image/cases/coracaopeludo-imagem2.png",
        description: "Chega de Coração Peludo - TSA",
      },
      {
        image: "/image/cases/coracaopeludo-imagem3.png",
        description: "Chega de Coração Peludo - TSA",
      },
      {
        image: "/image/cases/coracaopeludo-imagem4.png",
        description: "Chega de Coração Peludo - TSA",
      },
    ],
  },
  {
    id: "liquida-aniversario",
    title: "Liquida Aniversário",
    client: "Mais Laser",
    year: 2024,
    category: "Campanhas",
    description:
      "Uma campanha que conversa com a marca! Comunicação visual marcante para divulgar os descontos de aniversário da Maislaser e atrair clientes.",
    mainImage:
      "/image/cases/liquidaaniversario-banner.png",
    headerImage:
      "/image/cases/liquidaaniversario-banner.png",
    images: [
      "/image/cases/liquidaaniversario-imagem1.png",
      "/image/cases/liquidaaniversario-imagem2.png",
      "/image/cases/liquidaaniversario-imagem3.png",
    ],
    contentSections: [
      {
        image: "/image/cases/liquidaaniversario-imagem1.png",
        description: "Liquida Aniversario Maislaser - TSA",
      },
      {
        image: "/image/cases/liquidaaniversario-imagem2.png",
        description: "Liquida Aniversario Maislaser - TSA",
      },
      {
        image: "/image/cases/liquidaaniversario-imagem3.png",
        description: "Liquida Aniversario Maislaser - TSA",
      },
    ],
  },
  {
    id: "namorados-campaign",
    title: "Mês dos Namorados",
    client: "Odonto Special",
    year: 2024,
    category: "Campanhas",
    description:
      "Demos visibilidade ao amor na terceira idade! Campanha emocional e conectada ao público da marca, valorizando histórias e sorrisos.",
    mainImage:
      "/image/cases/namorados-banner.png",
    headerImage:
      "/image/cases/namorados-banner.png",
    images: [
      "/image/cases/namorados-imagem1.png",
      "/image/cases/namorados-imagem2.png",
    ],
    contentSections: [
      {
        image: "/image/cases/namorados-imagem1.png",
        description: "Mês dos Namorados - Odonto Special",
      },
      {
        image: "/image/cases/namorados-imagem2.png",
        description: "Mês dos Namorados - Odonto Special",
      },
    ],
  },
  {
    id: "sorriso-odonto",
    title: "Sorriso Pequeno, Cuidado Gigante",
    client: "Odonto Special",
    year: 2024,
    category: "Campanhas",
    description:
      "Conscientização infantil com a Odonto Special! Criamos identidade visual e cartilha educativa para pais sobre os cuidados odontológicos na infância.",
    mainImage:
      "/image/cases/sorrisoodonto-banner.png",
    headerImage:
      "/image/cases/sorrisoodonto-banner.png",
    images: [
      "/image/cases/sorrisoodonto-imagem1.png",
    ],
    contentSections: [
      {
        image: "/image/cases/sorrisoodonto-imagem1.png",
        description: "Sorriso Pequeno, Cuidado Gigante Odonto Special - TSA",
      },
    ],
  },
  {
    id: "identidade-jaque",
    title: "Identidade Dra. Jaqueline Salles",
    client: "Dra. Jaqueline Jalles",
    year: 2024,
    category: "Branding",
    description:
      "Pegamos o logo existente e elevamos a identidade visual! Cores, elementos e conceito que traduzem a essência da Dra. Jaqueline com mais força e presença.",
    mainImage:
      "/image/cases/identidade-jaque-banner.png",
    headerImage:
      "/image/cases/identidade-jaque-banner.png",
    images: [
      "/image/cases/identidade-jaque-imagem1.png",
      "/image/cases/identidade-jaque-imagem2.png",
      "/image/cases/identidade-jaque-imagem3.png",
      "/image/cases/identidade-jaque-imagem4.png",
      "/image/cases/identidade-jaque-imagem5.png",
      "/image/cases/identidade-jaque-imagem6.png",
      "/image/cases/identidade-jaque-imagem7.png",
      "/image/cases/identidade-jaque-imagem8.png",
    ],
    contentSections: [
      {
        image: "/image/cases/identidade-jaque-imagem1.png",
        description: "Identidade Dra. Jaqueline Salles - TSA",
      },
      {
        image: "/image/cases/identidade-jaque-imagem2.png",
        description: "Identidade Dra. Jaqueline Salles - TSA",
      },
      {
        image: "/image/cases/identidade-jaque-imagem3.png",
        description: "Identidade Dra. Jaqueline Salles - TSA",
      },
      {
        image: "/image/cases/identidade-jaque-imagem4.png",
        description: "Identidade Dra. Jaqueline Salles - TSA",
      },
      {
        image: "/image/cases/identidade-jaque-imagem5.png",
        description: "Identidade Dra. Jaqueline Salles - TSA",
      },
      {
        image: "/image/cases/identidade-jaque-imagem6.png",
        description: "Identidade Dra. Jaqueline Salles - TSA",
      },
      {
        image: "/image/cases/identidade-jaque-imagem7.png",
        description: "Identidade Dra. Jaqueline Salles - TSA",
      },
      {
        image: "/image/cases/identidade-jaque-imagem8.png",
        description: "Identidade Dra. Jaqueline Salles - TSA",
      },
    ],
  },
  {
    id: "podcast",
    title: "Podcast Special Cast",
    client: "Odonto Special",
    year: 2024,
    category: "Eventos",
    description:
      "Do nome à identidade visual, criamos o podcast oficial da Odonto Special. Conteúdo relevante sobre franquias odontológicas, com um visual alinhado à marca.",
    mainImage:
      "/image/cases/podcast-banner.png",
    headerImage:
      "/image/cases/podcast-banner.png",
    images: [
      "/image/cases/podcast-imagem1.png",
      "/image/cases/podcast-imagem2.png",
      "/image/cases/podcast-imagem3.png",
      "/image/cases/podcast-imagem4.png",
      "/image/cases/podcast-imagem5.png",
      "/image/cases/podcast-imagem6.png",
    ],
    contentSections: [
      {
        image: "/image/cases/podcast-imagem1.png",
        description: "Podcast Special Cast - TSA",
      },
      {
        image: "/image/cases/podcast-imagem2.png",
        description: "Podcast Special Cast - TSA",
      },
      {
        image: "/image/cases/podcast-imagem3.png",
        description: "Podcast Special Cast - TSA",
      },
      {
        image: "/image/cases/podcast-imagem4.png",
        description: "Podcast Special Cast - TSA",
      },
      {
        image: "/image/cases/podcast-imagem5.png",
        description: "Podcast Special Cast - TSA",
      },
      {
        image: "/image/cases/podcast-imagem6.png",
        description: "Podcast Special Cast - TSA",
      },
    ],
  },
  {
    id: "outdoor-jaque",
    title: "Outdoor Dra. Jaqueline Salles",
    client: "Dra. Jaqueline Salles",
    year: 2024,
    category: "Marketing",
    description:
      "Design estratégico para comunicar a essência da clínica em um outdoor. Fotografia e identidade visual alinhadas ao público e credibilidade da Dra. Jaqueline.",
    mainImage:
      "/image/cases/outdoor-jaque-banner.png",
    headerImage:
      "/image/cases/outdoor-jaque-banner.png",
    images: [
      "/image/cases/outdoor-jaque-imagem1.png",
    ],
    contentSections: [
      {
        image: "/image/cases/outdoor-jaque-imagem1.png",
        description: "Outdoor Dra. Jaqueline Salles - TSA",
      },
    ],
  },
  {
    id: "patricia-gama",
    title: "Website - Patricia Gama",
    client: "Patricia Gama",
    year: 2024,
    category: "Marketing",
    description:
      "Site one page intuitivo e estratégico para campanha eleitoral. Comunicação clara, história, propostas e integração com redes sociais para maior engajamento.",
    mainImage:
      "/image/cases/patriciagama-banner.png",
    headerImage:
      "/image/cases/patriciagama-banner.png",
    images: [
      "/image/cases/patriciagama-imagem1.png",
    ],
    contentSections: [
      {
        image: "/image/cases/sorrisoodonto-imagem1.png",
        description: "Website - Patricia Gama - TSA",
      },
    ],
  },
  {
    id: "maximus-site",
    title: "Website - Maximus Segurança",
    client: "Maximus Segurança",
    year: 2024,
    category: "Marketing",
    description:
      "Criamos do zero o site da Maximus Segurança! Design intuitivo, apresentação clara dos serviços e expertise, fortalecendo credibilidade e presença digital da marca.",
    mainImage:
      "/image/cases/maximos-banner.png",
    headerImage:
      "/image/cases/maximos-banner.png",
    images: [
      "/image/cases/maximos-imagem1.png",
    ],
    contentSections: [
      {
        image: "/image/cases/sorrisoodonto-imagem1.png",
        description: "Website - Maximus Segurança - TSA",
      },
    ],
  },
  {
    id: "nani-site",
    title: "Website - Nani Sound Franqueadora",
    client: "Maximus Segurança",
    year: 2024,
    category: "Marketing",
    description:
      "Rebranding completo! Novo layout, mais moderno e funcional. Melhor usabilidade, SEO estratégico e reforço na segurança. Integração direta com WhatsApp e e-mail.",
    mainImage:
      "/image/cases/site-nani-banner.png",
    headerImage:
      "/image/cases/site-nani-banner.png",
    images: [
      "/image/cases/site-nani-imagem1.png",
    ],
    contentSections: [
      {
        image: "/image/cases/site-nani-imagem1.png",
        description: "Website - Nani Sound - TSA",
      },
    ],
  },
]

