"use client"

import { useState } from "react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoItem {
  id: number
  title: string
  thumbnail: string
}

export default function VideoSlider() {
  const videos: VideoItem[] = [
    { id: 1, title: "Depoimento Cliente A", thumbnail: "/placeholder.svg?height=400&width=600&text=Video1" },
    { id: 2, title: "Depoimento Cliente B", thumbnail: "/placeholder.svg?height=400&width=600&text=Video2" },
    { id: 3, title: "Depoimento Cliente C", thumbnail: "/placeholder.svg?height=400&width=600&text=Video3" },
  ]

  const [currentVideo, setCurrentVideo] = useState<number>(0)

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
    <div className="relative">
      <div className="border-2 border-blue-600 rounded-xl p-2 aspect-video relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${videos[currentVideo].thumbnail})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 h-16 w-16 flex items-center justify-center z-10">
            <Play className="h-8 w-8" />
          </Button>
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <Button
          onClick={prevVideo}
          size="icon"
          className="rounded-full bg-orange-500 hover:bg-orange-600"
          aria-label="Previous video"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <Button
          onClick={nextVideo}
          size="icon"
          className="rounded-full bg-orange-500 hover:bg-orange-600"
          aria-label="Next video"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">{videos[currentVideo].title}</p>
      </div>
    </div>
  )
}

