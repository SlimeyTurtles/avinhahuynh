import { motion } from "framer-motion";
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import workExperience from "@/data/experience";
import education from "@/data/education";

const Experience = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Building className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-elegant border-0 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 whitespace-nowrap">
                            <Building className="w-4 h-4" />
                            {job.company}
                          </div>
                          <div className="flex items-center gap-1 whitespace-nowrap">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1 whitespace-nowrap">
                            <Calendar className="w-4 h-4" />
                            {job.period}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-elegant border-0 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <GraduationCap className="w-4 h-4" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <Badge key={achIndex} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;