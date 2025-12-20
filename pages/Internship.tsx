
import React from 'react';
import { Rocket, Binary, Network, Code2, Users2, ShieldCheck, ArrowRight } from 'lucide-react';

const Internship: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen text-sky-950">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-black mb-6 uppercase">
               <Rocket size={14} /> Bridge The Gap
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Internship <br/><span className="text-gradient">Immersion</span>
            </h1>
            <p className="text-xl text-sky-900/70 font-medium mb-10 leading-relaxed">
              Stop learning in a vacuum. Join the Tech Skyline Internship program and work on live, production-grade projects for real clients under the guidance of senior architects.
            </p>
            <div className="flex gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcG6IKVRWZg0qi0V7eBRvRDozo0HRifzhEM5vEfLtFLvADbA/viewform" target="_blank" className="bg-sky-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl hover:bg-sky-700 transition-all flex items-center gap-2 shine-effect">
                Apply for Internship <ArrowRight size={20} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="glass-card p-4 rounded-[3rem] shadow-2xl relative z-10">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" className="rounded-[2.5rem] w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-200/50 blur-[50px] rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-200/30 blur-[80px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Internship Workflow */}
      <section className="py-24 bg-white/40">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-4xl font-black text-center mb-16">The Professional Path</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { step: '01', title: 'Tech Immersion', icon: Code2, desc: 'First 4 weeks focus on rapid skill sharpening in your chosen stack (Java/Cloud/AI).' },
                { step: '02', title: 'Live Lab Labs', icon: Binary, desc: 'Move to simulated production environments and solve real tickets and architecture bugs.' },
                { step: '03', title: 'Client Projects', icon: Network, desc: 'Get assigned to active Tech Skyline consulting projects with weekly SCRUM meetings.' }
              ].map((item, i) => (
                <div key={i} className="glass-card p-10 rounded-[2.5rem] relative group">
                   <div className="text-6xl font-black text-sky-100 absolute top-6 right-8 group-hover:text-sky-200 transition-colors">{item.step}</div>
                   <div className="w-14 h-14 bg-sky-600 text-white rounded-xl flex items-center justify-center mb-8 relative z-10"><item.icon size={28} /></div>
                   <h4 className="text-2xl font-black mb-4 relative z-10">{item.title}</h4>
                   <p className="text-sky-900/60 font-medium relative z-10">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 max-w-7xl mx-auto px-4">
         <div className="glass-card p-12 md:p-20 rounded-[4rem] grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h3 className="text-4xl font-black mb-8">What's Included?</h3>
               <div className="space-y-6">
                  {[
                    'Official Internship Certificate',
                    'Letter of Recommendation (LOR)',
                    'Live Cloud Sandbox Access',
                    'PPO (Pre-Placement Offer) Opportunities',
                    '24/7 Tech Lead Support'
                  ].map(p => (
                    <div key={p} className="flex items-center gap-3 font-bold text-sky-800">
                       <ShieldCheck className="text-sky-600" /> {p}
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-sky-950 p-10 rounded-[3rem] text-white">
               <Users2 className="text-sky-400 w-16 h-16 mb-6" />
               <h4 className="text-2xl font-black mb-4">Network with the Best</h4>
               <p className="text-sky-200/70 font-medium mb-8">
                 Interns at Tech Skyline join a private alumni network of over 5,000 professionals currently working in FAANG and top European tech firms.
               </p>
               <button className="w-full py-4 bg-sky-600 rounded-2xl font-black shadow-lg shadow-sky-400/20 hover:bg-sky-500 transition-all">
                  Apply Today
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Internship;
