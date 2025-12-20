
import React from 'react';
import { Play, Calendar, Users, Monitor, Sparkles, ChevronRight, Video, ArrowUpRight } from 'lucide-react';

const webinars = [
  {
    title: "Mastering Agentic AI Workflows",
    date: "Dec 15, 2024",
    time: "10:00 AM EST",
    instructor: "Dr. Michael Chen",
    type: "Live Workshop",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AWS Cloud: Architecture 2026",
    date: "Dec 22, 2024",
    time: "2:00 PM EST",
    instructor: "Sarah Jenkins",
    type: "Tech Demo",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "DevOps at Scale: K8s vs Serverless",
    date: "Jan 10, 2025",
    time: "11:00 AM EST",
    instructor: "Alex Rivera",
    type: "Deep Dive",
    image: "https://images.unsplash.com/photo-1618401471353-b74a07e9c331?auto=format&fit=crop&w=800&q=80"
  }
];

const DemosWebinars: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen text-sky-950">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-black mb-6 uppercase tracking-wider">
            <Video size={14} /> Knowledge Hub
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">Demos & <span className="text-gradient">Webinars</span></h1>
          <p className="text-xl text-sky-800 font-medium max-w-2xl mx-auto">
            Experience the future of tech through live interactive sessions and expert-led demonstrations.
          </p>
        </div>
      </section>

      {/* Featured Live Session */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card rounded-[3.5rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <span className="flex items-center gap-2 text-red-500 font-black text-xs uppercase tracking-widest mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span> Live Next Week
              </span>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Future-Proofing Your <span className="text-gradient">IT Stack</span></h2>
              <p className="text-sky-800/70 text-lg mb-8 font-medium">
                Join our Lead Architects as they dissect the upcoming shifts in cloud computing and AI integration for 2026-2030. 
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2 text-sky-900 font-bold">
                  <Calendar size={18} className="text-sky-600" /> Dec 18, 2024
                </div>
                <div className="flex items-center gap-2 text-sky-900 font-bold">
                  <Users size={18} className="text-sky-600" /> 1,200+ Registered
                </div>
              </div>
              <button className="bg-sky-600 hover:bg-sky-500 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-sky-200 flex items-center justify-center gap-3 shine-effect">
                Register for Live Event <ArrowUpRight size={20} />
              </button>
            </div>
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" 
                alt="Webinar Preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-sky-100/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
                   <Play className="text-sky-600 ml-1 group-hover:scale-125 transition-transform" size={40} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions Grid */}
      <section className="py-24 bg-white/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black mb-2">Upcoming <span className="text-gradient">Sessions</span></h2>
              <p className="text-sky-800/60 font-bold uppercase tracking-widest text-xs">Reserve your spot now</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sky-600 font-black hover:gap-3 transition-all">
              View All Events <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((web, i) => (
              <div key={i} className="glass-card rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full border-sky-100">
                <div className="h-56 relative overflow-hidden">
                  <img src={web.image} alt={web.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-sky-600 shadow-sm border border-sky-100">
                    {web.type}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-black mb-4 group-hover:text-sky-600 transition-colors">{web.title}</h3>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-sm text-sky-800 font-medium">
                      <Calendar size={16} className="text-sky-400" /> {web.date} @ {web.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-sky-800 font-medium">
                      <Monitor size={16} className="text-sky-400" /> Instructor: {web.instructor}
                    </div>
                  </div>
                  <button className="mt-auto w-full py-4 bg-sky-50 text-sky-600 font-black rounded-xl hover:bg-sky-600 hover:text-white transition-all shadow-sm">
                    Book My Seat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand Archive */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card p-12 md:p-16 rounded-[4rem] border-sky-200">
             <div className="flex flex-col md:flex-row items-center justify-between gap-10">
               <div className="max-w-xl text-center md:text-left">
                  <div className="w-16 h-16 bg-sky-600/10 rounded-2xl flex items-center justify-center text-sky-600 mb-6 mx-auto md:mx-0">
                    <Sparkles size={32} />
                  </div>
                  <h2 className="text-4xl font-black mb-4">On-Demand <span className="text-gradient">Archive</span></h2>
                  <p className="text-sky-800/70 font-medium leading-relaxed">
                    Missed a session? Access our complete library of technical demos, architecture reviews, and certification deep-dives anytime, anywhere.
                  </p>
               </div>
               <button className="bg-sky-950 text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-black transition-all shine-effect">
                  Explore Library
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemosWebinars;
