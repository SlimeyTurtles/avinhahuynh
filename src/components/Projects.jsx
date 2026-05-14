import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ImageIcon } from "lucide-react";

import projects from "@/data/projects";
import Tag from "@/components/Tag";

const linkIcon = (label) => {
  if (label.toLowerCase().includes("github")) return <Github className="w-3.5 h-3.5" />;
  return <ExternalLink className="w-3.5 h-3.5" />;
};

const buttonStyle = (label) => {
  if (label.toLowerCase().includes("github")) {
    return "border border-foreground/15 bg-background text-foreground hover:bg-foreground/5 hover:border-foreground/25";
  }
  return "bg-primary text-primary-foreground hover:bg-primary/90";
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/40">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-8"
        >
          Personal projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } }
          }}
          className="space-y-4"
        >
          {projects.map((project, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-lg bg-card border border-foreground/10 shadow-sm overflow-hidden hover:border-foreground/20 hover:shadow-md transition-all grid md:grid-cols-[240px,1fr]"
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[200px] bg-muted overflow-hidden border-b md:border-b-0 md:border-r border-border">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 240px, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-muted-foreground/60">
                    <ImageIcon className="w-5 h-5" />
                    <span className="text-[11px]">image / gif</span>
                  </div>
                )}
              </div>

              <div className="p-5 md:p-6 flex flex-col">
                {project.areas?.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                    {project.areas.map((a) => (
                      <Tag key={a} label={a} size="sm" />
                    ))}
                  </div>
                )}

                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                    {project.name}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {project.period}
                  </span>
                </div>

                <p className="text-[15px] text-foreground/85 leading-relaxed mt-3 mb-4">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, j) => (
                      <span key={j} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted text-foreground/70">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md transition-colors ${buttonStyle(link.label)}`}
                        >
                          {linkIcon(link.label)}
                          {link.label === "Live" ? "Visit site" : link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
