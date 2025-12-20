
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, ShieldCheck, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-950 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-800 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="bg-sky-600 p-2.5 rounded-xl shadow-lg shadow-sky-400/20">
                 <Cpu className="text-white h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white tracking-tighter">TECH SKYLINE</span>
                <span className="text-[10px] text-sky-400 font-black tracking-[0.3em] uppercase">IT Solutions 2030</span>
              </div>
            </div>
            <p className="text-sky-300/50 text-base font-medium leading-relaxed">
              Global leader in AI-integrated technical training, IT consulting, and executive talent acquisition. Shaping the architects of the decentralized digital world.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-sky-400 hover:bg-sky-600 hover:text-white transition-all border border-white/5">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-10 uppercase tracking-widest">Ecosystem</h4>
            <ul className="space-y-5 text-sky-300/60 font-bold text-sm">
              <li><Link to="/courses" className="hover:text-sky-400 transition-colors">Technical Archive</Link></li>
              <li><Link to="/the-edge" className="hover:text-sky-400 transition-colors">The Skyline Advantage</Link></li>
              <li><Link to="/internship" className="hover:text-sky-400 transition-colors">Internship Portal</Link></li>
              <li><Link to="/corporate" className="hover:text-sky-400 transition-colors">Enterprise Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-10 uppercase tracking-widest">Specialties</h4>
            <ul className="space-y-5 text-sky-300/60 font-bold text-sm">
              <li><span className="hover:text-sky-400 transition-colors cursor-default">Java Full Stack</span></li>
              <li><span className="hover:text-sky-400 transition-colors cursor-default">Cloud (AWS/Azure)</span></li>
              <li><span className="hover:text-sky-400 transition-colors cursor-default">Cyber Intelligence</span></li>
              <li><span className="hover:text-sky-400 transition-colors cursor-default">DevSecOps Pipelines</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-10 uppercase tracking-widest">Official Hub</h4>
            <ul className="space-y-6 text-sky-300/60 font-bold text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-sky-500 shrink-0" />
                <span>Global HQ | Serving US, UK, Canada & India</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-sky-500 shrink-0" />
                <span>+1-408-614-0468</span>
              </li>
              <li className="flex items-center gap-4 break-all">
                <Mail size={20} className="text-sky-500 shrink-0" />
                <span>techskylineitsolutions20204@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-sky-400/30 text-xs font-black">
             <ShieldCheck size={16} /> SECURE 256-BIT SSL PROTECTED PORTAL
          </div>
          <p className="text-sky-300/20 text-xs font-bold">
            &copy; {new Date().getFullYear()} Tech Skyline IT Solutions. All Rights Reserved. Futuristic Intelligence & Talent.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
