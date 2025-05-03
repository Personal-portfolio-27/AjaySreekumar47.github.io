
import {
  Python,
  Sql,
  Spark,
  Tensorflow,
  Pytorch,
  Langchain,
  Aws,
  Azure,
  Tableau,
  Github,
  Linkedin
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  category: 'languages' | 'frameworks' | 'cloud' | 'tools';
}

const skillsData: Skill[] = [
  { name: 'Python', icon: Python, category: 'languages' },
  { name: 'SQL', icon: Sql, category: 'languages' },
  { name: 'Spark', icon: Spark, category: 'frameworks' },
  { name: 'TensorFlow', icon: Tensorflow, category: 'frameworks' },
  { name: 'PyTorch', icon: Pytorch, category: 'frameworks' },
  { name: 'LangChain', icon: Langchain, category: 'frameworks' },
  { name: 'AWS', icon: Aws, category: 'cloud' },
  { name: 'Azure', icon: Azure, category: 'cloud' },
  { name: 'Tableau', icon: Tableau, category: 'tools' },
  { name: 'GitHub', icon: Github, category: 'tools' }
];

const SkillItem = ({ skill }: { skill: Skill }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-border shadow-sm card-hover">
    <skill.icon className="h-10 w-10 mb-2 text-data-blue" />
    <span className="text-sm font-medium">{skill.name}</span>
  </div>
);

const Skills = () => {
  // Group skills by category
  const categories = {
    languages: skillsData.filter(skill => skill.category === 'languages'),
    frameworks: skillsData.filter(skill => skill.category === 'frameworks'),
    cloud: skillsData.filter(skill => skill.category === 'cloud'),
    tools: skillsData.filter(skill => skill.category === 'tools'),
  };

  return (
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Languages & Databases</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.languages.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.frameworks.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.cloud.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.tools.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-data-light rounded-lg border border-data-blue/10 text-center">
          <h3 className="text-xl font-semibold mb-2">Additional Expertise</h3>
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
