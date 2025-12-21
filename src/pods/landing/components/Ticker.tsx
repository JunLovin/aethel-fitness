import { Slack } from 'lucide-react';
import Marquee from 'react-fast-marquee';

export default function Ticker() {
  return (
  <>
      <Marquee className="bg-[var(--primary)] !h-20 my-16 !select-none">
        <span className="text-[var(--tertiary)] font-bold text-3xl flex gap-12 items-center mr-12">EXPERT TRAINERS <Slack className="size-8" /> </span>
        <span className="text-[var(--tertiary)] font-bold text-3xl flex gap-12 items-center mr-12">DIVERSE CLASS OPTION <Slack className="size-8" /> </span>
        <span className="text-[var(--tertiary)] font-bold text-3xl flex gap-12 items-center mr-12">FLEXIBLE MEMBERSHIP PLANS <Slack className="size-8" /> </span>
        <span className="text-[var(--tertiary)] font-bold text-3xl flex gap-12 items-center mr-12">SAFE & CLEAN <Slack className="size-8" /> </span>
      </Marquee>
  </>
  );
}
