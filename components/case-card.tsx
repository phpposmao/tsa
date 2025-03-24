import Image from "next/image"

interface CaseCardProps {
  title: string
  subtitle: string
  color: string
  tall?: boolean
}

export default function CaseCard({ title, subtitle, color, tall = false }: CaseCardProps) {
  return (
    <div className={`${color} rounded-xl overflow-hidden relative h-full`}>
      <div className={`${tall ? "aspect-[9/16]" : "aspect-square"} relative`}>
        <Image
          src={`/placeholder.svg?height=${tall ? 600 : 300}&width=${tall ? 350 : 300}`}
          alt={title}
          width={tall ? 350 : 300}
          height={tall ? 600 : 300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
          <p className="text-sm opacity-80">{subtitle}</p>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
    </div>
  )
}

