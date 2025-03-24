import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Serviços Integrados | TSA",
  description: "Conheça nossos serviços integrados de marketing, branding e consultoria empresarial.",
}

const services = [
  {
    id: "branding",
    title: "Branding e Identidade Visual",
    description:
      "Destaque sua empresa com uma identidade forte e única. Criamos marcas que atraem clientes, geram confiança e se tornam memoráveis no mercado.",
    image: "/image/servicos/servicos1.png",
    imagePosition: "left",
  },
  {
    id: "marketing",
    title: "Marketing Digital e Tráfego Pago",
    description:
      "Potencialize seus resultados com campanhas inteligentes que atraem leads mais qualificados e aumentam suas vendas. Seu sucesso, com a estratégia certa!",
    image: "/image/servicos/servicos2.png",
    imagePosition: "right",
  },
  {
    id: "social",
    title: "Gestão de Redes Sociais",
    description:
      "Conquiste seguidores e transforme engajamento em resultados. Criamos conteúdos relevantes e estratégias que fortalecem sua presença online.",
    image: "/image/servicos/servicos3.png",
    imagePosition: "left",
  },
  {
    id: "market",
    title: "Inteligência de Mercado",
    description:
      "Saia na frente com informações estratégicas. Oferecemos análises que ajudam você a identificar tendências, entender a concorrência e tomar decisões com segurança.",
    image: "/image/servicos/servicos4.png",
    imagePosition: "right",
  },
  {
    id: "patents",
    title: "Marcas e Patentes",
    description:
      "Proteja sua inovação e garanta exclusividade no mercado. Registramos suas marcas e patentes para que você tenha segurança e destaque.",
    image: "/image/servicos/servicos5.png",
    imagePosition: "left",
  },
  {
    id: "training",
    title: "Palestras e Treinamentos",
    description:
      "Capacite sua equipe com conteúdo prático e inspirador. Transformamos colaboradores em aliados para o crescimento da sua empresa.",
    image: "/image/servicos/servicos6.png",
    imagePosition: "right",
  },
  {
    id: "consulting",
    title: "Consultoria Personalizada",
    description:
      "Enfrente desafios e descubra novas oportunidades com a nossa orientação especializada. Decisões estratégicas feitas sob medida para o seu negócio.",
    image: "/image/servicos/servicos7.png",
    imagePosition: "left",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black bg-gradientImg bg-repeat bg-right-top">
      {/* Hero Section */}
      <section className="max-w-[1180px] mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl ml-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            <span className="font-regular">
              Nossos
                            <br />
            </span>
            <span className="font-semibold">
              serviços
              <br />
              integrados
            </span>
            <div className="h-1 w-screen bg-gradient-to-r from-orange-500 via-red-500 to-purple-600"></div>
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-[1180px] mx-auto px-4 py-16">
        <div className="space-y-32">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col gap-8 ${
                service.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } items-center bg-gray-900 bg-opacity-25 rounded-2xl`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-orange-500">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>

              <div className="w-full md:w-1/2 md:px-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">{service.title}</h2>
                <p className="text-white text-lg leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

