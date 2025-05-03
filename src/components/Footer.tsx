
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-data-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ajay Sreekumar</h3>
            <p className="text-white/80 mb-4">
              Data Scientist & Machine Learning Engineer focused on building practical solutions using AI and machine learning.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/AjaySreekumar47" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ajay-sreekumar-nmims/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-white/80 mb-2">
              Email: <a href="mailto:ajaysreekumar.nmims@gmail.com" className="hover:underline">ajaysreekumar.nmims@gmail.com</a>
            </p>
            <p className="text-white/80 mb-2">
              Phone: <a href="tel:+17758306747" className="hover:underline">+1-(775)-830-6747</a>
            </p>
            <p className="text-white/80 mb-4">
              Location: Arizona, USA
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Ajay Sreekumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
