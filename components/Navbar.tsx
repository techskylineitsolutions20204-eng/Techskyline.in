
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Cpu, Sparkles } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'The Edge', path: '/the-edge' },
  { label: 'Internship', path: '/internship' },
  { label: 'Corporate', path: '/corporate' },
  { label: 'Demos', path: '/demos' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-xl border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="bg-sky-600 p-2 rounded-lg shadow-lg shadow-sky-200">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-sky-900 leading-none tracking-tight">TECH SKYLINE</span>
                <span className="text-[10px] text-sky-500 font-extrabold tracking-[0.2em]">IT SOLUTIONS</span>
              </div>
            </NavLink>
          </div>

          <div className="hidden lg:flex space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-all duration-200 px-3 py-1.5 rounded-full ${
                    isActive ? 'bg-sky-600 text-white shadow-md' : 'text-sky-800 hover:text-sky-600 hover:bg-sky-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <NavLink to="/demos" className="flex items-center gap-2 text-sky-600 font-bold text-sm px-4 py-2 hover:bg-sky-50 rounded-full transition-all">
              <Sparkles size={16} /> Free Demo
            </NavLink>
            <NavLink to="/contact" className="bg-sky-950 hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shine-effect">
              Join Now
            </NavLink>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-sky-800 p-2 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-sky-100 absolute w-full shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-10 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-4 rounded-xl text-lg font-bold ${
                    isActive ? 'bg-sky-600 text-white shadow-lg' : 'text-sky-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
