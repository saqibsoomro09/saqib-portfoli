import React from 'react';
import { Database, Network, Globe, BarChart } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: "Python", icon: <Database size={20} />, category: "Data Science" },
    { name: "SQL", icon: <Database size={20} />, category: "Data Science" },
    { name: "FastAPI", icon: <Globe size={20} />, category: "Development" },
    { name: "React.js", icon: <Globe size={20} />, category: "Development" },
    { name: "AWS", icon: <Network size={20} />, category: "Infrastructure" },
    { name: "Cisco", icon: <Network size={20} />, category: "Infrastructure" },
    { name: "Tableau", icon: <BarChart size={20} />, category: "Visualization" },
    { name: "D3.js", icon: <BarChart size={20} />, category: "Visualization" },
    { name: "KNIME", icon: <Database size={20} />, category: "Data Science" },
    { name: "Docker", icon: <Network size={20} />, category: "Infrastructure" },
  ];

  return (
    <section id="about" className="py-20 bg-space-light/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title fade-in">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="fade-in">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary-400">My Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm passionate about using data and networking to build real-world solutions. My academic journey in Computer Science with a major in Data Science at Swinburne University has equipped me with both theoretical knowledge and practical skills.
              </p>
              <p>
                Currently, I'm working on exciting projects including satellite simulations, cloud applications, and big data pipelines. These projects allow me to combine my interests in data analysis, network engineering, and software development.
              </p>
              <p>
                I believe in continuous learning and staying current with emerging technologies. My goal is to leverage data science and networking to create innovative solutions that address complex challenges.
              </p>
            </div>
          </div>
          
          <div className="slide-up">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary-400">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 rounded-lg bg-space-accent/50 border border-gray-700 transition-transform hover:transform hover:scale-105"
                >
                  <div className="mr-2 text-primary-400">
                    {skill.icon}
                  </div>
                  <div>
                    <p className="font-medium text-white">{skill.name}</p>
                    <p className="text-xs text-gray-400">{skill.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;