
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, Award } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 pt-16">
          <h1 className="text-5xl font-black mb-4">Connect with <span className="text-gradient">Tech Skyline</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you're starting a course or scaling your enterprise, our global team is ready to respond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Quick Contact Cards */}
          <div className="glass-card p-8 rounded-3xl hover:border-blue-500 transition-colors group">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Phone />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-400 text-sm mb-4">Immediate expert consultation</p>
            <p className="font-bold text-blue-400">+1-408-614-0468</p>
          </div>

          <div className="glass-card p-8 rounded-3xl hover:border-purple-500 transition-colors group">
            <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Mail />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-gray-400 text-sm mb-4">24-hour turnaround time</p>
            <p className="font-bold text-purple-400 break-all text-sm">techskylineitsolutions20204@gmail.com</p>
          </div>

          <div className="glass-card p-8 rounded-3xl hover:border-cyan-500 transition-colors group">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Clock />
            </div>
            <h3 className="text-xl font-bold mb-2">Operating Hours</h3>
            <p className="text-gray-400 text-sm mb-4">Global support coverage</p>
            <p className="font-bold text-cyan-400">24/7 Global Access</p>
          </div>
        </div>

        {/* Recruitment Form Section */}
        <div className="glass-card rounded-[3rem] overflow-hidden grid lg:grid-cols-5 min-h-[600px]">
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-900 to-indigo-950 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Placement & Training Inquiry</h2>
            <p className="text-blue-200 mb-8">
              Fill out our official recruitment form to join our placement assistance program or inquire about corporate staffing.
            </p>
            <ul className="space-y-4">
               <li className="flex items-center gap-3"><MessageCircle className="text-blue-400" size={20} /> Professional Resume Audit</li>
               <li className="flex items-center gap-3"><Globe className="text-blue-400" size={20} /> Global Opportunities</li>
               <li className="flex items-center gap-3"><Award className="text-blue-400" size={20} /> Top MNC Interviews</li>
            </ul>
            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
               <p className="text-xs text-gray-400 italic">"Our mission is to ensure 100% professional alignment for every student."</p>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white p-2">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfcG6IKVRWZg0qi0V7eBRvRDozo0HRifzhEM5vEfLtFLvADbA/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="rounded-2xl"
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
