"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import localFont from "next/font/local"

const estrella = localFont({
  src: [
    {
      path: "../public/fonts/estrella-early.otf",
    },
  ]
})

type Solution = {
  id: string
  title: string
  description: string
  image: string
  detailText: string
}

interface SolutionsSectionProps {
  title?: string
}

export default function SolutionsSection({ title = "Soluções Integradas" }: SolutionsSectionProps) {
  const solutions: Solution[] = [
    {
      id: "force",
      title: "ACELERAÇÃO E PERFORMANCE",
      description: "Análise de mercado e desenvolvimento de estratégias",
      image: "/image/home/solucoes/fundo-marketing1.png",
      detailText:
        "",
    },
    {
      id: "labs",
      title: "CONSULTORIA E TREINAMENTO",
      description: "Desenvolvimento profissional e posicionamento",
      image: "/image/home/solucoes/fundo-marketing2.png",
      detailText:
        "",
    },
    {
      id: "events",
      title: "PLANEJAMENTO E GESTÃO DE EVENTOS",
      description: "Estratégias online e gestão de presença digital",
      image: "/image/home/solucoes/fundo-marketing3.png",
      detailText:
        "",
    },
    {
      id: "marketing",
      title: "AGÊNCIA DE COMUNICAÇÃO",
      description: "Relacionamento com mídia e gestão de imagem",
      image: "/image/home/solucoes/fundo-marketing4.png",
      detailText:
        "",
    },
    {
      id: "brand",
      title: "GESTÃO DE MARCAS E PATENTES",
      description: "Criação de conteúdo relevante e engajador",
      image: "/image/home/solucoes/fundo-marketing5.png",
      detailText:
        "",
    },
    {
      id: "edge",
      title: "INTELIGÊNCIA DE MERCADO",
      description: "Análise de tendências e comportamento",
      image: "/image/home/solucoes/fundo-marketing6.png",
      detailText:
        "",
    },
  ]

  const [selectedSolution, setSelectedSolution] = useState<string>(solutions[0].id)
  const currentSolution = solutions.find((s) => s.id === selectedSolution) || solutions[0]

  return (
    <div className="bg-[#1e1e1e] rounded-xl p-5 md:p-20 relative">
      <h2 className="text-4xl font-regular mb-8 text-center">{title}</h2>

      <div className="max-w-4xl mx-auto">
        {/* Main content box */}
        <div className="flex flex-col md:flex-row justify-center rounded-[50px] overflow-hidden">
          {/* Left column */}
          <div className="w-full md:w-1/4 flex flex-col relative">
            {solutions.slice(0, 3).map((solution, index) => (
              <div
                key={solution.id}
                className={cn(
                  "flex-1 p-8 text-center items-center cursor-pointer transition-colors relative z-10",
                  index !== 2 && "mb-2", // Add margin between buttons except the last one
                  selectedSolution === solution.id
                    ? "bg-[#FC4C01] text-white"
                    : "bg-white text-black hover:bg-gray-100",
                )}
                onClick={() => setSelectedSolution(solution.id)}
              >
                <h3 className="text-sm font-semibold">{solution.title}</h3>
              </div>
            ))}
          </div>

          {/* Center TSA logo and image */}
          <div className="w-full md:w-1/2 bg-[#1e1e1e] relative flex items-center justify-center -mx-0.5 -my-0.5 p-0">

            {/* Current solution image as background */}
            <div className="absolute inset-0 w-0 h-0 md:w-auto md:h-auto">
              <Image
                src={currentSolution.image || "/placeholder.svg"}
                alt={currentSolution.title}
                fill
                className=" object-cover"
              />
            </div>

            {/* Content overlay */}
            <div className="relative inset-0 flex flex-col items-center justify-end p-0 h-full w-full">
              <span key={currentSolution.id} className={`${estrella.className} text-[#fc4c01] text-[6rem] md:text-[10rem] md:-m-12`}>{currentSolution.id}</span>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/4 flex flex-col relative">
            {solutions.slice(3).map((solution, index) => (
              <div
                key={solution.id}
                className={cn(
                  "flex-1 p-8 text-center items-center cursor-pointer transition-colors relative z-10",
                  index !== 2 && "mb-2", // Add margin between buttons except the last one
                  selectedSolution === solution.id
                    ? "bg-[#FC4C01] text-white"
                    : "bg-white text-black hover:bg-gray-100",
                )}
                onClick={() => setSelectedSolution(solution.id)}
              >
                <h3 className="text-sm font-semibold">{solution.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-left mt-12 text-sm text-gray-300 max-w-4xl mx-auto">
        <p>
          Cuidamos da proteção e do fortalecimento da sua marca, garantindo registros, patentes e estratégias para assegurar exclusividade e diferenciação no mercado. Atuamos na construção de identidade, gestão de ativos intangíveis e no posicionamento estratégico para que sua empresa tenha reconhecimento e credibilidade.
        </p>
      </div>
    </div>
  )
}
