import { ExternalLink } from 'lucide-react';
import FirstClasses from '@/assets/classes_1.jpg';
import SecondClasses from '@/assets/classes_2.jpg';
import ThirdClasses from '@/assets/classes_3.jpg';
import LeslieAlexander from '@/assets/leslie_alexander.jpg';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Classes() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.our-classes',
        start: 'top 50%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('.section-header', {
      autoAlpha: 1,
      duration: .8,
      ease: 'power4.out',
    });
    tl.to('.bento-card', {
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      stagger: .20,
      ease: 'back.out(1.2)',
    }, '-=0.3');
  }, []);

  return (
  <section className="our-classes w-full h-max flex flex-col gap-8">
      <div className="section-header opacity-0 w-full flex justify-between items-center">
        <div className="header-left">
          <h2 className="font-oswald text-7xl font-extrabold leading-normal text-[var(--secondary-variant)]">Our Classes</h2>
          <p className="max-w-[60ch] text-[var(--secondary-variant)]">Our classes cater to all ages and preferences. You and your child can safely enjoy the facilities together. Whether young or old, our programs welcome everyone, making fitness a family affair.</p>
        </div>
        <div className="header-right grid grid-cols-1 grid-rows-3 gap-4 w-lg">
          {['Men', 'Women', 'Kids'].map((el, i) => (
          <div key={i} className="link cursor-pointer py-2 text-[var(--secondary-variant)] border-b border-b-[var(--secondary-variant)]/50 flex justify-between w-full">
              <h3 className="font-oswald text-2xl font-extrabold">{el}</h3>
              <ExternalLink className="size-10 text-white" />
          </div>
          ))}
        </div>
      </div>
      <div className="bento-grid grid grid-cols-3 grid-rows-4 gap-8 min-h-[70dvh] text-white *:rounded-2xl">
        <div style={{ backgroundImage: `url(${FirstClasses})` }} className={'bento-card opacity-0 row-span-2 grayscale bg-cover bg-center bg-no-repeat'}></div>
        <div className="bento-card opacity-0 col-span-2 row-span-2 flex flex-col justify-between bg-gray-700/20 p-6 text-[var(--secondary-variant)]">
          <div className="grid-card-header w-full flex justify-between items-center">
            <div className="user flex items-center gap-4">
              <div className="user-image rounded-full size-16 object-cover">
                <img src={LeslieAlexander} alt="Leslie Alexander" className="w-full h-full rounded-full object-cover" />
              </div>
              <span className="font-oswald font-extrabold text-xl">Leslie Alexander</span>
            </div>
            <button className="bg-[var(--primary)] rounded-full px-6 cursor-pointer active:bg-[var(--primary)]/80 transition h-14 text-[var(--tertiary)] font-semibold">
              See All
            </button>
          </div>
          <div className="grid-card-body flex justify-between items-center w-full">
            <h3 className="font-oswald font-extrabold text-5xl max-w-[10ch]">Training Experience</h3>
            <ExternalLink className="size-12 mt-4" />
          </div>
        </div>
        <div className="bento-card opacity-0 row-span-2 row-start-3 bg-gray-700/20 flex text-[var(--secondary-variant)] w-full h-full p-6">
          <h3 className="font-oswald font-extrabold text-4xl max-w-[12ch] leading-normal">Credit and personalize your <span className="text-[var(--primary)]">workout</span></h3>
        </div>
        <div style={{ backgroundImage: `url(${SecondClasses})` }} className={'bento-card opacity-0 row-span-2 grayscale row-start-3 bg-cover bg-center bg-no-repeat'}></div>
        <div style={{ backgroundImage: `url(${ThirdClasses})` }} className={'bento-card opacity-0 row-span-2 grayscale row-start-3 bg-cover bg-center bg-no-repeat'}></div>
      </div>
  </section>
  );
}
