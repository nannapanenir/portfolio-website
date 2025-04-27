import { useState } from 'react';
import { Globe, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'dsa';
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Data Structures & Algorithms Library",
      description: "An open-source Java library of data structures and algorithms with comprehensive documentation and examples.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Java", "JUnit", "Maven"],
      githubUrl: "https://github.com/yourusername/dsa-library",
      features: [
        "Implementation of common data structures (linked lists, trees, graphs, etc.)",
        "Efficient sorting and searching algorithms",
        "Comprehensive test coverage with JUnit",
        "Detailed documentation with usage examples",
        "Performance analysis and benchmarking"
      ],
      category: 'dsa'
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product management, user authentication, and payment processing.",
      image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "AWS"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.example.com",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment integration",
        "Admin dashboard for inventory management"
      ],
      category: 'fullstack'
    },
    {
      id: 3,
      title: "Microservices Dashboard",
      description: "A monitoring dashboard for microservices architecture with real-time metrics and alerts.",
      image: "https://images.pexels.com/photos/5931131/pexels-photo-5931131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Java", "Spring Cloud", "Angular", "Docker", "Prometheus"],
      githubUrl: "https://github.com/yourusername/microservices-dashboard",
      features: [
        "Real-time monitoring of service health",
        "Visualization of service dependencies",
        "Performance metrics and analytics",
        "Alert configuration and notifications",
        "Service discovery integration"
      ],
      category: 'backend'
    },
    {
      id: 4,
      title: "Task Management System",
      description: "A project management tool with task tracking, team collaboration, and progress reporting.",
      image: "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Java", "Spring", "Angular", "PostgreSQL", "Jenkins"],
      githubUrl: "https://github.com/yourusername/task-management",
      liveUrl: "https://taskmanagement-demo.example.com",
      features: [
        "Task creation and assignment",
        "Kanban board visualization",
        "Progress tracking and reporting",
        "Team collaboration features",
        "Calendar integration and reminders"
      ],
      category: 'fullstack'
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React showcasing projects and skills.",
      image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/portfolio-website",
      liveUrl: "https://yourusername.github.io",
      features: [
        "Responsive design for all device sizes",
        "Dark/light mode toggle",
        "Project showcase with filtering",
        "Interactive skill visualization",
        "Contact form integration"
      ],
      category: 'frontend'
    },
    {
      id: 6,
      title: "Financial Management API",
      description: "A secure RESTful API for financial transaction processing and reporting.",
      image: "https://images.pexels.com/photos/5745760/pexels-photo-5745760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Java", "Spring Boot", "MongoDB", "Docker", "AWS"],
      githubUrl: "https://github.com/yourusername/financial-api",
      features: [
        "Secure authentication with JWT",
        "Transaction processing and validation",
        "Financial reporting and analytics",
        "Rate limiting and API throttling",
        "Comprehensive API documentation"
      ],
      category: 'backend'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'dsa', name: 'DSA' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Here are some of the projects I've worked on, demonstrating my skills in various technologies and domains.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={`#project-${project.id}`} 
                    className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:text-blue-700 dark:hover:text-blue-300 group-hover:underline"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {activeFilter === 'dsa' && (
            <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
              <div className="flex items-start mb-6">
                <Github className="mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Open Source DSA Project
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    My data structures and algorithms library is an open-source project that provides efficient implementations
                    of common algorithms and data structures in Java. It includes comprehensive documentation and examples to help
                    developers understand and use these fundamental building blocks in their own projects.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Key Features</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      Comprehensive implementation of common data structures
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      Efficient sorting and searching algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      Detailed documentation with usage examples
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Project Stats</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      50+ data structures and algorithms implemented
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      95% test coverage with JUnit
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      20+ contributors from around the world
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/yourusername/dsa-library" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}