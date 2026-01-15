import { SEOHead } from '@/components/seo/SEOHead';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ResumeSection } from '@/components/sections/ResumeSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <SEOHead 
        title="Tejas Ambekar - AI/ML Engineer & Data Scientist"
        description="Portfolio of Tejas Ambekar - Data Scientist at EPAM Systems specializing in AI, Machine Learning, LLMs, and Full-Stack Development."
      />
      <CustomCursor />
      <div className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <SkillsSection />
        <AchievementsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </>
  );
}
