import Animation from './Animation'

interface ProjectCaseProps {
  t: {
    projectLabel: string
    projectQuote: string
    projectTitle: string
    projectSubtitle?: string
    projectDate: string
    projectDesc: string
    projectCredit?: string
    projectFeat1: string
    projectFeat2: string
    projectFeat3: string
    projectFeat4?: string
    projectBtn: string
  }
  lang: 'en' | 'ar'
}

export default function ProjectCase({ t, lang }: ProjectCaseProps) {
  const features = [
    t.projectFeat1,
    t.projectFeat2,
    t.projectFeat3,
  ]
  
  if (t.projectFeat4) {
    features.push(t.projectFeat4)
  }

  const projectImages = [
    {
      src: '/assets/images/sileit-ventilation-fan.webp',
      alt: 'Sileit Project Ventilation System',
    },
    {
      src: '/assets/images/sileit-solar-panels.webp',
      alt: 'Sileit Project Solar Panels Installation',
    },
    {
      src: '/assets/images/sileit-team-installation.webp',
      alt: 'Sileit Project Technical Team',
    },
  ]

  return (
    <section className="py-6 sm:py-8 md:py-16 px-4 sm:px-6 md:px-10 bg-surface-container-low flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-start overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute -top-10 -left-10 w-40 md:w-64 h-40 md:h-64 bg-primary/20 blur-[60px] md:blur-[80px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Image side - 50% width on md+ */}
      <Animation direction="left" delay={100} className="w-full md:w-6/12 relative group">
        <div className="absolute -top-10 -left-10 w-40 md:w-64 h-40 md:h-64 bg-primary/20 blur-[60px] md:blur-[80px]"></div>
        
        {/* Grid: 2 columns, 2 rows - same height for md and lg */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:gap-4 h-[280px] sm:h-[350px] md:h-[550px]">
          {/* IMG 2 - Solar Panels (Landscape - Top, full width) */}
          <div className="col-span-2 row-span-1 relative group/img2 overflow-hidden border border-outline-variant/20 shadow-2xl">
            <img 
              alt={projectImages[1].alt}
              className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover/img2:grayscale-0 group-hover/img2:brightness-100" 
              src={projectImages[1].src}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover/img2:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* IMG 1 - Ventilation Fan (Square - Bottom Left) */}
          <div className="col-span-1 row-span-1 relative group/img1 overflow-hidden border border-outline-variant/20 shadow-xl">
            <img 
              alt={projectImages[0].alt}
              className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover/img1:grayscale-0 group-hover/img1:brightness-100" 
              src={projectImages[0].src}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover/img1:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* IMG 3 - Team Installation (Square - Bottom Right) */}
          <div className="col-span-1 row-span-1 relative group/img3 overflow-hidden border border-outline-variant/20 shadow-xl">
            <img 
              alt={projectImages[2].alt}
              className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover/img3:grayscale-0 group-hover/img3:brightness-100" 
              src={projectImages[2].src}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover/img3:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        
        {/* Quote badge - overlaid on bottom of image grid */}
        <div className={`absolute -bottom-3 sm:-bottom-4 left-0 right-0 mx-auto sm:mx-0 sm:left-0 sm:right-auto bg-primary p-2.5 sm:p-3 md:p-4 ${lang === 'ar' ? 'clipped-corner-rtl' : 'clipped-corner'} neon-glow-red z-20 max-w-[140px] sm:max-w-[180px] md:max-w-[220px]`}>
          <p className="font-headline font-bold text-[10px] sm:text-xs md:text-sm uppercase leading-tight text-on-primary">
            {t.projectQuote}
          </p>
        </div>
      </Animation>

      {/* Content side - 50% width on md+ */}
      <div className="w-full md:w-6/12 relative z-10">
        {/* Label */}
        <Animation delay={200} direction="right">
          <span className="text-tertiary font-headline font-bold uppercase tracking-[0.5em] text-xs md:text-sm">
            {t.projectLabel}
          </span>
        </Animation>
        
        {/* Title */}
        <Animation delay={300} direction="up">
          <h2 className="text-lg sm:text-2xl md:text-4xl font-headline font-bold uppercase tracking-tight mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-3 md:mb-4 leading-[0.95]">
            {t.projectTitle}
          </h2>
        </Animation>

        {/* Subtitle */}
        {t.projectSubtitle && (
          <Animation delay={350} direction="up">
            <h3 className="text-sm sm:text-lg md:text-2xl font-headline font-bold uppercase tracking-tight text-primary mb-3 sm:mb-5 md:mb-6 leading-[1.1]">
              {t.projectSubtitle}
            </h3>
          </Animation>
        )}
        
        {/* Date badge */}
        <Animation delay={400} direction="up">
          <div className="inline-block px-2.5 sm:px-3 py-1 border border-primary/30 text-primary text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 sm:mb-6 md:mb-8">
            {t.projectDate}
          </div>
        </Animation>
        
        {/* Description */}
        <Animation delay={500} direction="up">
          <div className="space-y-3 sm:space-y-4 md:space-y-5 text-on-surface-variant text-xs sm:text-base md:text-base max-w-xl font-light">
            <p>
              {t.projectDesc}
            </p>
            {t.projectCredit && (
              <p className="text-xs sm:text-sm italic opacity-80 border-l-2 border-primary pl-3 sm:pl-4 md:pl-6">
                {t.projectCredit}
              </p>
            )}
          </div>
        </Animation>
        
        {/* Features */}
        <Animation delay={600} direction="up" className="mt-6 sm:mt-8 md:mt-10">
          <ul className="space-y-2 sm:space-y-3 md:space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs md:text-sm font-bold font-headline uppercase tracking-[0.3em] sm:tracking-[0.35em] group cursor-pointer">
                <span className="w-4 sm:w-5 md:w-6 h-[2px] bg-primary group-hover:w-5 sm:group-hover:w-7 md:group-hover:w-9 transition-all duration-300"></span> 
                <span className="group-hover:text-on-surface transition-colors duration-300">{feature}</span>
              </li>
            ))}
          </ul>
        </Animation>
        
        {/* Button */}
        <Animation delay={700} direction="up" className="mt-8 sm:mt-10 md:mt-12">
          <button className={`group bg-surface-container-high border border-outline-variant/30 text-on-surface px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 font-headline font-bold uppercase tracking-widest text-[10px] sm:text-sm hover:bg-primary hover:border-primary hover:shadow-glow transition-all duration-300 ${lang === 'ar' ? 'clipped-corner-rtl' : 'clipped-corner'} flex items-center gap-2`}>
            <span className="relative z-10">{t.projectBtn}</span>
            <span className="material-symbols-outlined text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300">arrow_right_alt</span>
          </button>
        </Animation>
      </div>
    </section>
  )
}
