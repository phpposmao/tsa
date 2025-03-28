"use client"

import type React from "react"

import { useState } from "react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { sendJobApplication } from "@/app/actions"

// Define the form steps
const formSteps = [
  {
    id: "personal",
    title: "Informações Pessoais",
    description: "Conte-nos um pouco sobre você",
    fields: ["name", "email", "phone", "endereco"],
  },
  {
    id: "professional",
    title: "Experiência Profissional",
    description: "Compartilhe sua trajetória profissional",
    fields: ["pcd"],
  },
  {
    id: "skills",
    title: "Habilidades",
    description: "Quais são suas principais competências?",
    fields: ["skills"],
  },
  {
    id: "motivation",
    title: "Motivação",
    description: "Por que você quer fazer parte da TSA?",
    fields: ["porque", "availability"],
  },
  {
    id: "finish",
    title: "Finalizar",
    description: "Revise suas informações e envie sua candidatura",
    fields: [],
  },
]

export default function JoinUsClientPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // Personal
    name: "",
    email: "",
    phone: "",
    endereco: "",

    // Professional
    experience: "",
    currentRole: "",
    education: "",
    linkedin: "",
    portfolio: "",
    pcd: "",

    // Skills
    skills: "",
    languages: "",
    tools: "",
    area: "",
    areaOps: "",

    // Motivation
    motivation: "",
    salary: "",
    availability: "",
    porque: "",

    // Files
    resume: null,
    curriculo: null,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field when user types
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
      if (!formData[field as keyof typeof formData]) {
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
    setSubmitStatus(null)

    try {
      // Create FormData object to send
      const submitFormData = new FormData()

      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          submitFormData.append(key, value as string)
        }
      })

      // Send the form data using the server action
      const result = await sendJobApplication(submitFormData)

      setSubmitStatus({
        success: result.success,
        message: result.message,
      })

      if (result.success) {
        // Reset form if successful
        setFormData({
          name: "",
          email: "",
          phone: "",
          endereco: "",
          experience: "",
          currentRole: "",
          education: "",
          linkedin: "",
          portfolio: "",
          pcd: "",
          skills: "",
          languages: "",
          area: "",
          areaOps: "",
          tools: "",
          motivation: "",
          salary: "",
          availability: "",
          porque: "",
          resume: null,
          curriculo: null,
        })
        setCurrentStep(0)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        success: false,
        message: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-black bg-gradientImgLar bg-repeat bg-cover">
      {/* Hero Section */}
      <section className="max-w-[1180px] mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-regular leading-tight">
            Faça parte do
            <br/>nosso<span className="text-[#fc4c01]"> time</span>
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-[#fc4c01] via-red-500 to-purple-600 mt-4"></div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-[1180px] mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-black to-orange-950 border border-orange-900/50 rounded-3xl p-8">
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
                className="absolute h-1 bg-[#fc4c01] top-0 left-0"
                style={{ width: `${(currentStep / (formSteps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-regular">{formSteps[currentStep].title}</h2>
            <p className="text-gray-400">{formSteps[currentStep].description}</p>
          </div>

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

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 0 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#fc4c01] mb-1">
                      Nome Completo*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } focus:border-[#fc4c01] focus:ring-1 focus:ring-[#fc4c01]`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#fc4c01] mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-orange-500 mb-1">
                      Telefone*
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
                    <label htmlFor="city" className="block text-sm text-orange-500 mb-1">
                      Endereço*
                    </label>
                    <input
                      type="text"
                      id="endereco"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                        errors.endereco ? "border-red-500" : "border-gray-700"
                      } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                    />
                    {errors.endereco && <p className="text-red-500 text-xs mt-1">{errors.endereco}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional Experience */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="curriculo" className="block text-sm text-orange-500 mb-1">
                      Currículo (PDF)*
                    </label>
                    <input
                      type="file"
                      id="curriculo"
                      name="curriculo"
                      accept=".pdf"
                      required
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="currentRole" className="block text-sm text-orange-500 mb-1">
                      Linkedin
                    </label>
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="currentRole" className="block text-sm text-orange-500 mb-1">
                      Link do portfólio
                    </label>
                    <input
                      type="text"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="currentRole" className="block text-sm text-orange-500 mb-1">
                      Você é uma pessoa Pessoa com Deficiência(PCD)?*
                      <br/>
                    </label>
                    <input
                      type="text"
                      id="pcd"
                      name="pcd"
                      required
                      value={formData.pcd}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                        errors.pcd ? "border-red-500" : "border-gray-700"
                      } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                    />
                    {errors.pcd && <p className="text-red-500 text-xs mt-1">{errors.pcd}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Skills */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="skills" className="block text-sm text-orange-500 mb-1">
                    Habilidades e Competências*
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.skills ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                    placeholder="Liste suas habilidades e competencias"
                  />
                  {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="languages" className="block text-sm text-orange-500 mb-1">
                      Idiomas
                    </label>
                    <input
                      type="text"
                      id="languages"
                      name="languages"
                      value={formData.languages}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      placeholder="Ex: Inglês (Avançado), Espanhol (Básico)"
                    />
                  </div>
                  <div>
                    <label htmlFor="tools" className="block text-sm text-orange-500 mb-1">
                      Ferramentas e Softwares
                    </label>
                    <input
                      type="text"
                      id="tools"
                      name="tools"
                      value={formData.tools}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      placeholder="Ex: Photoshop, Excel, WordPress"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Motivation */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="porque" className="block text-sm text-orange-500 mb-1">
                    Conta pra gente, por que a TSA é a sua cara?*
                  </label>
                  <textarea
                    id="porque"
                    name="porque"
                    value={formData.porque}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className={`w-full px-4 py-2 bg-white/10 rounded-lg border ${
                      errors.porque ? "border-red-500" : "border-gray-700"
                    } focus:border-orange-500 focus:ring-1 focus:ring-orange-500`}
                    placeholder="Conte-nos sua motivação para fazer parte do nosso time"
                  />
                  {errors.porque && <p className="text-red-500 text-xs mt-1">{errors.porque}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="availability" className="block text-sm text-orange-500 mb-1">
                      Qual área você mais se indentifica?*
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    >
                      <option value="">Selecione</option>
                      <option value="immediate">Imediata</option>
                      <option value="15days">15 dias</option>
                      <option value="30days">30 dias</option>
                      <option value="negotiable">A negociar</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="salary" className="block text-sm text-orange-500 mb-1">
                      Não encontrou sua área? Então diga pra gente
                    </label>
                    <input
                      type="text"
                      id="salary"
                      name="salary"
                      value={formData.salary}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Finish */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="bg-black/20 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Resumo da Candidatura</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-400">Nome:</p>
                      <p>{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Email:</p>
                      <p>{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Telefone:</p>
                      <p>{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Endereço:</p>
                      <p>{formData.endereco}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" required />
                  <label htmlFor="terms" className="text-sm">
                    Concordo com os{" "}
                    <a href="#" className="text-orange-500 underline">
                      termos de uso
                    </a>{" "}
                    e{" "}
                    <a href="#" className="text-orange-500 underline">
                      política de privacidade
                    </a>
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
                  {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
                </PrimaryButton>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

