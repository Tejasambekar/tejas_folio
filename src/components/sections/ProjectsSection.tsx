import { motion } from 'framer-motion';
import { projects, personalInfo } from '@/data/portfolio';
import { useGitHubRepos } from '@/hooks/useGitHubRepos';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FolderGit2, ExternalLink, Github, Star, GitFork, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const { data: githubRepos, isLoading } = useGitHubRepos(personalInfo.githubUsername);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <FolderGit2 className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI, Machine Learning, and Full-Stack Development
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glow-card h-full bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all">
                {/* Project image placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <Code className="w-16 h-16 text-primary/50 group-hover:text-primary transition-colors" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repos */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">More on GitHub</h3>
            <p className="text-muted-foreground">Recent repositories from my GitHub profile</p>
          </div>
        </ScrollReveal>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card rounded-xl p-5 animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                <div className="h-3 bg-muted rounded w-full mb-2" />
                <div className="h-3 bg-muted rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : githubRepos && githubRepos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {githubRepos.slice(0, 6).map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glow-card bg-card rounded-xl p-5 border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {repo.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {repo.description}
                  </p>
                )}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            <p>Unable to load GitHub repositories. Check back later!</p>
          </div>
        )}

        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 cursor-pointer"
            asChild
          >
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
