import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PrimaryButton } from "@/components/ui/primary-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Formulários Interativos | TSA",
  description: "Responda nossos formulários interativos e descubra insights valiosos para o seu negócio.",
}

export default function FormulariosPage() {
  return (
    <main className="min-h-screen bg-gradientImgLar bg-cover">
      {/* Hero Section */}
      <section className="max-w-[1180px] mx-auto px-4 pt-28 pb-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Formulários
            <div className="text-[#fc4c01]">Interativos</div>
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-[#fc4c01] via-red-500 to-purple-600 mt-4"></div>
          <p className="mt-6 text-gray-300 text-lg">
            Responda nossas perguntas e descubra insights valiosos para o crescimento do seu negócio.
          </p>
        </div>
      </section>

      {/* Forms Section */}
      <section className="max-w-[1180px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Marketing Form Card */}
          <div className="flex flex-col justify-between bg-[#1A0F0F] rounded-3xl p-8 border-2 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">Avaliação de Marketing Digital</h2>
            <p className="text-gray-300 mb-6">
              Descubra como está o posicionamento digital da sua empresa e receba recomendações personalizadas para
              melhorar sua presença online.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <span className="text-[#fc4c01] mr-2">✓</span>
                <span className="text-gray-300">Análise de presença digital</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#fc4c01] mr-2">✓</span>
                <span className="text-gray-300">Avaliação de estratégia de conteúdo</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#fc4c01] mr-2">✓</span>
                <span className="text-gray-300">Diagnóstico de tráfego pago</span>
              </li>
            </ul>
            <Link href="/formularios/trafego-pago2">
              <PrimaryButton className="w-full">Iniciar Avaliação</PrimaryButton>
            </Link>
          </div>

          {/* Branding Form Card */}
          <div className="flex flex-col justify-between bg-[#1A0F0F] rounded-3xl p-8 border-2 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">Avaliação de Google Meu Negócio</h2>
            <p className="text-gray-300 mb-6">
              Avalie a força da sua marca no mercado e descubra oportunidades para fortalecer seu posicionamento.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-300">Análise de identidade da marca</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-300">Avaliação de posicionamento</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-300">Diagnóstico de percepção de marca</span>
              </li>
            </ul>
            <Link href="/formularios/trafego-pago1">
              <PrimaryButton className="w-full bg-blue-600 hover:bg-blue-700 text-white">Iniciar Avaliação</PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-[1180px] mx-auto px-4 pt-10 pb-20">
        <div className="bg-black/30 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Por que responder nossos formulários?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-[#fc4c01]">Diagnóstico Personalizado</h3>
              <p className="text-gray-300">
                Receba uma análise detalhada baseada nas suas respostas, com insights específicos para o seu negócio.
              </p>
            </div>
            <div className="bg-black/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-[#fc4c01]">Recomendações Práticas</h3>
              <p className="text-gray-300">
                Obtenha sugestões de ações concretas que você pode implementar imediatamente para melhorar seus
                resultados.
              </p>
            </div>
            <div className="bg-black/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-[#fc4c01]">Consultoria Gratuita</h3>
              <p className="text-gray-300">
                Ao final do formulário, você pode agendar uma consultoria gratuita com nossos especialistas para
                aprofundar os resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
