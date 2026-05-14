"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import featured from "@/data/featured";
import Tag from "@/components/Tag";

const StackChips = ({ stack }) => (
  <div className="flex flex-wrap gap-1.5">
    {stack.map((s) => (
      <span
        key={s}
        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted text-foreground/70"
      >
        {s}
      </span>
    ))}
  </div>
);

const Links = ({ item }) => {
  if (!item.href && !item.repo) return null;
  return (
    <div className="flex flex-wrap gap-2">
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
  );
};

const Areas = ({ areas }) =>
  areas?.length ? (
    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
      {areas.map((a) => (
        <Tag key={a} label={a} size="sm" />
      ))}
    </div>
  ) : null;

const VisualRow = ({ item, reverse }) => {
  const imageEl = (
    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[340px] bg-muted overflow-hidden">
      {item.image ? (
        <Image
          src={item.image}
          alt={`${item.title} — screenshot from ${item.org}`}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 512px, 100vw"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-muted-foreground/60">
          <ImageIcon className="w-5 h-5" />
          <span className="text-[11px]">image / gif</span>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className={reverse ? "lg:order-2" : ""}>
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${item.title}`}
            className="block h-full"
          >
            {imageEl}
          </a>
        ) : (
          imageEl
        )}
      </div>
      <div className="p-5 md:p-8 flex flex-col justify-center">
        <Areas areas={item.areas} />
        <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
          {item.title}
        </h3>
        <div className="text-sm text-muted-foreground mt-1 mb-3">{item.org}</div>
        <p className="text-[15px] text-foreground/85 leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="space-y-3">
          <StackChips stack={item.stack} />
          <Links item={item} />
        </div>
      </div>
    </>
  );
};

const HighlightRow = ({ item, reverse }) => (
  <>
    <div
      className={`bg-gradient-to-br from-orange-50 via-orange-100/60 to-orange-200/40 p-5 md:p-8 flex flex-col justify-center gap-5 lg:min-h-[340px] ${
        reverse ? "lg:order-2" : ""
      }`}
    >
      <div>
        <div className="text-[2rem] md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.05] tracking-tight">
          {item.callout.headline}
        </div>
        <p className="text-[14px] md:text-[15px] text-foreground/75 mt-3 leading-relaxed max-w-md">
          {item.callout.context}
        </p>
      </div>
      <div className="mt-2">
        <StackChips stack={item.stack} />
      </div>
    </div>
    <div className="p-5 md:p-8 flex flex-col justify-center">
      <Areas areas={item.areas} />
      <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
        {item.title}
      </h3>
      <div className="text-sm text-muted-foreground mt-1 mb-3">{item.org}</div>
      <p className="text-[15px] text-foreground/85 leading-relaxed mb-4">
        {item.description}
      </p>
      {item.highlights?.length > 0 && (
        <div className="border-l-2 border-primary/40 pl-4 space-y-2.5">
          {item.highlights.map((h, i) => (
            <div key={i} className="text-[15px] leading-snug">
              <span className="font-semibold text-foreground">{h.key}</span>
              <span className="text-foreground/65"> — {h.detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </>
);

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
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="space-y-10 md:space-y-14"
        >
          {featured.map((item, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-xl bg-card border border-foreground/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow grid lg:grid-cols-2"
            >
              {item.highlights ? (
                <HighlightRow item={item} reverse={i % 2 === 1} />
              ) : (
                <VisualRow item={item} reverse={i % 2 === 1} />
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
