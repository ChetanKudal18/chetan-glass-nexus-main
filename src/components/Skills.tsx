import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// Changed import from Server to Router for a better API visual
import { Router } from "lucide-react"; 

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        // Placeholder value remains, but now maps to the Router icon
        { name: "REST API", logo: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png" }, 
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "PyCharm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
        { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 md:py-24 relative bg-gradient-to-b from-background to-primary/5" 
      ref={ref}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills Categories */}
        <div className="grid gap-10 md:gap-12 max-w-6xl mx-auto">
          {technicalSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="text-xl md:text-3xl font-bold mb-6 text-accent">
                {category.category}
              </h3>
              
              {/* Skills Grid - Responsive columns */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="flex flex-col items-center gap-2 p-3 sm:p-4 glass-card glass-card-hover group"
                  >
                    <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                      
                      {skill.logo.startsWith("http") ? (
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-full h-full object-contain dark:brightness-100 brightness-90"
                        />
                      ) : (
                        // Render Lucide Router icon for REST API
                        <Router className="w-8 h-8 text-accent" /> 
                      )}

                    </div>
                    <span className="text-xs text-center text-muted-foreground font-medium leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 md:mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
            <span className="text-gradient">Certifications</span>
          </h3>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {[
              { title: "Python Full Stack Development", issuer: "Robowaves" },
              { title: "Full Stack Web Development", issuer: "Pranaksh Technologies" },
              { title: "Databases for Developers: Next Level", issuer: "Oracle" },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="glass-card glass-card-hover p-4 md:p-6"
              >
                <h4 className="font-bold text-base md:text-lg mb-1 text-accent">{cert.title}</h4>
                <p className="text-muted-foreground text-xs md:text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;