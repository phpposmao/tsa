"use client"

import type React from "react"

import { PrimaryButton } from "@/components/ui/primary-button"
import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#050520] flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-[#1A0F0F] rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">TSA Admin</h1>
          <p className="text-gray-400 mt-2">Faça login para acessar o painel administrativo</p>
        </div>

        {/*error && <div className="bg-red-500/20 text-red-200 p-4 rounded-lg mb-6">{error}</div>*/}

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-orange-500 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-orange-500 mb-1">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              placeholder="••••••••"
            />
          </div>

          <PrimaryButton formAction={login} type="submit" className="w-full">
            Entrar
          </PrimaryButton>
        </form>
      </div>
    </main>
  )
}
4