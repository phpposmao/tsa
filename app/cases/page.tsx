import type { Metadata } from "next"
import CasesPage from "./CasesPage"

export const metadata: Metadata = {
  title: "Nossos Cases | TSA",
  description: "Conheça nossos cases de sucesso nas áreas de marketing, branding, consultoria empresarial.",
}

export default function PortfolioPage() {
  return <CasesPage />
}
