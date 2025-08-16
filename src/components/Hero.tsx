import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";


const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-tertiary" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-lg animate-float" />
      <div className="absolute bottom-40 right-20 w-16 h-16 border border-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-primary/10 rounded-lg animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto section-padding text-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Cameron</span>
                <span className="block gradient-text">Smart</span>
              </h1>
              <p className="text-xl lg:text-2xl text-foreground-muted font-medium">
                Software Engineer | Software Architecture
              </p>
              <p className="text-lg text-foreground-muted max-w-lg mx-auto lg:mx-0">
                Passionate about solving complex problems through elegant software design. 
                I craft scalable architectures that turn ambitious ideas into reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button onClick={scrollToAbout} className="hero-button">
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </button>
              <Button variant="outline" size="lg" className="accent-button">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/cameronsmart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors p-2"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/cameronsmart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors p-2"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl animate-glow" />
              <img
                src="/lovable-uploads/89753888-5b5b-4aba-965e-6999e8fe4479.png"
                alt="Cameron Smart working with robotic automation equipment"
                className="relative z-10 w-full h-full object-cover rounded-2xl border border-card-border"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;