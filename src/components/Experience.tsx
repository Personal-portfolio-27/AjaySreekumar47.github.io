
import { cn } from "@/lib/utils";

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: TimelineItem[] = [
  {
    company: "NASA JPL & BAE Systems",
    role: "Data Science Intern",
    period: "May 2023 - Aug 2023",
    description: "Developed NLP pipelines to extract and analyze technical documents for aerospace applications.",
    achievements: [
      "Built LangChain-based document processing pipeline",
      "Implemented Sentence Transformers for semantic search",
      "Improved information retrieval accuracy by 32%"
    ],
    technologies: ["LangChain", "Sentence Transformers", "Python", "HuggingFace", "FAISS", "AWS"]
  },
  {
    company: "Los Alamos National Lab",
    role: "Research Assistant",
    period: "Jan 2023 - May 2023",
    description: "Conducted research on Large Language Models and developed evaluation frameworks for code generation tasks.",
    achievements: [
      "Implemented LLMOps practices for model deployment",
      "Developed CodeBLEU evaluation metrics for code quality",
      "Created UMAP visualizations for model embeddings"
    ],
    technologies: ["PyTorch", "LLMs", "CodeBLEU", "UMAP", "Docker", "MLflow"]
  },
  {
    company: "Accenture",
    role: "Data Engineer",
    period: "Jun 2021 - Dec 2022",
    description: "Led the development of Spark-based streaming analytics solutions for real-time decision making.",
    achievements: [
      "Built Spark streaming pipelines for high-volume data",
      "Created interactive Tableau dashboards for business metrics",
      "Reduced data processing latency by 65%"
    ],
    technologies: ["Apache Spark", "Scala", "Kafka", "Tableau", "SQL", "Azure"]
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
      <div className="w-3 h-3 rounded-full bg-white"></div>
    </div>
    
    {/* Content */}
    <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
      <div className="flex flex-wrap justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-foreground">{item.company}</h3>
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
    <section id="experience" className="py-16 bg-secondary/50">
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
        
        <div className="mt-12 bg-data-light p-6 rounded-lg border border-data-blue/10">
          <h3 className="text-xl font-bold mb-2">Education</h3>
          <div className="flex flex-wrap justify-between items-start">
            <div>
              <h4 className="font-semibold">University of Arizona</h4>
              <p className="text-muted-foreground">Master's in Data Science</p>
            </div>
            <div className="text-right">
              <p className="font-medium">GPA: 4.0/4.0</p>
              <p className="text-muted-foreground">2021 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
