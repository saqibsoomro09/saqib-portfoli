import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-space-dark relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title fade-in">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-center text-gray-300 mb-10 fade-in">
            Feel free to reach out to me for collaborations, opportunities, or just to say hello!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
            <a 
              href="mailto:saqibsoomro098@gmail.com"
              className="card p-6 flex items-center gap-4 hover:bg-space-accent/30 transition-colors"
            >
              <div className="bg-primary-500/20 p-3 rounded-full text-primary-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                <p className="text-gray-400 text-sm break-all">saqibsoomro098@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/saqibsoomro098"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex items-center gap-4 hover:bg-space-accent/30 transition-colors"
            >
              <div className="bg-primary-500/20 p-3 rounded-full text-primary-400">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">LinkedIn</h3>
                <p className="text-gray-400 text-sm">linkedin.com/in/saqibsoomro098</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/saqibsoomro09"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex items-center gap-4 hover:bg-space-accent/30 transition-colors"
            >
              <div className="bg-primary-500/20 p-3 rounded-full text-primary-400">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">GitHub</h3>
                <p className="text-gray-400 text-sm">github.com/saqibsoomro09</p>
              </div>
            </a>
            
            <div className="card p-6 flex items-center gap-4">
              <div className="bg-primary-500/20 p-3 rounded-full text-primary-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                <p className="text-gray-400 text-sm">Melbourne, VIC, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;