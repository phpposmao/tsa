"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface PartnersSliderProps {
  speed?: number // pixels per second
}

export default function PartnersSlider({ speed = 30 }: PartnersSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  // Partner logos
  const partners = [
    "/image/home/logos/adere-logo.png",
    "/image/home/logos/black-decker-logo.png",
    "/image/home/logos/huehoco-ale-logo.png",
    "/image/home/logos/huehoco-logo.png",
    "/image/home/logos/lafiesta-logo.png",
    "/image/home/logos/oster-logo.png",
    "/image/home/logos/sib-logo.png",
    "/image/home/logos/tecnofeal-logo.png",
    "/image/home/logos/tiotom-logo.png",
    "/image/home/logos/adere-logo.png",
    "/image/home/logos/black-decker-logo.png",
    "/image/home/logos/huehoco-ale-logo.png",
    "/image/home/logos/huehoco-logo.png",
    "/image/home/logos/lafiesta-logo.png",
    "/image/home/logos/oster-logo.png",
    "/image/home/logos/sib-logo.png",
    "/image/home/logos/tecnofeal-logo.png",
    "/image/home/logos/tiotom-logo.png",
  ]

  useEffect(() => {
    if (!sliderRef.current || !innerRef.current) return

    // Clone the partners to create a seamless loop
    const clonePartners = () => {
      const inner = innerRef.current
      if (!inner) return

      // Calculate how many times we need to clone the content to fill the screen width
      const contentWidth = inner.scrollWidth
      const screenWidth = window.innerWidth
      const clonesNeeded = Math.ceil(screenWidth / contentWidth) + 1

      // Remove existing clones
      const existingClones = inner.querySelectorAll(".partners-clone")
      existingClones.forEach((clone) => clone.remove())

      // Add new clones
      for (let i = 0; i < clonesNeeded; i++) {
        const clone = inner.cloneNode(true) as HTMLDivElement
        clone.classList.add("partners-clone")
        sliderRef.current?.appendChild(clone)
      }
    }

    clonePartners()
    window.addEventListener("resize", clonePartners)

    // Animation
    let animationId: number
    let position = 0

    const animate = () => {
      if (!sliderRef.current) return

      position -= speed / 60 // Adjust speed based on 60fps

      // Reset position when first element is out of view
      const firstElementWidth = innerRef.current?.scrollWidth || 0
      if (Math.abs(position) >= firstElementWidth) {
        position = 0
      }

      sliderRef.current.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", clonePartners)
    }
  }, [speed])

  return (
    <div className="overflow-hidden my-16 w-full bg-black py-8">
      <div className="relative flex" ref={sliderRef}>
        <div className="flex items-center gap-16 px-8" ref={innerRef}>
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={partner}
                alt={`Partner ${index + 1}`}
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-70 grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
