import React from 'react';
import { Briefcase, Users, Monitor, ShieldCheck, BarChart, Code, Server, BookOpen } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Skyline IT Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive IT Consulting, Staffing, and Training Services designed for success.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* IT Staffing */}
        <div id="staffing" className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <Briefcase className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">IT Staffing</h3>
            <p className="text-gray-600 mb-6">
              We connect top-tier IT talent with leading organizations. Our staffing solutions ensure you have the right people to drive your projects forward.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center"><Users className="h-4 w-4 mr-2 text-blue-500" /> Contract Staffing</li>
              <li className="flex items-center"><Users className="h-4 w-4 mr-2 text-blue-500" /> Permanent Placement</li>
              <li className="flex items-center"><Users className="h-4 w-4 mr-2 text-blue-500" /> Project Management</li>
            </ul>
          </div>
          <div className="md:w-2/3">
             <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="IT Staffing" className="rounded-2xl shadow-md w-full h-80 object-cover mb-6" />
             <p className="text-gray-600 text-lg">
               Our IT Staffing services are designed to meet the dynamic needs of modern businesses. Whether you need short-term expertise or long-term leadership, Tech Skyline provides professionals who integrate seamlessly into your teams.
             </p>
          </div>
        </div>

        {/* IT Training */}
        <div id="training" className="flex flex-col md:flex-row-reverse gap-12 items-center">
           <div className="md:w-1/3 bg-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
            <BookOpen className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">IT Training</h3>
            <p className="text-gray-600 mb-6">
               World-class online training for individuals looking to start or advance their IT careers.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center"><Users className="h-4 w-4 mr-2 text-blue-500" /> 100+ Interactive Courses</li>
              <li className="flex items-center"><Users className="h-4 w-4 mr-2 text-blue-500" /> Live Expert Instructors</li>
              <li className="flex items-center"><Users className="h-4 w-4 mr-2 text-blue-500" /> Real-time Projects</li>
            </ul>
           </div>
           <div className="md:w-2/3">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive IT Training</h2>
             <p className="text-gray-600 text-lg leading-relaxed">
               From Java Full Stack to AWS Cloud, Data Science, and Cyber Security. Our training programs are built on core concepts, hands-on labs, and interview-focused preparation to ensure career success.
             </p>
           </div>
        </div>

        {/* Corporate Training */}
        <div id="corporate" className="bg-slate-900 text-white rounded-3xl p-8 md:p-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="md:w-1/2">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">FOR BUSINESSES</div>
                <h2 className="text-3xl font-bold mb-6">Corporate Training Solutions</h2>
                <p className="text-gray-300 mb-6">
                  Upskill your workforce with our customized corporate training programs. We deliver training that is aligned with your specific business goals and technology stack.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold flex items-center mb-1"><Monitor className="h-4 w-4 mr-2 text-blue-400" /> Customized Curriculum</h4>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold flex items-center mb-1"><BarChart className="h-4 w-4 mr-2 text-blue-400" /> Performance Tracking</h4>
                  </div>
                </div>
             </div>
             <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1515168816513-48968b575862?auto=format&fit=crop&w=800&q=80" alt="Corporate Training" className="rounded-xl shadow-lg w-full" />
             </div>
          </div>
        </div>

        {/* Technology Consulting & Software Testing */}
        <div className="grid md:grid-cols-2 gap-8">
           <div id="consulting" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <Server className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Technology Consulting</h3>
              <p className="text-gray-600 mb-4">
                 We help organizations shape, strengthen, and accelerate their IT strategies. From digital transformation to process optimization.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                 <li className="flex items-center"><Code className="h-4 w-4 mr-2 text-blue-500" /> Strategy Development</li>
                 <li className="flex items-center"><Code className="h-4 w-4 mr-2 text-blue-500" /> Implementation & Optimization</li>
              </ul>
           </div>

           <div id="testing" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Software Testing (QA)</h3>
              <p className="text-gray-600 mb-4">
                 Ensure your software is reliable, secure, and high-performing. We offer manual and automation testing services.
              </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li className="flex items-center"><Code className="h-4 w-4 mr-2 text-blue-500" /> QA Automation</li>
                 <li className="flex items-center"><Code className="h-4 w-4 mr-2 text-blue-500" /> Performance Testing</li>
              </ul>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Services;