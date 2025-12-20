
import React from 'react';
import { ShieldCheck, Briefcase, Award, GraduationCap, Zap, Globe, MessageSquare, Monitor, Handshake } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, color }: any) => (
  <div className="glass-card p-10 rounded-[3rem] border-white group hover:-translate-y-2 transition-all duration-500 shadow-xl">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg ${color}`}>
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black mb-4">{title}</h3>
    <p className="text-sky-900/60 font-medium leading-relaxed">{desc}</p>
  </div>
);

const TheEdge: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen text-sky-950">
      <section className="py-20 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
          What Makes Us <br/><span className="text-gradient">Different?</span>
        </h1>
        <p className="text-xl text-sky-900/70 max-w-3xl mx-auto font-medium leading-relaxed">
          We don't just sell courses; we architect careers. Explore our multi-layered support ecosystem designed for 2026-2030 technical dominance.
        </p>
      </section>

      {/* Unique Pillars */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            icon={Monitor} 
            title="Live Cloud Labs" 
            desc="Every student gets 24/7 access to pre-configured AWS/Azure/Java environments. No more 'It works on my machine'—learn on production-grade infrastructure."
            color="bg-sky-600"
          />
          <FeatureCard 
            icon={MessageSquare} 
            title="Instant Mentorship" 
            desc="Stuck on a bug at 2 AM? Our global pool of expert mentors is available via our private Slack/Discord channels for immediate tech support."
            color="bg-purple-600"
          />
          <FeatureCard 
            icon={Zap} 
            title="Project Pedagogy" 
            desc="Move past theoretical slides. Build real-world apps like Microservices for Fintech or AI-pipelines for E-commerce. Portfolio-ready code from day one."
            color="bg-orange-600"
          />
        </div>
      </section>

      {/* Placement & Job Support Ecosystem */}
      <section className="py-24 bg-sky-900 text-white rounded-[5rem] mx-4 md:mx-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-8 md:px-20 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">Support <span className="text-sky-400">Ecosystem</span></h2>
            <p className="text-sky-300 font-bold uppercase tracking-widest text-sm">Beyond the Classroom</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               {[
                 { title: 'Job Assistance', icon: Briefcase, desc: 'Professional resume auditing, LinkedIn profile optimization, and direct referrals to our hiring network.' },
                 { title: 'Placement Support', icon: Handshake, desc: 'Direct interview scheduling with top-tier MNCs and tech startups across the US, UK, and APAC.' },
                 { title: 'Mock Interviews', icon: GraduationCap, desc: 'Unlimited technical and HR mock rounds with industry architects to sharpen your communication.' },
                 { title: 'Certification Prep', icon: ShieldCheck, desc: 'Dedicated guidance for AWS Solutions Architect, Oracle Java, and Scrum Master certifications.' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-sky-400 border border-white/10 group-hover:bg-sky-400 group-hover:text-white transition-all">
                       <item.icon size={32} />
                    </div>
                    <div>
                       <h4 className="text-2xl font-black mb-2">{item.title}</h4>
                       <p className="text-sky-200/70 font-medium">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
            <div className="glass-card bg-white/5 border-white/10 p-12 rounded-[4rem]">
               <h3 className="text-3xl font-black mb-8 text-gradient">Placement Ratio</h3>
               <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-sky-200">2024 H1</span>
                    <span className="text-4xl font-black">98.2%</span>
                  </div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-400 to-blue-600 w-[98%] shadow-lg shadow-sky-400/20"></div>
                  </div>
                  <p className="text-sm text-sky-300 italic font-medium">
                    "Tech Skyline's placement ecosystem ensures our candidates land roles with average salary hikes of 60% compared to industry standards."
                  </p>
                  <button className="w-full py-5 bg-sky-400 text-sky-950 font-black rounded-2xl hover:bg-sky-300 transition-all shadow-xl shadow-sky-400/20">
                    Get Success Report
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Partners */}
      <section className="py-32 text-center">
        <h2 className="text-3xl font-black mb-12 flex items-center justify-center gap-3">
           Global Certification <Award className="text-sky-600" /> Support
        </h2>
        <div className="flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {['AWS', 'Google Cloud', 'Oracle', 'Azure', 'Scrum Alliance', 'Cisco'].map(brand => (
             <span key={brand} className="text-3xl font-black tracking-tighter text-sky-900/40">{brand}</span>
           ))}
        </div>
      </section>
    </div>
  );
};

export default TheEdge;
