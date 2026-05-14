import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import featured from "@/data/featured";
import Tag from "@/components/Tag";

const FeaturedWork = () => {
  return (
    <section id="featured" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-8"
        >
          Featured work
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
          {featured.map((item, i) => (
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
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
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
                {item.areas?.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                    {item.areas.map((a) => (
                      <Tag key={a} label={a} size="sm" />
                    ))}
                  </div>
                )}

                <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                  {item.title}
                </h3>
                <div className="text-sm text-muted-foreground mt-1 mb-3">{item.org}</div>

                <p className="text-[15px] text-foreground/85 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.map((s) => (
                      <span key={s} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted text-foreground/70">
                        {s}
                      </span>
                    ))}
                  </div>

                  {(item.href || item.repo) && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Visit site
                        </a>
                      )}
                      {item.repo && (
                        <a
                          href={item.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-foreground/15 bg-background text-foreground hover:bg-foreground/5 hover:border-foreground/25 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Source
                        </a>
                      )}
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

export default FeaturedWork;
