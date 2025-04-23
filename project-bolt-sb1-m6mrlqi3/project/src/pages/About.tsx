import React from 'react';
import { Database, Network, Cloud, Shield, Brain } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { icon: <Network size={24} />, title: 'Networking', description: 'Network architecture and protocols' },
    { icon: <Database size={24} />, title: 'Data Analytics', description: 'Data processing and visualization' },
    { icon: <Cloud size={24} />, title: 'Cloud Computing', description: 'Cloud infrastructure and services' },
    { icon: <Shield size={24} />, title: 'Cybersecurity', description: 'Security fundamentals and best practices' },
    { icon: <Brain size={24} />, title: 'Machine Learning', description: 'ML algorithms and applications' },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">About Me</h2>
        
        <div className="prose prose-invert mx-auto">
          <p className="text-lg text-gray-300 mb-8">
            I'm a Computer Science (Data Science) student at Swinburne University. 
            I love solving complex problems with a mix of data science, networking, 
            and system engineering.
          </p>

          <h3 className="text-2xl font-bold text-primary-400 mb-6">Interests</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="card p-6 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)] transition-all duration-300"
              >
                <div className="text-primary-400 mb-4">{interest.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{interest.title}</h4>
                <p className="text-gray-400 text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;