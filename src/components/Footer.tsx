interface FooterProps {
  t: {
    footerDesc: string
    footerTagline: string
    footerCompanyName: string
    systems: string
    support: string
    contactTech: string
    directLine: string
    copyright: string
    link1: string
    link2: string
    link3: string
    link4: string
    link5: string
    link6: string
  }
}

export default function Footer({ t }: FooterProps) {
  const systemLinks = [t.link1, t.link2, t.link3]
  const supportLinks = [t.link4, t.link5, t.link6]

  return (
    <footer className="bg-surface-container-lowest w-full py-10 md:py-14 lg:py-20 px-6 lg:px-16 border-t border-primary/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-tertiary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto relative">
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            <img 
              alt="TAQA" 
              className="h-6 md:h-7 lg:h-8 w-auto" 
              src="/assets/images/white-logo.png"
            />
            <span className="text-base md:text-lg lg:text-xl font-bold text-on-surface uppercase tracking-tighter font-headline">
              {t.footerCompanyName}
            </span>
          </div>
          <p className="text-on-surface-variant/60 text-sm leading-relaxed max-w-xs">
            {t.footerDesc}
          </p>
          <div className="text-primary font-bold font-headline uppercase tracking-widest text-[10px]">
            {t.footerTagline}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-4">
            <h5 className="text-on-surface font-headline font-bold uppercase tracking-widest text-xs mb-1 md:mb-2">
              {t.systems}
            </h5>
            {systemLinks.map((link, index) => (
              <a 
                key={index}
                className="text-on-surface-variant/50 hover:text-primary transition-colors text-xs uppercase tracking-widest group flex items-center gap-2" 
                href="#"
              >
                <span className="w-0 h-[1px] bg-primary transition-all duration-200 group-hover:w-3"></span>
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <h5 className="text-on-surface font-headline font-bold uppercase tracking-widest text-xs mb-1 md:mb-2">
              {t.support}
            </h5>
            {supportLinks.map((link, index) => (
              <a 
                key={index}
                className="text-on-surface-variant/50 hover:text-primary transition-colors text-xs uppercase tracking-widest group flex items-center gap-2" 
                href="#"
              >
                <span className="w-0 h-[1px] bg-primary transition-all duration-200 group-hover:w-3"></span>
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <h5 className="text-on-surface font-headline font-bold uppercase tracking-widest text-xs mb-1 md:mb-2">
            {t.contactTech}
          </h5>
          <div className="bg-surface-container p-4 md:p-5 lg:p-6 border border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <div className="text-[10px] text-on-surface-variant/60 uppercase font-bold tracking-[0.2em] mb-2">
              {t.directLine}
            </div>
            <div className="text-primary font-bold font-headline text-lg md:text-xl lg:text-2xl" dir="ltr">
              +249 912 345 678
            </div>
          </div>
          <div className="text-[10px] text-on-surface-variant/40 uppercase font-bold tracking-widest text-center md:text-left">
            {t.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}
