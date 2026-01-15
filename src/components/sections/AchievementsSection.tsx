import { motion } from 'framer-motion';
import { achievements } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Trophy, Award, Star } from 'lucide-react';

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 md:py-32 px-6 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <Star className="w-32 h-32 text-primary" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Milestones & <span className="gradient-text">Recognition</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glow-card flex items-start gap-6 bg-card p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all">
                      {achievement.title}
                    </h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium w-fit">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
