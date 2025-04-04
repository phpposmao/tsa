"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Button } from "@/components/ui/button"
import { Search, Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MapsScraper() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [csvData, setCsvData] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError("Por favor, insira um termo de busca")
      return
    }

    setError(null)
    setIsSearching(true)

    try {
      // Simulate API call to the backend scraper
      // In a real implementation, you would call your actual backend API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock CSV data
      const mockData = `Nome,Endereço,Telefone,Website,Avaliação
Empresa A,"Rua Exemplo, 123, São Paulo, SP",+55 11 1234-5678,www.empresaa.com.br,4.5
Empresa B,"Av. Teste, 456, São Paulo, SP",+55 11 8765-4321,www.empresab.com.br,4.2
Empresa C,"Praça Central, 789, São Paulo, SP",+55 11 2468-1357,www.empresac.com.br,4.7
Empresa D,"Alameda Santos, 321, São Paulo, SP",+55 11 9876-5432,www.empresad.com.br,3.9
Empresa E,"Rua Augusta, 654, São Paulo, SP",+55 11 1357-2468,www.empresae.com.br,4.1`

      setCsvData(mockData)
    } catch (err) {
      setError("Ocorreu um erro ao buscar os dados. Por favor, tente novamente.")
      console.error("Search error:", err)
    } finally {
      setIsSearching(false)
    }
  }

  const handleDownload = () => {
    if (!csvData) return

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `google-maps-data-${Date.now()}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#050520]">
      <div className="max-w-[1180px] mx-auto px-4 pt-32 pb-16">
        <div className="bg-[#1A0F0F] rounded-3xl p-8">
          <div className="flex items-center mb-8">
            <Link href="/admin" className="mr-4">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Google Maps Scraper</h1>
          </div>

          <div className="bg-black/20 p-6 rounded-xl mb-8">
            <p className="text-gray-300">
              Esta ferramenta permite extrair dados de empresas do Google Maps. Insira um termo de busca para começar.
            </p>
          </div>

          <div className="mb-8">
            <label htmlFor="search" className="block text-sm text-orange-500 mb-2">
              Termo de Busca
            </label>
            <div className="flex gap-4">
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ex: Restaurantes em São Paulo"
                className="flex-1 px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
              <PrimaryButton onClick={handleSearch} disabled={isSearching} className="flex items-center">
                {isSearching ? (
                  "Buscando..."
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Buscar
                  </>
                )}
              </PrimaryButton>
            </div>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm text-orange-500">Resultados</label>
              {csvData && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  className="flex items-center text-green-500 border-green-500/30 hover:bg-green-500/10"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CSV
                </Button>
              )}
            </div>
            <div className="bg-black/40 p-4 rounded-lg border border-gray-800 h-64 overflow-auto font-mono text-sm">
              {csvData ? (
                <pre className="whitespace-pre-wrap">{csvData}</pre>
              ) : (
                <div className="text-gray-500 h-full flex items-center justify-center">
                  Os resultados da busca aparecerão aqui
                </div>
              )}
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
            <h3 className="text-orange-500 font-medium mb-2">Dicas de uso</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Seja específico com os termos de busca para obter resultados mais precisos</li>
              <li>Inclua a localização para filtrar os resultados por região</li>
              <li>O download do CSV permite importar os dados para Excel ou Google Sheets</li>
              <li>Respeite os termos de uso do Google ao utilizar os dados extraídos</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
