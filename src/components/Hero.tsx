import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>
      
      <div className="container max-w-6xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in-left">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-primary">Ratnakar</span> 
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Building elegant and high-performance web applications with passion and precision.
            Specialized in full-stack development with modern JavaScript, Python frameworks, AWS Ecosystems and getting famirialized with the latest Gen-AI technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact"
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02]"
            >
              Get in Touch
            </a>
            <a 
              href="#experience"
              className="px-6 py-3 rounded-lg bg-secondary text-foreground font-medium transition-all hover:bg-secondary/70 hover:shadow-md hover:scale-[1.02]"
            >
              View Experience
            </a>
            {/* <a 
              href="https://drive.google.com/file/d/12ONcUkYhWsJyND3JgWlntcJBMjZAiW0u/view?usp=sharing"
              className="px-6 py-3 rounded-lg bg-secondary text-foreground font-medium transition-all hover:bg-secondary/70 hover:shadow-md hover:scale-[1.02]"
              target='_blank'
            >
              View Resume
            </a> */}
          </div>
          
          <div className="flex items-center space-x-4 mt-8">
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
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative">
            {/* Replace with your actual image */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl animate-float">
                <img src='/Photo DP.jpg' alt='img'/>
            </div>
            
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-background border shadow-lg animate-scale-in">
              <span className="text-sm font-medium">Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-secondary hover:bg-primary/10 transition-all animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
