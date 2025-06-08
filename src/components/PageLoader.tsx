
import { useState, useEffect } from 'react';

const PageLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
      {/* Logo Animation */}
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-pulse">
          LM
        </h1>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Progress Text */}
      <div className="mt-4 text-muted-foreground">
        <span className="text-lg font-medium">{progress}%</span>
      </div>

      {/* Loading Text */}
      <div className="mt-2 text-muted-foreground text-sm">
        Loading portfolio...
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-2 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PageLoader;
