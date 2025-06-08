
import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import PageLoader from './PageLoader';
import CustomCursor from './CustomCursor';
import ParticleBackground from './ParticleBackground';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
      document.body.classList.toggle('light-mode', savedTheme === 'light');
    }

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
    document.body.classList.toggle('light-mode', newTheme === 'light');
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <CustomCursor />
      <ParticleBackground />
      
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
