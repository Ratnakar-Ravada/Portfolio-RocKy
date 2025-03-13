const projects = [
  {
    title: 'Competitor Analysis',
    description: 'Interactive dashboard for brands to compare customer sentiment and reviews across multiple platforms and categories.',
    image: '/placeholder.svg',
    tags: ['React.js', 'Chart.js', 'Flask', 'Amazon DynamoDB', 'REST API'],
    features: [
      'Real-time visualization of competitor data',
      'Interactive filtering by date, sentiment, and platform',
      'Side panel for detailed review analysis',
      'Export and sharing capabilities'
    ]
  },
  {
    title: 'Automated Report Generator',
    description: 'AI-driven tool that generates custom reports from customer data with user-defined filters and sends them via email.',
    image: '/placeholder.svg',
    tags: ['Python', 'React.js', 'Chart.js', 'Playwright', 'CRON', 'MailChimp'],
    features: [
      'Scheduled reports (daily, weekly, monthly)',
      'Ad-hoc report generation with custom filters',
      'Branded PDF export options',
      'Email integration with delivery tracking'
    ]
  },
  {
    title: 'Secure File Management System',
    description: 'Web application for secure file storage and sharing with credential-free authentication and encryption.',
    image: '/placeholder.svg',
    tags: ['Vanilla JS', 'HTML', 'CSS', 'OAuth 2.0', 'Credential-free Authentication'],
    features: [
      'QR code-based authentication',
      'End-to-end file encryption',
      'Social media SSO integration',
      'Granular access control system'
    ]
  },
  {
    title: 'Pivot Analysis',
    description: 'Analyzing the feedback from customers and displaying the analysis via interactive charts',
    image: '/placeholder.svg',
    tags: ['React.js', 'Flask', 'REST API', 'Amazon DynamoDB', 'Chart.js'],
    features: [
      'Interactive charts (Doughnut and Line)',
      'Filtering of the reviews based on a key column (Pivot) through a Multi-level Dropdown',
      'Union and Intersection among multiple pivot filters',
    ]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title reveal">Featured Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl shadow-lg overflow-hidden reveal card-hover"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="h-56 overflow-hidden bg-primary/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
