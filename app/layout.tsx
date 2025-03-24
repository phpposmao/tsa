import type React from "react"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VideoPopup from "@/components/video-popup"

const glancyr = localFont({
  src: [
    {
      path: "../public/fonts/Glancyr-Thin.otf",
      weight: "100",
    },
    {
      path: "../public/fonts/Glancyr-ExtraLight.otf",
      weight: "200",
    },
    {
      path: "../public/fonts/Glancyr-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Glancyr-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Glancyr-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/Glancyr-Bold.otf",
      weight: "700",
    },
  ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={glancyr.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          <VideoPopup />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
