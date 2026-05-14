"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Tag from "@/components/Tag";

import workExperience from "@/data/experience";
import education from "@/data/education";
import certifications from "@/data/certifications";

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};

const Row = ({ left, children, first }) => (
  <div className={`grid md:grid-cols-[140px,1fr] gap-2 md:gap-8 py-5 ${first ? "" : "border-t border-border"}`}>
    <div className="text-sm text-muted-foreground md:pt-0.5 whitespace-nowrap">
      {left}
    </div>
    <div>{children}</div>
  </div>
);

const Bullets = ({ items }) =>
  items?.length ? (
    <ul className="mt-3 space-y-1.5 pl-5">
      {items.map((b, i) => (
        <li
          key={i}
          className="text-[15px] text-foreground/85 leading-relaxed list-disc marker:text-primary/70"
        >
          {b}
        </li>
      ))}
    </ul>
  ) : null;

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/40">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-6"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          {workExperience.map((job, index) => (
            <motion.div key={index} variants={itemVariants} transition={{ duration: 0.35 }}>
              <Row left={job.period} first={index === 0}>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h4 className="text-base md:text-lg font-semibold text-foreground">
                    {job.title}
                  </h4>
                  <span className="text-sm text-muted-foreground">· {job.company}</span>
                </div>
                {job.areas?.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                    {job.areas.map((a) => (
                      <Tag key={a} label={a} size="sm" />
                    ))}
                  </div>
                )}
                <Bullets items={job.bullets} />
                {job.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-background border border-border text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </Row>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-6"
        >
          Education
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} transition={{ duration: 0.35 }}>
              <Row left={edu.period} first={index === 0}>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h4 className="text-base md:text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <span className="text-sm text-muted-foreground">· {edu.institution}</span>
                </div>
                <Bullets items={edu.bullets} />
              </Row>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-6"
        >
          Certifications
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} transition={{ duration: 0.35 }}>
              <Row left={cert.date} first={index === 0}>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h4 className="text-base font-semibold text-foreground">{cert.name}</h4>
                  <span className="text-sm text-muted-foreground">· {cert.issuer}</span>
                </div>
                {cert.credlyUrl && (
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs px-2 py-1 rounded-md border border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/25 hover:bg-foreground/[0.03] transition-colors"
                  >
                    View credential
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </Row>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
