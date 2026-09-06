import { Code, Database, Cloud, GitBranch, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [{
    title: "I stay hands-on",
    icon: Code,
    skills: ["Python", "C#", "C++", "JavaScript", "React", "Node.js", "PowerShell", "Bash"],
    color: "primary"
  }, {
    title: "I improve the path to production",
    icon: Cloud,
    skills: ["Azure", "Kubernetes", "Docker", "GitHub Actions", "Jenkins", "Sonar", "Arnica"],
    color: "accent"
  }, {
    title: "I use leverage carefully",
    icon: Cpu,
    skills: ["Azure OpenAI", "Azure AI Foundry", "GitHub Copilot", "Automation", "Threat Modelling"],
    color: "primary"
  }, {
    title: "I help people do their best work",
    icon: GitBranch,
    skills: ["Servant Leadership", "Team Leadership", "Roadmapping", "Stakeholder Management", "Agile/Scrum", "TDD"],
    color: "accent"
  }, {
    title: "I make quality part of the flow",
    icon: Database,
    skills: ["Architecture Design", "CI/CD", "Security", "Compliance", "Git", "Jira", "Confluence"],
    color: "primary"
  }, {
    title: "I understand the context",
    icon: Globe,
    skills: ["Fintech Solutions", "ATM Systems", "Global IoT Deployment", "Enterprise Scale", "Predictive Maintenance"],
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

  return (
    <section id="skills" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I bring to a <span className="gradient-text">team</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A practical mix of architecture, delivery discipline, and the human skills needed to make change stick
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            return (
              <div key={index} className={`tech-card group hover:${colors.border}`}>
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
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="tech-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary">How I make decisions</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold mb-2 text-accent">Scalability</h4>
                <p className="text-foreground-muted text-sm">Choose an architecture that can grow without making every future change harder.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Maintainability</h4>
                <p className="text-foreground-muted text-sm">Leave code and decisions clear enough for the whole team to own.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Reliability</h4>
                <p className="text-foreground-muted text-sm">Build confidence through testing, observability, security, and thoughtful recovery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;