import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold">
                <a href="#home" className="flex items-center">
                  <span className="text-blue-400">R</span>amgopal
                </a>
              </div>
              <p className="text-slate-400 mt-2 max-w-md">
                Full Stack Java Developer specializing in Spring, Hibernate, React.js, and Angular.
                Building robust and scalable web applications.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a>
                  </li>
                  <li>
                    <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
                  </li>
                  <li>
                    <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
                  </li>
                  <li>
                    <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Get in Touch</a>
                  </li>
                  <li>
                    <a href="mailto:nannapaneniramgopal@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                      nannapaneniramgopal@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+13022293790" className="text-slate-400 hover:text-white transition-colors">
                      +1 (302) 229-3790
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              &copy; {currentYear} Ramgopal Nannapaneni. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourUsername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourUsername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/yourUsername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:nannapaneniramgopal@gmail.com" 
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}