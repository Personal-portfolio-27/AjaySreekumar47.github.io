
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export interface Project {
  title: string;
  description: string;
  shortDescription?: string;
  fullDescription?: string;
  imageUrl?: string;
  tags: string[];
  achievements: string[];
  githubUrl: string;
  demoUrl?: string;
  technologies?: string[];
  featured?: boolean;
  organization?: string;
  period?: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const isMobile = useIsMobile();

  const handleOpenDialog = () => {
    setShowFullDescription(true);
  };

  // Use a different layout for featured projects (full width)
  if (project.featured) {
    return (
      <>
        <Card className="col-span-full overflow-hidden card-hover bg-white">
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${isMobile ? 'h-48' : 'h-full'}`}>
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="h-full bg-gradient-to-r from-data-blue/10 to-data-highlight/10 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-data-blue/70">{project.title.split(' ').map(word => word[0]).join('')}</h3>
                </div>
              )}
            </div>
            <div className="p-4 md:p-6 flex flex-col">
              <CardHeader className="p-0 pb-3 md:pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{project.organization || ''}</div>
                <div className="text-xs md:text-sm text-muted-foreground mb-2">{project.period || ''}</div>
                <CardDescription>
                  <div className="flex flex-wrap mt-2">
                    {project.tags.slice(0, isMobile ? 3 : project.tags.length).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                    {isMobile && project.tags.length > 3 && (
                      <span className="tag">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 py-3 md:py-4 flex-grow">
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{project.shortDescription || project.description}</p>
                {project.achievements && project.achievements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs md:text-sm font-semibold">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-xs md:text-sm text-muted-foreground">
                      {project.achievements.slice(0, isMobile ? 2 : 3).map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="p-0 pt-3 md:pt-4 flex flex-col items-start gap-3 md:gap-4 mt-auto">
                {project.technologies && project.technologies.length > 0 && (
                  <div className="w-full">
                    <h4 className="text-xs md:text-sm font-semibold mb-1">Technologies:</h4>
                    <div className="flex flex-wrap">
                      {project.technologies.slice(0, isMobile ? 4 : project.technologies.length).map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                      {isMobile && project.technologies.length > 4 && (
                        <span className="tag">+{project.technologies.length - 4} more</span>
                      )}
                    </div>
                  </div>
                )}
                <div className="flex gap-2 w-full flex-col sm:flex-row">
                  {project.fullDescription && (
                    <Button 
                      variant="default" 
                      size={isMobile ? "sm" : "default"}
                      className="gap-2 w-full sm:flex-1" 
                      onClick={handleOpenDialog}
                    >
                      View More Details
                    </Button>
                  )}
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" size={isMobile ? "sm" : "default"} className="gap-2 flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    </Button>
                    {project.demoUrl && (
                      <Button variant="outline" size={isMobile ? "sm" : "default"} className="gap-2 flex-1" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardFooter>
            </div>
          </div>
        </Card>

        {/* Full Description Dialog */}
        <Dialog open={showFullDescription} onOpenChange={setShowFullDescription}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl">{project.title}</DialogTitle>
              <DialogDescription className="text-xs md:text-sm text-muted-foreground">
                {project.organization || ''} • {project.period || ''}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              {project.imageUrl && (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-40 md:h-64 object-cover rounded-md mb-4 md:mb-6"
                />
              )}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="whitespace-pre-line text-xs md:text-sm leading-relaxed">
                {project.fullDescription}
              </div>
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-4 md:mt-6">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
                <Button variant="outline" size={isMobile ? "sm" : "default"} className="gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" /> View on GitHub
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button variant="outline" size={isMobile ? "sm" : "default"} className="gap-2" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // Regular card for non-featured projects
  return (
    <Card className="overflow-hidden card-hover bg-white">
      <div className="h-36 sm:h-48 bg-gradient-to-r from-data-blue/10 to-data-highlight/10 flex items-center justify-center">
        <h3 className="text-xl sm:text-2xl font-bold text-data-blue/70">{project.title.split(' ').map(word => word[0]).join('')}</h3>
      </div>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap mt-1">
            {project.tags.slice(0, isMobile ? 2 : project.tags.length).map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
            {isMobile && project.tags.length > 2 && (
              <span className="tag">+{project.tags.length - 2}</span>
            )}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 pb-2 sm:p-6 sm:pt-0">
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{project.description}</p>
        {project.achievements && project.achievements.length > 0 && (
          <div className="space-y-1 sm:space-y-2">
            <h4 className="text-xs sm:text-sm font-semibold">Key Achievements:</h4>
            <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
              {project.achievements.slice(0, isMobile ? 2 : project.achievements.length).map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start gap-3 p-4 pt-2 sm:p-6">
        {project.technologies && project.technologies.length > 0 && (
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-1">Technologies:</h4>
            <div className="flex flex-wrap">
              {project.technologies.slice(0, isMobile ? 3 : project.technologies.length).map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
              {isMobile && project.technologies.length > 3 && (
                <span className="tag">+{project.technologies.length - 3}</span>
              )}
            </div>
          </div>
        )}
        <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" /> View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
