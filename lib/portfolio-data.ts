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
    title: "Mês das Mães",
    client: "Nani Sound",
    year: 2024,
    category: "Campanhas",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImage:
      "/image/cases/mesdasmaes-banner.png",
    headerImage:
      "/image/cases/mesdasmaes-banner.png",
    images: [
      "/image/cases/mesdasmaes-imagem1.png",
      "/placeholder.svg?height=600&width=800&text=Social+Post+2",
      "/placeholder.svg?height=600&width=800&text=Print+Material",
    ],
    video: "/placeholder-video.mp4",
    contentSections: [
      {
        image: "/image/cases/mesdasmaes-imagem1.png",
        description: "Social media campaign",
      },
      {
        image: "/image/cases/mesdasmaes-imagem1.png",
        description: "Mobile application design",
      },
    ],
  },
  {
    id: "semana-da-mulher",
    title: "Semana da Mulher",
    client: "Odonto Special",
    year: 2024,
    category: "Campanhas",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImage: "/image/cases/semanadamulher-banner.png",
    headerImage:
      "/image/cases/semanadamulher-banner.png",
    images: [
      "/placeholder.svg?height=600&width=800&text=Campaign+Material",
      "/placeholder.svg?height=600&width=800&text=Mobile+Posts",
      "/placeholder.svg?height=600&width=800&text=Physical+Items",
    ],
    video: "/placeholder-video.mp4",
    contentSections: [
      {
        image: "/image/cases/semanadamulher-imagem1.png",
        description: "Promotional materials",
      },
      {
        image: "/image/cases/semanadamulher-imagem1.png",
        description: "Social media campaign",
      },
    ],
  },
  {
    id: "rotulos-produtos",
    title: "Rótulos de produtos",
    client: "Dra. Jaqueline Sales",
    year: 2024,
    category: "Branding",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImage:
      "/image/cases/rotulodeprodutos-banner.png",
    headerImage:
      "/image/cases/rotulodeprodutos-banner.png",
    images: [
      "/placeholder.svg?height=600&width=800&text=Product+Packaging",
      "/placeholder.svg?height=600&width=800&text=Brand+Identity",
      "/placeholder.svg?height=600&width=800&text=Product+Line",
    ],
    contentSections: [
      {
        image: "/image/cases/rotulodeprodutos-imagem1.png",
        description: "Product packaging design",
      },
      {
        image: "/image/cases/rotulodeprodutos-imagem2.png",
        description: "Complete product line",
      },
    ],
  },
  {
    id: "instagram-campaign",
    title: "Instagram",
    client: "Odonto Special",
    year: 2024,
    category: "Social Media",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImage:
      "/image/cases/instagram-banner.png",
    headerImage:
      "/image/cases/instagram-banner.png",
    images: [
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+1",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+2",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+3",
    ],
    contentSections: [
      {
        image: "/image/cases/instagram-imagem1.png",
        description: "Instagram feed design",
      },
      {
        image: "/image/cases/instagram-imagem1.png",
        description: "Stories campaign",
      },
    ],
  }, 
  {
    id: "show-de-premios",
    title: "Show de Prêmios",
    client: "Mais Laser",
    year: 2024,
    category: "Campanhas",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImage:
      "/image/cases/showdepremios-banner.png",
    headerImage:
      "/image/cases/showdepremios-banner.png",
    images: [
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+1",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+2",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+3",
    ],
    contentSections: [
      {
        image: "/image/cases/showdepremios-imagem1.png",
        description: "Instagram feed design",
      },
      {
        image: "/image/cases/showdepremios-imagem2.png",
        description: "Stories campaign",
      },
      {
        image: "/image/cases/showdepremios-imagem3.png",
        description: "Stories campaign",
      },
      {
        image: "/image/cases/showdepremios-imagem3.png",
        description: "Stories campaign",
      },
    ],
  },
  {
    id: "coracao-peludo",
    title: "Chega de Coração Peludo",
    client: "Mais Laser",
    year: 2024,
    category: "Marketing",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImage:
      "/image/cases/coracaopeludo-banner.png",
    headerImage:
      "/image/cases/coracaopeludo-banner.png",
    images: [
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+1",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+2",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+3",
    ],
    contentSections: [
      {
        image: "/image/cases/coracaopeludo-imagem1.png",
        description: "Chega de Coração Peludo",
      },
      {
        image: "/image/cases/coracaopeludo-imagem2.png",
        description: "Chega de Coração Peludo",
      },
      {
        image: "/image/cases/coracaopeludo-imagem3.png",
        description: "Chega de Coração Peludo",
      },
      {
        image: "/image/cases/coracaopeludo-imagem4.png",
        description: "Chega de Coração Peludo",
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
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImage:
      "/image/cases/liquidaaniversario-banner.png",
    headerImage:
      "/image/cases/liquidaaniversario-banner.png",
    images: [
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+1",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+2",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+3",
    ],
    contentSections: [
      {
        image: "/image/cases/liquidaaniversario-imagem1.png",
        description: "Instagram feed design",
      },
      {
        image: "/image/cases/liquidaaniversario-imagem2.png",
        description: "Stories campaign",
      },
      {
        image: "/image/cases/liquidaaniversario-imagem3.png",
        description: "Stories campaign",
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
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImage:
      "/image/cases/namorados-banner.png",
    headerImage:
      "/image/cases/namorados-banner.png",
    images: [
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+1",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+2",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+3",
    ],
    contentSections: [
      {
        image: "/image/cases/namorados-imagem1.png",
        description: "Instagram feed design",
      },
      {
        image: "/image/cases/namorados-imagem2.png",
        description: "Stories campaign",
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
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImage:
      "/image/cases/sorrisoodonto-banner.png",
    headerImage:
      "/image/cases/sorrisoodonto-banner.png",
    images: [
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+1",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+2",
      "/placeholder.svg?height=600&width=800&text=Instagram+Post+3",
    ],
    contentSections: [
      {
        image: "/image/cases/sorrisoodonto-imagem1.png",
        description: "Instagram feed design",
      },
    ],
  },
]

