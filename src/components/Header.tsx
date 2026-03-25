import { useState, useEffect } from 'react'

interface HeaderProps {
  t: {
    navHome: string
    navOurVision: string
    navAboutUs: string
    navServices: string
    navTechnology: string
    navProjects: string
    navContact: string
    navInitiate: string
    companyName: string
  }
  lang: 'en' | 'ar'
}

export default function Header({ t, lang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: t.navHome, href: '#hero' },
    { label: t.navOurVision, href: '#vision' },
    { label: t.navAboutUs, href: '#about' },
    { label: t.navServices, href: '#services' },
    { label: t.navTechnology, href: '#hardware' },
    { label: t.navProjects, href: '#projects' },
    { label: t.navContact, href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, closeMenu = false) => {
    e.preventDefault()
    if (closeMenu) setMobileMenuOpen(false)
    const element = document.querySelector(href)
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

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
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
    <>
      <nav 
        className={`fixed left-0 w-full z-50 transition-all duration-500 top-[32px] sm:top-[29px] ${scrolled 
            ? 'bg-background/95 backdrop-blur-xl py-2 md:py-3 opacity-100 translate-y-0 border-b border-primary/10' 
            : 'bg-transparent py-0 opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-10">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              alt="TAQA Electric Logo" 
              className="h-7 md:h-8 lg:h-9 w-auto" 
              src="/assets/images/white-logo.png"
            />
            <span className="text-xs md:text-sm lg:text-lg font-bold tracking-tight text-primary uppercase font-label">
              {t.companyName}
            </span>
          </div>
          <div className="hidden lg:flex gap-3 xl:gap-4 font-label tracking-tighter uppercase font-bold text-[14px] xl:text-[16px]">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                className="relative text-on-surface/70 hover:text-primary transition-colors duration-200 group whitespace-nowrap" 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={scrollToContact}
              className={`group relative bg-primary text-on-primary font-label tracking-tighter uppercase font-bold text-[10px] md:text-xs px-3 md:px-4 py-1.5 md:py-2 ${lang === 'ar' ? 'clipped-corner-rtl' : 'clipped-corner'} hover:bg-primary-light hover:shadow-glow transition-all duration-200 btn-glow`}
            >
              {t.navInitiate}
              <span className={`absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 ${lang === 'ar' ? 'clipped-corner-rtl' : 'clipped-corner'} transition-opacity`}></span>
            </button>
            {/* Hamburger - shown on tablet 768-1024px */}
            <button 
              className="hamburger lg:block xl:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Enhanced */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button 
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-on-surface/70 hover:text-primary transition-colors p-2"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined text-2xl sm:text-3xl">close</span>
        </button>
        
        {/* Animated logo in mobile menu */}
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 mt-8 sm:mt-0">
          <img 
            alt="TAQA Logo" 
            className="h-8 sm:h-10 w-auto" 
            src="/assets/images/white-logo.png"
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-primary uppercase font-label">
            {t.companyName}
          </span>
        </div>
        
        <div className="flex flex-col items-center gap-5 sm:gap-6 px-4">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-base sm:text-lg md:text-xl font-headline font-bold uppercase tracking-widest hover:text-primary transition-colors relative group"
              onClick={(e) => handleNavClick(e, link.href, true)}
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <button 
          onClick={(e) => { scrollToContact(e); setMobileMenuOpen(false); }}
          className={`mt-8 sm:mt-10 group relative bg-primary text-on-primary px-6 sm:px-8 py-2.5 sm:py-3 font-headline font-bold uppercase tracking-widest ${lang === 'ar' ? 'clipped-corner-rtl' : 'clipped-corner'} hover:shadow-glow transition-all duration-300 btn-glow`}
        >
          {t.navInitiate}
          <span className={`absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 ${lang === 'ar' ? 'clipped-corner-rtl' : 'clipped-corner'} transition-opacity`}></span>
        </button>
      </div>
    </>
  )
}
