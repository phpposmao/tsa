import type { Metadata } from "next"
import ContatoPage from "./ContatoPage"

export const metadata: Metadata = {
  title: "Contato | TSA",
  description: "Junte-se à equipe TSA e faça parte da nossa história de sucesso.",
}

export default function ContactPage() {
  return <ContatoPage />
}
