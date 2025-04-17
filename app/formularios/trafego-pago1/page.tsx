"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import InteractiveForm from "@/components/interactive-form"
import { commonQuestions, brandingQuestions, brandingResults } from "@/lib/form-questions"

export default function BrandingFormPage() {
  const router = useRouter()

  // Add metadata
  useEffect(() => {
    document.title = "Avaliação de GMN | TSA"
  }, [])

  return (
    <main className="min-h-screen bg-gradientImgLar bg-cover">
      {/* Hero Section */}
      <section className="max-w-[1180px] mx-auto px-4 pt-28 pb-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Avaliação de
            <div className="text-blue-500">Google Meu Negócio</div>
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 mt-4"></div>
          <p className="mt-6 text-white text-lg">
            Responda às perguntas abaixo para receber uma avaliação personalizada da maturidade da sua marca e
            recomendações para fortalecer seu posicionamento.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-[1180px] mx-auto px-4 pb-16">
        <InteractiveForm
          formType="Google Meu Negócio"
          commonQuestions={commonQuestions}
          specificQuestions={brandingQuestions}
          results={brandingResults}
        />
      </section>
    </main>
  )
}
