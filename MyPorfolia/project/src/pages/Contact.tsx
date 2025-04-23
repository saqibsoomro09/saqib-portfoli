import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="card p-6 flex items-center gap-4">
              <div className="text-primary-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:saqibsoomro098@gmail.com" className="text-gray-400 hover:text-primary-400">
                  saqibsoomro098@gmail.com
                </a>
              </div>
            </div>

            <div className="card p-6 flex items-center gap-4">
              <div className="text-primary-400">
                <Github size={24} />
              </div>
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <a 
                  href="https://github.com/saqibsoomro09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400"
                >
                  github.com/saqibsoomro09
                </a>
              </div>
            </div>

            <div className="card p-6 flex items-center gap-4">
              <div className="text-primary-400">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/saqibsoomro098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400"
                >
                  linkedin.com/in/saqibsoomro098
                </a>
              </div>
            </div>

            <div className="card p-6 flex items-center gap-4">
              <div className="text-primary-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">Melbourne, VIC, Australia</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-bold text-primary-400 mb-2">Thank you for reaching out!</h3>
                <p className="text-gray-400">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-space-dark border border-gray-700 focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-space-dark border border-gray-700 focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-space-dark border border-gray-700 focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;