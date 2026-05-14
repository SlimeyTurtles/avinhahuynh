"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

const BottomCTA = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-[hsl(28_85%_94%)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            You made it to the bottom
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Let&apos;s talk.
          </h2>
          <p className="text-base md:text-lg text-foreground/75 mb-8 leading-relaxed">
            If anything on this page interested you — full-stack development, applied machine learning, or cloud architecture — I&apos;d love to hear from you. The LinkedIn button is the fastest way to reach me.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/avinh-huynh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
            >
              <Linkedin className="w-4 h-4" />
              Message me on LinkedIn
            </a>
            <a
              href="mailto:avinhahuynh@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-foreground/15 bg-background text-foreground font-semibold hover:bg-foreground/5 hover:border-foreground/25 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://github.com/SlimeyTurtles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-foreground/15 bg-background text-foreground font-semibold hover:bg-foreground/5 hover:border-foreground/25 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <p className="text-xs text-muted-foreground mt-10">
            — Avinh Huynh · San Francisco
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTA;
