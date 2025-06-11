"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Loader2, CheckCircle } from "lucide-react"
import { sendGoogleBusinessForm } from "@/app/actions"

export default function GoogleBusinessFormPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // Informações básicas
    businessName: "",
    ownerName: "",
    phone: "",
    whatsapp: "",
    address: "",

    // Horários e contato
    weekdayHours: "",
    saturdayHours: "",
    sundayHours: "",
    coverageArea: "",
    paymentMethods: "",
    openingDate: "",
    ownerEmail: "",
    website: "",
    socialMedia: "",
    keywords: "",

    // Detalhes adicionais
    hasMapPoint: "",
    doesDelivery: "",
    hasLogo: "",
    bestProducts: "",

    // Descrição
    description: "",

    // Data do cadastro
    registrationDate: new Date().toLocaleDateString("pt-BR"),
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formCompleted, setFormCompleted] = useState(false)

  // Define as etapas do formulário
  const formSteps = [
    {
      id: "basic",
      title: "Informações Básicas",
      description: "Dados principais do estabelecimento",
      fields: ["businessName", "ownerName", "phone", "whatsapp", "address"],
    },
    {
      id: "hours",
      title: "Horários e Contato",
      description: "Horários de funcionamento e meios de contato",
      fields: [
        "weekdayHours",
        "saturdayHours",
        "sundayHours",
        "coverageArea",
        "paymentMethods",
        "openingDate",
        "ownerEmail",
        "website",
        "socialMedia",
        "keywords",
      ],
    },
    {
      id: "details",
      title: "Detalhes Adicionais",
      description: "Informações complementares sobre o negócio",
      fields: ["hasMapPoint", "doesDelivery", "hasLogo", "bestProducts"],
    },
    {
      id: "description",
      title: "Descrição",
      description: "Descreva brevemente seu negócio",
      fields: ["description"],
    },
    {
      id: "finish",
      title: "Finalizar",
      description: "Revise suas informações e envie o formulário",
      fields: [],
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpa o erro para este campo quando o usuário digita
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateCurrentStep = () => {
    const currentFields = formSteps[currentStep].fields
    const newErrors: Record<string, string> = {}

    currentFields.forEach((field) => {
      if (!formData[field as keyof typeof formData] && field !== "website" && field !== "socialMedia") {
        newErrors[field] = "Este campo é obrigatório"
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < formSteps.length - 1) {
        setCurrentStep(currentStep + 1)
        window.scrollTo(0, 0)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateCurrentStep()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Enviar os dados do formulário
      const result = await sendGoogleBusinessForm(formData)

      if (result.success) {
        setFormCompleted(true)
      } else {
        setErrors({ submit: result.message || "Ocorreu um erro ao enviar o formulário." })
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setErrors({ submit: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente." })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Renderiza o formulário concluído
  if (formCompleted) {
    return (
      <main className="min-h-screen bg-gradientImgLar bg-cover">
        <div className="max-w-[1180px] mx-auto px-4 pt-32 pb-16">
          <div className="bg-[#1A0F0F] rounded-3xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-500/20 rounded-full p-6">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Cadastro Enviado com Sucesso!</h2>
            <p className="text-gray-300 mb-8">
              Obrigado por enviar suas informações para cadastro no Google Meu Negócio. Nossa equipe entrará em contato
              em breve para finalizar o processo.
            </p>
            <Button onClick={() => router.push("/")} className="bg-orange-500 hover:bg-orange-600">
              Voltar para a página inicial
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradientImgLar bg-cover">
      {/* Hero Section */}
      <section className="max-w-[1180px] mx-auto px-4 pt-32 pb-16">
       <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-regular leading-tight">
            Cadastro
            <div className="text-[#fc4c01]">Google Meu Negócio</div>
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 mt-4"></div>
        </div>
      </section>

      {/* Serviços Inclusos */}
      <section className="max-w-[1180px] mx-auto px-4 mb-12">
        <div className="bg-[#1A0F0F] rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">SERVIÇOS INCLUSOS</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-300">
            <li>
              Fazer o perfil e a otimização do estabelecimento no Google contendo: endereço, telefone, horário de
              funcionamento, descrição, categoria correta.
            </li>
            <li>Acompanhamento do perfil por 28 dias. Consultoria após os primeiros 28 dias.</li>
            <li>Colocar as fotos atualizadas do estabelecimento no perfil.</li>
            <li>Fotos 360 com tour virtual*.</li>
            <li>Inserir meios de comunicação fáceis para o cliente entrar em contato.</li>
          </ol>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-[1180px] mx-auto px-4 py-16">
        <div className="bg-[#1A0F0F] rounded-3xl p-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between">
              {formSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index <= currentStep ? "bg-[#fc4c01] text-white" : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="text-xs mt-2 text-center hidden md:block">{step.title}</div>
                </div>
              ))}
            </div>
            <div className="relative mt-4">
              <div className="absolute h-1 bg-gray-700 top-0 left-0 right-0"></div>
              <div
                className="absolute h-1 bg-orange-500 top-0 left-0"
                style={{ width: `${(currentStep / (formSteps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold">{formSteps[currentStep].title}</h2>
            <p className="text-gray-400">{formSteps[currentStep].description}</p>
          </div>

          {/* Error Message */}
          {errors.submit && <div className="p-4 mb-6 rounded-lg bg-red-500/20 text-red-200">{errors.submit}</div>}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Informações Básicas */}
            {currentStep === 0 && (
              <div className="space-y-4">
                <div className="flex justify-end items-center mb-4">
                  <p className="text-gray-400">Data: {formData.registrationDate}</p>
                </div>

                <div>
                <label htmlFor="ownerName" className="block text-sm text-orange-500 mb-1">
                    Nome do estabelecimento
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.businessName ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  />
                  {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
                </div>

                <div>
                  <label htmlFor="ownerName" className="block text-sm text-orange-500 mb-1">
                    Nome do proprietário
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.ownerName ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  />
                  {errors.ownerName && <p className="text-red-500 text-xs mt-1">{errors.ownerName}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-orange-500 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                        errors.phone ? "border-red-500" : "border-gray-700"
                      } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm text-orange-500 mb-1">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                        errors.whatsapp ? "border-red-500" : "border-gray-700"
                      } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                    />
                    {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm text-orange-500 mb-1">
                    Endereço completo
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.address ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Horários e Contato */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="weekdayHours" className="block text-sm text-orange-500 mb-1">
                    Horário de atendimento Seg./Sex.
                  </label>
                  <input
                    type="text"
                    id="weekdayHours"
                    name="weekdayHours"
                    value={formData.weekdayHours}
                    onChange={handleInputChange}
                    placeholder="Ex: 08:00 - 18:00"
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.weekdayHours ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  />
                  {errors.weekdayHours && <p className="text-red-500 text-xs mt-1">{errors.weekdayHours}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="saturdayHours" className="block text-sm text-orange-500 mb-1">
                      Sábado
                    </label>
                    <input
                      type="text"
                      id="saturdayHours"
                      name="saturdayHours"
                      value={formData.saturdayHours}
                      onChange={handleInputChange}
                      placeholder="Ex: 08:00 - 12:00"
                      required
                      className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                        errors.saturdayHours ? "border-red-500" : "border-gray-700"
                      } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                    />
                    {errors.saturdayHours && <p className="text-red-500 text-xs mt-1">{errors.saturdayHours}</p>}
                  </div>

                  <div>
                    <label htmlFor="sundayHours" className="block text-sm text-orange-500 mb-1">
                      Domingo
                    </label>
                    <input
                      type="text"
                      id="sundayHours"
                      name="sundayHours"
                      value={formData.sundayHours}
                      onChange={handleInputChange}
                      placeholder="Ex: Fechado ou 08:00 - 12:00"
                      required
                      className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                        errors.sundayHours ? "border-red-500" : "border-gray-700"
                      } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                    />
                    {errors.sundayHours && <p className="text-red-500 text-xs mt-1">{errors.sundayHours}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="coverageArea" className="block text-sm text-orange-500 mb-1">
                    Área de cobertura
                  </label>
                  <input
                    type="text"
                    id="coverageArea"
                    name="coverageArea"
                    value={formData.coverageArea}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.coverageArea ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  />
                  {errors.coverageArea && <p className="text-red-500 text-xs mt-1">{errors.coverageArea}</p>}
                </div>

                <div>
                  <label htmlFor="paymentMethods" className="block text-sm text-orange-500 mb-1">
                    Formas de pagamento
                  </label>
                  <input
                    type="text"
                    id="paymentMethods"
                    name="paymentMethods"
                    value={formData.paymentMethods}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.paymentMethods ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  />
                  {errors.paymentMethods && <p className="text-red-500 text-xs mt-1">{errors.paymentMethods}</p>}
                </div>

                <div>
                  <label htmlFor="openingDate" className="block text-sm text-orange-500 mb-1">
                    Data de abertura
                  </label>
                  <input
                    type="text"
                    id="openingDate"
                    name="openingDate"
                    value={formData.openingDate}
                    onChange={handleInputChange}
                    placeholder="Ex: 01/01/2020"
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.openingDate ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  />
                  {errors.openingDate && <p className="text-red-500 text-xs mt-1">{errors.openingDate}</p>}
                </div>

                <div>
                  <label htmlFor="ownerEmail" className="block text-sm text-orange-500 mb-1">
                    Email do proprietário
                  </label>
                  <input
                    type="email"
                    id="ownerEmail"
                    name="ownerEmail"
                    value={formData.ownerEmail}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.ownerEmail ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  />
                  {errors.ownerEmail && <p className="text-red-500 text-xs mt-1">{errors.ownerEmail}</p>}
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm text-orange-500 mb-1">
                    Site
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://www.seusite.com.br (opcional)"
                    className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="socialMedia" className="block text-sm text-orange-500 mb-1">
                    Redes sociais
                  </label>
                  <input
                    type="text"
                    id="socialMedia"
                    name="socialMedia"
                    value={formData.socialMedia}
                    onChange={handleInputChange}
                    placeholder="@instagram, facebook.com/pagina (opcional)"
                    className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="keywords" className="block text-sm text-orange-500 mb-1">
                    Palavras-chave
                  </label>
                  <input
                    type="text"
                    id="keywords"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleInputChange}
                    required
                    placeholder="Separe por vírgulas: palavra1, palavra2, palavra3"
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.keywords ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  />
                  {errors.keywords && <p className="text-red-500 text-xs mt-1">{errors.keywords}</p>}
                </div>
              </div>
            )}

            {/* Step 3: Detalhes Adicionais */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-orange-500 mb-1">Ponto no mapa</label>
                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasMapPoint"
                        value="S"
                        checked={formData.hasMapPoint === "S"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                      />
                      <span>Sim</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasMapPoint"
                        value="N"
                        checked={formData.hasMapPoint === "N"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                      />
                      <span>Não</span>
                    </label>
                  </div>
                  {errors.hasMapPoint && <p className="text-red-500 text-xs mt-1">{errors.hasMapPoint}</p>}
                </div>

                <div>
                  <label className="block text-sm text-orange-500 mb-1">Faz entregas</label>
                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="doesDelivery"
                        value="S"
                        checked={formData.doesDelivery === "S"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                      />
                      <span>Sim</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="doesDelivery"
                        value="N"
                        checked={formData.doesDelivery === "N"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                      />
                      <span>Não</span>
                    </label>
                  </div>
                  {errors.doesDelivery && <p className="text-red-500 text-xs mt-1">{errors.doesDelivery}</p>}
                </div>

                <div>
                  <label className="block text-sm text-orange-500 mb-1">Possui logo</label>
                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasLogo"
                        value="S"
                        checked={formData.hasLogo === "S"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                      />
                      <span>Sim</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasLogo"
                        value="N"
                        checked={formData.hasLogo === "N"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                      />
                      <span>Não</span>
                    </label>
                  </div>
                  {errors.hasLogo && <p className="text-red-500 text-xs mt-1">{errors.hasLogo}</p>}
                </div>

                <div>
                  <label htmlFor="bestProducts" className="block text-sm text-orange-500 mb-1">
                    Melhores produtos / Ofertas / Serviços
                  </label>
                  <textarea
                    id="bestProducts"
                    name="bestProducts"
                    value={formData.bestProducts}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.bestProducts ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  ></textarea>
                  {errors.bestProducts && <p className="text-red-500 text-xs mt-1">{errors.bestProducts}</p>}
                </div>
              </div>
            )}

            {/* Step 4: Descrição */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="description" className="block text-sm text-orange-500 mb-1">
                    Breve descrição
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.description ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                  ></textarea>
                  {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                </div>
              </div>
            )}

            {/* Step 5: Finalizar */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="bg-black/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Resumo das Informações</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-400 text-sm">Nome do Estabelecimento:</p>
                      <p className="font-medium">{formData.businessName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Nome do Proprietário:</p>
                      <p className="font-medium">{formData.ownerName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Telefone:</p>
                      <p className="font-medium">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">WhatsApp:</p>
                      <p className="font-medium">{formData.whatsapp}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Endereço:</p>
                      <p className="font-medium">{formData.address}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email:</p>
                      <p className="font-medium">{formData.ownerEmail}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-400 text-sm">Horários de Funcionamento:</p>
                    <p className="font-medium">Segunda a Sexta: {formData.weekdayHours}</p>
                    <p className="font-medium">Sábado: {formData.saturdayHours}</p>
                    <p className="font-medium">Domingo: {formData.sundayHours}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-400 text-sm">Descrição:</p>
                    <p className="font-medium">{formData.description}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" required />
                  <label htmlFor="terms" className="text-sm">
                    Confirmo que todas as informações fornecidas são verdadeiras e autorizo a TSA a realizar o cadastro
                    no Google Meu Negócio.
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 0 ? (
                <Button type="button" variant="outline" onClick={prevStep} className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
              ) : (
                <div></div>
              )}

              {currentStep < formSteps.length - 1 ? (
                <PrimaryButton type="button" onClick={nextStep} className="flex items-center">
                  Próximo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </PrimaryButton>
              ) : (
                <PrimaryButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Cadastro"
                  )}
                </PrimaryButton>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
