
import React from 'react';
import { X, CheckCircle2, User, BookOpen, ListChecks } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Header/Hero */}
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 sm:p-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold mb-3">
                {course.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">{course.title}</h2>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <BookOpen className="text-blue-600" size={20} />
                  Course Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                  {" "}This comprehensive training program is designed to take you from foundational concepts to advanced practical implementation. At Tech Skyline, we focus on real-world scenarios and hands-on lab sessions to ensure you are job-ready.
                </p>
              </section>

              {/* Curriculum */}
              {course.curriculum && (
                <section>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                    <ListChecks className="text-blue-600" size={20} />
                    Curriculum Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.curriculum.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">
              {/* Prerequisites */}
              {course.prerequisites && (
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Prerequisites</h4>
                  <ul className="space-y-2">
                    {course.prerequisites.map((req, idx) => (
                      <li key={idx} className="text-sm text-blue-800 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Instructor */}
              {course.instructor && (
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <User size={16} className="text-blue-600" />
                    Instructor
                  </h4>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold overflow-hidden">
                       {course.instructor.image ? (
                         <img src={course.instructor.image} alt={course.instructor.name} className="w-full h-full object-cover" />
                       ) : (
                         course.instructor.name.charAt(0)
                       )}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 leading-none">{course.instructor.name}</p>
                      <p className="text-xs text-gray-500 mt-1">Lead Tech Trainer</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    {course.instructor.bio}
                  </p>
                </div>
              )}

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
