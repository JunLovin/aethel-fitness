interface ExploreCardProps {
  url: string;
  title: string;
  schedule: string;
  position: string;
}

export default function ExploreCard(props: ExploreCardProps) {
  return (
  <div className={`explore-card flex flex-col gap-2 ${props.position} select-none`} draggable={false}>
      <div className="image-container">
        <img src={props.url} alt={props.title} className="w-full rounded-2xl h-full object-cover" draggable={false} />
      </div>
      <div className="card-text flex flex-col text-[var(--secondary-variant)]">
        <h3 className="font-oswald text-3xl font-extrabold leading-normal text-white">{props.title}</h3>
        <span>{props.schedule}</span>
      </div>
    </div>
  );
}
