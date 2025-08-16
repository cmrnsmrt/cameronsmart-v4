const About = () => {
  return <section id="about" className="section-padding bg-background-secondary">
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
                My journey in software engineering started with a fascination for solving complex problems through technology. 
                After completing my studies, I joined NCR Atleos where I've progressed from Software Engineer I to III, 
                working on enterprise-scale fintech solutions that serve millions of users worldwide.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                From developing IoT systems deployed on 285,000+ ATMs globally to architecting predictive maintenance 
                solutions using Python and Azure, I've learned that great software is built through collaboration, 
                continuous learning, and a commitment to delivering solutions that truly matter.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Philosophy</h3>
              <p className="text-foreground-muted leading-relaxed">I believe that great software architecture should serve people first. Whether it's ensuring ATMs are available when customers need cash or creating tools that help engineers work more efficiently, technology should solve real problems and create positive impact. I focus on building systems that are not just technically sound, but also meaningful and sustainable.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Values</h3>
              <ul className="space-y-2 text-foreground-muted">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Innovation through collaboration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Continuous improvement and learning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Using technology for positive change
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Commitment to diversity and inclusion
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">Current Focus</h4>
              <p className="text-foreground-muted">Currently at NCR Atleos, I'm working on the future of ATM servicing using cutting-edge technologies like augmented reality and cloud-native architectures. I'm also passionate about mentoring others, volunteering as a STEM Youth Role Model, and contributing to diversity initiatives in tech.</p>
            </div>

            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">When I'm Not Coding</h4>
              <p className="text-foreground-muted">When I'm not coding, you'll find me exploring Scotland and beyond with my camera, pursuing new certifications (recently achieved PMI CAPM), or teaching STEM to primary school children. I'm also a Mental Health Champion, reflecting my commitment to supporting others both professionally and personally.</p>
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
    </section>;
};
export default About;