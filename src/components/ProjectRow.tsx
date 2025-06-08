
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  sourceCode: string;
}

interface ProjectRowProps {
  projects: Project[];
}

const ProjectRow = ({ projects }: ProjectRowProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 glass rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 -translate-x-4 group-hover:translate-x-0"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 glass rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 translate-x-4 group-hover:translate-x-0"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto hide-scrollbar pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <div key={project.id} className="flex-shrink-0">
            <ProjectCard 
              project={project} 
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-20"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-20"></div>
    </div>
  );
};

export default ProjectRow;
