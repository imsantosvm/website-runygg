export function Hero() {
    return (
        <div className="h-screen bg-[url('https://goatroyale.com/static/media/landing-1.5b5305beb0d0f00a26a5.png')] bg-cover bg-center">
            <div className="container flex items-center gap-10 h-full w-full md:mx-auto relative">
                <div className="flex flex-col gap-2 font-proxima-nova text-white w-full sm:w-full md:w-3/5 justify-end px-4">
                    <h1 className="text-5xl font-bold uppercase drop-shadow-lg">
                        <span className="text-primary text-6xl font-black">Runy GG </span>O seu servidor de battle royale
                    </h1>
                    <p className="text-lg opacity-50 drop-shadow-sm">
                        Chegue ao topo da competição e enfrente os jogadores mais habilidosos no Battle Royale mais épico de todos os tempos!
                    </p>
                </div>
            </div>
        </div>
    )
}