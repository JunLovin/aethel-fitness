import { Star } from 'lucide-react';
import PlanCard from './components/PlanCard';
import BestTraining from '@/assets/best_training.png';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Plan {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
}

export default function Training() {
  gsap.registerPlugin(ScrollTrigger);

  const plans: Plan[] = [
    {
      name: 'Premium Plan',
      description: 'The premium package designed for dedicated fitness enthusiasts who seek the highest level of training.',
      price: '$19.99/Month',
      popular: true,
    },
    {
      name: 'Elite Plan',
      description: 'The elite plan for passionate fitness lovers, offering top-tier resources and exclusive benefits.',
      price: '$11.99/Month',
    },
    {
      name: 'Basic',
      description: 'Our Basic Plan offers essential gym access, perfect for beginners or those with a simple workout routine.',
      price: 'Free',
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.best-training',
        start: 'top 50%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('.section-title', {
      autoAlpha: 1,
      duration: .8,
      ease: 'power4.out',
    });
    tl.to('.success-stories', {
      y: -8,
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      stagger: .20,
      ease: 'back.out(1.2)',
    }, '-=0.3');
    tl.to('.plan-card', {
      y: -8,
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      stagger: .20,
      ease: 'back.out(1.2)',
    });
  }, []);

  return (
  <section className="best-training grid grid-cols-2 w-full gap-8">
      <div className="success-stories opacity-0 translate-y-14 relative justify-around overflow-hidden flex flex-col p-8 bg-gray-700/20 rounded-3xl w-full">
        <div className="title flex flex-col gap-4">
          <div className="star-icon bg-[var(--primary)] text-[var(--tertiary)] w-max rounded-full p-3">
            <Star className="size-10 fill-black"/>
          </div>
          <h3 className="font-oswald font-extrabold text-white text-3xl">Success Stories</h3>
        </div>
        <div className="comment">
          <p className="text-[var(--secondary-variant)] max-w-[40ch]">I reached my fitness goals fsater than ever with tailered workouts. Wrist notifications keep me on track, even during sessions. Absolutely love this feature and how it enhances my experience</p>
          <img
            src={BestTraining}
            alt="Best Training"
            className="absolute -right-10 w-100 opacity-40 bottom-0"
          />
        </div>
        <div className="client flex flex-col gap-2">
          <div className="client-info flex flex-col gap-2">
            <h3 className="font-oswald text-3xl font-extrabold text-white">Kende Attila</h3>
            <span className="text-[var(--secondary-variant)]">CEO of Starbucks</span>
          </div>
          <div className="client-stars flex items-center gap-2">
            <Star className="fill-[var(--primary)] text-transparent" />
            <Star className="fill-[var(--primary)] text-transparent" />
            <Star className="fill-[var(--primary)] text-transparent" />
            <Star className="fill-[var(--primary)] text-transparent" />
            <Star className="text-transparent fill-white" />
          </div>
        </div>
      </div>
      <div className="plans flex flex-col gap-8">
        <h2 className="section-title opacity-0 font-oswald text-7xl font-extrabold text-[var(--secondary-variant)] leading-tight max-w-[12ch]">Best Training Plan For You</h2>
        <div className="grid-plans grid grid-rows-3 grid-cols-1 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="plan-card opacity-0 translate-y-14"
            >
              <PlanCard
                name={plan.name}
                description={plan.description}
                price={plan.price}
                popular={plan.popular}
              />
            </div>
          ))}
        </div>
      </div>
  </section>
  );
}
