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
  }
}

export default function Hero({ t }: HeroProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-start px-6 lg:px-16 overflow-hidden pt-20 md:pt-24">
      {/* Background with parallax feel */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Cinematic sunrise over high-tech solar facility" 
          className="w-full h-full object-cover opacity-40 scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTbKUB09PcVG5vgDFfZ688DtL4wii90LdS0n-fe6qPR9XITST60GiYtW2EUkPgYg1WKEXG6LuudsVzK7wOtEmMVWycl8SGzMlyEVpFevg45vAlHkvkuw450vEI18YNzp2zyQI2XhjlM0BmjpekXgtxedcrR378ebQLxj1Fng9pyaP5MeXMBbAbA4QbRA6cL4Lh3tVQpP9QsQaLjPRkrm1Ikau0KfRjnitnjtPc5wX1LzdVsyPmZY0d_k-g1RypX_uBG3dkgFn2g-Zp"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 blueprint-grid opacity-20"></div>
        {/* Ambient glow */}
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-container/20 blur-[120px]"></div>
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-tertiary/10 blur-[100px]"></div>
      </div>

      {/* Content with animations */}
      <div className={`relative z-10 max-w-3xl lg:max-w-4xl xl:max-w-5xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Badge */}
        <div className={`mb-4 md:mb-6 inline-flex items-center gap-2 px-4 py-1 bg-primary-container/20 border-l-4 border-primary-container text-primary font-rajdhani text-xs tracking-[0.4em] uppercase font-bold transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          {t.heroBadge}
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-headline font-black tracking-tighter uppercase leading-[0.9] mb-4 md:mb-6 text-on-background">
          <span className={`block transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {t.heroTitle}
          </span>
          <span className={`block text-primary-container transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {t.heroTitle2}
          </span>
          <span className={`block transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {t.heroTitle3}
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`hero-subtitle text-sm md:text-base lg:text-lg text-on-surface-variant max-w-xl font-light leading-relaxed mb-6 md:mb-8 tracking-tight transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {t.heroSubtitle}
        </p>

        {/* Buttons */}
        <div className={`hero-buttons flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-700 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="group relative bg-primary-container text-on-primary-container px-6 md:px-8 py-3 md:py-4 font-headline font-bold uppercase tracking-widest text-xs md:text-sm clipped-corner hover:scale-105 hover:shadow-[0_0_30px_rgba(211,47,47,0.5)] transition-all duration-300">
            <span className="relative z-10">{t.heroCta}</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity clipped-corner"></div>
          </button>
          <button className="group border border-outline/30 text-on-surface px-6 md:px-8 py-3 md:py-4 font-headline font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white/5 hover:border-primary transition-all duration-300 w-full sm:w-auto">
            {t.heroProjects}
          </button>
        </div>
      </div>
    </section>
  )
}
