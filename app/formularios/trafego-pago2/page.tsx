"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import InteractiveForm from "@/components/interactive-form"
import { commonQuestions, marketingQuestions, marketingResults } from "@/lib/form-questions"

export default function MarketingFormPage() {
  const router = useRouter()

  // Add metadata
  useEffect(() => {
    document.title = "Avaliação de Marketing Digital | TSA"
  }, [])

  return (
    <main className="min-h-screen bg-black bg-gradientImgLar my-auto bg-cover">
      {/* Hero Section */}
      <section className="max-w-[1180px] mx-auto px-4 pt-28 pb-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Avaliação de
            <div className="text-[#fc4c01]">Marketing Digital</div>
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-[#fc4c01] via-red-500 to-purple-600 mt-4"></div>
          <p className="mt-6 text-white text-lg">
            Responda às perguntas abaixo para receber uma avaliação personalizada da maturidade digital da sua empresa e
            recomendações para melhorar seus resultados.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-[1180px] mx-auto px-4 pb-16">
        <InteractiveForm
          formType="Marketing Digital"
          commonQuestions={commonQuestions}
          specificQuestions={marketingQuestions}
          results={marketingResults}
        />
      </section>
    </main>
  )
}
