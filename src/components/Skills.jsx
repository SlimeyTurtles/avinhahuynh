"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "HTML/CSS", "SQL", "Java", "C"]
  },
  {
    title: "Web",
    skills: ["React", "Next.js", "Spring Boot", "Node", "Express", "Three.js"]
  },
  {
    title: "ML",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "PyTorch", "TensorFlow"]
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Azure", "Git/GitHub", "Linux (WSL2)", "Docker", "Postman", "Nginx"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-6"
        >
          Skills
        </motion.h2>

        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } }
          }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.35 }}
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                {category.title}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Skills;
