import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "NxtWave",
      position: "Frontend Development Faculty Trainee",
      period: "May 2025 – Present",
      location: "India (Hyderabad)",
      description:
        "Currently undergoing immersive training in frontend development. Actively contributing to curriculum design and project mentoring while developing interactive web interfaces using modern frontend technologies.",
      achievements: [
        "Hands-on experience with HTML, CSS, JavaScript, and React.js",
        "Creating high-quality frontend content and real-world UI projects",
        "Mentoring students and assisting in frontend skill-building assessments"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Git", "Responsive Design"],
      type: "full-time"
    },
    {
      company: "IBM Cognitive AI",
      position: "AI Analyst Intern",
      period: "June 2024 – July 2024",
      location: "India (Remote)",
      description:
        "Contributed to AI-driven solutions by leveraging IBM Watson for analyzing large datasets and producing actionable insights. Applied machine learning algorithms to optimize performance in real-world applications.",
      achievements: [
        "Utilized machine learning models for data analysis and process optimization",
        "Worked on extracting cognitive insights using IBM Watson’s AI platform",
        "Delivered data-driven reports enhancing business intelligence"
      ],
      technologies: ["Python", "ML", "IBM Watson", "Pandas", "Data Analysis"],
      type: "internship"
    }
  ];

  const education = [
    {
      institution: "Vellore Institute of Technology, Vellore",
      degree: "M.Tech Integrated in Software Engineering",
      period: "2020 – 2025",
      gpa: "CGPA: 8.27",
      highlights: [
        "Specialized in AI, Machine Learning, and Full-Stack Development",
        "Completed major projects in Deep Learning , NLP-based , Machine Learning and Data Mining",
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Professional Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-20" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 last:mb-0 animate-fade-in-up ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow z-10" />

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <Card className="glass-card hover:shadow-glow transition-all duration-500 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300">
                            {exp.position}
                          </h4>
                          <p className="text-accent font-semibold">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
                            {exp.period}
                          </span>
                          <div className="mt-2">
                            <span
                              className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                                exp.type === "full-time"
                                  ? "bg-primary/10 text-primary border border-primary/20"
                                  : "bg-accent/10 text-accent border border-accent/20"
                              }`}
                            >
                              {exp.type === "full-time" ? "Full-time" : "Internship"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Education</h3>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="glass-card hover:shadow-accent-glow transition-all duration-500 animate-fade-in-up"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-accent mb-2">{edu.degree}</h4>
                      <p className="text-lg font-semibold text-foreground">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.period}</p>
                    </div>
                    <div className="text-right mt-4 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-bold text-lg rounded-full border border-accent/20">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
