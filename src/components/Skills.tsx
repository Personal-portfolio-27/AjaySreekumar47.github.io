
import {
  Code, Database, ServerCog, Brain, Atom, MessageSquareCode, Cloud, 
  Network, BarChart4, Github, AreaChart, FileSpreadsheet, Server, 
  LineChart, GitBranch, Terminal, BarChart3, Boxes, Factory, 
  Warehouse, PieChart, Languages, CircuitBoard, Clock, Share2
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

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
  <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-data-light/80 transition-colors">
    <skill.icon className="h-4 w-4 text-data-blue flex-shrink-0" />
    <span className="text-sm font-medium">{skill.name}</span>
  </div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <Card className="h-full border-data-blue/10 shadow-sm">
    <div className="p-2 border-b bg-data-light/30">
      <h3 className="text-xs font-semibold text-data-blue">{title}</h3>
    </div>
    <CardContent className="p-3">
      <div className="grid grid-cols-2 gap-1">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </CardContent>
  </Card>
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
    <section id="skills" className="py-6 bg-secondary/50">
      <div className="section-container py-6">
        <h2 className="section-title mb-4">Technical Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          <SkillCategory title="Languages & Technical Skills" skills={categories.languages} />
          <SkillCategory title="Big Data Technologies" skills={categories.bigData} />
          <SkillCategory title="Cloud Services" skills={categories.cloud} />
          <SkillCategory title="Data Engineering" skills={categories.dataEng} />
          <SkillCategory title="Analytics Tools" skills={categories.analytics} />
          <SkillCategory title="Machine Learning" skills={categories.machinelearning} />
          <SkillCategory title="Database Technologies" skills={categories.databases} />
          <SkillCategory title="Data Visualization" skills={categories.tools} />
          <SkillCategory title="Version Control" skills={categories.version} />
          <SkillCategory title="Languages" skills={categories.otherSkills} />
        </div>

        <div className="mt-4 p-2 bg-data-light/80 rounded-lg border border-data-blue/10">
          <h3 className="text-xs font-semibold mb-1.5 text-data-blue">Additional Expertise</h3>
          <div className="flex flex-wrap gap-1 justify-center">
            <span className="px-1.5 py-0.5 bg-white text-[11px] rounded-full border border-data-blue/20 shadow-sm">Data Visualization</span>
            <span className="px-1.5 py-0.5 bg-white text-[11px] rounded-full border border-data-blue/20 shadow-sm">Statistical Analysis</span>
            <span className="px-1.5 py-0.5 bg-white text-[11px] rounded-full border border-data-blue/20 shadow-sm">NLP</span>
            <span className="px-1.5 py-0.5 bg-white text-[11px] rounded-full border border-data-blue/20 shadow-sm">LLMOps</span>
            <span className="px-1.5 py-0.5 bg-white text-[11px] rounded-full border border-data-blue/20 shadow-sm">CI/CD</span>
            <span className="px-1.5 py-0.5 bg-white text-[11px] rounded-full border border-data-blue/20 shadow-sm">Deep Learning</span>
            <span className="px-1.5 py-0.5 bg-white text-[11px] rounded-full border border-data-blue/20 shadow-sm">Time Series Analysis</span>
            <span className="px-1.5 py-0.5 bg-white text-[11px] rounded-full border border-data-blue/20 shadow-sm">ETL Pipelines</span>
            <span className="px-1.5 py-0.5 bg-white text-[11px] rounded-full border border-data-blue/20 shadow-sm">Data Engineering</span>
            <span className="px-1.5 py-0.5 bg-white text-[11px] rounded-full border border-data-blue/20 shadow-sm">Anomaly Detection</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
