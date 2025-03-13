
import { useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'Material UI', level: 85 },
      { name: 'Ant Design', level: 90 },
      { name: 'Tailwind CSS', level: 85}
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Python', level: 90},
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 90 },
      { name: 'Flask', level: 85 },
      { name: 'Django', level: 80 },
      { name: 'FastAPI', level: 85 },
    ]
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 90 },
      { name: 'Firebase', level: 80 },
      { name: 'DynamoDB', level: 90 },
      { name: 'Redis', level: 80 },
    ]
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Amazon EC2', level: 85 },
      { name: 'Amazon S3', level: 90 },
      { name: 'Amazon ELB', level: 85 },
      { name: 'Git', level: 95 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'CI/CD', level: 85 },
    ]
  },
  {
    name: 'Other',
    skills: [
      { name: 'Data Structures', level: 90 },
      { name: 'Algorithms', level: 85 },
      { name: 'REST API', level: 95 },
      { name: 'Pandas', level: 80 },
      { name: 'NumPy', level: 75 },
      { name: 'Chart.js', level: 90 },
      { name: 'UI/UX Design', level: 90 },
      { name: 'Authentication & Authorization', level: 85},
    ]
  }
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title reveal">Technical Skills</h2>
        
        <div className="mt-8 flex justify-center reveal">
          <div className="inline-flex bg-card shadow-md rounded-lg p-1">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === category.name
                    ? 'bg-primary text-white'
                    : 'hover:bg-primary/10'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
          {skillCategories
            .find(category => category.name === activeCategory)
            ?.skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-background rounded-lg shadow-md p-6 card-hover"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      transition: 'width 1.5s ease-out',
                    }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
        
        <div className="mt-16 reveal">
          <div className="bg-background rounded-xl shadow-lg p-8 card-hover">
            <h3 className="text-xl font-bold mb-6 text-center">Additional Technical Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">Development</h4>
                <ul className="space-y-2">
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Object Oriented Programming (OOP)</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Latest AI-based tools and technologies</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Creating Designs and Workflows using Figma and Miro</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Designing, Developing and testing RESTful APIs</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-4">Data & Cloud</h4>
                <ul className="space-y-2">
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Data visualization with Chart.js</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Pandas, NumPy, Data Frames</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Amazon Web Services (AWS)</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>SQL and NoSQL databases</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Integrating Large Language Models (LLMs)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-4">Professional</h4>
                <ul className="space-y-2">
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Software Development Life Cycle</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>CI/CD Pipelines & Deployments</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Technical Documentation</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Jira, Confluence, GitHub</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Agile Methodologies</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
