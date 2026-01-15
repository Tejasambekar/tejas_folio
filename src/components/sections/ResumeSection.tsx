import { motion } from 'framer-motion';
import { experience, education } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Briefcase, GraduationCap, Calendar, Building2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 md:py-32 px-6 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Resume</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
              My <span className="gradient-text">Experience</span>
            </h2>
            <Button 
              variant="outline" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10 cursor-pointer w-fit"
            >
              Download Resume
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Work Experience</h3>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-1 w-5 h-5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
                    
                    <div className="glow-card bg-card p-6 rounded-xl">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                            {exp.type}
                          </span>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-primary" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-1 w-5 h-5 rounded-full border-2 border-secondary bg-background group-hover:bg-secondary transition-colors" />
                    
                    <div className="glow-card bg-card p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{edu.period}</span>
                        </div>
                        <span className="text-sm font-medium text-success">{edu.score}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
