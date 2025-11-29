import React from 'react';
import { Course } from '../types';
import { Search } from 'lucide-react';

const allCourses: Course[] = [
  { id: '1', title: 'Full Stack Java', category: 'Development', description: 'Comprehensive Java Full Stack development course covering backend, frontend, and database.', image: 'https://picsum.photos/seed/java/400/250' },
  { id: '2', title: 'AWS Cloud Architect', category: 'Cloud', description: 'Master AWS services and architecture to become a certified Solutions Architect.', image: 'https://picsum.photos/seed/aws/400/250' },
  { id: '3', title: 'Data Science with Python', category: 'Data Science', description: 'Learn data analysis, visualization, and machine learning using Python.', image: 'https://picsum.photos/seed/python/400/250' },
  { id: '4', title: 'DevOps Engineering', category: 'DevOps', description: 'End-to-end DevOps training including Git, Jenkins, Docker, Kubernetes, and Ansible.', image: 'https://picsum.photos/seed/devops/400/250' },
  { id: '5', title: 'Software Testing (QA)', category: 'Testing', description: 'Manual and Automation testing excellence with Selenium and advanced tools.', image: 'https://picsum.photos/seed/testing/400/250' },
  { id: '6', title: 'Cyber Security', category: 'Security', description: 'Learn ethical hacking, network security, and risk management.', image: 'https://picsum.photos/seed/security/400/250' },
  { id: '7', title: 'UI/UX Design', category: 'Design', description: 'Create stunning user interfaces and experiences with Figma and Adobe XD.', image: 'https://picsum.photos/seed/uiux/400/250' },
  { id: '8', title: 'Big Data Hadoop', category: 'Data', description: 'Process massive datasets using Hadoop ecosystem and Spark.', image: 'https://picsum.photos/seed/hadoop/400/250' },
  { id: '9', title: 'Salesforce Admin & Dev', category: 'CRM', description: 'Complete Salesforce training for Administrators and Developers.', image: 'https://picsum.photos/seed/salesforce/400/250' },
];

const Courses: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tech Skyline Courses</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore 100+ interactive online courses designed to build strong IT professionals. 
            From coding to cloud, we have it all.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <input 
            type="text" 
            placeholder="Search for a course (e.g. Java, AWS)..." 
            className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                  {course.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{course.description}</p>
                <div className="mt-auto border-t border-gray-100 pt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Duration: 10 Weeks</span>
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;