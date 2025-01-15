import { Button } from "@/components/ui/button"
import { Users, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl rounded-b-lg ring-2 ring-white/5 ring-inset flex justify-between items-center py-4 px-6 backdrop-blur transition-colors z-50 backdrop-blur-md">
      <div className="flex items-center gap-5">
        <img
          src="/logotipo.png"
          alt="Goat Royale Logo"
          className="h-8 cursor-pointer"
        />
      </div>
      <nav className="hidden md:flex items-center gap-5">
        <div className="flex items-center font-medium text-xl text-white border-r border-white/20 pr-5">
          <a href="#" className="px-3 transition-colors text-lg uppercase flex items-center gap-1 text-primary">Início</a>
          <a href="/ranking" className="px-3 text-white/70 transition-colors text-lg uppercase flex items-center gap-1 hover:text-white">Ranking</a>
          <a href="/loja" className="px-3 text-white/70 transition-colors text-lg uppercase flex items-center gap-1 hover:text-white">Loja</a>
        </div>
      </nav>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </header>
  )
}