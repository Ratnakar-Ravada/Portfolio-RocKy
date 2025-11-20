import { ArrowUp, Github, Heart, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-10 bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-primary">Ravada Ratnakar</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Full Stack Developer
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/Ratnakar-Ravada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ratnakar-ravada/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ratnakarravada11@gmail.com" 
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
