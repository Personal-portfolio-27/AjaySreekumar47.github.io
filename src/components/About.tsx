
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="bg-card py-8">
      <div className="section-container py-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left column - Image */}
          <div className="bg-secondary/50 rounded-lg p-3 border border-border flex justify-center">
            <div className="aspect-square w-3/4 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/addda4bd-1bea-419f-8324-3ef467305ba7.png" 
                alt="Ajay Sreekumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="flex flex-col justify-center space-y-3">
            <p>
              I'm a passionate <span className="highlight">Data Scientist</span> and <span className="highlight">Machine Learning Engineer</span> with experience developing practical solutions to complex problems at NASA Jet Propulsion Laboratory, BAE Systems, Los Alamos National Lab, and Accenture.
            </p>
            
            <p>
              With a Master's in Data Science from the University of Arizona (GPA: 4.0), I specialize in building 
              <span className="highlight"> machine learning models</span>,
              <span className="highlight"> NLP pipelines</span>, and 
              <span className="highlight"> data-driven systems</span> that deliver actionable insights.
            </p>
            
            <p>
              My experience spans across various domains including 
              <span className="highlight"> Retrieval Augmented Generation (RAG)</span>, 
              <span className="highlight"> LLMOps</span>, and 
              <span className="highlight"> real-time analytics</span> systems.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-1">
              <Button variant="outline" asChild>
                <a href="#experience">View Experience</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#skills">See My Skills</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
