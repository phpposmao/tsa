interface StatsCardProps {
  title: string
  value: string
  description: string
}

export default function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <div className="bg-[#120807] rounded-xl p-10 border border-orange-900/30 shadow-[0_0_25px_rgba(249,115,22,0.2)] relative overflow-hidden">
      <div className="flex flex-col items-center text-center z-10">
        <h3 className="text-white font-medium text-2xl">{title}</h3>
        <p className="text-6xl font-black text-white my-1">{value}</p>
        <p className="text-white font-medium text-lg">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-orange-600 via-red-500 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-purple-700"></div>
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-orange-600 via-red-500 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-red-500 to-purple-y00"></div>
    </div>
  )
}

