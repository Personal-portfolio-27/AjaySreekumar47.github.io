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
  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-border shadow-sm card-hover">
    <skill.icon className="h-5 w-5 text-data-blue flex-shrink-0" />
    <span className="text-sm">{skill.name}</span>
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
    <section id="skills" className="py-12 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Languages & Technical Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.languages.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          
            <h3 className="text-lg font-semibold mt-4 mb-3">Big Data Technologies</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.bigData.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          
            <h3 className="text-lg font-semibold mt-4 mb-3">Cloud & Infrastructure</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.cloud.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mt-4 mb-3">Data Engineering</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.dataEng.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Analytics Tools</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.analytics.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mt-4 mb-3">Machine Learning Frameworks</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.machinelearning.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mt-4 mb-3">Database Technologies</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.databases.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mt-4 mb-3">Data Visualization</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.tools.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mt-4 mb-3">Version Control</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.version.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mt-4 mb-3">Languages</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.otherSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-data-light rounded-lg border border-data-blue/10 text-center">
          <h3 className="text-lg font-semibold mb-2">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="tag">Data Visualization</span>
            <span className="tag">Statistical Analysis</span>
            <span className="tag">NLP</span>
            <span className="tag">LLMOps</span>
            <span className="tag">CI/CD</span>
            <span className="tag">Deep Learning</span>
            <span className="tag">Time Series Analysis</span>
            <span className="tag">ETL Pipelines</span>
            <span className="tag">Data Engineering</span>
            <span className="tag">Anomaly Detection</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
