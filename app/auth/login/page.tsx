"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function Home() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-xl font-bold">Olá, Seja bem-vindo(a) de volta!</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Você precisa realizar o login para continuar e acessar sua loja.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <Label className='text-muted-foreground'>
                  Endereço de e-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="text-muted-foreground bg-transparent mt-1"
                />
              </div>
              <div className="relative">
                <Label className='text-muted-foreground'>
                  Senha
                </Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="text-muted-foreground bg-transparent mt-1"
                />
                <div
                  className="absolute inset-y-8 right-0 pr-3 flex items-end cursor-pointer w-8 h-8"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="text-muted-foreground" />
                  ) : (
                    <EyeIcon className="text-muted-foreground" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <Button className="w-full bg-primary hover:bg-primary/80 text-background">
                Fazer login
              </Button>
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Ainda não possui uma conta?{' '}
            <a href="/auth/register" className="font-medium text-primary">
              Criar nova conta
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
