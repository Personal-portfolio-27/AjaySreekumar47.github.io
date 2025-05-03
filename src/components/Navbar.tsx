
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/theme-provider";
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 shadow-sm backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg text-data-blue hover:text-data-blue/80 transition-colors">
          AS
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/80 hover:text-data-blue transition-colors"
            >
              {item}
            </a>
          ))}
          
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4 text-foreground" />
            <Switch 
              checked={isDark}
              onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
            />
            <Moon className="h-4 w-4 text-foreground" />
          </div>
        </nav>

        <Button variant="outline" size="sm" asChild>
          <a href="#contact">Get In Touch</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
