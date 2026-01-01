import { Link } from 'react-router-dom';

export default function Footer() {
  return (
  <div className="footer relative">
      <footer className="bg-gray-700/50 rounded-tl-[4rem] rounded-tr-[4rem] h-40 flex items-end justify-between px-6 absolute bottom-0 w-full text-white z-0 pb-4">
        <Link to="/" className="cursor-pointer font-oswald uppercase font-extrabold text-3xl">AF</Link>
        <p className="text-[var(--secondary-variant)]">Copyright &copy; 2024 AETHEL-FITNESS. All Right Reserved</p>
        <Link to="/" className="cursor-pointer font-oswald uppercase font-extrabold text-3xl">Privacy Policy</Link>
      </footer>
  </div>
  );
}
