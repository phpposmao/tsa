"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { FaWhatsapp } from "react-icons/fa"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/servicos", label: "Serviços" },
    { href: "/sobre", label: "Quem Somos" },
    { href: "/cases", label: "Cases" },
    { href: "/blog", label: "Blog" },
    { href: "/faca-parte", label: "Faça Parte" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/image/logo-tsa-branco.png" alt="TSA Logo" width={120} height={40} className="mr-2" />
          </Link>

          {!isMobile ? (
            <>
              <nav className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-light transition-colors",
                      pathname === item.href ? "text-orange-500" : "hover:text-orange-500",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-3">
                <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/tsacomunica" aria-label="Facebook">
                  <Facebook className="h-4 w-4 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tsacomunica/" aria-label="Instagram">
                  <Instagram className="h-4 w-4 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tsa-comunica-b6a49b21b/" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://wa.me/5519982162892" aria-label="Whatsapp">
                  <FaWhatsapp className="h-4 w-4 text-gray-400 hover:text-white transition-colors" />
                </Link>
              </div>
            </>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black z-40 p-0">
          <nav className="flex flex-col bg-black/80 space-y-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg py-2 transition-colors",
                  pathname === item.href ? "text-orange-500" : "hover:text-orange-500",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center space-x-4 pt-4">
              <Link href="https://www.facebook.com/tsacomunica" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/tsacomunica/" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/tsa-comunica-b6a49b21b/" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://wa.me/5519982162892" aria-label="Whatsapp">
                <FaWhatsapp className="h-4 w-4 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

