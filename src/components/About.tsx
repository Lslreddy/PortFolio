import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "1", label: "Certifications Earned" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by a passion for building AI-powered digital solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a results-driven <span className="text-primary font-semibold">Data Analyst, Software Engineer, AI Analyst</span> and <span className="text-primary font-semibold">Full-Stack Developer</span> with hands-on experience in building intelligent solutions that solve real-world problems. During my internship at IBM, I harnessed the power of cognitive computing and machine learning to extract insights from large datasets, demonstrating strong analytical and problem-solving abilities.
              </p>

              <p>
                With a foundation in web development and a passion for AI, I've developed multiple impactful projects — from real-time drowsiness detection systems to advanced brain tumor diagnosis using CNNs. I thrive on challenges and believe in continuous learning, often diving into open-source contributions and competitive programming to sharpen my skills.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Python", "Data Structures", "OOPs", "SQL", "AI", "ML", "Java",
                "PowerBi", "Tableau", "HTML", "CSS", "JavaScript", "React", "Node.js", "Mongo DB"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
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

export default About;
