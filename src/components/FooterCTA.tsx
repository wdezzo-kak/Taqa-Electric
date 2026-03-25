interface FooterCTAProps {
  t: {
    ctaTitle: string
    ctaDesc: string
    ctaBtn: string
  }
  lang: 'en' | 'ar'
}

export default function FooterCTA({ t, lang }: FooterCTAProps) {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
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

  return (
    <section className="py-8 sm:py-10 md:py-16 px-4 sm:px-6 md:px-10 bg-primary relative overflow-hidden group">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-trace opacity-10"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-[80px] animate-blob"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-[80px] animate-blob" style={{ animationDelay: '2s' }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-6 sm:left-10 w-px h-full bg-white/10"></div>
      <div className="absolute top-0 right-6 sm:right-10 w-px h-full bg-white/10"></div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-white/10 transform rotate-45 origin-bottom-right"></div>
      </div>
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-headline font-bold uppercase tracking-tight text-on-primary mb-4 sm:mb-6 md:mb-8 leading-[1.1]">
          {t.ctaTitle}
        </h2>
        <p className="text-on-primary/90 text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-5 sm:mb-6 md:mb-8 max-w-2xl lg:max-w-3xl tracking-tight px-2 sm:px-4">
          {t.ctaDesc}
        </p>
        <button 
          onClick={scrollToContact}
          className={`bg-on-surface text-primary px-5 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-2.5 sm:py-3 md:py-4 lg:py-5 xl:py-8 font-headline font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs md:text-sm hover:scale-105 hover:shadow-glow-lg transition-all duration-300 ${lang === 'ar' ? 'clipped-corner-rtl' : 'clipped-corner'} w-full sm:w-auto max-w-xs sm:max-w-sm btn-glow group-hover:shadow-glow`}
        >
          {t.ctaBtn}
        </button>
      </div>
    </section>
  )
}
