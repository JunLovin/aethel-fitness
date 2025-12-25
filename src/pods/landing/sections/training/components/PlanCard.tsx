interface PlanCardProps {
  price: string;
  name: string;
  description: string;
  popular?: boolean;
}

export default function PlanCard(props: PlanCardProps) {
  return (
  <div className="plan-card bg-gray-700/20 p-6 h-40 rounded-3xl w-full flex justify-between">
      <div className="plan-price">
        <button className={`${props.popular ? 'bg-[var(--primary)] py-4 px-7 rounded-full text-[var(--tertiary)] active:bg-[var(--primary)]/80' : 'text-[var(--primary)]'} font-semibold cursor-pointer transition`}>
          {props.price}
        </button>
      </div>
      <div className="plan-info justify-self-end text-right justify-center h-full flex flex-col gap-2">
        <h3 className="font-oswald font-extrabold text-2xl text-white leading-normal">{props.name}</h3>
        <p className="text-sm text-[var(--secondary-variant)] max-w-[50ch]">{props.description}</p>
      </div>
  </div>
  );
}
