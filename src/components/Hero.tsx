import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    'Java Full Stack Developer',
    'Spring & Hibernate Expert',
    'React.js & Angular Developer',
    'Microservices Architect',
    'Cloud Computing (AWS) Specialist'
  ];

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(phrase.substring(0, displayText.length + 1));
        setTypingSpeed(100);
        
        if (displayText === phrase) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setDisplayText(phrase.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 -z-10"></div>
      
      <div className="absolute top-20 right-0 w-80 h-80 bg-blue-200/20 dark:bg-blue-500/10 rounded-full filter blur-3xl -z-5"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full filter blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
              Hello, I'm <span className="text-blue-600 dark:text-blue-400">Ramgopal Nannapaneni</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl text-slate-700 dark:text-slate-300 font-medium h-10">
              <span className="border-r-2 border-blue-600 dark:border-blue-400 pr-1">
                {displayText}
              </span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xl">
              I design and develop web applications with modern technologies, specializing in enterprise-grade solutions with Java, Spring, React, and Angular.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 text-slate-700 dark:text-white font-medium rounded-lg transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com/yourUsername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourUsername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" aria-label="Scroll down" className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-md text-blue-600 dark:text-blue-400">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}