
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { projects } from "./project/ProjectsData";
import { ProjectCard } from "./project/ProjectCard";

const Projects = () => {
  const isMobile = useIsMobile();
  
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
          {projects.map((project) => (
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
