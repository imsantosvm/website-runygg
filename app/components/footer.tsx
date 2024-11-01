import { Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto text-white/50 py-5 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center flex-col md:flex-row w-full gap-4">
          <div className="flex w-full md:w-1/4 justify-between px-4">
            <img
              
              src="/logotipo.png"
              alt="Goat Royale Logo"
              className="h-6 opacity-70"
            />
            <div className="font-regular border-foreground pr-5">© 2024</div>
            <div className="border-r border-white/20 hidden md:flex"></div>
          </div>
          <div className="flex items-center justify-around w-full md:w-3/4">
            <Instagram className="text-3xl hover:text-primary transition-colors cursor-pointer" />
            <Instagram className="text-3xl hover:text-primary transition-colors cursor-pointer" />
            <Instagram className="text-3xl hover:text-primary transition-colors cursor-pointer" />
            <Twitter className="text-3xl hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>
        <div className="flex gap-5 mt-2 w-full md:w-1/4 items-center justify-center md:justify-end">
          <a href="#" className="hover:text-white transition-colors cursor-pointer">
            Código de Conduta
          </a>
        </div>
      </div>
    </footer>
  )
}