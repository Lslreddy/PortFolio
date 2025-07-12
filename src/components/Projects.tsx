import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Chat Application",
      description:
        "A real-time chat platform with secure user authentication, group and private messaging, and live updates using Flask and Socket.IO.",
      technologies: ["Flask", "Socket.IO", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/SaiBharath28/Chat-Appliaction",
      live: "",
      featured: true
    },
    {
      id: 2,
      title: "Hospital Management System",
      description:
        "A full-featured hospital operations system with role-based access, appointment scheduling, billing, and medical record management.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/SaiBharath28/Hospital-Management-System",
      live: "",
      featured: false
    },
    {
      id: 3,
      title: "User Feedback System",
      description:
        "Feedback management platform with sentiment analysis, categorization, and dashboard visualization to monitor user satisfaction.",
      technologies: ["Python", "NLP", "Flask", "HTML", "CSS"],
      github: "https://github.com/SaiBharath28/User-Feedback-System",
      live: "",
      featured: false
    },
    
    {
      id: 5,
      title: "AI Code Review Application",
      description:
        "An intelligent code review tool using Google Gemini Pro to analyze Python, Java, C, and C++ code, highlight bugs, and suggest improvements.",
      technologies: ["Python", "Flask", "Google Gemini", "HTML", "CSS"],
      github: "https://github.com/SaiBharath28/AI-Code-Review",
      live: "https://ai-code-review-vgwg.onrender.com",
      featured: true
    },
    {
      id: 6,
      title: "Intrusion Detection with NSL-KDD",
      description:
        "Built ML models like Random Forest and Neural Networks to detect network intrusions using the NSL-KDD dataset, optimizing hyperparameters and comparing results across six cases.",
      technologies: ["Python", "Sklearn", "XGBoost", "Pandas"],
      github: "",
      live: "",
      featured: false
    },
    {
      id: 7,
      title: "Brain Tumor Detection using CNNs",
      description:
        "Developed a CNN-based diagnostic system to detect and classify brain tumors from MRI scans with high accuracy, using image preprocessing and normalization.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      github: "",
      live: "",
      featured: false
    },
    {
      id: 8,
      title: "Drowsiness Detection System",
      description:
        "Real-time driver alertness monitor using computer vision and facial landmark detection to reduce road accidents. Built with OpenCV and Dlib.",
      technologies: ["Python", "OpenCV", "Dlib"],
      github: "",
      live: "",
      featured: false
    }
  ];

  const githubProfile = "https://github.com/Lslreddy";

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Personal Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.live && (
                    <Button
                      size="sm"
                      className="glow-button text-xs"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      Live
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() =>
                      window.open(
                        project.github ? project.github : githubProfile,
                        "_blank"
                      )
                    }
                  >
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            className="glow-button text-lg px-8 py-6"
            onClick={() => window.open(githubProfile, "_blank")}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
