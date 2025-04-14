"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories, portfolioProjects } from "@/lib/portfolio-data"
import { useSearchParams, useRouter } from "next/navigation"

export default function CasesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const caseId = searchParams.get("id")

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGalleryView, setIsGalleryView] = useState(!caseId)

  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? portfolioProjects.filter((project) => project.category === selectedCategory)
    : portfolioProjects

  // Find current project if in detail view
  const currentProject = caseId
    ? portfolioProjects.find((p) => p.id === caseId)
    : filteredProjects[currentIndex] || null

  // Update URL when changing projects in detail view
  useEffect(() => {
    if (!isGalleryView && currentProject) {
      router.push(`/cases?id=${currentProject.id}`, { scroll: false })
    }
  }, [currentProject, isGalleryView, router])

  // Handle category change
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
    setCurrentIndex(0)
  }

  // Navigate to next project
  const nextProject = () => {
    if (filteredProjects.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  // Navigate to previous project
  const prevProject = () => {
    if (filteredProjects.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  // Handle clicking on a project in gallery view
  const handleProjectClick = (projectId: string) => {
    const projectIndex = filteredProjects.findIndex((p) => p.id === projectId)
    if (projectIndex !== -1) {
      setCurrentIndex(projectIndex)
      setIsGalleryView(false)
      router.push(`/cases?id=${projectId}`, { scroll: false })
    }
  }

  // Return to gallery view
  const backToGallery = () => {
    setIsGalleryView(true)
    router.push("/cases", { scroll: false })
  }

  return (
    <Suspense>
      <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="mx-auto pt-32 pb-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-regular mb-4">
            Nossos
            <br />
            <span className="text-[#fc4c01]">cases</span>
          </h1>
          <div className="flex justify-end items-center mb-8">
            <p className="text-[#fc4c01] mr-4 font-thin text:sm md:text-xl">Cases de sucesso</p>
            <div className="h-1 w-6/12 bg-gradient-to-r from-[#fc4c01] via-red-500 to-purple-600"></div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Vem conferir alguns dos nossos cases de alto impacto! Aqui, cada desafio é transformado em uma oportunidade
            de crescimento, refletindo{" "}
            <span className="text-[#fc4c01]">nosso compromisso com soluções e resultados.</span>
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1180px] mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            className="rounded-full text-xs"
            onClick={() => handleCategoryChange(null)}
          >
            Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full text-xs"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery View */}
      {isGalleryView ? (
        <section className="max-w-[1180px] mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="cursor-pointer group" onClick={() => handleProjectClick(project.id)}>
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.client}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </section>
      ) : (
        /* Detail View */
        <section className="max-w-[1180px] mx-auto px-4 pb-16 relative">
          {/* Back button */}
          <button
            onClick={backToGallery}
            className="mb-4 flex items-center text-orange-500 hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar para galeria
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 rounded-full p-3 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 rounded-full p-3 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {currentProject ? (
            /* Project Content */
            <div className="bg-white rounded-3xl overflow-hidden">
              {/* Project Header Image */}
              <div className="w-full h-96 relative">
                <Image
                  src={currentProject.headerImage || currentProject.mainImage}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                {/* Project Title and Info */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-black mb-2">{currentProject.title}</h2>
                  <div className="text-gray-600">
                    <span className="font-medium">Cliente: {currentProject.client}</span>
                    <span className="mx-4">Ano: {currentProject.year}</span>
                  </div>
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{currentProject.description}</p>
                </div>

                {/* Project Images */}
                <div className="space-y-8">
                  {currentProject.contentSections?.map((section, idx) => (
                    <div key={idx} className="w-full">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={`${currentProject.title} - Section ${idx + 1}`}
                        width={1000}
                        height={600}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  ))}

                  {!currentProject.contentSections && (
                    <>
                      {/* Fallback content if no specific sections */}
                      <div className="flex justify-center">
                        <Image
                          src="/placeholder.svg?height=300&width=800&text=Project+Materials"
                          alt="Project materials"
                          width={800}
                          height={300}
                          className="rounded-lg"
                        />
                      </div>

                      <div className="flex justify-center items-end gap-4">
                        <Image
                          src="/placeholder.svg?height=200&width=200&text=Mobile+App"
                          alt="Mobile app"
                          width={200}
                          height={400}
                          className="rounded-lg"
                        />
                        <Image
                          src="/placeholder.svg?height=250&width=200&text=Mobile+App"
                          alt="Mobile app"
                          width={200}
                          height={400}
                          className="rounded-lg"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400">Projeto não encontrado.</p>
            </div>
          )}
        </section>
      )}
    </main>
    </Suspense>
  )
}
