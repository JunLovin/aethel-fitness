import Header from './components/Header';
import Ticker from './components/Ticker';
import Features from './sections/features/Features';
import Hero from './sections/hero/Hero';
import ReactLenis from 'lenis/react';

export default function Landing() {
  // const lenis = useLenis();

  return (
  <>
      <ReactLenis root />
      <main className="min-h-dvh flex flex-col w-full bg-[#101213] overflow-hidden">
        <header>
          <Header />
        </header>
        <section className="main-content flex-1 flex flex-col">
          <Hero />
          <Ticker />
          <div className="sub-sections w-[1380px] mx-auto flex justify-center">
              <Features />
          </div>
        </section>
      </main>
  </>
  );
}
