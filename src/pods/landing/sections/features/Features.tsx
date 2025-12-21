import { CalendarDays, Speech, Store } from 'lucide-react';
import FeatureCard from './components/FeatureCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  const data = [
    {
      icon: <Speech />,
      title: 'Class',
      description: 'Our amenities ensure you get the most out of your workouts and enjoy a superior gym experience.',
    },
    {
      icon: <Store />,
      title: 'Club',
      description: 'Our gym features cutting-edge fitness equipment designed to elevate your workouts to the next level',
    },
    {
      icon: <CalendarDays />,
      title: 'Timetable',
      description: 'Searching for a class that suits your schedule? We offer a variety of time options to fit your needs.',
    },
  ];

    useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.features',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('.section-header', {
      autoAlpha: 1,
      duration: .8,
      ease: 'power4.out',
    })
    .to('.feature-card', {
      autoAlpha: 1,
      scale: 1,
      duration: 1.2,
      stagger: .2,
      ease: 'back.out(1.2)',
      }, '-=0.3');
  }, []);

  return (
  <>
      <section ref={sectionRef} className="features w-full h-max flex flex-col gap-8">
        <div className="section-header flex justify-between opacity-0">
          <div className="header-left">
            <h2 className="font-oswald leading-normal text-7xl mb-2 text-[var(--secondary-variant)] font-extrabold">Features at Fitness Core-Fit</h2>
            <p className="text-[var(--secondary-variant)] font-medium max-w-[60ch]">Fitness Core-Fit offers top-notch amenities, cutting-edge equipment, and expert trainers to enhance your workout and achieve your goals.</p>
          </div>
        </div>
        <div className="features-grid grid grid-cols-3 gap-12">
          {data.map((d, i) => (
            <div
              key={i}
              className="feature-card opacity-0"
            >
              <FeatureCard
                icon={d.icon}
                title={d.title}
                description={d.description}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
