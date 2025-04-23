import React, { useState, useEffect } from 'react';
import TypewriterComponent from '../utils/Typewriter';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-light/20 to-space-dark pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="fade-in">
            <p className="text-primary-400 text-lg md:text-xl mb-2">Hello there, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Saqib Soomro<span className="text-primary-500">.</span>
            </h1>
          </div>
          
          <div className="slide-up">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6 h-12">
              <TypewriterComponent
                text={[
                  "Data Analyst",
                  "Network Engineer",
                  "Tech Explorer"
                ]}
                delay={2000}
                speed={100}
              />
            </h2>
          </div>
          
          <div className="slide-up" style={{ transitionDelay: '200ms' }}>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Computer Science student majoring in Data Science at Swinburne University of Technology, 
              passionate about leveraging technology to solve real-world problems.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 slide-up" style={{ transitionDelay: '300ms' }}>
            <a 
              href="https://github.com/saqibsoomro09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/saqibsoomro098" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:saqibsoomro098@gmail.com" 
              className="social-icon" 
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex justify-center mt-10 slide-up" style={{ transitionDelay: '400ms' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
          <ArrowDown size={24} className="text-primary-400" />
        </div>
      )}
    </section>
  );
};

export default Home;