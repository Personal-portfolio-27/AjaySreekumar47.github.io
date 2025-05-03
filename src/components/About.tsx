
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="bg-data-light rounded-lg p-6 border border-data-blue/10">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-data-blue/10 to-data-blue/5 flex items-center justify-center">
              {/* Placeholder for profile image */}
              <div className="text-8xl font-bold text-data-blue/30">AS</div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="flex flex-col justify-center h-full">
            <div className="bg-gradient-to-r from-data-light to-transparent p-5 rounded-lg">
              <p className="mb-4">
                I'm a passionate Data Scientist and Machine Learning Engineer with experience developing practical solutions to complex problems at NASA JPL, BAE Systems, Los Alamos National Lab, and Accenture.
              </p>
              
              <p className="mb-4">
                With a Master's in Data Science from the University of Arizona (GPA: 4.0), I specialize in building 
                <span className="highlight"> machine learning models</span>,
                <span className="highlight"> NLP pipelines</span>, and 
                <span className="highlight"> data-driven systems</span> that deliver actionable insights.
              </p>
              
              <p className="mb-6">
                My experience spans across various domains including 
                <span className="highlight"> Retrieval Augmented Generation (RAG)</span>, 
                <span className="highlight"> LLMOps</span>, and 
                <span className="highlight"> real-time analytics</span> systems.
              </p>
              
              <div className="flex flex-wrap gap-4">
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
      </div>
    </section>
  );
};

export default About;
