const About = () => {
  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            My journey in software engineering and the philosophy that drives my work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">The Journey</h3>
              <p className="text-foreground-muted leading-relaxed">
                My career in software engineering began with a fascination for solving complex problems through technology. After graduating from Abertay University, I joined NCR Atleos and progressed from Software Engineer I through III to Software Engineering Manager, building enterprise-scale solutions that support critical fintech and IoT infrastructures.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                From delivering software for global ATM estates to modernising legacy systems with cloud-native architecture, Azure, Kubernetes, and CI/CD, I have learned that great software is built through collaboration, continuous improvement, and a commitment to security, scalability, and impact.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Philosophy</h3>
              <p className="text-foreground-muted leading-relaxed">
                I believe great engineering leadership should combine technical excellence with empathy, accountability, and clear communication. Whether I am guiding a team through delivery, shaping architecture, or improving processes, I focus on creating systems and teams that are resilient, meaningful, and sustainable.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Values</h3>
              <ul className="space-y-2 text-foreground-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"/>Leadership with empathy and accountability</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"/>Security and compliance by design</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"/>Continuous learning and mentoring</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"/>Diversity, inclusion, and STEM outreach</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">Current Focus</h4>
              <p className="text-foreground-muted">
                I am currently leading the Smart Services engineering team at NCR Atleos, shaping delivery roadmaps, supporting engineers’ growth, and helping modernise critical systems with cloud-native practices, AI-enabled automation, and strong engineering governance.
              </p>
            </div>

            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">When I'm Not Coding</h4>
              <p className="text-foreground-muted">
                When I am not coding, you will usually find me exploring Scotland and beyond with my camera, volunteering as a STEM Youth Role Model, or continuing my professional development through certifications such as PMI ACP and PMP. I am also a Mental Health Champion and care deeply about supporting others both professionally and personally.
              </p>
            </div>

            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">Let's Connect</h4>
              <p className="text-foreground-muted">
                I am always interested in discussing architecture patterns, emerging technologies, or collaborating on meaningful engineering challenges. Feel free to reach out if you would like to chat about software leadership, AI, or innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;