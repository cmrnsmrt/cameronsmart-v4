const About = () => {
  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How I <span className="gradient-text">lead</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            I stay technical so I can lead with context, and I lead people so good engineering can scale beyond one person.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Close to the work</h3>
              <p className="text-foreground-muted leading-relaxed">
                I started as a software engineer because I enjoy understanding how things work and making them better. Since graduating from Abertay University, I have grown from Software Engineer I through III to Software Engineering Manager at NCR Atleos, working on systems that support critical fintech and IoT infrastructure.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                I still write code, review designs, investigate problems, and get involved in the technical details. That hands-on perspective helps me ask better questions, remove blockers, and create the conditions for engineers to make confident decisions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">People make the system</h3>
              <p className="text-foreground-muted leading-relaxed">
                I strive to build teams where people have clarity, psychological safety, useful feedback, and room to grow. I set direction, protect focus, and make accountability feel supportive rather than punitive.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">What I optimise for</h3>
              <ul className="space-y-2 text-foreground-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"/>Clear priorities and honest communication</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"/>Simple, secure systems that teams can own</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"/>Feedback, coaching, and deliberate growth</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"/>Sustainable pace and inclusive collaboration</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">Where I add value</h4>
              <p className="text-foreground-muted">
                I lead the Smart Services engineering team at NCR Atleos, balancing roadmap delivery with the work that makes delivery sustainable: architecture, engineering standards, technical coaching, and removing friction for the team.
              </p>
            </div>

            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">Beyond the code</h4>
              <p className="text-foreground-muted">
                Outside work, I explore Scotland with my camera, volunteer as a STEM Youth Role Model, and support colleagues as a Mental Health Champion. I care about the person behind the role, because sustainable performance starts there.
              </p>
            </div>

            <div className="tech-card">
              <h4 className="text-xl font-semibold mb-4 text-accent">The kind of work I want</h4>
              <p className="text-foreground-muted">
                I am drawn to teams solving meaningful, difficult problems: especially where thoughtful leadership, strong engineering, and a willingness to improve can change the outcome. That might be a leadership role, an architecture challenge, or a conversation about how a team works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;