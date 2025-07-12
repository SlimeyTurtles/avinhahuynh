import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/hero-background.jpg"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          alt="Hero Background"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:order-2"
          >
            <div className="relative w-64 md:w-80 h-64 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-white/20 to-primary/20 p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/profile.jpg" 
                  alt="Professional headshot"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="lg:order-1 text-left lg:text-left">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm
            </motion.h2>
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Avinh Huynh
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-6 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full-Stack Developer | Cloud Infrastructure | Automation
            </motion.p>
            <motion.p 
              className="text-base md:text-lg mb-10 text-white/80 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I build scalable web applications and cloud solutions that drive business value. 
              Passionate about automating workflows and creating efficient, maintainable systems.
            </motion.p>
          
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 glow-effect font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary bg-primary text-white hover:bg-primary hover:text-white font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let&apos;s Connect
              </Button>
            </motion.div>
          
            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start gap-6 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="mailto:your@email.com"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, 10, 0] 
          }}
          transition={{ 
            opacity: { delay: 1.2 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ArrowDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;