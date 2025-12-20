
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Star, Cpu, Globe, Zap, Shield, Users, Rocket, BrainCircuit, Network, Fingerprint } from 'lucide-react';

const trendingTech = [
  { name: 'Agentic AI Systems', icon: <BrainCircuit />, desc: 'Autonomous AI agents revolutionizing enterprise logic and automation.' },
  { name: 'Quantum Cloud Architecture', icon: <Network />, desc: 'Ultra-secure, super-high-speed computing for the next decade of finance.' },
  { name: 'Biometric Security', icon: <Fingerprint />, desc: 'Zero-trust identity management for decentralized web architectures.' },
  { name: 'Decentralized Ops', icon: <Shield />, desc: 'Blockchain-backed cloud operations for sovereign data control.' },
];

const reviews = [
  { name: 'John Peterson', role: 'Solutions Architect, TechGlobal', text: 'Tech Skyline delivered exactly what our team needed for our AWS migration. Their instructors are top-tier.', stars: 5 },
  { name: 'Samantha Reed', role: 'Full Stack Student', text: 'The Java program changed my life. I landed a job at a top MNC within 2 weeks of finishing my placement prep.', stars: 5 },
  { name: 'David Ko', role: 'HR Director, InnovateX', text: 'We use Tech Skyline for all our corporate staffing. Their "Hire-Train-Deploy" model is unmatched.', stars: 5 },
];

const clients = [
  'Google Cloud', 'AWS Partner', 'Microsoft Azure', 'Salesforce', 'Oracle', 'IBM', 'Meta', 'Dell', 'Cisco', 'Adobe'
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-sky-950">
      {/* Radiant Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-sky-300/20 blur-[150px] rounded-full -z-10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card text-sky-600 text-sm font-black mb-8 shadow-lg shadow-sky-100 border-white">
            <Rocket size={16} className="animate-bounce" /> <span>Architecting 2026-2030 Digital Leaders</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-tight tracking-tighter">
            Digital <br/><span className="text-gradient">Skyline AI</span>
          </h1>
          <p className="text-xl text-sky-900/60 max-w-3xl mx-auto mb-12 leading-relaxed font-bold">
            The world's first AI-integrated technical training and consulting platform. 
            Bridging the gap between legacy systems and futuristic intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NavLink to="/courses" className="bg-sky-600 hover:bg-sky-500 text-white px-12 py-5 rounded-3xl font-black text-lg transition-all shadow-2xl shadow-sky-400/30 shine-effect">
              Explore Courses
            </NavLink>
            <NavLink to="/the-edge" className="glass-card hover:bg-white text-sky-800 px-12 py-5 rounded-3xl font-black text-lg transition-all shadow-md border-white">
              Why Tech Skyline?
            </NavLink>
          </div>
        </div>
      </section>

      {/* Infinite Client Marquee */}
      <section className="py-16 bg-white/40 border-y border-sky-100 overflow-hidden backdrop-blur-md">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span key={i} className="mx-16 text-4xl font-black text-sky-900/10 hover:text-sky-600/60 transition-colors cursor-default uppercase tracking-tighter">
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* AI Futures - New Section */}
      <section className="py-32 relative">
         <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="glass-card p-6 rounded-[3.5rem] shadow-2xl border-white relative z-10">
                  <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" className="rounded-[2.5rem] w-full h-[550px] object-cover" alt="AI Futures" />
               </div>
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-400/20 blur-[80px] rounded-full"></div>
            </div>
            <div className="space-y-8">
               <h2 className="text-5xl font-black mb-6">Mastering <span className="text-gradient">AI Frontiers</span></h2>
               <p className="text-lg text-sky-900/60 font-medium leading-relaxed">
                  The next decade belongs to those who can speak the language of AI. Our curriculum integrates generative intelligence and agentic workflows into every technical track.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {trendingTech.map((tech, i) => (
                    <div key={i} className="glass-card p-6 rounded-3xl border-white shadow-sm hover:shadow-lg transition-all group">
                       <div className="text-sky-600 mb-4 group-hover:scale-110 transition-transform">{tech.icon}</div>
                       <h4 className="font-black text-sky-900 mb-2">{tech.name}</h4>
                       <p className="text-xs text-sky-800/60 font-medium">{tech.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Stats */}
      <section className="py-24 relative bg-sky-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass-card p-10 rounded-[3rem] text-center border-white">
              <div className="text-5xl font-black text-sky-600 mb-2">98%</div>
              <div className="text-sky-800/40 font-black uppercase text-[10px] tracking-widest">Placement Rate</div>
            </div>
            <div className="glass-card p-10 rounded-[3rem] text-center border-white">
              <div className="text-5xl font-black text-blue-600 mb-2">3k+</div>
              <div className="text-sky-800/40 font-black uppercase text-[10px] tracking-widest">Alumni Network</div>
            </div>
            <div className="glass-card p-10 rounded-[3rem] text-center border-white">
              <div className="text-5xl font-black text-indigo-600 mb-2">150+</div>
              <div className="text-sky-800/40 font-black uppercase text-[10px] tracking-widest">MNC Partners</div>
            </div>
            <div className="glass-card p-10 rounded-[3rem] text-center border-white">
              <div className="text-5xl font-black text-cyan-600 mb-2">24/7</div>
              <div className="text-sky-800/40 font-black uppercase text-[10px] tracking-widest">Live Lab Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-20 tracking-tight">Voices of <span className="text-gradient">Success</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reviews.map((rev, i) => (
              <div key={i} className="glass-card p-12 rounded-[3.5rem] border-white relative group hover:-translate-y-2 transition-all shadow-xl">
                <div className="flex gap-1 mb-8">
                  {[...Array(rev.stars)].map((_, s) => <Star key={s} size={18} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sky-900 italic mb-10 font-bold leading-relaxed text-lg">"{rev.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-sky-600 to-indigo-600 border-2 border-white shadow-xl"></div>
                  <div>
                    <div className="font-black text-sky-900">{rev.name}</div>
                    <div className="text-xs text-sky-500 font-extrabold uppercase">{rev.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <div className="max-w-5xl mx-auto glass-card p-16 md:p-24 rounded-[5rem] border-sky-200/50 shadow-3xl">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Ready to Own the <br/><span className="text-gradient">Future?</span></h2>
          <p className="text-sky-800/60 mb-12 font-bold text-xl max-w-2xl mx-auto">Join thousands of engineers who redefined their careers with our specialized immersion programs.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <NavLink to="/contact" className="bg-sky-950 text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-black transition-all shadow-2xl">
              Start Your Journey
            </NavLink>
            <NavLink to="/internship" className="bg-sky-600 text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-sky-500 transition-all shadow-2xl shine-effect">
              Apply for Internship
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
