import type { Metadata } from "next"
import JoinUsClientPage from "./JoinUsClientPage"

export const metadata: Metadata = {
  title: "Faça Parte | TSA",
  description: "Junte-se à equipe TSA e faça parte da nossa história de sucesso.",
}

export default function JoinUsPage() {
  return <JoinUsClientPage />
}

