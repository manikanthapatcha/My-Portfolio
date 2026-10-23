import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import SkillsConstellation from '../components/SkillsConstellation';
import ExperienceTimeline from '../components/ExperienceTimeline';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenResume }) {
  return (
    <main id="main-content">
      <Hero onOpenResume={onOpenResume} />
      <ProjectsSection />
      <SkillsConstellation />
      <ExperienceTimeline />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
