import { Code, Server, Database, Users, Cloud, GitBranch } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              I'm a passionate Full Stack Java Developer with expertise in building enterprise applications
              and web solutions using modern technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Who I Am</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                I'm a Java Full Stack Developer with over 5 years of experience in designing, developing, and
                maintaining enterprise applications. My journey in software development has equipped me with
                a deep understanding of both frontend and backend technologies.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                I'm passionate about creating efficient, scalable, and user-friendly applications that solve
                real-world problems. I thrive in collaborative environments and enjoy the process of turning
                complex requirements into elegant technical solutions.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What I Do</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <Code size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Frontend Development</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Creating responsive, interactive UIs with React.js and Angular (v14, v16, v17)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <Server size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Backend Development</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Building robust server-side applications with Java, Spring, and Hibernate
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <Database size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Database Management</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Designing and optimizing database schemas with SQL and NoSQL solutions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <Cloud size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Cloud Services</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Deploying and maintaining applications on AWS cloud infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-2">5+</h3>
              <p className="text-blue-100">Years of Experience</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-2">30+</h3>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-2">10+</h3>
              <p className="text-blue-100">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}