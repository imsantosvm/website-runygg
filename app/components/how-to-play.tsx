
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
                        Bem-vindo ao <span className="text-primary">NEW AGE!</span>
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
                                    <div className="bg-alpha-black/90 border border-alpha-black/90 flex gap-2 items-center p-2 sm:p-4 rounded-2xl text-sm sm:text-base">
                                        <span className="min-w-6 w-6 h-6 sm:min-w-8 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-brand text-brand font-semi-condensed">
                                            1
                                        </span>
                                        Conecte-se connect <span className="text-primary">mtasa://181.215.45.110:22363</span>
                                    </div>
                                    <div className="bg-alpha-black/90 border border-alpha-black/90 flex gap-2 items-center p-2 sm:p-4 rounded-2xl text-sm sm:text-base">
                                        <span className="min-w-6 w-6 h-6 sm:min-w-8 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-brand text-brand font-semi-condensed">
                                            2
                                        </span>
                                        Crie sua conta em game
                                    </div>
                                    <div className="bg-alpha-black/90 border border-alpha-black/90 flex gap-2 items-center p-2 sm:p-4 rounded-2xl text-sm sm:text-base">
                                        <span className="min-w-6 w-6 h-6 sm:min-w-8 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-brand text-brand font-semi-condensed">
                                            3
                                        </span>
                                        Aproveite do melhor servidor Battle Royale
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-full">
                                    <a href="fivem://connect/game.metropole.gg" target="_blank">
                                        <button type="button" className="font-semi-condensed outline-none px-4 py-1.5 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed bg-brand border border-brand hover:bg-brand/80 disabled:hover:bg-brand w-full text-subtitle-2 font-semibold text-cta-invert sm:py-4 sm:px-6 sm:h-24 normal-case gap-1 sm:rounded-2xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-6 h-6 sm:w-12 sm:h-12 text-cta-invert mr-1.5">
                                                <path fill="currentColor" d="M46.402 25.612V20.2l-.885-.442-7.116-3.558-6.4 3.2V13c-1.728-.865-6.295-3.149-8-4L16 13l-1.6.8 1.6.99v4.61l-6.4-3.2-8 4L0 21l1.6.99v5.412l1.6.8v-7.011l6.399-3.2v13.412l8 4 1.6-.801-1.6-.99V13.99l6.4-3.2V38.6l8.001-4 1.6-.8-1.6-.99V21.19l6.4-3.2V31.4l8-4 1.6-.8-1.6-.99z" />
                                            </svg>
                                            Conectar-se ao <span className="uppercase">Runy</span>
                                        </button>
                                    </a>
                                    <a href="fivem://connect/ville.metropole.gg" target="_blank">
                                        <button type="button" className="font-semi-condensed outline-none px-4 py-1.5 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed bg-brand border border-brand hover:bg-brand/80 disabled:hover:bg-brand w-full text-subtitle-2 font-semibold text-cta-invert sm:py-4 sm:px-6 sm:h-24 normal-case gap-1 sm:rounded-2xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-6 h-6 sm:w-12 sm:h-12 text-cta-invert mr-1.5">
                                                <path fill="currentColor" d="m40.286 19.934 3.3-2.038-2.688-1.343h-.008l-.026-.015q-.001.001-.008-.004h-.004q-.015-.006-.11-.053l-.031-.016-.065-.034-.077-.038-.088-.042-.046-.023-.072-.034h-.012a.4.4 0 0 0-.069-.039L23.793 8v28.31l-13.196-6.596V18.29l3.3-2.038-3.3-1.648-3.3 1.648-.077.039-.072.034-.302.153-.05.027-.073.038-.026.011L4 17.897l3.3 2.038v8.129L4 30.1l3.3 1.648.937.47q.206.105.424.21c1.128.566 2.516 1.258 4.007 2.004l.49.245 6.718 3.36c.24.123.482.241.715.36l.428.214c.115.057.226.11.337.168q.164.082.324.165L23.792 40l2.115-1.055q.16-.08.325-.165.164-.08.336-.168.214-.108.432-.214q.348-.171.715-.36l.459-.229 6.26-3.131.489-.245 4.007-2.004q.218-.107.424-.21l.937-.47 3.3-1.648-3.3-2.038v-8.13z" />
                                            </svg>
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