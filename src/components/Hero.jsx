import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ParticleNetwork from "@/components/ParticleNetwork";
import Tag from "@/components/Tag";

const focusAreas = [
  {
    tag: "Machine Learning",
    text: "Cognitive science research at SFSU RADLab with Dr. Suri. Applying ML to study how we represent semantic memory."
  },
  {
    tag: "DevOps",
    text: "Systems engineer at Arch Insurance. Build automation and internal web tools for the team."
  },
  {
    tag: "Full Stack",
    text: "Build what I want and enhance what I have — SporkMoney so I have more money, Streamour for ad-free self-hosted streaming."
  }
];

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[hsl(28_90%_92%)] via-[hsl(30_75%_94%)] to-[hsl(30_60%_97%)]">
      <div className="absolute inset-0 opacity-40">
        <ParticleNetwork
          density={0.00005}
          linkDistance={120}
          speed={0.16}
          pointColor="rgba(234, 88, 12, 0.55)"
          linkColor="234, 88, 12"
        />
      </div>

      <div className="relative z-10 container-custom text-foreground px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1fr,auto] gap-10 lg:gap-16 items-center"
        >
          <div className="lg:order-1 text-left max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold mb-3 leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              Avinh Huynh
            </motion.h1>
            <motion.p
              className="text-base md:text-lg mb-7 text-foreground/75 leading-relaxed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              Senior CS student at SFSU. Starting an M.A. in Psychology (Mind, Brain, Behavior) at SFSU next semester.
            </motion.p>

            <motion.div
              className="space-y-3 mb-9"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } }
              }}
            >
              {focusAreas.map((a) => (
                <motion.div
                  key={a.tag}
                  variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 sm:grid-cols-[10rem,1fr] sm:items-baseline gap-x-5 gap-y-1"
                >
                  <Tag label={a.tag} size="md" />
                  <p className="text-[15px] md:text-base text-foreground/85 leading-relaxed">
                    {a.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                onClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })}
              >
                See my work
              </Button>
              <Button
                size="default"
                variant="outline"
                className="border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5 font-medium"
                onClick={() => window.open("https://www.linkedin.com/in/avinh-huynh/", "_blank", "noopener,noreferrer")}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Message on LinkedIn
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-1 -ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <a
                href="https://github.com/SlimeyTurtles"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-foreground/60 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/avinh-huynh/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-foreground/60 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:avinhahuynh@gmail.com"
                className="p-2 rounded-md text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center lg:order-2"
          >
            <div className="relative w-48 md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 rounded-full overflow-hidden ring-1 ring-foreground/10 shadow-[0_20px_60px_-20px_rgba(234,88,12,0.4)]">
              <Image
                src="/headshot.jpg"
                alt="Avinh Huynh"
                fill
                className="object-cover"
                style={{ objectPosition: "35% 30%" }}
                priority
                sizes="(min-width: 1024px) 16rem, 14rem"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ArrowDown className="w-4 h-4 text-foreground/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
