import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const pointerPosition = useRef({ x: 50, y: 50 });
  const animationFrame = useRef<number>();

  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerPosition.current = {
      x: (event.clientX - bounds.left - bounds.width / 2) * 0.18,
      y: (event.clientY - bounds.top - bounds.height / 2) * 0.18,
    };

    if (!animationFrame.current) {
      animationFrame.current = requestAnimationFrame(() => {
        const { x, y } = pointerPosition.current;
        heroRef.current?.style.setProperty("--pattern-x", `${x}px`);
        heroRef.current?.style.setProperty("--pattern-y", `${y}px`);
        animationFrame.current = undefined;
      });
    }
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onPointerMove={handlePointerMove}
      className="min-h-screen flex items-center relative overflow-hidden hero-surface"
    >
      <div className="absolute inset-0 hero-grid" />
      <div className="relative z-10 max-w-7xl mx-auto section-padding w-full">
        <div className="grid lg:grid-cols-[1fr_0.42fr] gap-16 items-center">
          {/* Content */}
          <div className="hero-copy space-y-10 animate-fade-in">
            <div className="space-y-7">
              <p className="hero-kicker text-xs text-primary">Engineering leadership / Dundee, Scotland</p>
              <h1 className="text-5xl lg:text-7xl">
                I make complex systems <span className="gradient-text">easier to ship.</span>
              </h1>
              <p className="max-w-2xl text-xl lg:text-2xl text-foreground font-medium leading-snug">
                Cameron Smart is a Software Engineering Manager who leads from close to the work: in the architecture, the code, and the conversations that help teams do their best work.
              </p>
              <p className="max-w-xl text-base lg:text-lg text-foreground-muted leading-relaxed">
                I combine hands-on engineering with thoughtful leadership, helping teams modernise critical systems, make better decisions, and deliver software people can depend on.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-start pt-2">
              <button onClick={scrollToAbout} className="hero-button">
                See how I lead
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </button>
              <Button variant="outline" size="lg" className="resume-button" asChild>
                <a
                  href="https://linkedin.com/in/cameronstewartsmart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <a
                href="/content/cameron-smart-resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="resume-button">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-1">
              <a
                href="https://github.com/cmrnsmrt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors p-2"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/cameronstewartsmart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors p-2"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:cameron.smart@hotmail.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors p-2"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <div className="hero-proof grid grid-cols-2 sm:grid-cols-4 gap-y-6 border-t border-border pt-6">
              <div className="min-w-0">
                <p className="text-base sm:text-lg font-bold leading-tight text-foreground">STRONG GROWTH</p>
                <p className="break-words text-xs uppercase leading-tight tracking-wider text-foreground-muted">4 roles at NCR Atleos</p>
              </div>
              <div className="min-w-0 border-l border-border pl-4">
                <p className="text-base sm:text-lg font-bold leading-tight text-foreground">PMI PMP</p>
                <p className="break-words text-xs uppercase leading-tight tracking-wider text-foreground-muted">Project leadership</p>
              </div>
              <div className="min-w-0 border-l border-border pl-4">
                <p className="text-base sm:text-lg font-bold leading-tight text-foreground">PMI-ACP</p>
                <p className="break-words text-xs uppercase leading-tight tracking-wider text-foreground-muted">Agile delivery</p>
              </div>
              <div className="min-w-0 border-l border-border pl-4">
                <p className="text-base sm:text-lg font-bold leading-tight text-foreground">3</p>
                <p className="break-words text-xs uppercase leading-tight tracking-wider text-foreground-muted">Direct reports</p>
              </div>
            </div>
          </div>

          <aside className="hero-profile-panel animate-slide-up">
            <p className="brief-label text-xs text-primary">At a glance</p>
            <div className="mt-6 divide-y divide-border">
              <div className="py-4 first:pt-0">
                <p className="text-xs uppercase tracking-wider text-foreground-muted">Role</p>
                <p className="mt-1 text-lg font-semibold">Software Engineering Manager</p>
              </div>
              <div className="py-4">
                <p className="text-xs uppercase tracking-wider text-foreground-muted">Based</p>
                <p className="mt-1 text-lg font-semibold">Dundee, Scotland</p>
              </div>
              <div className="py-4">
                <p className="text-xs uppercase tracking-wider text-foreground-muted">Close to</p>
                <p className="mt-1 text-lg font-semibold">Python, Azure, and Kubernetes</p>
              </div>
              <div className="pt-4">
                <p className="text-xs uppercase tracking-wider text-foreground-muted">Known for</p>
                <p className="mt-1 text-lg font-semibold">People-first, hands-on leadership</p>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground-muted hover:text-primary transition-colors"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;