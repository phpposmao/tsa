"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { sendContactForm } from "@/app/actions"
import Link from "next/link"

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await sendContactForm(formData)

      setSubmitStatus({
        success: result.success,
        message:
          result.message ||
          (result.success
            ? "Mensagem enviada com sucesso! Entraremos em contato em breve."
            : "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."),
      })

      if (result.success) {
        // Reset form on success
        ;(e.target as HTMLFormElement).reset()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        success: false,
        message: "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="max-w-[1180px] mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-regular leading-tight">
            Preparados para <div className="text-[#fc4c01]">crescer com a gente?</div>
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-[#fc4c01] via-red-500 to-purple-600 mt-4"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-[1180px] mx-auto px-4 py-16">
        <div className="bg-radial from-[#000000] from-50% to-[#fc4c01] rounded-3xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="h-full">
              <div className="h-[400px] rounded-xl overflow-hidden bg-gray-800 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975829726973!2d-46.6497667!3d-23.5647244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUzLjAiUyA0NsKwMzgnNTkuMiJX!5e0!3m2!1spt-BR!2sbr!4v1625161234567!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-1 text-sm text-gray-400">
                <p>falecom@tsacomunica.com.br</p>
                <p>19 3645.5986</p>
                <p>19 98216.2892</p>
              </div>
            </div>

            {/* Form */}
            <div>
              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.success ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm text-[#fc4c01] mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="surname" className="block text-xs md:text-sm text-[#fc4c01] mb-1">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      required
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm text-[#fc4c01] mb-1">
                      Email Profissional
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs md:text-sm text-[#fc4c01] mb-1">
                      Celular/WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs md:text-sm text-[#fc4c01] mb-1">
                    Nome da empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm text-[#fc4c01] mb-1">
                    No que podemos te ajudar?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  ></textarea>
                </div>

                <PrimaryButton type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "ENVIANDO..." : "VAMOS CONVERSAR"}
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-[1180px] mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#fc4c01] mb-8">Estamos empolgados para conhecer vocês!</h2>
          <div className="space-y-6 mb-12">
            <p className="text-gray-300">
              Na TSA, acreditamos em conexões autênticas e em resultados que fazem a diferença. Se você quer que a sua
              marca seja atendida por uma equipe criativa, estratégica e comprometida, fale com a gente! Estamos prontos
              para entender as suas necessidades e transformar suas ideias em campanhas impactantes.
            </p>
            <p className="text-gray-300">
              Agora, se o seu objetivo é fazer parte do nosso time, venha somar com a gente! Buscamos pessoas
              talentosas, criativas e que querem crescer junto. Aqui, valorizamos a colaboração, a inovação e o desejo
              de fazer acontecer.
            </p>
          </div>
          <PrimaryButton>
            <Link href={"/faca-parte"}>
              FAÇA PARTE DO NOSSO TIME
            </Link>
          </PrimaryButton>
        </div>
      </section>
    </main>
  )
}
