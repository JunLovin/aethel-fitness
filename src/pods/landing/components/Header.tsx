import { Link } from 'react-router-dom';

export default function Header() {
  return (
  <div className="header-container select-none text-white w-full relative bg-transparent z-10">
      <div className="header min-w-[1300px] max-2xl:min-w-[1000px] rounded-full h-18 absolute left-1/2 top-8 -translate-x-1/2 z-10 flex items-center justify-between px-8 backdrop-blur-lg bg-white/5">
        <Link to="/" className="cursor-pointer font-oswald uppercase font-extrabold text-3xl">AF</Link>
        <nav className="flex items-center gap-10">
          <Link to="/" className="transition font-medium duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-[var(--primary)] hover:before:min-w-full">Home</Link>
          <Link to="/" className="transition font-medium duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-[var(--primary)] hover:before:min-w-full">Service</Link>
          <Link to="/" className="transition font-medium duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-[var(--primary)] hover:before:min-w-full">Goals</Link>
          <Link to="/" className="transition font-medium duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-[var(--primary)] hover:before:min-w-full">Class Schedules</Link>
          <Link to="/" className="transition font-medium duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-[var(--primary)] hover:before:min-w-full">Contact</Link>
        </nav>
      </div>
  </div>
  );
}
