import { LanguageProvider } from './i18n/context'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechLogos from './components/TechLogos'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <TechLogos />
        <Services />
        <Process />
        <Projects />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </LanguageProvider>
  )
}
