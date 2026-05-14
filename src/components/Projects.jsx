"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ImageIcon, Cat, X, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [activeCat, setActiveCat] = useState(null);
  const [catIndex, setCatIndex] = useState(0);

  const openCat = (cat) => {
    setCatIndex(0);
    setActiveCat(cat);
  };

  const photos = activeCat?.images?.length ? activeCat.images : activeCat?.image ? [activeCat.image] : [];

  const nextPhoto = () => setCatIndex((i) => (i + 1) % photos.length);
  const prevPhoto = () => setCatIndex((i) => (i - 1 + photos.length) % photos.length);

  useEffect(() => {
    if (!activeCat) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveCat(null);
      if (e.key === "ArrowRight" && photos.length > 1) {
        setCatIndex((i) => (i + 1) % photos.length);
      }
      if (e.key === "ArrowLeft" && photos.length > 1) {
        setCatIndex((i) => (i - 1 + photos.length) % photos.length);
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeCat, photos.length]);

  return (
    <section id="projects" className="section-padding bg-muted/40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Personal projects
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-xl">
            Hosting these onprem because I wanted to pretend I was an early-2000s startup; both are offline right now cuz I&apos;m out of storage and saving up for a DAS lol.
          </p>
        </motion.div>

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
              className="group rounded-lg bg-card border border-foreground/10 shadow-sm overflow-hidden hover:border-foreground/20 hover:shadow-md transition-all grid md:grid-cols-[420px,1fr]"
            >
              {(() => {
                const liveHref = project.links?.find((l) => l.label?.toLowerCase() === "live")?.href;
                const imageEl = (
                  <div className="relative aspect-video md:aspect-auto md:h-full md:min-h-[260px] bg-muted overflow-hidden border-b md:border-b-0 md:border-r border-border">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} — screenshot of the live site`}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(min-width: 768px) 420px, 100vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-muted-foreground/60">
                        <ImageIcon className="w-5 h-5" />
                        <span className="text-[11px]">image / gif</span>
                      </div>
                    )}
                  </div>
                );
                return liveHref ? (
                  <a
                    href={liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="block md:h-full"
                  >
                    {imageEl}
                  </a>
                ) : (
                  imageEl
                );
              })()}

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

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-3 border-t border-border">
                    {project.links?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
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
                    {project.cat && (
                      <button
                        type="button"
                        onClick={() => openCat(project.cat)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-foreground/15 bg-background text-foreground hover:bg-foreground/5 hover:border-foreground/25 transition-colors ml-auto"
                      >
                        <Cat className="w-3.5 h-3.5" />
                        {project.cat.name}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCat && (
          <motion.div
            key="cat-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveCat(null)}
            className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              key="cat-modal"
              initial={{ scale: 0.94, opacity: 0, y: 8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card rounded-xl overflow-hidden max-w-sm w-full shadow-2xl border border-foreground/10"
            >
              <button
                type="button"
                onClick={() => setActiveCat(null)}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-foreground/40 hover:bg-foreground/60 text-background transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="relative aspect-square bg-muted">
                {photos.length > 0 ? (
                  <Image
                    key={catIndex}
                    src={photos[catIndex]}
                    alt={`Photo ${catIndex + 1} of ${activeCat.name} the cat`}
                    fill
                    quality={95}
                    className="object-cover"
                    sizes="(min-width: 640px) 384px, 100vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground/60">
                    <Cat className="w-10 h-10" />
                    <span className="text-xs">photo of {activeCat.name}</span>
                  </div>
                )}

                {photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevPhoto}
                      aria-label="Previous photo"
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/40 hover:bg-foreground/60 text-background transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={nextPhoto}
                      aria-label="Next photo"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/40 hover:bg-foreground/60 text-background transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {photos.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCatIndex(i)}
                          aria-label={`Photo ${i + 1}`}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            i === catIndex ? "bg-background w-4" : "bg-background/60 hover:bg-background/80"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-foreground">{activeCat.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  named after my cat {activeCat.name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
