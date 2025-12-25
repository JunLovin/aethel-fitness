import GroupTraining from '@/assets/group-training.jpeg';
import DigitalCoursing from '@/assets/digital-coursing.jpeg';
import OutdoorClasses from '@/assets/outdoor-classes.jpeg';
import PersonalTrainer from '@/assets/personal_trainer.jpeg';
import ExploreCard from './components/ExploreCard';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Explore() {
  gsap.registerPlugin(ScrollTrigger);

  const data = [
    {
      title: 'Personal Trainer',
      schedule: 'Monday - Wednesday',
      imageUrl: PersonalTrainer,
      position: 'self-start',
    },
    {
      title: 'Outdoor Classes',
      schedule: 'Tuesday - Thursday',
      imageUrl: OutdoorClasses,
      position: 'self-end mt-12',
    },
    {
      title: 'Digital Coursing',
      schedule: 'Friday - Saturday',
      imageUrl: DigitalCoursing,
      position: 'self-start',
    },
    {
      title: 'Group Training',
      schedule: 'Sunday - Monday',
      imageUrl: GroupTraining,
      position: 'self-end mt-12',
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.explore',
        start: 'top 50%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('.section-header', {
      autoAlpha: 1,
      duration: .8,
      ease: 'power4.out',
    })
    .to('.explore-card', {
      y: -8,
      autoAlpha: 1,
      scale: 1,
      duration: 1.25,
      stagger: .20,
      ease: 'back.out(1.2)',
      }, '-=0.3');
  }, []);

  return (
  <>
      <section className="explore w-full h-max flex flex-col gap-8">
        <div className="section-header flex justify-between items-center mb-6 opacity-0">
          <h2 className="font-oswald leading-tight max-w-[15ch] text-7xl text-[var(--secondary-variant)] font-extrabold">Explore Our Wide Range of Programs</h2>
          <p className="font-medium text-[var(--secondary-variant)] max-w-[60ch]">Explore our wide range of programs designed to cater to all fitness levels and preferences. From strength training to yoga, each program is crafted to help you meet your specific goals and enhance your overall health and well-being.</p>
        </div>
        <div className="explore-grid grid grid-cols-4 gap-12">
          {data.map((d, i) => (
            <div
              key={i}
              className="explore-card opacity-0 translate-y-14"
            >
              <ExploreCard
                title={d.title}
                url={d.imageUrl}
                schedule={d.schedule}
                position={d.position}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
