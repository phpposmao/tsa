"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

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
      id: "strategy",
      title: "ACELERAÇÃO E PERFORMANCE",
      description: "Análise de mercado e desenvolvimento de estratégias",
      image: "/image/home/solucoes/fundo-marketing1.png",
      detailText:
        "",
    },
    {
      id: "career",
      title: "CONSULTORIA E TREINAMENTO",
      description: "Desenvolvimento profissional e posicionamento",
      image: "/image/home/solucoes/fundo-marketing2.png",
      detailText:
        "",
    },
    {
      id: "digital",
      title: "PLANEJAMENTO E GESTÃO DE EVENTOS",
      description: "Estratégias online e gestão de presença digital",
      image: "/image/home/solucoes/fundo-marketing3.png",
      detailText:
        "",
    },
    {
      id: "press",
      title: "AGÊNCIA DE COMUNICAÇÃO",
      description: "Relacionamento com mídia e gestão de imagem",
      image: "/image/home/solucoes/fundo-marketing4.png",
      detailText:
        "",
    },
    {
      id: "content",
      title: "GESTÃO DE MARCAS E PATENTES",
      description: "Criação de conteúdo relevante e engajador",
      image: "/image/home/solucoes/fundo-marketing5.png",
      detailText:
        "",
    },
    {
      id: "market",
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
    <div className="bg-[#1e1e1e] rounded-xl p-20 relative">
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
                  "flex-1 p-8 cursor-pointer transition-colors relative z-10",
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
          <div className="w-full md:w-1/2 bg-[#1e1e1e] relative flex items-center justify-center mx-0">

            {/* Current solution image as background */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={currentSolution.image || "/placeholder.svg"}
                alt={currentSolution.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content overlay */}
            <div className="relative z-20 flex flex-col items-center justify-center p-4 h-full w-full">
            </div>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/4 flex flex-col relative">
            {solutions.slice(3).map((solution, index) => (
              <div
                key={solution.id}
                className={cn(
                  "flex-1 p-8 cursor-pointer transition-colors relative z-10",
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

            {/* Connecting lines */}
            <div className="absolute left-0 top-[calc(16.67%)] h-[4px] w-4 bg-orange-500"></div>
            <div className="absolute left-0 top-[50%] h-[4px] w-4 bg-orange-500"></div>
            <div className="absolute left-0 top-[calc(83.33%)] h-[4px] w-4 bg-orange-500"></div>
          </div>
        </div>
      </div>

      <div className="text-left mt-12 text-sm text-gray-300 max-w-4xl mx-auto">
        <p>
          Combinamos estratégias e soluções que impulsionam os seus negócios. Garantimos resultados concretos e
          duradouros para sua marca ou carreira. Nossa abordagem integrada permite que cada ação seja parte de uma
          estratégia maior, criando consistência e maximizando o impacto em todos os pontos de contato com seu público.
        </p>
      </div>
    </div>
  )
}
