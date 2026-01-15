import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Code2, Brain, Database, Cloud, Wrench, BarChart3 } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  'Generative AI & LLMOps': Brain,
  'Machine Learning & DL': Code2,
  'Data Analysis': BarChart3,
  'Programming & Databases': Database,
  'MLOps & Cloud': Cloud,
  'Tools & Visualization': Wrench
};

const categoryColors: Record<string, string> = {
  'Generative AI & LLMOps': 'from-primary to-secondary',
  'Machine Learning & DL': 'from-secondary to-accent',
  'Data Analysis': 'from-accent to-primary',
  'Programming & Databases': 'from-primary to-success',
  'MLOps & Cloud': 'from-success to-secondary',
  'Tools & Visualization': 'from-secondary to-primary'
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(217 91% 60%) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, hsl(270 70% 55%) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = categoryIcons[skill.category] || Code2;
            const gradient = categoryColors[skill.category] || 'from-primary to-secondary';
            
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glow-card h-full bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (itemIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 text-sm rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
