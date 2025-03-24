"use client"

import { useState, useEffect, useRef } from "react"
import { X, Maximize2, Minimize2, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Define the structure for our video and question flow
interface VideoNode {
  id: string
  title: string
  src: string
  questions: Question[]
}

interface Question {
  id: string
  text: string
  nextVideoId: string
}

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentVideoId, setCurrentVideoId] = useState("intro")
  const videoRef = useRef<HTMLVideoElement>(null)

  // Define our video and question flow
  const videoNodes: VideoNode[] = [
    {
      id: "intro",
      title: "Como podemos ajudar sua marca?",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      questions: [
        {
          id: "q1",
          text: "Quero aumentar minha presença digital",
          nextVideoId: "digital",
        },
        {
          id: "q2",
          text: "Preciso de uma estratégia de marketing",
          nextVideoId: "strategy",
        },
        {
          id: "q3",
          text: "Busco gestão de marca e carreira",
          nextVideoId: "brand",
        },
      ],
    },
    {
      id: "digital",
      title: "Presença Digital",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      questions: [
        {
          id: "q4",
          text: "Redes sociais e conteúdo",
          nextVideoId: "social",
        },
        {
          id: "q5",
          text: "SEO e tráfego orgânico",
          nextVideoId: "seo",
        },
        {
          id: "q6",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
    {
      id: "strategy",
      title: "Estratégia de Marketing",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      questions: [
        {
          id: "q7",
          text: "Campanhas publicitárias",
          nextVideoId: "campaigns",
        },
        {
          id: "q8",
          text: "Planejamento estratégico",
          nextVideoId: "planning",
        },
        {
          id: "q9",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
    {
      id: "brand",
      title: "Gestão de Marca e Carreira",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      questions: [
        {
          id: "q10",
          text: "Posicionamento de marca",
          nextVideoId: "positioning",
        },
        {
          id: "q11",
          text: "Gestão de imagem",
          nextVideoId: "image",
        },
        {
          id: "q12",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
    // Additional videos for deeper levels
    {
      id: "social",
      title: "Redes Sociais e Conteúdo",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      questions: [
        {
          id: "q13",
          text: "Falar com um especialista",
          nextVideoId: "contact",
        },
        {
          id: "q14",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
    {
      id: "seo",
      title: "SEO e Tráfego Orgânico",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      questions: [
        {
          id: "q15",
          text: "Falar com um especialista",
          nextVideoId: "contact",
        },
        {
          id: "q16",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
    {
      id: "campaigns",
      title: "Campanhas Publicitárias",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      questions: [
        {
          id: "q17",
          text: "Falar com um especialista",
          nextVideoId: "contact",
        },
        {
          id: "q18",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
    {
      id: "planning",
      title: "Planejamento Estratégico",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      questions: [
        {
          id: "q19",
          text: "Falar com um especialista",
          nextVideoId: "contact",
        },
        {
          id: "q20",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
    {
      id: "positioning",
      title: "Posicionamento de Marca",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      questions: [
        {
          id: "q21",
          text: "Falar com um especialista",
          nextVideoId: "contact",
        },
        {
          id: "q22",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
    {
      id: "image",
      title: "Gestão de Imagem",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      questions: [
        {
          id: "q23",
          text: "Falar com um especialista",
          nextVideoId: "contact",
        },
        {
          id: "q24",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
    {
      id: "contact",
      title: "Fale com um Especialista",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      questions: [
        {
          id: "q25",
          text: "Preencher formulário de contato",
          nextVideoId: "form",
        },
        {
          id: "q26",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
    {
      id: "form",
      title: "Formulário de Contato",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      questions: [
        {
          id: "q27",
          text: "Voltar ao início",
          nextVideoId: "intro",
        },
      ],
    },
  ]

  // Get current video node
  const currentVideo = videoNodes.find((node) => node.id === currentVideoId) || videoNodes[0]

  // Open popup after a short delay when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Change video when currentVideoId changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error)
      })
    }
  }, [currentVideoId])

  // Effect to handle volume when expanding/collapsing
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isExpanded || isMuted
    }
  }, [isExpanded, isMuted])

  const handleQuestionClick = (nextVideoId: string) => {
    setCurrentVideoId(nextVideoId)
  }

  const closePopup = () => {
    setIsOpen(false)
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-lg overflow-hidden shadow-2xl bg-black border border-gray-800 transition-all duration-300 ease-in-out",
        isExpanded ? "w-64 max-h-[50vh]" : "w-48 max-h-[40vh]",
      )}
    >
      <div className="relative">
        {/* Video */}
        <div className="relative aspect-[9/16] w-full">
          <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src={currentVideo.src} type="video/mp4" />
            Seu navegador não suporta a tag de video
          </video>

          {/* Overlay with title and questions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 flex flex-col justify-between p-2 sm:p-3">
            <div className="flex justify-between items-start">
              <div className="flex space-x-1">
                {/* Sound button */}
                <button
                  onClick={toggleMute}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                </button>
                {/* Expand/Collapse button */}
                <button
                  onClick={toggleExpand}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                  aria-label={isExpanded ? "Collapse popup" : "Expand popup"}
                >
                  {isExpanded ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />}
                </button>
                {/* Close button */}
                <button
                  onClick={closePopup}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                  aria-label="Close popup"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            </div>

            <h3
              className={cn(
                "font-bold mt-2 text-white mb-1 max-w-[70%] line-clamp-2",
                isExpanded ? "text-base" : "text-xs",
              )}
            >
              {currentVideo.title}
            </h3>

            {/* Question buttons */}
            <div className="space-y-1 mt-auto">
              {currentVideo.questions.map((question) => (
                <Button
                  key={question.id}
                  size="sm"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left bg-black/60 hover:bg-black/80 border-orange-500/50 text-white py-1",
                    isExpanded ? "text-xs" : "text-[10px]",
                  )}
                  onClick={() => handleQuestionClick(question.nextVideoId)}
                >
                  <span className="line-clamp-2">{question.text}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

