
import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  sourceCode: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`w-80 h-96 rounded-xl overflow-hidden glass transition-all duration-500 group hover:scale-105 animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Image Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-60'
        }`}></div>

        {/* Hover Overlay with Buttons */}
        <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
            aria-label="View live demo"
          >
            <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
            aria-label="View source code"
          >
            <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          </a>
        </div>

        {/* Loading Placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-secondary animate-pulse flex items-center justify-center">
            <Eye className="w-8 h-8 text-muted-foreground" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
