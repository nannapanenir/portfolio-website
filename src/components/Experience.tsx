import { useState } from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  company?: string;
  institution?: string;
  location: string;
  date: string;
  description: string[];
  technologies?: string[];
}

export default function Experience() {
  const [filter, setFilter] = useState('all');
  
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'Enterprise Solutions Inc.',
      location: 'New York, NY',
      date: '2020 - Present',
      description: [
        'Lead the development of enterprise-grade applications using Java, Spring Boot, and Angular',
        'Designed and implemented microservices architecture for scalable and maintainable systems',
        'Mentored junior developers and conducted code reviews to ensure quality and adherence to best practices',
        'Implemented CI/CD pipelines using Jenkins and Docker for automated testing and deployment'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'AWS', 'Docker', 'Jenkins']
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Java Developer',
      company: 'TechInnovate Solutions',
      location: 'San Francisco, CA',
      date: '2017 - 2020',
      description: [
        'Developed and maintained RESTful APIs using Spring Boot and Hibernate',
        'Built responsive front-end interfaces with React.js and Angular',
        'Collaborated with UX/UI designers to implement intuitive user interfaces',
        'Optimized database queries and implemented caching strategies for improved performance'
      ],
      technologies: ['Java', 'Spring', 'Hibernate', 'React', 'Angular', 'MySQL']
    },
    {
      id: 3,
      type: 'education',
      title: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      date: '2015 - 2017',
      description: [
        'Specialized in Software Engineering and Distributed Systems',
        'Thesis: "Optimizing Microservices Communication in Distributed Systems"',
        'Relevant coursework: Advanced Algorithms, Cloud Computing, Database Systems, Machine Learning'
      ]
    },
    {
      id: 4,
      type: 'work',
      title: 'Junior Java Developer',
      company: 'Digital Solutions Corp',
      location: 'Boston, MA',
      date: '2014 - 2017',
      description: [
        'Developed and maintained Java-based web applications',
        'Implemented front-end components using JavaScript and jQuery',
        'Participated in Agile development processes including daily standups and sprint planning',
        'Conducted unit and integration testing to ensure software quality'
      ],
      technologies: ['Java', 'JavaScript', 'jQuery', 'Tomcat', 'Oracle DB']
    },
    {
      id: 5,
      type: 'education',
      title: 'Bachelor of Science in Computer Engineering',
      institution: 'MIT',
      location: 'Cambridge, MA',
      date: '2010 - 2014',
      description: [
        'GPA: 3.8/4.0',
        'Relevant coursework: Data Structures, Algorithms, Operating Systems, Database Management',
        'Senior Project: "Web-based Classroom Management System"'
      ]
    }
  ];

  const filteredTimeline = filter === 'all'
    ? timelineData
    : timelineData.filter(item => item.type === filter);

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              My professional journey and educational background that have shaped my skills and expertise.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-slate-700 p-1 rounded-lg shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2 rounded-md font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('work')}
                className={`px-5 py-2 rounded-md font-medium transition-colors ${
                  filter === 'work'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
                }`}
              >
                Work
              </button>
              <button
                onClick={() => setFilter('education')}
                className={`px-5 py-2 rounded-md font-medium transition-colors ${
                  filter === 'education'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
                }`}
              >
                Education
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>

            {filteredTimeline.map((item, index) => (
              <div key={item.id} className="mb-12 md:mb-0 relative">
                <div className={`flex flex-col md:flex-row items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 z-10"></div>
                  
                  {/* Date section (mobile only) */}
                  <div className="md:hidden mb-4 flex items-center justify-center w-full">
                    <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full font-medium text-sm flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {item.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-5/12 mb-8 md:mb-32 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div 
                      className={`bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                        item.type === 'work' ? 'border-l-4 border-blue-600 dark:border-blue-500' : 'border-l-4 border-indigo-600 dark:border-indigo-500'
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`p-2 rounded-lg mr-4 ${
                          item.type === 'work' 
                            ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400' 
                            : 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400'
                        }`}>
                          {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            {item.type === 'work' ? item.company : item.institution} • {item.location}
                          </p>
                        </div>
                      </div>
                      
                      {/* Date (desktop only) */}
                      <div className="hidden md:block mb-4">
                        <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                          {item.date}
                        </span>
                      </div>
                      
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {item.technologies && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout (desktop only) */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}