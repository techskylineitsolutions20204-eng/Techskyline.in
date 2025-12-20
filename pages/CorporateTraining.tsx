
import React from 'react';
import { ShieldCheck, BarChart3, Users2, Zap, Globe2, BookOpenCheck, Settings2, Handshake } from 'lucide-react';

const CorporateTraining: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen text-sky-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-200/50 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-600 text-white text-xs font-bold mb-6 shadow-lg animate-pulse">
            <Handshake size={14} /> FOR ENTERPRISE
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Workforce <span className="text-gradient">Transformation</span>
          </h1>
          <p className="text-xl text-sky-800/80 max-w-3xl mx-auto mb-12 font-medium">
            Tech Skyline doesn't just train employees; we engineer high-performance teams. Our deep-dive corporate solutions are used by Fortune 500 companies to stay ahead of the digital curve.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-sky-600 hover:bg-sky-500 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-sky-300 transition-all shine-effect">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Pillars of Training */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-[2.5rem] border-sky-200 group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-sky-200 group-hover:rotate-12 transition-transform">
                <Settings2 size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4">Customized Curriculum</h3>
              <p className="text-sky-800/70 leading-relaxed font-medium">
                We bridge your specific internal skill gaps by designing custom modules that mirror your company's proprietary tech stack and business objectives.
              </p>
            </div>

            <div className="glass-card p-10 rounded-[2.5rem] border-sky-200 group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4">Hire-Train-Deploy</h3>
              <p className="text-sky-800/70 leading-relaxed font-medium">
                Our flagship model. We source the best talent, train them specifically for your project needs, and deploy them ready to deliver results on day one.
              </p>
            </div>

            <div className="glass-card p-10 rounded-[2.5rem] border-sky-200 group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-cyan-200 group-hover:rotate-12 transition-transform">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4">Skill Assessment ROI</h3>
              <p className="text-sky-800/70 leading-relaxed font-medium">
                Detailed reporting and real-time dashboards showing the progression of your workforce and the tangible impact on project efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Models */}
      <section className="py-24 bg-sky-600/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Global Delivery <span className="text-gradient">Models</span></h2>
            <p className="text-sky-800 font-bold uppercase tracking-widest text-sm">Scalable solutions for any time zone</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { title: 'On-Site Bootcamps', icon: <Users2 className="text-sky-600" />, desc: 'Immersive training at your office location with live expert interaction.' },
                { title: 'Virtual Instructor-Led', icon: <Globe2 className="text-sky-600" />, desc: 'Flexible, high-quality remote training for distributed global teams.' },
                { title: 'Blended Learning', icon: <BookOpenCheck className="text-sky-600" />, desc: 'A mix of self-paced digital content and live technical workshops.' },
                { title: 'Executive Coaching', icon: <ShieldCheck className="text-sky-600" />, desc: 'Private technical leadership sessions for CTOs and VPs.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 glass-card rounded-3xl border-transparent hover:border-sky-300 transition-all cursor-default group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-sky-800/60 font-medium text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e5381bb6e?auto=format&fit=crop&w=800&q=80" 
                alt="Training Session" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-2xl">
                <p className="text-sky-900 font-bold italic">"Tech Skyline transformed our legacy engineering team into a Cloud-Native powerhouse within 12 weeks."</p>
                <p className="text-sky-600 font-black text-sm mt-4 tracking-wider uppercase">— VP Engineering, Fortune 500 Bank</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="glass-card p-12 md:p-20 rounded-[4rem] text-center border-sky-400/30">
            <h2 className="text-4xl font-black mb-6">Build Your Custom <span className="text-gradient">Training Plan</span></h2>
            <p className="text-sky-800/80 mb-12 font-medium">Ready to scale? Let our consultants design a roadmap for your organization.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <input type="text" placeholder="Full Name" className="p-4 rounded-2xl border border-sky-200 bg-white/50 focus:bg-white focus:outline-sky-500 font-medium" />
              <input type="email" placeholder="Corporate Email" className="p-4 rounded-2xl border border-sky-200 bg-white/50 focus:bg-white focus:outline-sky-500 font-medium" />
              <input type="text" placeholder="Company Name" className="p-4 rounded-2xl border border-sky-200 bg-white/50 focus:bg-white focus:outline-sky-500 font-medium md:col-span-2" />
              <button className="md:col-span-2 bg-sky-600 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-sky-500 transition-all shine-effect">
                Get In-Depth Proposal
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTraining;
