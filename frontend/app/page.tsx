import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import EducationTimeline from '@/components/EducationTimeline'
import ExperienceSection from '@/components/ExperienceSection'
import TechStackGrid from '@/components/TechStackGrid'
import ProjectSection from '@/components/ProjectSection'
import Certifications from '@/components/Certifications'
import HackathonSection from '@/components/HackathonSection'
import ContactSection from '@/components/ContactSection'
import GithubActivity from '@/components/GithubActivity'
import ResumeCta from '@/components/ResumeCta'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import Loader from '@/components/Loader'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(71,177,255,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(95,221,255,0.08),_transparent_22%)]" />
      <div className="pointer-events-none absolute inset-0 backdrop-grid opacity-30" />
      <ScrollProgress />
      <Loader />
      <Hero />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <GithubActivity />
        <AboutSection />
        <EducationTimeline />
        <ExperienceSection />
        <Certifications />
        <TechStackGrid />
        <ProjectSection />
        <ResumeCta />
        <HackathonSection />
        <ContactSection />
      </div>
      <BackToTop />
    </main>
  )
}
