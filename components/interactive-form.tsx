"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PrimaryButton } from "@/components/ui/primary-button"
import { ChevronRight, ChevronLeft, Loader2 } from "lucide-react"
import { sendFormResults } from "@/app/actions"
import Link from "next/link"

interface Option {
  value: string
  label: string
  score?: number
}

interface Question {
  id: string
  question: string
  type: string
  placeholder?: string
  options?: Option[]
  required: boolean
}

interface Result {
  range: number[]
  title: string
  description: string
  recommendations: string[]
}

interface InteractiveFormProps {
  formType: string
  commonQuestions: Question[]
  specificQuestions: Question[]
  results: Result[]
}

export default function InteractiveForm({
  formType,
  commonQuestions,
  specificQuestions,
  results,
}: InteractiveFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [score, setScore] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formCompleted, setFormCompleted] = useState(false)
  const [formResult, setFormResult] = useState<Result | null>(null)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  // Combine common and specific questions
  const allQuestions = [...commonQuestions, ...specificQuestions]
  const totalSteps = allQuestions.length

  // Format the current question based on previous answers
  const formatQuestion = (question: string) => {
    // Replace placeholders like {name} with actual answers
    return question.replace(/\{(\w+)\}/g, (match, key) => {
      return answers[key] || match
    })
  }

  const currentQuestion = allQuestions[currentStep]

  // Handle input change
  const handleInputChange = (value: string | string[]) => {
    const questionId = currentQuestion.id

    // For scoring questions (specific questions)
    if (currentStep >= commonQuestions.length) {
      const specificQuestion = specificQuestions[currentStep - commonQuestions.length]

      if (specificQuestion.type === "radio" && typeof value === "string") {
        const selectedOption = specificQuestion.options?.find((option) => option.value === value)
        if (selectedOption?.score !== undefined) {
          // Update score
          setScore((prevScore) => {
            // Remove previous score for this question if it exists
            const previousAnswer = answers[questionId]
            let previousScore = 0

            if (previousAnswer) {
              const prevOption = specificQuestion.options?.find((option) => option.value === previousAnswer)
              previousScore = prevOption?.score || 0
            }
            
            //@ts-ignore
            return prevScore - previousScore + selectedOption.score
          })
        }
      }
    }

    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  // Check if current question is answered
  const isCurrentQuestionAnswered = () => {
    const answer = answers[currentQuestion.id]

    if (!currentQuestion.required) {
      return true
    }

    if (answer === undefined || answer === "") {
      return false
    }

    if (Array.isArray(answer) && answer.length === 0) {
      return false
    }

    return true
  }

  // Handle next step
  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    } else {
      completeForm()
    }
  }

  // Handle previous step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  // Complete form and calculate result
  const completeForm = async () => {
    setIsSubmitting(true)

    // Determine result based on score
    const result = results.find((r) => score >= r.range[0] && score <= r.range[1]) || results[0]
    setFormResult(result)

    try {
      // Send results via email
      const response = await sendFormResults(answers, formType, score, result)

      setSubmitStatus({
        success: response.success,
        message: response.message,
      })

      if (response.success) {
        setFormCompleted(true)
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

  // Render form input based on question type
  const renderInput = () => {
    const question = currentQuestion

    switch (question.type) {
      case "text":
      case "email":
      case "tel":
        return (
          <input
            type={question.type}
            id={question.id}
            value={answers[question.id] || ""}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={question.placeholder}
            className="w-full px-4 py-3 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            required={question.required}
          />
        )

      case "textarea":
        return (
          <textarea
            id={question.id}
            value={answers[question.id] || ""}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={question.placeholder}
            rows={4}
            className="w-full px-4 py-3 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            required={question.required}
          />
        )

      case "radio":
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={answers[question.id] === option.value}
                  onChange={() => handleInputChange(option.value)}
                  className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-200">{option.label}</span>
              </label>
            ))}
          </div>
        )

      case "checkbox":
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={Array.isArray(answers[question.id]) && answers[question.id].includes(option.value)}
                  onChange={(e) => {
                    const currentValues = Array.isArray(answers[question.id]) ? [...answers[question.id]] : []
                    if (e.target.checked) {
                      handleInputChange([...currentValues, option.value])
                    } else {
                      handleInputChange(currentValues.filter((v) => v !== option.value))
                    }
                  }}
                  className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-200">{option.label}</span>
              </label>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  // Initialize checkbox answers as arrays
  useEffect(() => {
    allQuestions.forEach((question) => {
      if (question.type === "checkbox" && !answers[question.id]) {
        setAnswers((prev) => ({
          ...prev,
          [question.id]: [],
        }))
      }
    })
  }, [])

  // Render result page
  if (formCompleted && formResult) {
    return (
      <div className="bg-[#1A0F0F] rounded-3xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">{formResult.title}</h2>
          <p className="text-gray-300 text-lg mb-6">{formResult.description}</p>

          <div className="inline-flex items-center justify-center bg-orange-500/20 px-4 py-2 rounded-full mb-8">
            <span className="text-orange-500 font-bold">Pontuação: {score} pontos</span>
          </div>
        </div>

        <div className="bg-black/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-bold mb-4">Recomendações para sua empresa:</h3>
          <ul className="space-y-3">
            {formResult.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-gray-300">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg mb-8">
          <p className="text-green-400">
            Agende uma análise profissional aprofundada agora mesmo clicando no botão abaixo!
          </p>
        </div>

        <div className="flex justify-center">
          <PrimaryButton>
            <Link href="https://wa.me/5519982162892" className="uppercase">Agende uma análise</Link>
            
          </PrimaryButton>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#1A0F0F] rounded-3xl p-8">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">
            Pergunta {currentStep + 1} de {totalSteps}
          </span>
          <span className="text-sm text-gray-400">{Math.round(((currentStep + 1) / totalSteps) * 100)}% concluído</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-orange-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Status message */}
      {submitStatus && (
        <div
          className={`p-4 mb-6 rounded-lg ${
            submitStatus.success ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">{formatQuestion(currentQuestion.question)}</h2>
        {renderInput()}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        {currentStep > 0 ? (
          <Button type="button" variant="outline" onClick={prevStep} className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Anterior
          </Button>
        ) : (
          <div></div>
        )}

        <PrimaryButton
          type="button"
          onClick={nextStep}
          disabled={!isCurrentQuestionAnswered() || isSubmitting}
          className="flex items-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : currentStep < totalSteps - 1 ? (
            <>
              Próxima
              <ChevronRight className="ml-2 h-4 w-4" />
            </>
          ) : (
            "Finalizar"
          )}
        </PrimaryButton>
      </div>
    </div>
  )
}
