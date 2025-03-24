export interface BlogPost {
  id: string
  title: string
  subtitle: string
  excerpt: string
  content: string
  author: {
    name: string
    image: string
  }
  image: string
  category: string
  date: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-exemplo-um",
    title: "Como aumentar seu alcance nas redes sociais",
    subtitle: "Estratégias que realmente funcionam",
    excerpt: "Descubra as melhores práticas para aumentar seu alcance orgânico nas principais redes sociais...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in libero eu nisl dictum vestibulum et sit amet nisl. In pharetra nisl non urna suscipit varius. In gravida, sem sit amet laoreet blandit, arcu nunc tincidunt dui, eu fermentum purus felis sit amet elit.

Nulla vehicula, est in viverra ultrices, libero leo mollis lectus, in cursus sem odio in odio. Mauris sagittis placerat ligula. Integer eget tempor lorem, vel iaculis metus. Proin vel elit eros. Vestibulum sollicitudin rhoncus porttitor.

In eget sem elementum, venenatis lectus eu, commodo dolor. Duis a tristique nibh, non congue dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ante velit, posuere eget luctus quis, facilisis a lorem.`,
    author: {
      name: "Exemplo",
      image: "/placeholder.svg?height=50&width=50",
    },
    image: "/image/blog/blog-placeholder-1.png",
    category: "Marketing Digital",
    date: "2024-03-13",
    readTime: "5 min",
  },
  {
    id: "post-exemplo-dois",
    title: "Tendências de design para 2024",
    subtitle: "O que esperar do design este ano",
    excerpt: "As principais tendências de design que vão dominar 2024 e como aplicá-las em seus projetos...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in libero eu nisl dictum vestibulum et sit amet nisl. In pharetra nisl non urna suscipit varius. In gravida, sem sit amet laoreet blandit, arcu nunc tincidunt dui, eu fermentum purus felis sit amet elit.

Nulla vehicula, est in viverra ultrices, libero leo mollis lectus, in cursus sem odio in odio. Mauris sagittis placerat ligula. Integer eget tempor lorem, vel iaculis metus. Proin vel elit eros. Vestibulum sollicitudin rhoncus porttitor.

In eget sem elementum, venenatis lectus eu, commodo dolor. Duis a tristique nibh, non congue dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ante velit, posuere eget luctus quis, facilisis a lorem.`,
    author: {
      name: "Exemplo",
      image: "/placeholder.svg?height=50&width=50",
    },
    image: "/image/blog/blog-placeholder-2.png",
    category: "Design",
    date: "2024-03-12",
    readTime: "4 min",
  },
  {
    id: "post-exemplo-tres",
    title: "Inteligência Artificial no Marketing",
    subtitle: "Como a IA está transformando estratégias",
    excerpt: "Descubra como a inteligência artificial está revolucionando as estratégias de marketing digital...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in libero eu nisl dictum vestibulum et sit amet nisl. In pharetra nisl non urna suscipit varius. In gravida, sem sit amet laoreet blandit, arcu nunc tincidunt dui, eu fermentum purus felis sit amet elit.

Nulla vehicula, est in viverra ultrices, libero leo mollis lectus, in cursus sem odio in odio. Mauris sagittis placerat ligula. Integer eget tempor lorem, vel iaculis metus. Proin vel elit eros. Vestibulum sollicitudin rhoncus porttitor.

In eget sem elementum, venenatis lectus eu, commodo dolor. Duis a tristique nibh, non congue dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ante velit, posuere eget luctus quis, facilisis a lorem.`,
    author: {
      name: "Exemplo",
      image: "/placeholder.svg?height=50&width=50",
    },
    image: "/image/blog/blog-placeholder-3.png",
    category: "Tecnologia",
    date: "2024-03-10",
    readTime: "6 min",
  },
]

export const categories = ["Marketing Digital", "Tecnologia", "Design", "Tendências de mercado"]

