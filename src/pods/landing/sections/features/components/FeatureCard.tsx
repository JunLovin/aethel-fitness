import { type ReactNode, useState } from 'react';
import Background from '@/assets/features-card.jpg';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard(props: FeatureCardProps) {
  const [isHover, setIsHover] = useState(false);

  return (
  <>
    <div
        style={{ backgroundImage: `url(${Background})` }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="feature-card rounded-2xl flex flex-col justify-between p-6 shadow-sm shadow-black bg-cover bg-center bg-[var(--tertiary)]/95 h-118 bg-blend-overlay"
      >
        <div className="card-top">
          <div className={`${isHover ? '*:!text-[var(--primary)] !border-[var(--primary)]' : ''} transition *:text-[var(--secondary-variant)] icon w-max border p-3 *:size-7 rounded-full border-[var(--secondary-variant)]`}>
            {props.icon}
          </div>
        </div>
        <div className="card-body">
          <h3 className="font-oswald font-extrabold text-4xl text-[var(--secondary-variant)] leading-normal">{props.title}</h3>
          <p className="text-[var(--secondary-variant)] max-w-[50ch]">{props.description}</p>
        </div>
        <div className="card-bottom relative">
          <div className={`button-container ${isHover ? 'opacity-100' : 'opacity-0'} transition duration-300`}>
            <button className={'absolute cursor-pointer transition active:bg-[var(--primary)]/80 -bottom-14 bg-[var(--primary)] text-[var(--tertiary)] font-semibold rounded-full left-1/2 -translate-x-1/2 px-8 py-4'}>Find Out More</button>
          </div>
        </div>
      </div>
    </>
  );
}
