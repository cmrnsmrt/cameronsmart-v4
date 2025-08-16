import { Code, Database, Cloud, GitBranch, Cpu, Globe } from "lucide-react";
const Skills = () => {
  const skillCategories = [{
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["TypeScript", "Python", "Java", "Go", "React", "Node.js", "Spring Boot", "FastAPI"],
    color: "primary"
  }, {
    title: "Architecture & Design",
    icon: Cpu,
    skills: ["Microservices", "Event-Driven Architecture", "Domain-Driven Design", "CQRS", "Clean Architecture"],
    color: "accent"
  }, {
    title: "Databases & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Elasticsearch", "Apache Cassandra"],
    color: "primary"
  }, {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD", "Monitoring & Observability"],
    color: "accent"
  }, {
    title: "Development Practices",
    icon: GitBranch,
    skills: ["Test-Driven Development", "Code Review", "Agile Methodologies", "Technical Leadership"],
    color: "primary"
  }, {
    title: "Integration & APIs",
    icon: Globe,
    skills: ["REST APIs", "GraphQL", "gRPC", "WebSockets", "Message Queues", "API Gateway Patterns"],
    color: "accent"
  }];
  const getColorClasses = (color: string) => {
    if (color === "primary") {
      return {
        icon: "text-primary",
        border: "border-primary/30",
        bg: "bg-primary/10"
      };
    }
    return {
      icon: "text-accent",
      border: "border-accent/30",
      bg: "bg-accent/10"
    };
  };
  return <section id="skills" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Technologies and methodologies I use to build robust, scalable systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
          const colors = getColorClasses(category.color);
          const IconComponent = category.icon;
          return <div key={index} className={`tech-card group hover:${colors.border}`}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${colors.bg} mr-4`}>
                    <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      <span className="text-foreground-muted">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>;
        })}
        </div>

        <div className="mt-16 text-center">
          <div className="tech-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary">Architecture Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold mb-2 text-accent">Scalability</h4>
                <p className="text-foreground-muted text-sm">Designing systems that grow gracefully with increasing load and complexity</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Maintainability</h4>
                <p className="text-foreground-muted text-sm">Creating clean, well-documented code that teams can easily understand and modify</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Reliability</h4>
                <p className="text-foreground-muted text-sm">Building fault-tolerant systems with proper monitoring, testing, and recovery mechanisms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;