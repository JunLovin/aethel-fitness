import Header from './components/Header';
import Ticker from './components/Ticker';
import Explore from './sections/explore/Explore';
import Features from './sections/features/Features';
import Hero from './sections/hero/Hero';
import ReactLenis from 'lenis/react';
import Training from './sections/training/Training';
import Classes from './sections/classes/Classes';
import Cta from './sections/cta/Cta';
import Footer from './components/Footer';

export default function Landing() {
  return (
  <>
      <ReactLenis root />
      <main className="min-h-dvh flex flex-col w-full bg-[#101213] overflow-hidden">
        <header>
          <Header />
        </header>
        <section className="main-content flex-1 flex flex-col relative h-full">
          <Hero />
          <Ticker />
          <div className="sub-sections w-[1380px] mx-auto flex flex-col justify-center gap-32">
            <Features />
            <Explore />
            <Training />
            <Classes />
            <Cta />
          </div>
        </section>
        <Footer />
      </main>
  </>
  );
}
