import { motion } from 'framer-motion';
import { personalInfo, education } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MapPin, GraduationCap, Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ background: 'var(--gradient-primary)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate about building{' '}
            <span className="gradient-text">intelligent systems</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          {/* Main content */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.introduction}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{personalInfo.location}</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Education sidebar */}
          <div>
            <ScrollReveal delay={0.2}>
              <div className="gradient-border p-6 rounded-xl bg-card">
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors"
                    >
                      <h4 className="font-medium text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-primary">{edu.period}</span>
                        <span className="text-xs font-medium text-success">{edu.score}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
