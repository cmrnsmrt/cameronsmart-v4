import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
const Projects = () => {
  const projects = [{
    title: "Microservices E-Commerce Platform",
    description: "Architected and built a scalable e-commerce platform using microservices architecture, implementing event-driven communication patterns and distributed data management.",
    tech: ["Node.js", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
    github: "https://github.com/cameronsmart/ecommerce-microservices",
    demo: "https://demo.cameronsmart.dev/ecommerce",
    highlight: "Increased system scalability by 300% and reduced deployment time by 60%"
  }, {
    title: "Real-time Collaboration Tool",
    description: "Designed and developed a real-time collaboration platform with WebSocket architecture, operational transformation algorithms, and conflict resolution mechanisms.",
    tech: ["React", "WebSockets", "Node.js", "MongoDB", "AWS"],
    github: "https://github.com/cameronsmart/realtime-collab",
    demo: "https://demo.cameronsmart.dev/collab",
    highlight: "Supports 1000+ concurrent users with sub-100ms latency"
  }, {
    title: "AI-Powered Code Review System",
    description: "Built an intelligent code review system that analyzes code quality, detects potential issues, and suggests improvements using machine learning algorithms.",
    tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/cameronsmart/ai-code-review",
    demo: "https://demo.cameronsmart.dev/codereview",
    highlight: "Reduced code review time by 45% while improving quality metrics"
  }];
  return <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">A showcase of recent passion-driven side projects</p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => <div key={index} className="tech-card group">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-semibold">
                      {project.highlight}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tech}
                      </span>)}
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-card-border" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="accent-button">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>;
};
export default Projects;