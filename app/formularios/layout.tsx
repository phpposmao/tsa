import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Formulários Interativos | TSA",
  description: "Responda nossos formulários interativos e descubra insights valiosos para o seu negócio.",
}

export default function FormulariosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
