
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Project {
  title: string;
  description: string;
  shortDescription?: string;
  fullDescription?: string;
  imageUrl?: string;
  tags: string[];
  achievements: string[];
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "🚀 AI Copilot for Code Generation",
    description: "Developed an AI-driven coding Copilot using open-source LLMs and the LangChain framework, improving code generation accuracy by 90% and reducing inference latency by 80%.",
    shortDescription: "Developed an AI-driven coding Copilot using open-source LLMs and the LangChain framework, improving code generation accuracy by 90% and reducing inference latency by 80%. Leveraged advanced NLP techniques, retrieval-augmented generation (RAG), and custom VS Code tooling to enhance developer productivity and model performance.",
    fullDescription: `As a Machine Learning Researcher at the University of Arizona in collaboration with NASA Jet Propulsion Laboratory and BAE Systems, I spearheaded the development of an AI-powered coding Copilot that significantly enhances developer productivity and code quality using open-source large language models.

Key Contributions:

• AI-Driven Code Generation Copilot: Designed and deployed a domain-specific coding assistant using open-source LLMs (7B–13B parameters) orchestrated via the LangChain framework. Achieved a 90% increase in code generation accuracy through context-aware prompting and dynamic model chaining.

• Retrieval-Augmented Generation (RAG) Pipeline: Architected a custom RAG system leveraging Tiktoken BPE tokenization and L5-large Sentence Transformers (768-dimensional). Introduced cosine similarity thresholding for high-precision retrieval, boosting domain-specific relevance by 60%.

• Inference Optimization: Applied advanced data preprocessing techniques such as token normalization, dynamic chunking, and n-gram extraction. These optimizations reduced model inference latency from 3.8s to 0.74s, enabling near real-time performance.

• Syntactic and Semantic Validation: Developed a custom validation framework using Pydantic schemas and EBNF-based grammar rules compiled with Lark parsers, ensuring 100% syntactic compliance for generated code snippets.

• Developer Tooling: Built a VS Code plugin that integrates the Copilot as an inline assistant for developers. This tool enhances developer productivity by over 30 hours per month through intelligent code suggestions and auto-corrections.

• Few-Shot Fine-Tuning: Conducted low-resource fine-tuning of LLMs using curated domain-specific examples, improving grammar adherence and code reliability under limited annotated data conditions.

Impact:
This project demonstrates how tailored LLM architectures and optimized pipelines can be integrated into developer workflows, significantly advancing productivity, accuracy, and real-time usability in mission-critical environments like aerospace and defense.`,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["Machine Learning", "LLM", "RAG", "NLP"],
    achievements: ["90% increase in code generation accuracy", "80% reduction in inference latency", "30+ hours saved per month"],
    githubUrl: "https://github.com/username/ai-copilot",
    demoUrl: "https://ai-copilot.demo",
    technologies: ["LangChain", "PyTorch", "Sentence Transformers", "VS Code Extension API", "Pydantic", "Lark"],
    featured: true,
  },
  {
    title: "Walmart Demand Prediction",
    description: "Developed a time series forecasting model to predict product demand for Walmart stores, enabling better inventory management and reduced stockouts.",
    tags: ["Time Series", "Forecasting", "Machine Learning"],
    achievements: ["89% prediction accuracy", "Reduced inventory costs by 12%", "Optimized supply chain operations"],
    githubUrl: "https://github.com/username/walmart-demand-prediction",
    technologies: ["ARIMA", "Prophet", "Gradient Boosting", "Python", "Pandas"],
  },
  {
    title: "NYC Taxi Anomaly Detection",
    description: "Built an anomaly detection system for NYC taxi trip data to identify fraudulent activities and unusual patterns in real-time.",
    tags: ["Anomaly Detection", "Deep Learning", "AWS"],
    achievements: ["93% precision in anomaly detection", "AWS Lambda deployment", "Real-time monitoring capability"],
    githubUrl: "https://github.com/username/nyc-taxi-anomaly-detection",
    technologies: ["LSTM", "Isolation Forest", "AWS Lambda", "Docker", "TensorFlow"],
  },
  {
    title: "Japanese Credit Risk Analysis",
    description: "Designed and implemented a credit risk assessment model for a Japanese financial institution to improve loan approval decisions.",
    tags: ["Risk Analysis", "Classification", "Financial ML"],
    achievements: ["85%+ accuracy in risk prediction", "Real-time prediction system", "Reduced default rates by 17%"],
    githubUrl: "https://github.com/username/japanese-credit-risk",
    technologies: ["SVM", "Random Forest", "Feature Engineering", "scikit-learn", "XGBoost"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const isMobile = useIsMobile();

  const handleOpenDialog = () => {
    setShowFullDescription(true);
  };

  const handleCloseDialog = () => {
    setShowFullDescription(false);
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
                <div className="text-xs md:text-sm text-muted-foreground mt-1">University of Arizona | NASA JPL | BAE Systems</div>
                <div className="text-xs md:text-sm text-muted-foreground mb-2">Jan 2025 – Present</div>
                <CardDescription>
                  <div className="flex flex-wrap mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 py-3 md:py-4 flex-grow">
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{project.shortDescription || project.description}</p>
                <div className="space-y-2">
                  <h4 className="text-xs md:text-sm font-semibold">Key Achievements:</h4>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-muted-foreground">
                    {project.achievements.slice(0, isMobile ? 2 : 3).map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-0 pt-3 md:pt-4 flex flex-col items-start gap-3 md:gap-4 mt-auto">
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
                University of Arizona | NASA JPL | BAE Systems • Jan 2025 – Present
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
              <div className="mt-4 md:mt-6">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
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
        <div className="space-y-1 sm:space-y-2">
          <h4 className="text-xs sm:text-sm font-semibold">Key Achievements:</h4>
          <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
            {project.achievements.slice(0, isMobile ? 2 : project.achievements.length).map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-3 p-4 pt-2 sm:p-6">
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
        <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" /> View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

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
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
