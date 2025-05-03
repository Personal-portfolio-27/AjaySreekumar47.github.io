import {
  Code,
  Database,
  ServerCog,
  Brain,
  Atom,
  MessageSquareCode,
  Cloud,
  Network,
  BarChart4,
  Github,
  AreaChart,
  FileSpreadsheet,
  Server,
  LineChart,
  GitBranch,
  Terminal,
  BarChart3,
  Boxes,
  Factory,
  Warehouse,
  PieChart,
  Languages,
  CreditCard,
  CircuitBoard,
  Clock,
  Share2,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  category: 'languages' | 'frameworks' | 'cloud' | 'tools' | 'databases' | 'bigData' | 'dataEng' | 'analytics' | 'machinelearning' | 'version' | 'otherSkills';
}

const skillsData: Skill[] = [
  // Languages & Technical Skills
  { name: 'Python', icon: Code, category: 'languages' },
  { name: 'R', icon: Terminal, category: 'languages' },
  { name: 'SQL', icon: Database, category: 'languages' },
  { name: 'Microsoft Excel', icon: FileSpreadsheet, category: 'languages' },
  
  // Big Data Technologies
  { name: 'Hadoop', icon: Boxes, category: 'bigData' },
  { name: 'Spark', icon: ServerCog, category: 'bigData' },
  { name: 'Kubernetes', icon: Server, category: 'bigData' },
  
  // Cloud Services
  { name: 'AWS', icon: Cloud, category: 'cloud' },
  { name: 'Azure', icon: Network, category: 'cloud' },
  { name: 'Google Cloud', icon: Cloud, category: 'cloud' },
  { name: 'Amazon S3', icon: Database, category: 'cloud' },
  { name: 'Lambda', icon: CircuitBoard, category: 'cloud' },
  { name: 'CloudWatch', icon: Clock, category: 'cloud' },
  { name: 'Athena', icon: Database, category: 'cloud' },
  { name: 'Glue', icon: Share2, category: 'cloud' },
  
  // Data Engineering
  { name: 'Data Ingestion', icon: Factory, category: 'dataEng' },
  { name: 'ETL', icon: Share2, category: 'dataEng' },
  { name: 'Data Warehousing', icon: Warehouse, category: 'dataEng' },
  
  // Web Analytics
  { name: 'Google Analytics', icon: BarChart3, category: 'analytics' },
  { name: 'SAS', icon: LineChart, category: 'analytics' },
  
  // Machine Learning Frameworks
  { name: 'TensorFlow', icon: Brain, category: 'machinelearning' },
  { name: 'PyTorch', icon: Atom, category: 'machinelearning' },
  { name: 'Keras', icon: Brain, category: 'machinelearning' },
  { name: 'LangChain', icon: MessageSquareCode, category: 'machinelearning' },
  
  // Database Technologies
  { name: 'SQL Server', icon: Database, category: 'databases' },
  { name: 'PostgreSQL', icon: Database, category: 'databases' },
  { name: 'Neo4j', icon: Share2, category: 'databases' },
  { name: 'Snowflake DB', icon: Cloud, category: 'databases' },
  
  // Data Visualization
  { name: 'Tableau', icon: BarChart4, category: 'tools' },
  { name: 'Power BI', icon: PieChart, category: 'tools' },
  
  // Version Control
  { name: 'Git', icon: GitBranch, category: 'version' },
  { name: 'GitHub', icon: Github, category: 'version' },
  { name: 'GitLab', icon: Github, category: 'version' },
  
  // Other Skills
  { name: 'English', icon: Languages, category: 'otherSkills' },
  { name: 'Hindi', icon: Languages, category: 'otherSkills' },
  { name: 'Malayalam', icon: Languages, category: 'otherSkills' },
];

const SkillItem = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-md border border-border shadow-sm hover:bg-data-light hover:border-data-blue/20 transition-all">
    <skill.icon className="h-4 w-4 text-data-blue flex-shrink-0" />
    <span className="text-xs">{skill.name}</span>
  </div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div className="mb-4">
    <h3 className="text-sm font-semibold mb-2 text-foreground/80">{title}</h3>
    <div className="grid grid-cols-3 gap-1.5">
      {skills.map((skill) => (
        <SkillItem key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  // Group skills by category
  const categories = {
    languages: skillsData.filter(skill => skill.category === 'languages'),
    bigData: skillsData.filter(skill => skill.category === 'bigData'),
    cloud: skillsData.filter(skill => skill.category === 'cloud'),
    dataEng: skillsData.filter(skill => skill.category === 'dataEng'),
    analytics: skillsData.filter(skill => skill.category === 'analytics'),
    machinelearning: skillsData.filter(skill => skill.category === 'machinelearning'),
    databases: skillsData.filter(skill => skill.category === 'databases'),
    tools: skillsData.filter(skill => skill.category === 'tools'),
    version: skillsData.filter(skill => skill.category === 'version'),
    otherSkills: skillsData.filter(skill => skill.category === 'otherSkills'),
  };

  return (
    <section id="skills" className="py-10 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title mb-8">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 gap-2">
            <SkillCategory title="Languages & Technical Skills" skills={categories.languages} />
            <SkillCategory title="Big Data Technologies" skills={categories.bigData} />
            <SkillCategory title="Cloud & Infrastructure" skills={categories.cloud} />
            <SkillCategory title="Data Engineering" skills={categories.dataEng} />
            <SkillCategory title="Analytics Tools" skills={categories.analytics} />
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            <SkillCategory title="Machine Learning Frameworks" skills={categories.machinelearning} />
            <SkillCategory title="Database Technologies" skills={categories.databases} />
            <SkillCategory title="Data Visualization" skills={categories.tools} />
            <SkillCategory title="Version Control" skills={categories.version} />
            <SkillCategory title="Languages" skills={categories.otherSkills} />
          </div>
        </div>

        <div className="mt-6 p-3 bg-data-light rounded-lg border border-data-blue/10">
          <h3 className="text-sm font-semibold mb-2">Additional Expertise</h3>
          <div className="flex flex-wrap gap-1.5 justify-center">
            <span className="px-2 py-0.5 bg-white text-xs rounded-full border border-border">Data Visualization</span>
            <span className="px-2 py-0.5 bg-white text-xs rounded-full border border-border">Statistical Analysis</span>
            <span className="px-2 py-0.5 bg-white text-xs rounded-full border border-border">NLP</span>
            <span className="px-2 py-0.5 bg-white text-xs rounded-full border border-border">LLMOps</span>
            <span className="px-2 py-0.5 bg-white text-xs rounded-full border border-border">CI/CD</span>
            <span className="px-2 py-0.5 bg-white text-xs rounded-full border border-border">Deep Learning</span>
            <span className="px-2 py-0.5 bg-white text-xs rounded-full border border-border">Time Series Analysis</span>
            <span className="px-2 py-0.5 bg-white text-xs rounded-full border border-border">ETL Pipelines</span>
            <span className="px-2 py-0.5 bg-white text-xs rounded-full border border-border">Data Engineering</span>
            <span className="px-2 py-0.5 bg-white text-xs rounded-full border border-border">Anomaly Detection</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
