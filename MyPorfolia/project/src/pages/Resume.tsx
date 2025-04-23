import React from 'react';
import { FileDown, Linkedin } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Resume</h2>
        
        <div className="card p-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Education</h3>
            <div className="text-gray-400">
              <p className="text-lg">Swinburne University of Technology</p>
              <p>Bachelor of Computer Science</p>
              <p>Major in Data Science</p>
              <p>GPA: 3.31 / 4</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Python', 'SQL', 'Git', 'Tableau', 'AWS', 'Networking'].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary-400/10 text-primary-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/path-to-resume.pdf"
              className="btn btn-primary flex items-center justify-center gap-2"
              download
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
        </div>
      </div>
    </section>
  );
};

export default Resume;