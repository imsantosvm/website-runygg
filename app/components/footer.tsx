import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="#" className="text-white hover:text-gray-300">
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <Youtube className="w-5 h-5" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
         
        </div>

        <p className="text-white text-sm">
          Todos os direitos reservados RunyGG
        </p>

        <div className="flex items-center">
          <Image
            src="/logotipo.png"
            alt="Metrópole Logo"
            width={120}
            height={30}
            className="h-7 w-auto"
          />
        </div>
      </div>
    </footer>
  )
}