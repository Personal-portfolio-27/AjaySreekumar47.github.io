
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  achievements: string[];
  githubUrl: string;
  technologies: string[];
}

const projects: Project[] = [
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
  return (
    <Card className="overflow-hidden card-hover bg-white">
      <div className="h-48 bg-gradient-to-r from-data-blue/10 to-data-highlight/10 flex items-center justify-center">
        <h3 className="text-2xl font-bold text-data-blue/70">{project.title.split(' ').map(word => word[0]).join('')}</h3>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap mt-1">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Key Achievements:</h4>
          <ul className="list-disc pl-5 text-sm text-muted-foreground">
            {project.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div>
          <h4 className="text-sm font-semibold mb-1">Technologies:</h4>
          <div className="flex flex-wrap">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
        <Button variant="outline" size="sm" className="gap-2" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" /> View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="max-w-3xl mb-10 text-muted-foreground">
          Explore some of my most significant projects that demonstrate my skills in
          <span className="highlight"> machine learning</span>,
          <span className="highlight"> data analysis</span>, and
          <span className="highlight"> predictive modeling</span>.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github className="w-5 h-5" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
