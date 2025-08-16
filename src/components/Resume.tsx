import { Download, MapPin, Calendar, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const experience = [
    {
      title: "Senior Software Architect",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      achievements: [
        "Led architecture redesign of core platform serving 10M+ users",
        "Reduced system latency by 40% through microservices migration",
        "Mentored team of 8 engineers on architectural best practices"
      ]
    },
    {
      title: "Software Engineering Lead",
      company: "InnovateTech",
      location: "Austin, TX",
      period: "2020 - 2022",
      achievements: [
        "Designed and implemented event-driven architecture for real-time systems",
        "Improved deployment frequency from weekly to daily releases",
        "Established code review standards and technical documentation practices"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupVenture",
      location: "Remote",
      period: "2018 - 2020",
      achievements: [
        "Built MVP from concept to 100K users in 18 months",
        "Implemented CI/CD pipeline reducing deployment time by 75%",
        "Contributed to scaling infrastructure to handle 10x user growth"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2016 - 2018",
      focus: "Distributed Systems & Software Architecture"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      period: "2012 - 2016",
      focus: "Magna Cum Laude"
    }
  ];

  return (
    <section id="resume" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto mb-8">
            A comprehensive overview of my career journey and achievements
          </p>
          <Button size="lg" className="hero-button">
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume (PDF)
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Work Experience</h3>
            {experience.map((job, index) => (
              <div key={index} className="tech-card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{job.title}</h4>
                    <div className="flex items-center text-accent font-medium mb-2">
                      <Building className="h-4 w-4 mr-1" />
                      {job.company}
                    </div>
                  </div>
                  <div className="flex flex-col sm:text-right text-foreground-muted text-sm">
                    <div className="flex items-center sm:justify-end">
                      <Calendar className="h-4 w-4 mr-1" />
                      {job.period}
                    </div>
                    <div className="flex items-center sm:justify-end mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-foreground-muted">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="tech-card mb-6">
                  <h4 className="font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-accent font-medium mb-1">{edu.school}</p>
                  <p className="text-foreground-muted text-sm mb-2">{edu.period}</p>
                  <p className="text-foreground-muted text-sm">{edu.focus}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Certifications</h3>
              <div className="space-y-4">
                {[
                  "AWS Solutions Architect Professional",
                  "Kubernetes Certified Application Developer",
                  "Google Cloud Professional Architect",
                  "Certified Scrum Master"
                ].map((cert, index) => (
                  <div key={index} className="tech-card">
                    <p className="font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Key Achievements</h3>
              <div className="tech-card">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-foreground-muted">Speaker at 5+ technical conferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-foreground-muted">Contributed to 15+ open source projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-foreground-muted">Published 20+ technical articles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-foreground-muted">Mentored 25+ junior developers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;