
import { Building, Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Pivony',
    location: 'Remote',
    period: 'Oct 2023 - Feb 2025',
    description: 'An AI based Voice of Customer platform which helps several brands and organizations to analyze the customer reviews across various platforms and provide detailed insights to compare with other brands and improve their customer experience.',
    projects: [
      {
        name: 'Competitor Analysis',
        details: [
          'Compared brands (e.g., Samsung, One Plus, Xiaomi) across categories (e.g., Mobiles, TVs) using reviews from platforms like X, Sikayet Var, Google Play, and App Store.',
          'Visualized data with bar, doughnut, and line charts grouped by brand, category, and time, with advanced filtering (date range, sentiment, platform).',
          'Enabled reviews display in a side-panel for each category/group for detailed insights.'
        ]
      },
      {
        name: 'Feedback Mechanism',
        details: [
          'Built a system for annotators to provide real-time category and decision-based feedback for the AI-analyzed reviews.',
          'Visualized sentiment and decision analytics in dashboards and improved prediction model accuracy using feedback.'
        ]
      },
      {
        name: 'Automated Report Generation',
        details: [
          'Implemented an Automated Reporting Tool that generates reports for the customers daily, weekly, monthly from AI analyzed customer data and emailing the reports leveraging Mail Chimp service.',
          'Integrated the same feature into the platform to generate Ad-hoc reports with users\' custom choice of filters like date range, sentiment, intent, categories etc.'
        ]
      }
    ],
    technologies: 'React.js, Python-flask, Amazon DynamoDB, Amazon EC2, Amazon S3, Amazon RDS',
    keyLearnings: 'Working with staging, production environments, Continuous Integration and Continuous Deployment(CI/CD), Nginx, Ubuntu, Linux, Design Patterns, Architectural Solutions, Agile work methods.',
    packages: 'Chart.js, Ant-Design, React-redux, React-router-dom, React-i18n, React-hooks, Boto3, Sqlalchemy, Scikit, Werkzeug, Flask-Pydantic, Genism, Playwright, PyPDF, Pandas'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Circle Security',
    location: 'Hyderabad, Telangana',
    period: 'Jan 2023 - Jul 2023',
    description: '',
    projects: [
      {
        name: 'File Management System',
        details: [
          'Developed a complete file management web application that eases the need to secure the data by encrypting it, along with Credential-free Authentication provided by Circle.',
          'Provided authentication adhering to OAuth 2.0 protocols using JWT, Bearer tokens and also enabled SSO with social media platforms.'
        ]
      }
    ],
    technologies: 'Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Bearer tokens, OAuth 2.0',
    keyLearnings: 'Credential-free Authentication by scanning QR Code, Digital Signatures, Cryptographic Algorithms like SHA-256 and Libraries like bcrypt, crypto and more.'
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title reveal">Professional Experience</h2>
        
        <div className="mt-12">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-16 last:mb-0 reveal">
              {/* Experience card with gradient border */}
              <div className="relative rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent p-[1px] shadow-lg">
                <div className="rounded-xl bg-background p-6">
                  {/* Header with timeline indicator */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 relative">
                    {/* Timeline dot with connecting line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] h-full bg-primary/20 hidden md:block" 
                         style={{ display: index === experiences.length - 1 ? 'none' : 'block' }}></div>
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center -translate-x-1/2 hidden md:flex">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    
                    {/* Job title and period */}
                    <div className="md:ml-8">
                      <h3 className="text-2xl font-bold text-primary">{experience.title}</h3>
                      <div className="flex items-center flex-wrap gap-4 mt-2">
                        <div className="flex items-center text-sm">
                          <Building className="w-4 h-4 mr-1 text-primary" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-1 text-primary" />
                          <span className="text-muted-foreground">{experience.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-1 text-primary" />
                          <span className="text-muted-foreground">{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  {experience.description && (
                    <div className="md:ml-8 mb-6">
                      <p className="text-muted-foreground">{experience.description}</p>
                    </div>
                  )}
                  
                  {/* Projects */}
                  <div className="md:ml-8 space-y-6">
                    {experience.projects.map((project, projIndex) => (
                      <div key={projIndex} className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/50 transition-all">
                        <h4 className="font-semibold text-lg mb-3 flex items-center">
                          <Briefcase className="w-4 h-4 mr-2 text-primary" />
                          {project.name}
                        </h4>
                        <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground ml-2">
                          {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="ml-2">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional details grid */}
                  <div className="md:ml-8 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {experience.technologies && (
                      <div className="bg-background border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-primary">Technologies</h4>
                        <p className="text-sm text-muted-foreground">{experience.technologies}</p>
                      </div>
                    )}
                    
                    {experience.keyLearnings && (
                      <div className="bg-background border border-border rounded-lg p-4 md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Key Learnings</h4>
                        <p className="text-sm text-muted-foreground">{experience.keyLearnings}</p>
                      </div>
                    )}
                    
                    {experience.packages && (
                      <div className="bg-background border border-border rounded-lg p-4 md:col-span-3">
                        <h4 className="font-semibold mb-2 text-primary">Packages & Libraries</h4>
                        <p className="text-sm text-muted-foreground">{experience.packages}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
