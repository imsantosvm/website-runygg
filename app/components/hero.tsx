export function Hero() {
    return (
        <div className="h-screen bg-[url('https://goatroyale.com/static/media/landing-1.5b5305beb0d0f00a26a5.png')] bg-cover bg-center">
            <div className="container flex items-center gap-10 h-full w-full md:mx-auto relative">
                <div className="flex flex-col gap-2 font-proxima-nova text-white w-full sm:w-full md:w-3/5 justify-end px-4">
                    <h1 className="text-5xl font-bold uppercase drop-shadow-lg">
                        DOMINE O CAMPO DE BATALHA NO SERVIDOR MAIS ÉPICO DO MTA <span className="text-primary text-6xl font-black">BATTLE ROYALE!</span>
                    </h1>
                    <p className="text-lg opacity-50 drop-shadow-sm">
                        Prepare-se para uma nova era de combates e desafios. Conecte-se, suba no ranking e domine a arena! Junte-se agora e mostre suas habilidades.
                    </p>
                </div>
            </div>
        </div>
    )
}