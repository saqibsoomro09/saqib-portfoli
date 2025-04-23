import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string[];
  speed?: number;
  delay?: number;
}

const TypewriterComponent: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 100, 
  delay = 1500 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    if (!text.length) return;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < text[index].length) {
          setDisplayText(prev => prev + text[index][charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          // Finished typing, wait then start deleting
          setIsDeleting(true);
          clearTimeout(timer);
          setTimeout(() => {
            setIsDeleting(true);
          }, delay);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(text[index].substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          // Move to next text
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % text.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    
    return () => clearTimeout(timer);
  }, [text, index, charIndex, isDeleting, speed, delay]);
  
  return <span className="text-primary-500">{displayText}<span className="animate-pulse">|</span></span>;
};

export default TypewriterComponent;