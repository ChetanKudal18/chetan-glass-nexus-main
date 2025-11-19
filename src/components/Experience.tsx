import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Python Development Intern",
      company: "Robowaves",
      period: "January 2025 - May 2025",
      location: "Bengaluru",
      achievements: [
        "Built entire web modules using Django, REST framework, and SQL databases.",
        "Developed production level APIs with authentication & optimized query handling.",
        "Managed SQL databases for efficient data storage and retrieval",
        "Improved backend response times by optimizing database queries and reducing unnecessary overhead",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      role: "Full Stack Development Intern",
      company: "Pranaksh Technologies",
      period: "November 2023 - January 2024",
      location: "Remote",
      achievements: [
        "Built responsive UI components using HTML, CSS, JS — focused on speed, consistency, and clean coding",
        "Developed full-stack modules with Node.js + MongoDB as part of a 5-member team",
        "Participated in stand-ups, sprint reviews, and code reviews just like a real engineering environment",
        "Enhanced application performance and user experience",
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      role: "Python and Data Analysis Intern",
      company: "CoachEd",
      period: "October 2022 - January 2023",
      location: "Remote",
      achievements: [
        "Performed Exploratory Data Analysis using Python and Pandas",
        "Created data visualizations to identify trends and insights",
        "Cleaned and preprocessed large datasets for analysis",
        "Presented findings to stakeholders with actionable recommendations",
      ],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="experience" className="section-padding relative bg-gradient-to-b from-background to-primary/5" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card glass-card-hover p-8 relative overflow-hidden group"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Briefcase className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-accent mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground ml-16">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-0 md:ml-16">
                  <h4 className="font-semibold mb-3 text-accent">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
