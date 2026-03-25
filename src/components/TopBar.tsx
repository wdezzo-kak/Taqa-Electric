interface TopBarProps {
  lang: 'en' | 'ar'
  setLang: (lang: 'en' | 'ar') => void
  t: {
    topbarPhone: string
    topbarWhatsapp: string
    topbarEmail: string
  }
}

export default function TopBar({ lang, setLang, t }: TopBarProps) {
  const phoneNumber = '+249912345678'
  const email = t.topbarEmail

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-surface-container-lowest border-b border-outline-variant/10 px-4 md:px-8 py-2 md:py-1.5 flex justify-between items-center text-[10px] md:text-xs font-bold tracking-widest uppercase text-on-surface-variant/80">
      <div className="flex items-center gap-4 md:gap-6">
        <a 
          href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 md:gap-2 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[14px] md:text-[16px]">call</span> 
          <span className="hidden xs:inline sm:hidden md:inline" dir="ltr">{t.topbarPhone}</span>
          <span className="xs:hidden" dir="ltr">{t.topbarWhatsapp}</span>
        </a>
        <a 
          href={`mailto:${email}`}
          className="hidden md:flex items-center gap-2 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[14px] md:text-[16px]">mail</span> 
          {email}
        </a>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <button 
          onClick={() => setLang('ar')}
          className={`hover:text-primary transition-colors ${lang === 'ar' ? 'text-primary' : 'text-on-surface/50'}`}
        >
          AR
        </button>
        <span className="opacity-30">|</span>
        <button 
          onClick={() => setLang('en')}
          className={`hover:text-primary transition-colors ${lang === 'en' ? 'text-primary' : 'text-on-surface/50'}`}
        >
          EN
        </button>
      </div>
    </div>
  )
}
