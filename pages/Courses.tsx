
import React, { useState, useMemo } from 'react';
import { Course } from '../types';
import { Search, ListFilter, CheckCircle2, FlaskConical, Award, ShieldCheck, ToggleLeft, ToggleRight } from 'lucide-react';
import CourseModal from '../components/CourseModal';

const allCourses: Course[] = [
  { 
    id: '1', 
    title: 'Full Stack Java Engineering', 
    category: 'Development', 
    description: 'Master enterprise-level Java development with Spring Boot, Microservices, and React.', 
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    keyPoints: ['Microservices Architecture', 'Spring Security & OAuth2', 'React.js Frontend Integration', 'Jenkins CI/CD Automation'],
    curriculum: ['Core Java (JDK 17+)', 'Spring Framework & Boot', 'Hibernate & JPA', 'React Frontend Integration', 'RESTful API Development', 'MySQL Database Design'],
    prerequisites: ['Basic programming logic', 'Understanding of HTML/CSS'],
    instructor: { name: 'Dr. Michael Chen', bio: 'Senior Software Architect with 15+ years experience in Enterprise Java applications.' },
    hasLiveLab: true
  },
  { 
    id: '2', 
    title: 'AWS Cloud Architect Pro', 
    category: 'Cloud', 
    description: 'High-level cloud infrastructure design focusing on scalability, security, and performance.', 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    keyPoints: ['VPC Peering & Networking', 'Serverless (Lambda/DynamoDB)', 'IAM Enterprise Security', 'Cost Optimization Strategies'],
    curriculum: ['VPC & Networking', 'EC2 & Auto Scaling', 'S3 & CloudFront', 'IAM & Security', 'Serverless with Lambda', 'Well-Architected Framework'],
    prerequisites: ['Basic IT networking knowledge', 'Experience with virtualization'],
    instructor: { name: 'Sarah Jenkins', bio: 'Certified AWS Solutions Architect Professional.' },
    hasLiveLab: true
  },
  { 
    id: '3', 
    title: 'Data Science & AI/ML', 
    category: 'Data Science', 
    description: 'Transform raw data into predictive insights using Python and modern AI frameworks.', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    keyPoints: ['Predictive Modeling (ML)', 'Deep Learning with PyTorch', 'Data Visualization (Tableau)', 'Big Data Integration'],
    curriculum: ['Python for Data Science', 'NumPy & Pandas', 'Matplotlib & Seaborn', 'Scikit-Learn ML Models', 'Deep Learning Basics', 'SQL for Data Analysis'],
    prerequisites: ['Mathematical aptitude', 'Basic Python knowledge'],
    instructor: { name: 'Dr. Robert Vonn', bio: 'Data Scientist and former researcher at MIT.' },
    hasLiveLab: true
  },
  { 
    id: '4', 
    title: 'Ultimate DevOps Engineer', 
    category: 'DevOps', 
    description: 'The complete path to becoming a DevOps Pro: Docker, K8s, Terraform, and beyond.', 
    image: 'https://images.unsplash.com/photo-1618401471353-b74a07e9c331?auto=format&fit=crop&w=800&q=80',
    keyPoints: ['Kubernetes Orchestration', 'Infrastructure as Code (IaC)', 'DevSecOps Pipeline Security', 'Grafana/Prometheus Monitoring'],
    curriculum: ['Version Control (Git)', 'CI/CD Pipelines (Jenkins)', 'Containerization (Docker)', 'Orchestration (Kubernetes)', 'Infrastructure as Code (Terraform)', 'Monitoring (Prometheus/Grafana)'],
    prerequisites: ['Linux Administration basics', 'Scripting knowledge'],
    instructor: { name: 'Alex Rivera', bio: 'DevOps Lead at a Fortune 500 tech firm.' },
    hasLiveLab: true
  },
  { 
    id: '5', 
    title: 'Next-Gen Cyber Security', 
    category: 'Security', 
    description: 'Defend enterprise assets through ethical hacking and advanced threat modeling.', 
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    keyPoints: ['Penetration Testing Tools', 'Cloud Security Posture', 'Zero Trust Architecture', 'Incident Response Ops'],
    curriculum: ['Ethical Hacking Intro', 'Network Penetration Testing', 'Web App Security', 'Cryptography', 'Incident Response', 'Compliance'],
    prerequisites: ['Strong Networking basics'],
    instructor: { name: 'James Wilson', bio: 'CISSP Certified Professional.' },
    hasLiveLab: false
  },
  { 
    id: '6', 
    title: 'Salesforce Architect', 
    category: 'CRM', 
    description: 'Master the world\'s #1 CRM platform for both administration and complex development.', 
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    keyPoints: ['Apex Development', 'Lightning Web Components', 'Einstein AI Integration', 'SFDX Tooling'],
    curriculum: ['SFDC Configuration', 'Security & Access Models', 'Automation (Flows)', 'Apex Programming', 'LWC Framework'],
    prerequisites: ['Business process awareness'],
    instructor: { name: 'Anjali Gupta', bio: 'Salesforce MVP.' },
    hasLiveLab: true
  }
];

