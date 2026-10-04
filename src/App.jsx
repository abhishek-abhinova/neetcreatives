import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import WhatsAppFloat from './components/WhatsAppFloat';
import MobileCTA from './components/MobileCTA';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import HeroPost from './sections/HeroPost';
import Services from './sections/Services';
import Specialties from './sections/Specialties';
import WhyUs from './sections/WhyUs';
import AboutViz from './sections/AboutViz';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Showcase from './sections/Showcase';
import CampaignShowcase from './sections/CampaignShowcase';
import Pricing from './sections/Pricing';
import ProjectBuilder from './sections/ProjectBuilder';
import Process from './sections/Process';
import Manifesto from './sections/Manifesto';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <HeroPost />
        <Services />
        <Specialties />
        <WhyUs />
        <AboutViz />
        <About />
        <Portfolio />
        <Showcase />
        <CampaignShowcase />
        <Pricing />
        <ProjectBuilder />
        <Process />
        <Manifesto />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCTA />
    </div>
  );
}