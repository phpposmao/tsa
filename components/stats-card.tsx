"use client"

import { useState, useEffect, useRef } from "react"

interface StatsCardProps {
  title: string
  value: string
  description: string
}

export default function StatsCard({ title, value, description }: StatsCardProps) {
  const [count, setCount] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Parse the numeric part and any suffix (like "M" in "100M")
  const parseValue = () => {
    // Extract numeric part and suffix
    const numericMatch = value.match(/^(\d+)([a-zA-Z]*)$/)
    if (numericMatch) {
      const numericValue = Number.parseInt(numericMatch[1], 10)
      const suffix = numericMatch[2] || ""
      return { numericValue, suffix }
    }
    return { numericValue: Number.parseInt(value, 10) || 0, suffix: "" }
  }

  const { numericValue, suffix } = parseValue()

  // Set up intersection observer to detect when card is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          // Once we've seen it, disconnect the observer
          observer.disconnect()
        }
      },
      { threshold: 0.1 }, // Trigger when at least 10% of the card is visible
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  // Start counter animation when card becomes visible
  useEffect(() => {
    if (!isVisible) return

    // Reset count to 0 before starting animation
    setCount(0)

    // Calculate animation duration based on the target value
    // Larger numbers will animate faster per increment
    const duration = 2000 // 2 seconds total animation
    const interval = 20 // Update every 20ms
    const steps = duration / interval
    const increment = Math.max(1, Math.ceil(numericValue / steps))

    const timer = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + increment
        if (nextCount >= numericValue) {
          clearInterval(timer)
          return numericValue
        }
        return nextCount
      })
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible, numericValue])

  return (
    <div
      ref={cardRef}
      className="bg-[#120807] rounded-xl p-8 border border-orange-900/30 shadow-[0_0_15px_rgba(249,115,22,0.2)] relative overflow-hidden"
    >
      <div className="relative z-10">
        <h3 className="text-white text-center font-medium text-2xl">{title}</h3>
        <p className="text-6xl text-center font-black text-white my-1">
          {count}
          {suffix}
        </p>
        <p className="text-xl text-center text-white font-semibold">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-orange-600 via-red-500 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-orange-600"></div>
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-orange-600 via-red-500 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-red-500 to-orange-600"></div>
    </div>
  )
}


