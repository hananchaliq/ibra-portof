import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SelectedProjects from '@/components/SelectedProjects';
import AboutMe from '@/components/AboutMe';
import SkillsAndTools from '@/components/SkillsAndTools';
import JourneyAndAchievements from '@/components/JourneyAndAchievements';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1EA] text-[#171717] dark:bg-[#111113] dark:text-[#EDEDEC] transition-colors duration-200">
      <Header />
      <main className="flex-1">
        <Hero />
        <SelectedProjects />
        <AboutMe />
        <SkillsAndTools />
        <JourneyAndAchievements />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
