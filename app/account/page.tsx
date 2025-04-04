import Link from "next/link"
import { PrimaryButton } from "@/components/ui/primary-button"
import { MapPin, Users, BarChart3, FileText, Settings } from "lucide-react"
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function AdminPage() {

    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    const tools = [
        {
        id: "maps-scraper",
        title: "Google Maps Scraper",
        description: "Extraia dados de empresas do Google Maps",
        icon: <MapPin className="h-8 w-8 text-orange-500" />,
        link: "/tools/maps-scrapper",
        active: true,
        },
    ]

    return (
        <main className="min-h-screen bg-gradient-to-b from-black to-[#050520]">
        <div className="max-w-[1180px] mx-auto px-4 pt-32 pb-16">
            <div className="bg-[#1A0F0F] rounded-3xl p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-regular">Painel Administrativo</h1>
                <form action="/auth/signout" method="post">
                    <PrimaryButton className="p-5 text-center text-2xl" type="submit">
                        Sair
                    </PrimaryButton>
                </form>
            </div>

            <div className="bg-black/20 p-6 rounded-xl mb-8">
                <h2 className="text-xl font-medium mb-4">Bem-vindo</h2>
                <p className="text-gray-300">
                Você está logado como <span className="text-orange-500">{data.user.email}</span>
                </p>
            </div>

            <h3 className="text-xl font-medium mb-6">Ferramentas Disponíveis</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                <div
                    key={tool.id}
                    className={`bg-black/30 p-6 rounded-xl border-2 ${
                    tool.active ? "border-orange-500/30" : "border-transparent"
                    } hover:border-orange-500/50 transition-all duration-300`}
                >
                    <div className="flex items-center mb-4">
                    {tool.icon}
                    <h3 className="text-lg font-medium ml-3">{tool.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{tool.description}</p>
                    {tool.active ? (
                    <Link href={tool.link} className="text-orange-500 hover:text-orange-400 flex items-center">
                        Acessar ferramenta →
                    </Link>
                    ) : (
                    <span className="text-gray-500">Em breve</span>
                    )}
                </div>
                ))}
            </div>
            </div>
        </div>
        </main>
    )
}

