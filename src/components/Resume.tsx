import { Download, MapPin, Calendar, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const experience = [
    {
      title: "Software Engineer III",
      company: "NCR Atleos",
      location: "Dundee",
      period: "May 2025 - Current",
      achievements: [
        "Co-ordinating with TeamViewer to deliver the future of ATM servicing using augmented reality",
        "Driving industry adopted best practices in containerisation by migrating from VMs to Azure managed Kubernetes",
        "Rearchitecting and redeveloping existing outdated systems from the ground up using TDD"
      ]
    },
    {
      title: "Software Engineer II",
      company: "NCR Atleos",
      location: "Dundee",
      period: "January 2025 - May 2025",
      achievements: [
        "Delivering enterprise-grade Python programs for preventative maintenance analysis of NCR Atleos ATMs",
        "Taking ownership of systems architecture through full review and redesign",
        "Migrating team environment from outdated local server to cloud-based CI/CD infrastructure",
        "Volunteering as STEM Youth Role Model and member of NCR Atleos Dundee Diversity culture crew"
      ]
    },
    {
      title: "Software Engineer I",
      company: "NCR Atleos",
      location: "Dundee",
      period: "July 2023 - January 2025",
      achievements: [
        "Developed NCR Atleos IoT Enterprise OEM Windows image deployed on 285,000+ ATMs globally",
        "Created tools for software integration and hardware testing of new components",
        "Deployed and maintained cloud solutions on Microsoft Azure using Kubernetes",
        "Refactored OEM Windows Image build process from manual to fully automated, saving 100s of hours annually"
      ]
    },
    {
      title: "Software Research Assistant",
      company: "Abertay University",
      location: "Dundee",
      period: "November 2022 - June 2023",
      achievements: [
        "Created gamified bug bounty application using React and Node.js with MongoDB backend",
        "Selected based on web development excellence and interest in meaningful computer interaction",
        "Work included in published research paper exploring gamification in cybersecurity",
        "Presented monthly updates to stakeholders on project progress"
      ]
    },
    {
      title: "Sales Assistant",
      company: "Currys PLC",
      location: "Dundee", 
      period: "October 2020 - June 2023",
      achievements: [
        "Consistently achieved 30 KPIs and remained within company's top 500 colleagues",
        "Completed 100% of company's skills matrix across multiple departments",
        "Selected as product reviewer for HP, Sage Appliances, Logitech and Google",
        "Achieved Mental Health Champion certificate from MHFA England"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelors of Science (Hons) in Computing",
      school: "University of Abertay Dundee",
      period: "2019 - 2023",
      focus: "Software Engiineering, Software Architecture, Cybersecurity, Human-Computer Interaction"
    },
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
          <a
            href="/content/cameron-smart-resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="hero-button" asChild>
              <span className="flex items-center">
                <Download className="mr-2 h-5 w-5"/>
                Download Full Resume (PDF)
              </span>
            </Button>
          </a>
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
                  "Project Management Institute Certified Associate in Project Management (CAPM)",
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
                    <span className="text-foreground-muted"></span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-foreground-muted"></span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-foreground-muted"></span>
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