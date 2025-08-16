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
                My fascination with software architecture began during my computer science studies, 
                where I discovered that the most elegant solutions often emerge from understanding 
                the deeper patterns and principles that govern complex systems.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                Over the years, I've had the privilege of working on diverse projects that challenged 
                me to think beyond just writing code—to architect solutions that scale, adapt, and 
                evolve with changing requirements while maintaining clarity and purpose.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Philosophy</h3>
              <p className="text-foreground-muted leading-relaxed">
                I believe that great software architecture is like a well-designed city—it should be 
                intuitive to navigate, efficient in its layout, and capable of growing organically 
                while preserving its core identity. Every line of code should serve a purpose, and 
                every architectural decision should be deliberate and well-reasoned.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Values</h3>
              <ul className="space-y-2 text-foreground-muted">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Simplicity over complexity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Collaboration and knowledge sharing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Continuous learning and improvement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Building solutions that matter
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">Current Focus</h4>
              <p className="text-foreground-muted">
                I'm currently exploring microservices architectures, event-driven systems, 
                and the intersection of DevOps and software architecture. Always excited 
                about emerging technologies that can solve real-world problems more effectively.
              </p>
            </div>

            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">When I'm Not Coding</h4>
              <p className="text-foreground-muted">
                You'll find me contributing to open-source projects, writing technical articles, 
                or mentoring junior developers. I believe in giving back to the community that 
                has given me so much throughout my career.
              </p>
            </div>

            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">Let's Connect</h4>
              <p className="text-foreground-muted">
                I'm always interested in discussing architecture patterns, emerging technologies, 
                or collaborating on interesting projects. Feel free to reach out if you'd like 
                to chat about software engineering or just connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;