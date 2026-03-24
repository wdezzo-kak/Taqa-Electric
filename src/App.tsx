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
import { translations, Lang } from './translations'

function App() {
  const [lang, setLang] = useState<Lang>('en')
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-background" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <TopBar lang={lang} setLang={setLang} t={t} />
      <Header t={t} />
      <main className="content-container">
        <section id="hero" className="hero-section"><Hero t={t} lang={lang} /></section>
        <section id="stats" className="stats-bar"><StatsBar t={t} /></section>
        <section id="vision" className="vision-section"><Vision t={t} /></section>
        <section id="about" className="about-section"><About t={t} /></section>
        <section id="services" className="services-section"><Services t={t} lang={lang} /></section>
        <section id="hardware" className="hardware-section"><Hardware t={t} /></section>
        <section id="projects" className="project-section"><ProjectCase t={t} /></section>
        <section id="brands" className="brands-section"><BrandEcosystem /></section>
        <section id="contact" className="contact-section"><Contact t={t} /></section>
      </main>
      <FooterCTA t={t} />
      <Footer t={t} />
    </div>
  )
}

export default App
