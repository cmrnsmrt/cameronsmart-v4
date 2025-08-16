import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-tertiary border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Cameron Smart</h3>
            <p className="text-foreground-muted">
              Software Engineer specializing in software architecture, 
              passionate about building scalable and elegant solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/cameronsmart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/cameronsmart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:cameron@cameronsmart.dev"
                className="text-foreground-muted hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Resume", href: "#resume" },
                { label: "Blog", href: "#blog" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-foreground-muted hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Latest Blog Posts */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Latest Posts</h4>
            <div className="space-y-3">
              {[
                "Designing Resilient Microservices",
                "Event-Driven Architecture Guide",
                "My Software Engineering Journey"
              ].map((post, index) => (
                <button
                  key={index}
                  className="block text-sm text-foreground-muted hover:text-primary transition-colors text-left leading-relaxed"
                >
                  {post}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-card-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-foreground-muted text-sm">
            © {currentYear} Cameron Smart. All rights reserved.
          </p>
          <p className="text-foreground-muted text-sm flex items-center mt-4 sm:mt-0">
            Built with <Heart className="h-4 w-4 mx-1 text-accent" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;