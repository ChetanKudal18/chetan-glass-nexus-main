import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Database, Briefcase } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  // useInView is good, margin ensures it triggers a bit before it fully enters
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building responsive web applications with modern technologies",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Expertise in SQL and MongoDB for efficient data handling",
    },
    {
      icon: Award,
      title: "Problem Solving",
      description: "Strong analytical skills with focus on optimal solutions",
    },
    {
      icon: Briefcase,
      title: "Team Collaboration",
      description: "Effective communication and teamwork in dynamic environments",
    },
  ];

  return (
    <section 
      id="about" 
      // Adjusted section-padding for better control on mobile, assumed py-16 is a good base
      className="py-16 md:py-24 relative" 
      ref={ref}
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16" // Reduced margin-bottom for mobile
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-accent mx-auto rounded-full" /> {/* Slightly smaller separator */}
        </motion.div>

        {/* Main Content Grid */}
        <div 
          // Major Change: Default to single column (gap-8) on mobile, switch to 2-column on medium screens.
          className="grid gap-8 md:grid-cols-2 md:gap-12 items-start"
        >
          {/* Left Column: My Journey Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-8" // Adjusted padding for mobile
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-accent">My Journey</h3> {/* Reduced font size for mobile */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
              I'm a motivated Computer Science and Engineering graduate from Jain College of 
              Engineering and Research, Belagavi, with a CGPA of 8.12. My journey in tech has 
              been driven by a passion for creating innovative solutions and constantly learning 
              new technologies.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              With hands-on experience through multiple internships, I've developed strong skills 
              in Full-Stack Development, Data Analysis, and Database Management. I'm passionate 
              about applying my technical expertise to build impactful software solutions that 
              make a difference.
            </p>
          </motion.div>

          {/* Right Column: Highlights Grid */}
          <div 
            // Change: Use grid-cols-2 for both mobile and desktop, but adjust gap and size slightly.
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass-card glass-card-hover p-4 md:p-6 text-center" // Reduced padding on small screens
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-accent/20 flex items-center justify-center"> {/* Reduced icon background size */}
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-accent" /> {/* Reduced icon size */}
                  </div>
                  <h4 className="text-sm md:font-semibold mb-1 md:mb-2">{item.title}</h4> {/* Adjusted title size */}
                  <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p> {/* Adjusted description size */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;