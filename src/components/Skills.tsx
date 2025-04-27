import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skills: Skill[] = [
    // Backend
    { name: 'Java', level: 95, category: 'backend' },
    { name: 'Spring', level: 90, category: 'backend' },
    { name: 'Spring Boot', level: 90, category: 'backend' },
    { name: 'Hibernate', level: 85, category: 'backend' },
    { name: 'RESTful APIs', level: 90, category: 'backend' },
    { name: 'Microservices', level: 85, category: 'backend' },
    
    // Frontend
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'React.js', level: 85, category: 'frontend' },
    { name: 'Angular', level: 90, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Redux', level: 75, category: 'frontend' },
    
    // Database
    { name: 'SQL', level: 90, category: 'database' },
    { name: 'Oracle', level: 85, category: 'database' },
    { name: 'MySQL', level: 85, category: 'database' },
    { name: 'MongoDB', level: 75, category: 'database' },
    
    // DevOps
    { name: 'AWS', level: 80, category: 'devops' },
    { name: 'Docker', level: 75, category: 'devops' },
    { name: 'Jenkins', level: 70, category: 'devops' },
    { name: 'Git', level: 85, category: 'devops' },
    
    // Other
    { name: 'Agile', level: 90, category: 'other' },
    { name: 'Data Structures', level: 85, category: 'other' },
    { name: 'Algorithms', level: 85, category: 'other' },
    { name: 'System Design', level: 80, category: 'other' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
    { id: 'other', name: 'Other' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'bg-green-500 dark:bg-green-600';
    if (level >= 80) return 'bg-blue-500 dark:bg-blue-600';
    if (level >= 70) return 'bg-indigo-500 dark:bg-indigo-600';
    return 'bg-purple-500 dark:bg-purple-600';
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Here are the technologies and methodologies I specialize in, reflecting years of experience in building robust applications.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-slate-700 p-5 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-slate-900 dark:text-white">{skill.name}</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getLevelColor(skill.level)}`} 
                      style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frontend Development</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                I create responsive, interactive, and user-friendly interfaces using modern JavaScript frameworks and libraries.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="mr-2">•</span>
                  Building SPAs with React.js and Angular (v14, v16, and v17)
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="mr-2">•</span>
                  State management with Redux, NgRx, and Context API
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="mr-2">•</span>
                  Responsive design with CSS frameworks like Bootstrap and Tailwind
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Backend Development</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                I design and implement scalable server-side applications and APIs using Java and Spring ecosystem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="mr-2">•</span>
                  RESTful API development with Spring Boot
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="mr-2">•</span>
                  Microservices architecture implementation
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="mr-2">•</span>
                  Database integration with Hibernate/JPA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}