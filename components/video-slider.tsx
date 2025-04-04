"use client"

import { useState, useRef, useEffect } from "react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoItem {
  id: number
  title: string
  thumbnail: string
  videoSrc: string
}

export default function VideoSlider() {
  const videos: VideoItem[] = [
    {
      id: 1,
      title: "Maislaser Canoas",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video2",
      videoSrc: "/video/DEPOIMENTO_TSA-ML-CANOAS.mp4",
    },
    {
      id: 2,
      title: "Maislaser Tristeza",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video3",
      videoSrc: "/video/DEPOIMENTO_TSA-ML-TRISTEZA.mp4",
    },
    {
      id: 3,
      title: "Odontospecial Lucas do Rio Verde",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video3",
      videoSrc: "/video/DEPOIMENTO_TSA-ODONTO-LRV.mp4",
    },
  ]

  const [currentVideo, setCurrentVideo] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setIsPlaying(false)
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [currentVideo])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Video playback failed:", error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative">
      <div className="border-2 border-blue-600 rounded-xl p-2 aspect-video relative flex items-center justify-center overflow-hidden">
        {/* Video element */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          onClick={togglePlayPause}
        >
          <source src={videos[currentVideo].videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play button overlay - only shown when video is not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Button
              className="rounded-full bg-blue-600 hover:bg-blue-700 h-16 w-16 flex items-center justify-center z-10"
              onClick={togglePlayPause}
            >
              <Play className="h-8 w-8" />
            </Button>
          </div>
        )}
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

