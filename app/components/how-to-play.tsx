
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function HowToPlay() {
    return (
        <section id="how-to-play" className="relative sm:pt-36 sm:pb-20 md:pt-44 pt-36 md:pb-20 px-4 pb-20">
            <img
                src="https://goatroyale.com/static/media/landing-title-background.47aeaa4ece0b1501df64.png"
                alt=""
                className="absolute left-1/2 -translate-x-1/2 -mt-44"
            />
            <div className="relative container mx-auto flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-3 font-bold uppercase">
                    <h2 className="text-3xl text-white">
                        Bem-vindo ao <span className="text-primary">RUNY GG</span>
                    </h2>
                    <p className="text-white/50 tracking-xl">A nova era do competitivo começa aqui!</p>
                </div>
                <div className="drop-shadow-lg md:drop-shadow-xl w-full">
                    <Card className="overflow-hidden rounded-t-lg">
                        <CardHeader className="p-0">

                        </CardHeader>
                        <CardContent className="p-6">
                            <h3 className="mb-8 mt-8 text-4xl md:text-[3rem] font-extrabold text-brand uppercase text-center">Quer saber como jogar?</h3>

                            <div className="flex items-center gap-4 flex-col md:flex-row">
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="bg-card border border-alpha-black/90 flex gap-2 items-center p-2 sm:p-4 rounded-2xl text-sm sm:text-base">
                                        <span className="min-w-6 w-6 h-6 sm:min-w-8 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-brand text-brand font-semi-condensed">
                                            1
                                        </span>
                                        Conecte-se <span className="text-primary">connect mtasa://181.215.45.110:22363</span>
                                    </div>
                                    <div className="bg-card border border-alpha-black/90 flex gap-2 items-center p-2 sm:p-4 rounded-2xl text-sm sm:text-base">
                                        <span className="min-w-6 w-6 h-6 sm:min-w-8 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-brand text-brand font-semi-condensed">
                                            2
                                        </span>
                                        Crie sua conta em game
                                    </div>
                                    <div className="bg-card border border-alpha-black/90 flex gap-2 items-center p-2 sm:p-4 rounded-2xl text-sm sm:text-base">
                                        <span className="min-w-6 w-6 h-6 sm:min-w-8 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-brand text-brand font-semi-condensed">
                                            3
                                        </span>
                                        Aproveite do melhor servidor Battle Royale
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-full">
                                    <a href="mtasa://181.215.45.110:22363" target="_blank">
                                        <button type="button" className="font-semi-condensed outline-none px-4 py-1.5 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed bg-card border border-brand hover:bg-brand/80 disabled:hover:bg-brand w-full text-subtitle-2 font-semibold text-cta-invert sm:py-4 sm:px-6 sm:h-24 normal-case gap-1 sm:rounded-2xl">
                                            <img
                                                src="/runy.svg"
                                                alt=""
                                                className="w-9 h-9"
                                            />
                                            Conectar-se ao <span className="uppercase">Runy</span>
                                        </button>
                                    </a>
                                    <a href="https://discord.gg/runygg" target="_blank">
                                        <button type="button" className="font-semi-condensed outline-none px-4 py-1.5 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed bg-card border border-brand hover:bg-brand/80 disabled:hover:bg-brand w-full text-subtitle-2 font-semibold text-cta-invert sm:py-4 sm:px-6 sm:h-24 normal-case gap-1 sm:rounded-2xl">
                                        <img
                                                src="/discord.svg"
                                                alt=""
                                                className="w-9 h-9"
                                            />
                                            Entre em nosso <span className="uppercase">Discord</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}