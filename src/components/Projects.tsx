
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { projects } from "./project/ProjectsData";
import { ProjectCard } from "./project/ProjectCard";

const Projects = () => {
  const isMobile = useIsMobile();
  
  // Add logos and images to projects
  const enhancedProjects = projects.map(project => {
    if (project.title.includes("AI Copilot") || project.organization?.includes("NASA")) {
      return {
        ...project,
        logoUrl: "/lovable-uploads/7f3a93c9-f007-4606-a745-d2c2dbebd44b.png" 
      };
    } else if (project.title.includes("LLM") || project.organization?.includes("Los Alamos")) {
      return {
        ...project,
        logoUrl: "/lovable-uploads/3926183e-0908-4c50-9e55-408031bdb5e6.png" 
      };
    } else if (project.title.includes("Analytics") || project.organization?.includes("Accenture")) {
      return {
        ...project,
        logoUrl: "/lovable-uploads/55dd4af5-ea17-4614-a004-c52eaddc277a.png"  
      };
    } else if (project.title.includes("Walmart")) {
      return {
        ...project,
        imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80" // Retail/inventory related image
      };
    } else if (project.title.includes("Taxi")) {
      return {
        ...project,
        imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80" // City/taxi related image
      };
    } else if (project.title.includes("Japanese") || project.title.includes("Credit")) {
      return {
        ...project,
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80" // Finance/banking related image
      };
    } else {
      // Default LLM-related image for other projects
      return {
        ...project,
        imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      };
    }
  });
  
  return (
    <section id="projects" className="py-10 sm:py-16">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="max-w-3xl mb-6 sm:mb-10 text-sm sm:text-base text-muted-foreground">
          Explore some of my most significant projects that demonstrate my skills in
          <span className="highlight"> machine learning</span>,
          <span className="highlight"> data analysis</span>, and
          <span className="highlight"> predictive modeling</span>.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {enhancedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <Button size={isMobile ? "sm" : "default"} asChild>
            <Link to="/projects" className="gap-2">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" /> View More Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
