import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/use-analytics";

const Contact = () => {
  const { event } = useAnalytics();

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Looking for a thoughtful technical leader who still understands the code? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Start a conversation</h3>
              <p className="text-foreground-muted leading-relaxed mb-8">
                I am open to conversations about engineering leadership, architecture, team health, and difficult delivery problems. Tell me what you are working through, where the team is getting stuck, or what you want to build next.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href="mailto:cameron.smart@hotmail.co.uk" 
                    className="text-foreground-muted hover:text-primary transition-colors"
                  >
                    cameron.smart@hotmail.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-foreground-muted">Dundee, Scotland</p>
                  <p className="text-foreground-muted text-sm">Open to remote opportunities</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Find me elsewhere</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/cmrnsmrt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-4 rounded-lg border border-card-border hover:border-primary/30 transition-colors group"
                >
                  <Github className="h-6 w-6 text-foreground-muted group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/cameronstewartsmart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-4 rounded-lg border border-card-border hover:border-primary/30 transition-colors group"
                >
                  <Linkedin className="h-6 w-6 text-foreground-muted group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Direct email action */}
          <div className="tech-card">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Email me directly</h3>
            <p className="text-foreground-muted leading-relaxed mb-8">
              I would be glad to hear what you are working on, what is difficult, or where you think I could help.
            </p>
            <Button className="w-full hero-button" asChild>
              <a
                href="mailto:cameron.smart@hotmail.co.uk"
                onClick={() => event('email_click', 'contact', 'cameron.smart@hotmail.co.uk')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Cameron
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;