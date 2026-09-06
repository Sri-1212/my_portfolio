import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import AchievementsSection from './sections/AchievementsSection';
import ContactFooter from './sections/ContactFooter';
import { useApi } from './hooks/useApi';
import {
  fallbackProjects,
  fallbackAchievements,
  fallbackActivities,
  type Project,
  type Achievement,
  type Activity,
} from './data/fallback';

const App: React.FC = () => {
  const { data: projects } = useApi<Project[]>('/api/projects', fallbackProjects);
  const { data: achievements } = useApi<Achievement[]>('/api/achievements', fallbackAchievements);
  const { data: activities } = useApi<Activity[]>('/api/activities', fallbackActivities);

  return (
    <main className="font-kanit" style={{ overflowX: 'clip' }}>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <AchievementsSection achievements={achievements} activities={activities} />
      <ContactFooter />
    </main>
  );
};

export default App;
