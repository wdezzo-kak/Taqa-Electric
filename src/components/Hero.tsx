import { useEffect, useState } from 'react'

interface HeroProps {
  t: {
    heroBadge: string
    heroTitle: string
    heroTitle2: string
    heroTitle3: string
    heroSubtitle: string
    heroCta: string
    heroProjects: string
    companyName: string
  }
  lang: 'en' | 'ar'
}

export default function Hero({ t, lang }: HeroProps) {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-center sm:justify-start px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Cinematic sunrise over high-tech solar facility" 
          className="w-full h-full object-cover opacity-40 scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTbKUB09PcVG5vgDFfZ688DtL4wii90LdS0n-fe6qPR9XITST60GiYtW2EUkPgYg1WKEXG6LuudsVzK7wOtEmMVWycl8SGzMlyEVpFevg45vAlHkvkuw450vEI18YNzp2zyQI2XhjlM0BmjpekXgtxedcrR378ebQLxj1Fng9pyaP5MeXMBbAbA4QbRA6cL4Lh3tVQpP9QsQaLjPRkrm1Ikau0KfRjnitnjtPc5wX1LzdVsyPmZY0d_k-g1RypX_uBG3dkgFn2g-Zp"
          loading="eager"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 blueprint-grid opacity-15"></div>
        
        {/* Animated ambient blobs */}
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] animate-blob"></div>
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-tertiary/15 blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        
        {/* Diagonal decorative elements */}
        <div className="absolute top-1/4 right-0 w-px h-20 sm:h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent transform rotate-45 hidden sm:block"></div>
        <div className="absolute bottom-1/3 left-4 sm:left-10 w-px h-24 sm:h-48 bg-gradient-to-b from-transparent via-tertiary/30 to-transparent transform rotate-12 hidden sm:block"></div>
        
        {/* Grid accent lines */}
        <div className="absolute top-16 sm:top-20 right-4 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 border border-primary/20 transform rotate-45 opacity-30 hidden sm:block"></div>
        <div className="absolute bottom-40 right-8 sm:right-40 w-12 sm:w-20 h-12 sm:h-20 border border-tertiary/20 transform rotate-12 opacity-30 hidden sm:block"></div>
        
        {/* Animated scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan"></div>
        </div>
      </div>

      {/* Content with animations */}
      <div dir={lang} className={`relative z-10 max-w-3xl lg:max-w-4xl xl:max-w-5xl w-full text-center ${lang === 'ar' ? 'sm:text-right' : 'sm:text-left'} transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo and Brand */}
        <div className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 md:gap-3 mb-2 md:mb-3 transition-all duration-700 delay-0 ${loaded ? 'opacity-100 translate-x-0' : lang === 'ar' ? 'opacity-0 translate-x-4' : 'opacity-0 -translate-x-4'}`}>
          <img 
            alt="TAQA Electric Logo" 
            className="h-8 sm:h-[2.5em] w-auto" 
            src="/assets/images/white-logo.png"
          />
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-headline font-bold tracking-tight uppercase leading-[1] text-primary">
            {t.companyName}
          </h1>
        </div>

        {/* Badge with enhanced styling */}
        <div className={`mb-3 md:mb-4 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 backdrop-blur-sm ${lang === 'ar' ? 'border-r-3 border-l-0' : 'border-l-3'} border-primary text-primary font-label text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-bold transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-4'}`}>
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-pulse"></span>
          {t.heroBadge}
        </div>

        {/* Main headline with distinctive styling */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-headline font-bold tracking-tight uppercase leading-[1.1] mb-4 md:mb-6 text-on-background">
          <span className={`block transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {t.heroTitle}
          </span>
          <span className={`block text-primary text-shimmer transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {t.heroTitle2}
          </span>
          <span className={`block transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {t.heroTitle3}
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`hero-subtitle text-xs sm:text-sm md:text-base lg:text-lg text-on-surface-variant max-w-full sm:max-w-xl font-light leading-relaxed mb-5 sm:mb-6 md:mb-8 tracking-tight transition-all duration-700 delay-500 ${lang === 'ar' ? 'sm:text-right' : 'sm:text-left'} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {t.heroSubtitle}
        </p>

        {/* Buttons with enhanced hover effects */}
        <div className={`hero-buttons flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-3 md:gap-4 transition-all duration-700 delay-600 ${lang === 'ar' ? 'sm:justify-end sm:flex-row-reverse' : 'sm:justify-start'} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button 
            onClick={() => scrollToSection('#contact')}
            className={`group relative bg-primary text-on-primary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 font-headline font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm ${lang === 'ar' ? 'clipped-corner-rtl' : 'clipped-corner'} hover:scale-105 hover:shadow-glow-intense transition-all duration-300 btn-glow`}
          >
            <span className="relative z-10">{t.heroCta}</span>
            <div className={`absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity ${lang === 'ar' ? 'clipped-corner-rtl' : 'clipped-corner'}`}></div>
            <div className={`absolute inset-0 ${lang === 'ar' ? 'clipped-corner-rtl' : 'clipped-corner'} opacity-0 group-hover:opacity-20 bg-primary-light animate-pulse`}></div>
          </button>
          <button 
            onClick={() => scrollToSection('#projects')}
            className="group relative border border-outline-variant/30 text-on-surface px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 font-headline font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm hover:bg-white/5 hover:border-primary hover:shadow-glow transition-all duration-300 animated-border"
          >
            {t.heroProjects}
            <span className={`inline-block transition-transform ${lang === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} ml-1`}>
              {lang === 'ar' ? '←' : '→'}
            </span>
          </button>
        </div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute bottom-0 right-0 w-32 sm:w-64 h-px bg-gradient-to-l from-primary/50 to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-px h-20 sm:h-32 bg-gradient-to-b from-tertiary/30 to-transparent hidden sm:block"></div>
    </section>
  )
}
