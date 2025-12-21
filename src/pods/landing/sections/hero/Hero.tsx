import Fitness from '@/assets/hero.png';
import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Hero() {
  const avatars = [
    'https://i.pravatar.cc/150?img=59',
    'https://i.pravatar.cc/150?img=53',
    'https://i.pravatar.cc/150?img=57',
    'https://i.pravatar.cc/150?img=64',
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo('#women-fitness',
      { autoAlpha: 0, y: 80 },
      { autoAlpha: 1, y: 0, duration: 1.5 },
    )
    .fromTo('#text-fitness',
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: .75 },
      )
    .fromTo('#customers',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: .75 },
      )
    .fromTo('#workers',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: .75 },
      );

  }, []);

  return (
    <>
      <div draggable={false} className="hero-section h-dvh bg-[#101213] relative w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="green-ball animate-pulse absolute top-10 -left-4 size-60 bg-[var(--primary)]/10 blur-3xl" />
        <div className="green-ball animate-pulse absolute top-80 -right-12 size-60 bg-[var(--primary)]/10 blur-3xl" />
        <div id="customers" className="users select-none absolute z-100 left-12 top-70 max-2xl:top-50">
          <div className="avatar-group flex flex-col justify-center items-center">
            <div className="avatar-group flex flex-row align-items-center">
              {avatars.map((avatar, i) => (
              <div key={i} className="avatar size-12 -mr-4">
                  <img
                    src={avatar}
                    alt={avatar}
                    draggable={false}
                    className="w-full h-full select-none rounded-full border"
                  />
                </div>
              ))}
            </div>
            <span className="font-oswald text-[var(--secondary)] font-extrabold text-2xl mt-2">220K+</span>
            <span className="text-[var(--secondary)] text-sm">Happy Customer</span>
          </div>
        </div>
        <div id="workers" className="workers absolute select-none flex flex-col items-center justify-center top-120 z-100 right-12 max-2xl:top-80">
          <span className="workers-number font-oswald text-[var(--secondary)] font-extrabold text-2xl mb-2">250+</span>
          <span className="text-[var(--secondary)] text-sm mb-4">Workers</span>
          <button className="rounded-full bg-[var(--primary)] w-[125px] h-10 cursor-pointer transition active:bg-[var(--primary)]/80 py-2 text-sm font-semibold">Join Now</button>
        </div>
        <div className="hero-image relative">
          <img
            src={Fitness}
            alt="Fitness"
            id="women-fitness"
            className="w-[135dvh] select-none"
            draggable={false}
          />
          <div id="text-fitness" className="stay-fit w-max left-1/2 bottom-4 -translate-x-1/2 absolute">
            <div className="content relative">
              <h1 className="uppercase text-8xl font-extrabold font-oswald text-transparent bg-clip-text bg-linear-to-b from-[var(--secondary)] to-neutral-950 select-none">Stay Fitt Not Still</h1>
            </div>
          </div>
          <span id="text-fitness" className="font-allura text-[var(--primary)] z-100 text-5xl absolute font-medium tracking-wide right-40 select-none bottom-0 max-2xl:right-0 max-2xl:bottom-2">Core-Fit Sym center</span>
          <div className="gradient-background h-50 absolute -bottom-2 z-0 bg-linear-to-b from-transparent w-full to-[#101213]/95" />
        </div>
      </div>
    </>
  );
}
