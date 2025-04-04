import Image from "next/image"
import type { Metadata } from "next"
import VideoSlider from "@/components/video-slider"

export const metadata: Metadata = {
  title: "Sobre Nós | TSA",
  description: "Conheça a equipe TSA e nossa história de transformação de marcas desde 2017.",
}

const team = [
  {
    name: "Gabriel Viana",
    role: "Produtor de Conteúdo",
    image: "/image/sobre/GA1.png",
    imageHover: "/image/sobre/GA2.png",
  },
  {
    name: "Fernando Lima",
    role: "Diretor",
    image: "/image/sobre/FER1.png",
    imageHover: "/image/sobre/FER2.png",
  },
  {
    name: "Erick Renato",
    role: "Gestor de Tráfego",
    image: "/image/sobre/ERICK1.png",
    imageHover: "/image/sobre/ERICK2.png",
  },
  {
    name: "Pedro Posmão",
    role: "Desenvolvedor",
    image: "/image/sobre/PEDRO1.png",
    imageHover: "/image/sobre/PEDRO2.png",
  },
  {
    name: "Gustavo Araújo",
    role: "Atendimento",
    image: "/image/sobre/GU1.png",
    imageHover: "/image/sobre/GU2.png",
  },
  {
    name: "Ítalo Miranda",
    role: "Comercial e Negócios",
    image: "/image/sobre/ITALO1.png",
    imageHover: "/image/sobre/ITALO2.png",
  },
  {
    name: "Erico Tereran",
    role: "Diretor de Arte",
    image: "/image/sobre/ERICO1.png",
    imageHover: "/image/sobre/ERICO2.png",
  },
  {
    name: "Bia Lavandoscki",
    role: "Coordenadora de Projetos",
    image: "/image/sobre/BIA1.png",
    imageHover: "/image/sobre/BIA2.png",
  },
  {
    name: "Vanessa Ferreira",
    role: "Designer",
    image: "/image/sobre/VAN1.png",
    imageHover: "/image/sobre/VAN2.png",
  },
  {
    name: "Alex Torres",
    role: "CEO & Diretor",
    image: "/image/sobre/ALEX1.png",
    imageHover: "/image/sobre/ALEX2.png",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black bg-gradientImg bg-repeat bg-right-top">

      {/* Team Grid Section - Now full width */}
      <section className="w-full pt-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {team.map((member) => (
            <div key={member.name} className="relative group">
              <div className="relative aspect-square overflow-hidden">
                {/* Black and white image */}
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover filter grayscale transition-all duration-300 group-hover:opacity-0"
                />
                {/* Color image (shown on hover) */}
                <Image
                  src={member.imageHover || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium text-sm md:text-base">{member.name}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-[1180px] mx-auto px-4 pb-8 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-regular mb-6">Sobre nós</h1>
          <div className="bg-blue-800 text-white text-xl md:text-3x1 font-regular py-2 px-20 rounded-full inline-block mb-8">
            Transformando marcas desde 2017
          </div>
          <p className="text-gray-300 text:sm md:text-lg leading-relaxed text-center">
            A TSA Business & Hub nasceu em 2017 com uma missão clara:{" "}
            <strong className="text-white">
              ajudar empresas a se destacarem no mercado com estratégias integradas de gestão de marca e marketing
            </strong>
            . Desde então, entendemos as necessidades únicas de cada cliente e entregamos soluções personalizadas que
            geram resultados reais.
          </p>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="max-w-[1180px] mx-auto px-4 pt-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-regular text-center mb-4">Feedback</h2>
          <p className="text-center text-orange-500 text-xl mb-12">
            O que os <span className="font-bold">nossos clientes</span> dizem
          </p>
          <VideoSlider />
        </div>
      </section>
    </main>
  )
}

