
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center pt-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230078D4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
      </div>
      
      <div className="container z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-data-blue font-medium mb-2 animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-from-left">
            Ajay Sreekumar
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 font-medium mb-6 animate-slide-from-left" style={{ animationDelay: "0.1s" }}>
            Data Scientist & Machine Learning Engineer
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experienced in <span className="highlight">Machine Learning</span>, <span className="highlight">NLP</span>, 
            <span className="highlight"> LLMOps</span>, and <span className="highlight">Predictive Analytics</span>. 
            Master's in Data Science from University of Arizona with a perfect 4.0 GPA.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild className="animate-bounce hover:animate-none">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild className="hover-scale">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-data-blue transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
