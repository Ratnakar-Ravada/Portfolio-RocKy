import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: 'Competitor Analysis',
    description: 'Developed an interactive dashboard for brand comparison with advanced visualizations and detailed review insights.',
    images: [
      '/Comp-1.png',
      '/Comp-2.png',
      '/Comp-3.png',
      '/Comp-4.png',
      '/Comp-5.png'
    ],
    tags: ['React.js', 'Chart.js', 'Flask', 'Amazon DynamoDB', 'REST API'],
    features: [
      'Real-time comparison with Competitors',
      'Interactive filtering by date, sentiment, and platform',
      'Reviews of Group/Category in a side panel for detailed analysis',
      'Comparision on different basis(Groups, Categories, Sub-categories)'
    ]
  },
  {
    title: 'Automated Report Generator',
    description: 'A system that generates custom reports from customer data with user-defined filters and sends them via email.',
    images: [
      '/Report-1.png',
      '/Report-2.png',
      '/Report-3.png',
      '/Report-4.png',
      '/Report-5.png',
      '/Report-6.png',
    ],
    tags: ['Python', 'React.js', 'Chart.js', 'Playwright', 'CRON', 'MailChimp'],
    features: [
      'Scheduled reports (daily, weekly, monthly)',
      'Ad-hoc report generation with custom filters',
      'UI same as in the platform maintaining consistency',
    ]
  },
  {
    title: 'Secure File Management System',
    description: 'Web application for secure file storage and sharing with credential-free authentication and encryption.',
    images: [
      '/Homepage.png',
      '/Circle QR-Code.png',
      '/Circle Authenticated.jpg',
      '/Dashboard.png',
      '/File manager.png'
    ],
    tags: ['Vanilla JS', 'HTML', 'CSS', 'OAuth 2.0', 'Credential-free Authentication'],
    features: [
      'QR code-based authentication using Circle Access',
      'End-to-end file encryption by Circle Data',
      'Social media SSO integration',
      'Role-based access'
    ]
  },
  {
    title: 'Pivot Analysis',
    description: 'Analyzing the feedback from customers and displaying the analysis via interactive charts',
    images: [
      '/Pivot-1.png',
      '/Pivot-2.png',
      '/Pivot-3.png',
      '/Pivot-4.png'
    ],
    tags: ['React.js', 'Flask', 'REST API', 'Amazon DynamoDB', 'Chart.js'],
    features: [
      'Interactive doughnut charts',
      'Visualized the contrast between filtered and unfiltered data distributions for clearer insights and improved understanding.',
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
              className="bg-background rounded-xl shadow-lg overflow-hidden reveal card-hover border border-primary hover:border-2"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="h-64 overflow-hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="h-64 w-full overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-contain transform transition-transform duration-500"
                        />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
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
