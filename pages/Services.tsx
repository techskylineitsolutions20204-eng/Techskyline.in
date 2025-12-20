
import React from 'react';
import { Briefcase, Users, Cpu, ShieldCheck, BarChart, Rocket, CheckCircle, Award, LayoutDashboard } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen text-white">
      {/* Radiant Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Solutions <span className="text-gradient">& Services</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          From talent acquisition to workforce transformation, we provide the architectural blueprint for your IT success.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* In-Depth Corporate Training */}
        <section id="corporate" className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-purple-600/20 text-purple-400 text-xs font-bold uppercase tracking-widest">Enterprise Solutions</div>
            <h2 className="text-4xl font-bold">In-Depth <span className="text-purple-400">Corporate Training</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We don't just teach tools; we transform cultures. Our corporate training modules are custom-built to align with your organization’s tech stack and long-term business roadmap.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-purple-500" size={20} /> <span className="text-sm font-semibold">Custom Lab Environments</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-purple-500" size={20} /> <span className="text-sm font-semibold">Live Case Studies</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-purple-500" size={20} /> <span className="text-sm font-semibold">Skills Assessment Dashboards</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-purple-500" size={20} /> <span className="text-sm font-semibold">ROI Post-Training Analysis</span>
              </div>
            </div>
          </div>
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Corporate Training" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
             <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl animate-pulse">
                <Award className="text-yellow-400 w-12 h-12" />
             </div>
          </div>
        </section>

        {/* Global Staffing Solutions */}
        <section id="staffing" className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
          <div className="lg:order-2 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest">Talent Acquisition</div>
            <h2 className="text-4xl font-bold">Professional <span className="text-blue-400">Staffing & Placements</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our "Hire-Train-Deploy" model ensures that companies get candidates who are productive from Day 1. We specialize in contract staffing and executive search for niche IT roles.
            </p>
            <div className="space-y-4">
               <div className="flex items-start gap-4 p-5 glass-card rounded-2xl border-l-4 border-blue-500">
                  <div className="bg-blue-500 p-2 rounded-lg"><Users size={20} /></div>
                  <div>
                    <h4 className="font-bold">98% Success Ratio</h4>
                    <p className="text-sm text-gray-500 italic">Our rigorous vetting process matches the right culture and the right skill.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 p-5 glass-card rounded-2xl border-l-4 border-cyan-500">
                  <div className="bg-cyan-500 p-2 rounded-lg"><LayoutDashboard size={20} /></div>
                  <div>
                    <h4 className="font-bold">End-to-End Placement Support</h4>
                    <p className="text-sm text-gray-500 italic">Resume polishing, mock interviews, and technical background checks included.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="lg:order-1 relative">
             <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Staffing" className="rounded-3xl shadow-2xl" />
          </div>
        </section>

        {/* Internship Program */}
        <section id="internship" className="relative p-12 md:p-20 glass-card rounded-[3rem] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <Rocket className="text-cyan-400 w-16 h-16 mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl font-bold mb-6">Real-World <span className="text-cyan-400">Internship Program</span></h2>
            <p className="text-gray-300 text-lg mb-10">
              Get immersive experience working on live client projects. Our internship isn't about fetching coffee—it's about writing code, architecting cloud nodes, and analyzing data pipelines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl font-bold text-white mb-2">Duration</div>
                  <div className="text-gray-400">3-6 Months</div>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl font-bold text-white mb-2">Experience</div>
                  <div className="text-gray-400">Live Projects</div>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl font-bold text-white mb-2">Outcome</div>
                  <div className="text-gray-400">PPO Available</div>
               </div>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfcG6IKVRWZg0qi0V7eBRvRDozo0HRifzhEM5vEfLtFLvADbA/viewform" 
              target="_blank" 
              className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-12 py-4 rounded-full font-black text-lg shadow-xl shadow-cyan-600/20 transition-all"
            >
              Apply for Internship
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Services;
