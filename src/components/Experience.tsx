
import { cn } from "@/lib/utils";

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logoUrl?: string;
}

const experiences: TimelineItem[] = [
  {
    company: "University of Arizona | NASA Jet Propulsion Laboratory | BAE Systems",
    role: "Machine Learning Researcher",
    period: "Jan 2025 - Present",
    description: "Built an AI Copilot using open-source LLMs and LangChain to enhance developer productivity and code quality.",
    achievements: [
      "Built an AI Copilot using open-source LLMs (7B–13B) and LangChain, improving code generation accuracy by 90%",
      "Reduced inference latency by 80% via optimized data pipelines and RAG integration",
      "Developed a VS Code plugin that boosted developer productivity by 30+ hours/month"
    ],
    technologies: ["LangChain", "Python", "Sentence Transformers", "Tiktoken", "Pydantic", "Lark", "FastAPI", "Docker", "Git", "VS Code API"],
    logoUrl: "/lovable-uploads/7f3a93c9-f007-4606-a745-d2c2dbebd44b.png"
  },
  {
    company: "Los Alamos National Laboratory",
    role: "Data Science Intern – LLMOps",
    period: "May 2024 - Aug 2024",
    description: "Advanced LLM operations and scientific modeling through evaluation frameworks and multi-modal techniques.",
    achievements: [
      "Engineered ML evaluation framework for 12 LLMs using CodeBLEU and stratified sampling",
      "Improved translation accuracy of Fortran-to-C++ by 42% using reinforcement learning",
      "Built ViT-based models for scientific forecasting; enhanced forecasting accuracy by 20%"
    ],
    technologies: ["PyTorch", "TensorFlow", "Vision Transformers", "CodeBLEU", "NumPy", "pandas", "SQL", "t-SNE", "UMAP", "Git"],
    logoUrl: "/lovable-uploads/3926183e-0908-4c50-9e55-408031bdb5e6.png"
  },
  {
    company: "Accenture Technology",
    role: "Application Development Analyst",
    period: "Jun 2018 - Jun 2021",
    description: "Led data engineering and analytics solutions for Mondelez International to improve business operations.",
    achievements: [
      "Created predictive models on CRM & transaction data; improved efficiency by 60%",
      "Built real-time streaming pipelines with Spark + Kafka + Azure Event Hubs",
      "Developed business dashboards with Tableau and AWS QuickSight, reducing reporting time by 90%"
    ],
    technologies: ["Python", "PySpark", "Spark SQL", "Spark Streaming", "Kafka", "Azure Event Hubs", "SQL", "NLTK", "Tableau", "AWS QuickSight", "BigQuery", "Git"],
    logoUrl: "/lovable-uploads/55dd4af5-ea17-4614-a004-c52eaddc277a.png"
  }
];

const TimelineItem = ({ item, isLast }: { item: TimelineItem, isLast: boolean }) => (
  <div className="relative pl-8 pb-8">
    {/* Timeline line */}
    <div className={cn(
      "absolute top-0 left-0 h-full w-px bg-border",
      isLast ? "h-8" : ""
    )}></div>
    
    {/* Timeline dot */}
    <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-data-blue -translate-x-1/2 flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-background"></div>
    </div>
    
    {/* Content */}
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start mb-2">
        <div className="flex items-center gap-3 mb-2 md:mb-0">
          {item.logoUrl && (
            <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
              <img 
                src={item.logoUrl} 
                alt={`${item.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <h3 className="text-xl font-bold text-foreground">{item.company}</h3>
        </div>
        <span className="text-sm text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">{item.period}</span>
      </div>
      <h4 className="text-lg font-medium text-data-blue mb-3">{item.role}</h4>
      
      <p className="text-muted-foreground mb-4">{item.description}</p>
      
      <div className="mb-4">
        <h5 className="text-sm font-semibold mb-2">Key Accomplishments:</h5>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          {item.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h5 className="text-sm font-semibold mb-2">Technologies:</h5>
        <div className="flex flex-wrap">
          {item.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-12">
          {experiences.map((exp, idx) => (
            <TimelineItem 
              key={exp.company} 
              item={exp} 
              isLast={idx === experiences.length - 1} 
            />
          ))}
        </div>
        
        <div className="mt-12 bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-bold mb-2">Education</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h4 className="font-semibold">University of Arizona</h4>
                <p className="text-muted-foreground">Master of Science, Data Science</p>
              </div>
              <div className="text-right">
                <p className="font-medium">GPA: 4.0/4.0</p>
                <p className="text-muted-foreground">2023 - 2025</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h4 className="font-semibold">Bachelor of Engineering</h4>
                <p className="text-muted-foreground">Electronics & Communications Engineering</p>
              </div>
              <div className="text-right">
                <p className="font-medium">GPA: 3.09/4.0</p>
                <p className="text-muted-foreground">2014 - 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
