import Image from "next/image"

interface PartnersSliderProps {
  speed?: number // pixels per second
}

export default function PartnersSlider({ speed = 30 }: PartnersSliderProps) {
  // Partner logos
  const partners = [
    "/image/home/logos/logo-maislaser.png",
    "/image/home/logos/logo-grupokalaes.png",
    "/image/home/logos/logo-instanahick.png",
    "/image/home/logos/logo-os.png",
    "/image/home/logos/logo-3aze.png",
    "/image/home/logos/logo-a5solar.png",
    "/image/home/logos/logo-alemdoolhar.png",
    "/image/home/logos/logo-bananasgodoi.png",
    "/image/home/logos/logo-drshape.png",
    "/image/home/logos/logo-casulo.png",
    "/image/home/logos/logo-central.png",
    "/image/home/logos/logo-fadesc.png",
    "/image/home/logos/logo-faiep.png",
    "/image/home/logos/logo-farmelhor.png",
    "/image/home/logos/logo-gbiosafe.png",
    "/image/home/logos/logo-biosafe.png",
    "/image/home/logos/logo-incompany.png",
    "/image/home/logos/logo-incorp.png",
    "/image/home/logos/logo-infac.png",
    "/image/home/logos/logo-jame.png",
    "/image/home/logos/logo-lumus.png",
    "/image/home/logos/logo-mancec.png",
    "/image/home/logos/logo-nani.png",
    "/image/home/logos/logo-pdv.png",
    "/image/home/logos/logo-uniasselvi.png",
    "/image/home/logos/logo-spat.png",
    "/image/home/logos/logo-sportkid.png",
    "/image/home/logos/logo-sali.png",
    "/image/home/logos/logo-tamoio.png",
  ]

  return (
    <div className="overflow-hidden w-full py-8 bg-black">
      <div className="relative flex">
        <div className="animate-marquee flex items-center gap-16 px-8">
          {partners.map((partner, index) => (
            <div key={`partner-1-${index}`} className="flex-shrink-0">
              <Image
                src={partner || "/placeholder.svg"}
                alt={`Partner ${index + 1}`}
                width={1750}
                height={300}
                className="h-40 w-auto object-contain opacity-70 grayscale"
              />
            </div>
          ))}
          {/* Duplicate the partners to ensure a seamless loop */}
          {partners.map((partner, index) => (
            <div key={`partner-2-${index}`} className="flex-shrink-0">
              <Image
                src={partner || "/placeholder.svg"}
                alt={`Partner ${index + 1}`}
                width={160}
                height={80}
                className="h-40 w-auto object-contain opacity-70 grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
