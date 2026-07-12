import { Download, MapPin, Calendar, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/use-analytics";

const Resume = () => {
  const { event } = useAnalytics();
  const experience = [
    {
      title: "Software Engineering Manager",
      company: "NCR Atleos",
      location: "Dundee",
      period: "June 2026 - Current",
      achievements: [
        "Leading the Smart Services engineering team of 3 direct-report engineers, translating business priorities into delivery roadmaps and driving measurable business outcomes.",
        "Driving architecture review and modernisation of legacy systems into scalable, cloud-native services to improve resilience, accelerate delivery, and reduce operational risk.",
        "Supporting hiring, mentoring, and career development while strengthening engineering standards, delivery accountability, and stakeholder collaboration."
      ]
    },
    {
      title: "Software Engineer III",
      company: "NCR Atleos",
      location: "Dundee",
      period: "May 2025 - May 2026",
      achievements: [
        "Expanded responsibilities within the Smart Services team, contributing to delivery of secure, high-impact services in a fast-moving fintech environment.",
        "Partnered with cross-functional teams to implement remote servicing and operational tooling that improved field engineer efficiency and reduced time-to-resolution.",
        "Applied cloud-native engineering practices, CI/CD automation, and TDD to modernise legacy systems and improve reliability."
      ]
    },
    {
      title: "Software Engineer II",
      company: "NCR Atleos",
      location: "Dundee",
      period: "January 2025 - May 2025",
      achievements: [
        "Developed enterprise-grade Python applications to analyse ATM event data across the global NCR Atleos network, enabling predictive maintenance servicing.",
        "Owned and redesigned the team’s system architecture, conducting a full review and implementing a modernised design.",
        "Migrated infrastructure from legacy on-premises servers to a cloud-based CI/CD environment, introducing source control, automated testing, static analysis, and automated deployments."
      ]
    },
    {
      title: "Software Engineer I",
      company: "NCR Atleos",
      location: "Dundee",
      period: "July 2023 - January 2025",
      achievements: [
        "Developed the NCR Atleos IoT Enterprise OEM Windows image deployed on 285,000+ ATMs globally.",
        "Created tools for software integration and hardware testing of new components.",
        "Deployed and maintained cloud solutions on Microsoft Azure using Kubernetes and automated the OEM Windows image build process to save hundreds of hours annually."
      ]
    },
    {
      title: "Software Research Assistant",
      company: "Abertay University",
      location: "Dundee",
      period: "November 2022 - June 2023",
      achievements: [
        "Created a gamified bug bounty application using React and Node.js with a MongoDB backend to promote proactive vulnerability reporting and security awareness.",
        "Selected for web development excellence and an interest in meaningful computer interaction, with work included in published research around gamification in cybersecurity.",
        "Presented monthly updates to stakeholders on project progress and contributed to a platform that engaged students in security-focused learning."
      ]
    }
  ];

  const education = [
    {
      degree: "BSc (Hons) Computing",
      school: "Abertay University",
      period: "2019 - 2023",
      focus: "Software Engineering, Software Architecture, Cybersecurity, Human-Computer Interaction"
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
            A concise overview of my career journey, leadership experience, and technical achievements
          </p>
          <p className="text-lg text-foreground-muted max-w-4xl mx-auto mb-8">
            Results-driven Software Engineering Manager with a strong track record delivering secure, enterprise-scale solutions in fintech and IoT. I specialise in cloud-native architecture, CI/CD automation, and AI-enabled engineering practices while leading teams and modernising legacy environments.
          </p>
          <a
            href="/content/cameron-smart-resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => event('download', 'resume', 'resume_pdf')}
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
                  "Project Management Institute Project Management Professional (PMP) - Expected July 2026",
                  "Project Management Institute Agile Certified Practitioner (ACP) - May 2026",
                  "Project Management Institute Certified Associate in Project Management (CAPM) - January 2025",
                ].map((cert, index) => (
                  <div key={index} className="tech-card">
                    <p className="font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;