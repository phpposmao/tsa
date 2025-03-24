import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Smartphone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/image/logo-tsa-branco.png" alt="TSA Logo" width={120} height={40} className="mr-2" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Estratégias integradas que geram resultados reais para marcas e personalidades.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/solucoes" className="text-sm text-gray-400 hover:text-white transition-colors">
                Soluções
              </Link>
              <Link href="/sobre" className="text-sm text-gray-400 hover:text-white transition-colors">
                Quem Somos
              </Link>
              <Link href="/cases" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cases
              </Link>
              <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/faca-parte" className="text-sm text-gray-400 hover:text-white transition-colors">
                Faça Parte
              </Link>
              <Link href="/contato" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contato
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <p className="text-sm text-gray-400 mb-2">São Paulo, SP - Brasil</p>
            <p className="text-sm text-gray-400 mb-2">contato@tsacomunicacao.com.br</p>
            <p className="text-sm text-gray-400 mb-4">+55 11 9999-9999</p>

            <div className="flex space-x-4">
              <Link href="https://facebook.com" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} TSA Comunicação. Todos os direitos reservados.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center text-gray-500 text-xs">
                <Smartphone className="h-3 w-3 mr-1" />
                <span>19 3645.5986</span>
              </div>
              <div className="flex items-center text-gray-500 text-xs">
                <Smartphone className="h-3 w-3 mr-1" />
                <span>19 98216.2892</span>
              </div>
              <p className="text-gray-500 text-xs">falecom@tsacomunica.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

