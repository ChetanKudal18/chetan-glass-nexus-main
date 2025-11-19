import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka",
      link: null,
    },
    {
      icon: Mail,
      label: "Email",
      value: "chetankudal18@gmail.com",
      link: "mailto:chetankudal18@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/chetan-bk",
      link: "https://www.linkedin.com/in/chetan-bk",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ChetanKudal18",
      link: "https://github.com/ChetanKudal18",
    },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center text-center gap-4 p-6 glass-card glass-card-hover group"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-2">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/ChetanKudal18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-card glass-card-hover flex items-center justify-center rounded-full"
                >
                  <Github className="h-6 w-6 text-accent" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chetan-bk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-card glass-card-hover flex items-center justify-center rounded-full"
                >
                  <Linkedin className="h-6 w-6 text-accent" />
                </a>
                <a
                  href="mailto:chetankudal18@gmail.com"
                  className="w-14 h-14 glass-card glass-card-hover flex items-center justify-center rounded-full"
                >
                  <Mail className="h-6 w-6 text-accent" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
