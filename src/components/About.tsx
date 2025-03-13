
import { Briefcase, GraduationCap, MapPin, User } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title reveal">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 reveal">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                I'm a confident, result-oriented, motivated, and highly skilled Full Stack Engineer with 2 years of professional experience, specialized in building modern web applications using modern technologies.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
              I excel at creating complex UI components, implementing responsive designs that are compatible across all browsers and devices, and transforming complex designs and flow diagrams into clean, efficient code.
              </p>
              <p className="text-lg leading-relaxed mb-6">
              I am also skilled in resolving bugs, fixing the UX in frontend, optimizing the DB queries & API performance in the backend, improving data visualizations, designing, implementing and deploying full-scale web platforms from scratch. I ensure the reliability and security of applications by implementing latest and industry best practices. Additionally, I have experience in implementing CI/CD pipelines and managing automated deployments.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me playing badminton, watching movies, listening to music, exploring new places, or enjoying a game of cricket.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 shadow-sm">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Hyderabad, India</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 shadow-sm">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>Full Stack Engineer</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 shadow-sm">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Bachelors Degree in Information Technology</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 shadow-sm">
                <User className="w-5 h-5 text-primary" />
                <span>2+ Years Professional Experience</span>
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <div className="bg-background rounded-xl shadow-lg p-6 h-full card-hover">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Professional Attributes</h3>
              
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Excellent interpersonal and communication skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Logical thinking with strong analytical and problem-solving abilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Effective time management with great attention to detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Creative visualization and presentation skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Highly adaptable and collaborative team player</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Strong resilience, constantly striving for perfection</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mt-8 mb-4 border-b pb-2">Languages</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Professional</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Hindi</span>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Fluent</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Telugu</span>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Native</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
