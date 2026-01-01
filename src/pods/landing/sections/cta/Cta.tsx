import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function Cta() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cta',
        start: 'top 50%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('.cta-title', {
      autoAlpha: 1,
      duration: .8,
      ease: 'power4.out',
    });

    tl.to('.cta-paragraph', {
      autoAlpha: 1,
      duration: .7,
      ease: 'back.out(1.2)',
    });

    tl.to('.input', {
      autoAlpha: 1,
      duration: .7,
      ease: 'back.out(1.2)',
    });
  }, []);

  return (
  <div className="cta flex text-[var(--tertiary)] flex-col items-center justify-center w-full relative z-10 mb-24 h-[50dvh] gap-6 bg-[var(--primary)] rounded-[5rem]">
      <h2 className="cta-title opacity-0 font-oswald font-extrabold text-8xl text-center mx-auto tracking-tighter">Lets Join Community</h2>
      <p className="cta-paragraph opacity-0">You are not alone, many have was joined</p>
      <div className="input opacity-0 relative">
        <input
          type="email"
          placeholder="Your Email"
          className="rounded-md bg-white h-14 w-md px-4"
        />
        <button className="px-6 py-2 bg-[var(--tertiary)] rounded-sm text-lg font-extrabold font-oswald outline-0 focus:border-none focus:outline-none focus:ring-0 ring-0 border-none text-white absolute right-1 bottom-1.5 cursor-pointer">Join Now</button>
      </div>
  </div>
  );
}
