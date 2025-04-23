import React from 'react';
import { FileDown, Linkedin } from 'lucide-react';

// Note: This would be a real resume PDF that the user would provide
const RESUME_URL = "#"; // Replace with actual resume URL

const Resume: React.FC = () => {
  return (
    <section id="resume" className="section-padding bg-space-light/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title fade-in">Resume</h2>
        
        <div className="max-w-2xl mx-auto text-center mt-8 slide-up">
          <p className="text-gray-300 mb-10">
            I'm currently pursuing a Bachelor's degree in Computer Science with a major in Data Science 
            at Swinburne University of Technology. My academic journey has equipped me with 
            skills in data analysis, network engineering, and software development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href={RESUME_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center justify-center gap-2"
            >
              <FileDown size={20} />
              Download Resume
            </a>
            
            <a 
              href="https://linkedin.com/in/saqibsoomro098" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              View LinkedIn
            </a>
          </div>
          
          <div className="mt-14 border-t border-gray-700 pt-10 slide-up">
            <h3 className="text-xl font-bold mb-6 text-primary-400">Education</h3>
            
            <div className="bg-space-dark/50 p-6 rounded-lg border border-gray-800">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h4 className="text-lg font-medium text-white">Bachelor of Computer Science</h4>
                <span className="text-sm text-primary-400">2021 - Present</span>
              </div>
              <p className="text-sm text-gray-400 mb-1">Swinburne University of Technology</p>
              <p className="text-gray-300">Major in Data Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;