import { Atom } from 'lucide-react';
export default function Navbar() {
  const navItems = ["Home", "About", "Contact"]
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md z-10">
      <div className="flex items-center gap-2 flex-1">
        {/*Logo + Logo Text*/}
        <Atom className='text-sky-700 w-8 h-8' />
        <p className="text-xl font-semibold">NavBar</p>
      </div>
      <ul className='flex flex-1 justify-center items-center gap-4 '>
        {navItems.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-1 justify-end items-center gap-4">
        <button className="text-base text-slate-400  hover:text-sky-400 hover:underline underline-offset-6 decoration-2 transition cursor-pointer whitespace-nowrap">Sign out</button>
        <img src="#" alt="username" className="w-12 h-12 rounded-full ring-2 ring-slate-400 ring-offset-2" />
        <label>
          <input type="checkbox" className="sr-only peer" />
          <span className="block w-14 h-7 rounded-full bg-slate-300 peer-checked:bg-sky-400 relative before:content-[''] before:block before:w-[20px] before:h-[20px] before:rounded-full before:bg-white before:absolute before:top-[2px] before:left-[2px] before:transition-all peer-checked:before:translate-x-7">
          </span>
        </label>
      </div>
    </nav >

  );
}
