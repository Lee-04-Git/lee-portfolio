
import { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-secondary/50 border-t border-border">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">LM</h3>
            <p className="text-muted-foreground">
              Software Developer & Problem Solver
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 Lee Maalgraaff. All rights reserved.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              Thanks for visiting my portfolio!
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 glass glass-hover rounded-full transition-all duration-300 hover:scale-110 animate-bounce-in z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 text-primary" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
