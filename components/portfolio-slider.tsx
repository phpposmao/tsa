"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PortfolioProject } from "@/lib/portfolio-data"

interface PortfolioSliderProps {
  projects: PortfolioProject[]
}

export default function PortfolioSlider({ projects }: PortfolioSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400">Nenhum projeto encontrado nesta categoria.</p>
      </div>
    )
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={prevProject}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 rounded-full p-3 transition-colors"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 rounded-full p-3 transition-colors"
        aria-label="Next project"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Project Content */}
      <div className="bg-white rounded-3xl overflow-hidden">
        <div className="p-8">
          {/* Project Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-2">{currentProject.title}</h2>
            <div className="text-gray-600">
              <span className="font-medium">Cliente: {currentProject.client}</span>
              <span className="mx-2">•</span>
              <span>Ano: {currentProject.year}</span>
            </div>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{currentProject.description}</p>
          </div>

          {/* Project Images */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden">
              <Image
                src={currentProject.mainImage || "/placeholder.svg"}
                alt={currentProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Video Section (if available) */}
            {currentProject.video && (
              <div className="aspect-video relative rounded-xl overflow-hidden bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full">
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              </div>
            )}

            {/* Additional Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentProject.images.map((image, index) => (
                <div key={index} className="aspect-[4/3] relative rounded-xl overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${currentProject.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

