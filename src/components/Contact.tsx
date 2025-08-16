import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Have a project in mind or want to discuss software architecture? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get in Touch</h3>
              <p className="text-foreground-muted leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, challenging projects, 
                or just having a conversation about software architecture and engineering. 
                Whether you're looking for technical leadership, architectural consulting, 
                or just want to connect with a fellow engineer, don't hesitate to reach out.
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
              <h4 className="text-lg font-semibold text-primary">Follow Me</h4>
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

            <div className="tech-card">
              <h4 className="font-semibold mb-3 text-accent">Response Time</h4>
              <p className="text-foreground-muted text-sm">
                I typically respond to messages within 24-48 hours. For urgent matters, 
                feel free to mention it in your message subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="tech-card">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background-tertiary border-card-border focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background-tertiary border-card-border focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background-tertiary border-card-border focus:border-primary"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background-tertiary border-card-border focus:border-primary resize-none"
                  placeholder="Tell me about your project, question, or just say hello..."
                />
              </div>

              <Button type="submit" className="w-full hero-button">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;