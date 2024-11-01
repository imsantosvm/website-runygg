import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="flex items-start space-x-4">
          <Image
            src="/picapau.jpg"
            alt="404 Character"
            width={120}
            height={120}
            className="rounded-lg"
          />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tighter text-primary">
              TA INDO PARA AONDE?
            </h1>
            <p className="text-gray-400">
              Essa página não existe ainda, aquieta o cu aí!
            </p>
            <Button variant="outline" asChild className="mt-4">
              <Link href="/">
                Voltar para Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}