import React, { useState } from 'react';
import { Github, ExternalLink, Plus } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="projects" className="section-padding bg-space-dark relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title fade-in">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 stagger">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="card group hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    filter: 'brightness(0.8)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-4 z-10">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <p className={`text-gray-300 text-sm mb-4 ${
                  expandedProject === project.id 
                    ? '' 
                    : 'line-clamp-2'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => toggleProject(project.id)}
                    className="text-sm text-primary-400 hover:text-primary-300 inline-flex items-center gap-1"
                  >
                    <Plus size={16} />
                    {expandedProject === project.id ? 'Show less' : 'Read more'}
                  </button>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon" 
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon" 
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;