import Image from "next/image"

interface PartnersSliderProps {
  speed?: number // pixels per second
}

export default function PartnersSlider({ speed = 30 }: PartnersSliderProps) {
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

  return (
    <div className="overflow-hidden w-full bg-black py-8">
      <div className="relative flex">
        <div className="animate-marquee flex items-center gap-16 px-8">
          {partners.map((partner, index) => (
            <div key={`partner-1-${index}`} className="flex-shrink-0">
              <Image
                src={partner || "/placeholder.svg"}
                alt={`Partner ${index + 1}`}
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-70 grayscale"
              />
            </div>
          ))}
          {/* Duplicate the partners to ensure a seamless loop */}
          {partners.map((partner, index) => (
            <div key={`partner-2-${index}`} className="flex-shrink-0">
              <Image
                src={partner || "/placeholder.svg"}
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
