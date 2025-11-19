import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Engine",
      description: "A complete e-commerce engine built with HTML, CSS, JavaScript, SQL, and SMTP API. Designed to simulate real-world flow authentication, listings, cart, orders, and mail notifications.",
      technologies: ["Python","Django","HTML5", "CSS3", "JavaScript", "SQL", "SMTP API"],
      github: "https://github.com/ChetanKudal18/Ecommerce_engine.git",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout system",
        "Email notifications for orders",
        "This wasn’t a “college mini project”; it behaves like a real production system with proper separation of frontend, backend, and DB responsibilities"
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Automated Student Result Management System",
      description: "A Django based system that reads uploaded PDF mark sheets, extracts student marks, stores them, and generates analytics reducing manual effort by 70%.",
      technologies: ["Python", "Django", "SQL Server","Pdfplumber","Pandas","Matplotlib"],
      github: "https://github.com/ChetanKudal18/Student_result_analysis.git",
      features: [
        "Automated result calculation and grading",
        "Performance analytics and reporting",
        "Student progress tracking",
        "Admin dashboard for management",
        "Turned a fully manual process into an automated, reliable system used as a real academic solution",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="glass-card glass-card-hover p-8 relative overflow-hidden group"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-accent group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-accent text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                        
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="glass-card px-3 py-1 text-xs font-medium text-accent border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="glass-card glass-card-hover border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
