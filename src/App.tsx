import { useState } from 'react'
import Header from './components/Header'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Vision from './components/Vision'
import About from './components/About'
import Services from './components/Services'
import Hardware from './components/Hardware'
import ProjectCase from './components/ProjectCase'
import BrandEcosystem from './components/BrandEcosystem'
import Contact from './components/Contact'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')

  return (
    <div className="min-h-screen bg-background">
      <TopBar lang={lang} setLang={setLang} />
      <Header />
      <main className="content-container">
        <section id="hero" className="hero-section"><Hero /></section>
        <section id="stats" className="stats-bar"><StatsBar /></section>
        <section id="vision" className="vision-section"><Vision /></section>
        <section id="about" className="about-section"><About /></section>
        <section id="services" className="services-section"><Services /></section>
        <section id="hardware" className="hardware-section"><Hardware /></section>
        <section id="projects" className="project-section"><ProjectCase /></section>
        <section id="brands" className="brands-section"><BrandEcosystem /></section>
        <section id="contact" className="contact-section"><Contact /></section>
      </main>
      <FooterCTA />
      <Footer />
    </div>
  )
}

export default App
