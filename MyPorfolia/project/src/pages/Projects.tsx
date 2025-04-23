import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Satellite Constellation Simulator',
      description: 'A sophisticated simulator for modeling orbital dynamics and communication networks of satellite constellations using Basilisk and BSK-RL.',
      image: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg',
      github: 'https://github.com/saqibsoomro09/satellite-sim',
      tech: ['Python', 'Basilisk', 'BSK-RL']
    },
    {
      title: 'Housing Insights Dashboard',
      description: 'Interactive dashboard for real estate market analysis with predictive analytics and visualization tools.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
      github: 'https://github.com/saqibsoomro09/housing-insights',
      demo: 'https://housing-insights.demo',
      tech: ['React', 'D3.js', 'Python']
    },
    {
      title: 'Network Monitor',
      description: 'Real-time network monitoring tool with alerts and performance analytics.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      github: 'https://github.com/saqibsoomro09/network-monitor',
      tech: ['Python', 'Flask', 'WebSocket']
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">My Recent Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-primary-400/10 text-primary-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <Github size={20} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
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