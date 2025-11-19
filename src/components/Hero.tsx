import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = ["Full Stack Developement", "Data Enthusiast", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const currentRole = roles[roleIndex];
    
    const interval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <section 
      id="home" 
      className="min-h-[85vh] md:min-h-screen flex items-center justify-center py-24 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start via-background to-gradient-end opacity-50" />
      
      {/* Floating orbs - Position adjusted for smaller screens */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-accent/20 rounded-full blur-3xl animate-float"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 1,
        }}
      />

      <div className="container mx-auto relative z-10">
        <div 
          className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text/Info Column (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* ... (Text content remains unchanged) ... */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent text-base sm:text-lg mb-4"
            >
              Hi, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-sans lg:text-7xl font-bold mb-4 sm:mb-6"
            >
              <span className="text-gradient">Chetan B.K</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-12 sm:h-16 mb-6 sm:mb-8"
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
                <span className="text-accent">{displayText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl"
            >
              Computer Science Engineering graduate who prefers building things rather than talking about them. My work revolves around full-stack development, backend systems, and data-driven problem-solving.
              I enjoy taking projects from scratch → production, writing clean logic, and building systems that actually solve problems not just look good on paper.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8"
            >
              <Button
                className="glass-card glass-card-hover border-accent/50 text-accent hover:text-accent-foreground hover:bg-accent"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="glass-card glass-card-hover border-accent/50"
                asChild
              >
                <a href="../public/Chetan_Resume_2025.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/ChetanKudal18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-card glass-card-hover flex items-center justify-center rounded-full"
              >
                <Github className="h-5 w-5 text-accent" />
              </a>
              <a
                href="https://www.linkedin.com/in/chetan-bk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-card glass-card-hover flex items-center justify-center rounded-full"
              >
                <Linkedin className="h-5 w-5 text-accent" />
              </a>
              <a
                href="mailto:chetankudal18@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-card glass-card-hover flex items-center justify-center rounded-full"
              >
                <Mail className="h-5 w-5 text-accent" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image Column (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-first md:order-none mb-10 md:mb-0"
          >
            <div 
              // *** KEY CHANGE HERE: Reduced the maximum width on all screen sizes ***
              // max-w-sm (24rem) changed to max-w-xs (20rem) on mobile
              // max-w-md (28rem) changed to max-w-sm (24rem) on desktop
              className="relative w-full max-w-[18rem] sm:max-w-xs md:max-w-sm mx-auto"
            >
              {/* Blur effect for the image */}
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl animate-glow" />
              
              <img
                src="/Photo.png"
                alt="Chetan B K"
                className="relative z-10 w-full h-auto object-contain p-2" 
                style={{ 
                  borderRadius: '1rem', 
                  filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.5))'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;