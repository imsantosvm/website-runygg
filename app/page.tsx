import { Header } from './components/header'
import { Hero } from './components/hero'
import { HowToPlay } from './components/how-to-play'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <HowToPlay />
        </main>
        <Footer />
      </div>
    </>
  );
}
