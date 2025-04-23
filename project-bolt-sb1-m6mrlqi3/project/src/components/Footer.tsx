import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-dark/80 backdrop-blur-md py-8 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a
              href="mailto:saqibsoomro098@gmail.com"
              className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/saqibsoomro09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/saqibsoomro098"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Saqib Soomro | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;