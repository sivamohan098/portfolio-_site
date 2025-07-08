
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.github, '_blank');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-md hover:bg-gray-800/70 transition-all duration-300 cursor-pointer">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 font-medium">{project.company}</p>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.period}
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 pt-2">
                <Button
                  onClick={onClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                
                <Button
                  onClick={handleGithubClick}
                  variant="outline"
                  className="border-2 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 font-medium"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
