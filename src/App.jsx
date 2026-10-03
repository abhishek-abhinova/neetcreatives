import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import WhatsAppFloat from './components/WhatsAppFloat';
import MobileCTA from './components/MobileCTA';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Services from './sections/Services';
import Specialties from './sections/Specialties';
import WhyUs from './sections/WhyUs';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Showcase from './sections/Showcase';
import Pricing from './sections/Pricing';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
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
        <Marquee />
        <Services />
        <Specialties />
        <WhyUs />
        <About />
        <Portfolio />
        <Showcase />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCTA />
    </div>
  );
}
