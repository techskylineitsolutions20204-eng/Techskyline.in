import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Globe, Users, Award, Zap, Building2, Monitor, BookOpen, CheckCircle } from 'lucide-react';
import { Course } from '../types';

// Mock Data for Horizontal Scroll
const featuredCourses: Course[] = [
  { id: '1', title: 'Full Stack Java', category: 'Development', description: 'Master Java, Spring Boot, and React.', image: 'https://picsum.photos/seed/java/400/250' },
  { id: '2', title: 'AWS Cloud Architect', category: 'Cloud', description: 'Become a certified AWS Solutions Architect.', image: 'https://picsum.photos/seed/aws/400/250' },
  { id: '3', title: 'Data Science with Python', category: 'Data', description: 'Analyze data with Python and ML libraries.', image: 'https://picsum.photos/seed/python/400/250' },
  { id: '4', title: 'DevOps Engineering', category: 'DevOps', description: 'CI/CD, Docker, Kubernetes mastery.', image: 'https://picsum.photos/seed/devops/400/250' },
  { id: '5', title: 'Software Testing (QA)', category: 'Testing', description: 'Manual and Automation testing excellence.', image: 'https://picsum.photos/seed/testing/400/250' },
  { id: '6', title: 'Cyber Security', category: 'Security', description: 'Protect enterprise networks and data.', image: 'https://picsum.photos/seed/security/400/250' },
];

const clients = [
  'TechCorp', 'GlobalSystems', 'InnovateInc', 'FutureSoft', 'DataFlow', 'CloudNet', 'SecureIT', 'SkylineDev'
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/techbg/1920/1080')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-3/4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tech Skyline IT Solutions <br/>
              <span className="text-2xl md:text-3xl font-medium text-blue-300 block mt-2">Information Technology Consulting & Online IT Training</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              GET YOUR BUSINESS & IT STRATEGIES ALIGNED FOR SUCCESS
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              At Tech Skyline IT Solutions, we help organizations shape, strengthen, and accelerate their IT strategies. 
              With decades of industry experience, we specialize in Information Technology (IT) Consulting, 
              guiding businesses through complete digital transformation—from planning and strategy development to implementation and optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink to="/courses" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center">
                View 100+ Courses <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
              <NavLink to="/services" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/20">
                Corporate Solutions
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Stats/About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Excellence in Online IT Training</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As a leading IT Online Training hub for over a decade, we are recognized globally for our excellence in Online IT Training, Placement Support, Corporate Training, and Real-Time, Expert-Led Courses.
                </p>
                <div className="flex items-center gap-4 text-blue-800 font-semibold">
                  <div className="bg-blue-200 p-2 rounded-lg"><Users size={24}/></div>
                  <span>Training 3,000+ students & professionals annually</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-bold text-2xl text-blue-600">USA</div>
                  <div className="text-xs text-gray-500">Presence</div>
                </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-bold text-2xl text-blue-600">UK</div>
                  <div className="text-xs text-gray-500">Presence</div>
                </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-bold text-2xl text-blue-600">Canada</div>
                  <div className="text-xs text-gray-500">Presence</div>
                </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-bold text-2xl text-blue-600">Australia</div>
                  <div className="text-xs text-gray-500">Presence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Tech Skyline IT Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive catalog of 100+ online interactive training programs, designed to meet global industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">100+ Interactive Courses</h3>
              <p className="text-gray-600">
                A comprehensive catalog designed to meet global standards. Our commitment is to build strong IT professionals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Training</h3>
              <p className="text-gray-600">
                Core concepts, real-time project scenarios, hands-on labs, and interview-focused preparation.
              </p>
            </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Immediate Response</h3>
              <p className="text-gray-600">
                Real-time instructor feedback, instant clarification of doubts, and two-way communication.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-gray-600 italic">"We ensure every learner gains the confidence and skills needed to succeed in real-world IT environments."</p>
          </div>
        </div>
      </section>

      {/* Horizontal Course Scroll */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Courses</h2>
            <p className="text-gray-600 mt-2">Explore our expert-led certification programs.</p>
          </div>
          <NavLink to="/courses" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </NavLink>
        </div>

        {/* Scroll Container */}
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-8 px-4 sm:px-6 lg:px-8 hide-scrollbar snap-x snap-mandatory">
            {featuredCourses.map((course) => (
              <div key={course.id} className="min-w-[300px] md:min-w-[350px] snap-center">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-md">{course.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{course.description}</p>
                    <NavLink to="/courses" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800">
                      View Curriculum &rarr;
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Certification & Consulting */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Software & IT Certification Training</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Software Certification represents formal recognition of competence in IT quality assurance. Certification holders demonstrate solid understanding across a body of knowledge essential to the quality assurance industry.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                <h4 className="font-bold text-lg mb-4">Certification is:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2"/> A powerful career booster</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2"/> A recognized sign of excellence</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2"/> Required for promotions</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2"/> A key differentiator</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IT Certification & Consulting Solutions</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide consulting and training solutions across various software disciplines, ensuring that learners gain:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900">Quality Assurance Expertise</h5>
                    <p className="text-sm text-gray-600">Practical understanding of industry processes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900">Leadership Foundations</h5>
                    <p className="text-sm text-gray-600">Strong foundations for leadership roles aligned with international standards.</p>
                  </div>
                </li>
              </ul>
              <NavLink to="/contact" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
                Transform Your Career
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Portfolio */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Clients & Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client, idx) => (
              <div key={idx} className="flex justify-center text-center">
                 {/* Placeholder for Logos using Text for Demo */}
                 <span className="font-bold text-lg text-gray-400 hover:text-blue-600 cursor-pointer">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Career With Tech Skyline IT Solutions</h2>
            <p className="text-xl text-blue-100 mb-8">
              At Tech Skyline IT Solutions, we are committed to helping individuals and businesses thrive in the global digital economy. Whether you’re looking for expert IT consulting or industry-leading online training, we are here to support your journey—every step of the way.
            </p>
            <NavLink to="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block">
              Contact Us Today
            </NavLink>
         </div>
      </section>
    </div>
  );
};

export default Home;