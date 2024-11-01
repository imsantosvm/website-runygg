'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Link from 'next/link'

export default function Component() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Faça seu cadastro</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Crie uma nova conta e comece a vender hoje mesmo.
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-muted-foreground">
                Nome de usuário
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="bg-transparent mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-muted-foreground">
                Endereço de e-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-transparent mt-1"
              />
            </div>
            <div className="relative">
              <Label htmlFor="password" className="text-muted-foreground">
                Senha
              </Label>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="bg-transparent mt-1"
              />
              <button
                type="button"
                className="absolute inset-y-12 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-background">
            Continuar
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Já tem uma conta?{' '}
          <Link href="/auth/login" className="font-medium text-primary hover:text-primary/90">
            Fazer login
          </Link>
        </p>

        <p className="text-center text-xs text-muted-foreground">
          Ao se cadastrar você concorda com os{' '}
          <Link href="/terms" className="underline text-primary">
            termos de serviços
          </Link>{' '}
          da Machine Codes.
        </p>
      </div>
    </div>
  )
}