const Courses: React.FC = () => {
  const [sortBy, setSortBy] = useState<'title' | 'category'>('title');
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyLiveLabs, setShowOnlyLiveLabs] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filtered = useMemo(() => {
    return allCourses
      .filter(c => {
        const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              c.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLiveLab = showOnlyLiveLabs ? c.hasLiveLab : true;
        return matchesSearch && matchesLiveLab;
      })
      .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [searchTerm, sortBy, showOnlyLiveLabs]);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Technical <span className="text-gradient">Training Hub</span></h1>
          <p className="text-sky-900/60 font-medium max-w-2xl mx-auto text-lg">
            High-density skill building with industry-grade live labs and placement-focused curriculum.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-16 items-center">
          {/* Search */}
          <div className="relative flex-grow w-full lg:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" size={20} />
            <input 
              type="text" 
              placeholder="Search technologies..." 
              className="w-full pl-12 pr-6 py-4 rounded-2xl glass-card border-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium text-sky-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full lg:w-auto">
            {/* Live Lab Toggle */}
            <button 
              onClick={() => setShowOnlyLiveLabs(!showOnlyLiveLabs)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all shadow-sm ${
                showOnlyLiveLabs 
                ? 'bg-sky-600 border-sky-600 text-white shadow-sky-200' 
                : 'bg-white/50 backdrop-blur border-white text-sky-800'
              }`}
            >
              <FlaskConical size={20} className={showOnlyLiveLabs ? 'text-white' : 'text-sky-600'} />
              <span className="text-sm font-bold">Live Lab Access</span>
              {showOnlyLiveLabs ? <ToggleRight size={24} /> : <ToggleLeft size={24} className="text-sky-300" />}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 bg-white/50 backdrop-blur px-6 py-4 rounded-2xl border border-white shadow-sm min-w-[180px]">
              <ListFilter size={20} className="text-sky-600" />
              <span className="text-sm font-bold text-sky-800">Sort:</span>
              <select 
                className="bg-transparent font-bold text-sm focus:outline-none cursor-pointer flex-grow"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="title">Alphabetical</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-sky-900/40 text-sm font-bold uppercase tracking-widest">
            Showing {filtered.length} courses
          </p>
          {showOnlyLiveLabs && (
             <span className="text-[10px] font-black text-sky-600 bg-sky-100 px-3 py-1 rounded-full uppercase tracking-tighter">
               Filter Active: Live Lab Access Only
             </span>
          )}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map(course => (
              <div 
                key={course.id} 
                className="glass-card rounded-[2.5rem] border-2 border-white overflow-hidden group hover:border-sky-300 transition-all duration-500 shadow-xl flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                     {course.hasLiveLab && (
                       <div className="bg-sky-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
                          <FlaskConical size={12} /> Live Lab Access
                       </div>
                     )}
                     <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-sky-600 uppercase tracking-wider flex items-center gap-1 shadow-sm">
                        <Award size={12} /> Certified
                     </div>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-sky-500 bg-sky-50 px-2 py-0.5 rounded">{course.category}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-sky-600 transition-colors leading-tight">{course.title}</h3>
                  <p className="text-sky-800/60 text-sm mb-6 line-clamp-2 font-medium">{course.description}</p>
                  
                  <div className="space-y-2 mb-8">
                     <p className="text-xs font-black text-sky-900 uppercase tracking-widest mb-3">Key Highlights:</p>
                     {course.keyPoints.map((point, idx) => (
                       <div key={idx} className="flex items-center gap-2 text-sm text-sky-800 font-bold">
                          <CheckCircle2 size={16} className="text-green-500" /> {point}
                       </div>
                     ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-sky-100 flex flex-col gap-3">
                     <button 
                       onClick={() => setSelectedCourse(course)}
                       className="w-full py-4 bg-sky-600 text-white font-black rounded-2xl hover:bg-sky-700 transition-all shadow-lg shadow-sky-200"
                     >
                       Course Outline
                     </button>
                     <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-sky-400">
                        <ShieldCheck size={12} /> Job Assistance Included
                     </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center glass-card rounded-[3rem] border-white shadow-sm">
              <FlaskConical size={48} className="mx-auto text-sky-200 mb-6" />
              <h3 className="text-2xl font-black text-sky-900 mb-2">No Courses Found</h3>
              <p className="text-sky-800/50 font-medium">Try adjusting your search or filters to see more results.</p>
              <button 
                onClick={() => { setSearchTerm(''); setShowOnlyLiveLabs(false); }}
                className="mt-6 text-sky-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedCourse && <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />}
    </div>
  );
};

export default Courses;
