import { Header } from './components/header'
import { Hero } from './components/hero'
import { Benefits } from './components/benefits'
import { HowToPlay } from './components/how-to-play'
import { Footer } from './components/footer'

export const metadata = {
  title: "Machine Codes",
  description: "Macchine Ccodes Description",
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          {/* <Benefits /> */}
          <HowToPlay />
        </main>
        <Footer />
      </div>
    </>
  );
}
