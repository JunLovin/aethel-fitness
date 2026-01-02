import Marquee from 'react-fast-marquee';

const TickerStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="000" d="M12.5 1.25a.75.75 0 0 0-1.5 0v8.69L6.447 5.385a.75.75 0 1 0-1.061 1.06L9.94 11H1.25a.75.75 0 0 0 0 1.5h8.69l-4.554 4.553a.75.75 0 0 0 1.06 1.061L11 13.561v8.689a.75.75 0 0 0 1.5 0v-8.69l4.553 4.554a.75.75 0 0 0 1.061-1.06L13.561 12.5h8.689a.75.75 0 0 0 0-1.5h-8.69l4.554-4.553a.75.75 0 1 0-1.06-1.061L12.5 9.939z"/></svg>
  );

export default function Ticker() {
  return (
  <>
      <Marquee className="bg-[var(--primary)] !h-20 my-16 !select-none">
        <span className="text-[var(--tertiary)] font-bold text-3xl flex gap-12 items-center mr-12">EXPERT TRAINERS <TickerStar /> </span>
        <span className="text-[var(--tertiary)] font-bold text-3xl flex gap-12 items-center mr-12">DIVERSE CLASS OPTION <TickerStar /> </span>
        <span className="text-[var(--tertiary)] font-bold text-3xl flex gap-12 items-center mr-12">FLEXIBLE MEMBERSHIP PLANS <TickerStar /> </span>
        <span className="text-[var(--tertiary)] font-bold text-3xl flex gap-12 items-center mr-12">SAFE & CLEAN <TickerStar /></span>
      </Marquee>
  </>
  );
}
