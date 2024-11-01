import { Card, CardContent } from "@/components/ui/card"
import { Star, Package, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Benefits() {
  return (
    <section id="benefits" className="relative pt-24 pb-36 px-4 sm:px-4 md:px-2">
      <img
        src="https://goatroyale.com/static/media/landing-title-background.47aeaa4ece0b1501df64.png"
        alt=""
        className="absolute left-1/2 -translate-x-1/2 -mt-44"
      />
      <img
        src="https://goatroyale.com/static/media/landing-benefits.5c9e64ee802c28def54a.png"
        alt=""
        className="absolute right-0 -z-10 md:h-[950px] blur-sm sm:blur-sm md:blur-0"
      />
      <div className="relative container mx-auto flex flex-col items-center gap-10 z-50 h-full">
        <h2 className="text-3xl text-white font-bold uppercase">
          Nossos <span className="text-primary">benefícios</span>
        </h2>
        <div className="flex flex-col gap-3 w-full sm:w-full md:w-3/5 self-start mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <BenefitCard
              icon={<Star className="text-primary text-4xl md:text-8xl" />}
              title="Prioridade"
              description="Com este benefício exclusivo, você terá o privilégio de acessar nosso servidor rapidamente, evitando filas e garantindo seu lugar entre os primeiros. Seja único e não perca tempo!"
            />
            <BenefitCard
              icon={<Package className="text-primary text-4xl md:text-8xl" />}
              title="Caixas"
              description="Ao abrir caixas, você encontrará itens épicos que tornarão sua experiência de ainda mais emocionante. Roupas diferenciadas e especiais, permitindo que você se destaque com estilo!"
            />
            <BenefitCard
              icon={<Crown className="text-primary text-4xl md:text-8xl" />}
              title="Premium"
              description="Com o acesso Premium, você participa de partidas ranqueadas exclusivas com prêmios semanais. Mostre suas habilidades, ganhe o título de campeão e esteja entre os melhores!"
            />
          </div>
          <Button className="w-full text-xl text-center py-3 font-bold uppercase tracking-widest">
            Acessar Loja
          </Button>
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ icon, title, description }) {
  return (
    <Card className="h-full flex flex-col gap-5 items-center py-5 px-2 backdrop-blur-md z-50">
      <CardContent className="flex flex-col items-center gap-5 text-center">
        {icon}
        <h3 className="text-white drop-shadow-lg text-lg md:text-3xl font-bold tracking-wider uppercase">{title}</h3>
        <p className="text-white/60 text-base">{description}</p>
      </CardContent>
    </Card>
  )
}