import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
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
    { label: 'Home', href: '#hero' },
    { label: 'Our Vision', href: '#vision' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Technology', href: '#hardware' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, closeMenu = false) => {
    e.preventDefault()
    if (closeMenu) setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav 
        className={`fixed left-0 w-full z-50 transition-all duration-500 top-[32px] sm:top-[29px] ${scrolled 
            ? 'bg-[#131313]/95 backdrop-blur-xl py-2 md:py-3 opacity-100 translate-y-0' 
            : 'bg-transparent py-0 opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-10 border-b border-outline-variant/5">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              alt="TAQA Electric Logo" 
              className="h-6 md:h-7 lg:h-8 w-auto" 
              src="/logo.png"
            />
            <span className="text-sm md:text-base lg:text-xl font-black tracking-tighter text-[#d32f2f] uppercase font-rajdhani">
              TAQA ELECTRIC
            </span>
          </div>
          <div className="hidden lg:flex gap-3 xl:gap-4 font-rajdhani tracking-tighter uppercase font-bold text-[14px] xl:text-[16px]">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                className="text-white/70 hover:text-white transition-colors whitespace-nowrap" 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-primary-container text-on-primary-container font-rajdhani tracking-tighter uppercase font-bold text-[10px] md:text-xs px-3 md:px-4 py-1.5 md:py-2 clipped-corner hover:bg-primary transition-all duration-200"
            >
              INITIATE
            </button>
            {/* Hamburger - shown on tablet 768-1024px */}
            <button 
              className="hamburger md:block xl:hidden"
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

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button 
          className="absolute top-5 right-5 text-white/70 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        <div className="flex flex-col items-center gap-5">
          {navLinks.map((link, index) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-xl font-headline font-bold uppercase tracking-widest hover:text-primary-container transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={(e) => handleNavClick(e, link.href, true)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button 
          onClick={(e) => { scrollToContact(e); setMobileMenuOpen(false); }}
          className="mt-6 bg-primary-container text-on-primary-container px-8 py-3 font-headline font-bold uppercase tracking-widest clipped-corner"
        >
          INITIATE
        </button>
      </div>
    </>
  )
}
