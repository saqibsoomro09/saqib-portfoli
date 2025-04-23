import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Howl } from 'howler';

const Home: React.FC = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const navigate = useNavigate();
  
  const roles = [
    'Data Analyst',
    'Cloud Enthusiast',
    'Problem Solver',
    'Network Admin'
  ];

  useEffect(() => {
    const sound = new Howl({
      src: ['https://assets.codepen.io/385126/space-ambient.mp3'],
      volume: 0.1,
      loop: true,
      autoplay: false,
    });

    const playButton = document.getElementById('playButton');
    if (playButton) {
      playButton.addEventListener('click', () => {
        sound.play();
      });
    }

    return () => {
      sound.unload();
    };
  }, []);

  useEffect(() => {
    if (isTyping) {
      if (currentText.length < roles[currentRole].length) {
        const timeout = setTimeout(() => {
          setCurrentText(roles[currentRole].slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, currentRole, roles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello there, I'm <br />
            <span className="text-primary-400">Saqib Soomro</span>
          </h1>
          
          <div className="h-12">
            <p className="text-2xl md:text-3xl">
              <span className="text-primary-400">{currentText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Computer Science student majoring in Data Science at Swinburne University of Technology, 
            passionate about leveraging technology to solve real-world problems.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/saqibsoomro09"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/saqibsoomro098"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:saqibsoomro098@gmail.com"
              className="social-icon"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => navigate('/projects')}
            className="btn btn-primary mt-8"
          >
            View My Work
          </button>

          <button
            id="playButton"
            className="btn btn-outline mt-4"
            aria-label="Play background music"
          >
            🎵 Play Ambient Music
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;