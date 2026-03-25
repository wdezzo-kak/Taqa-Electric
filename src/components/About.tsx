import Animation from './Animation'

interface AboutProps {
  t: {
    aboutLabel: string
    aboutTitle: string
    aboutDesc: string
    aboutDesc2: string
    techDivision: string
    certExperts: string
    feature1Title: string
    feature1Desc: string
    feature2Title: string
    feature2Desc: string
    feature3Title: string
    feature3Desc: string
    feature4Title: string
    feature4Desc: string
  }
}

export default function About({ t }: AboutProps) {
  const features = [
    {
      title: t.feature1Title,
      description: t.feature1Desc
    },
    {
      title: t.feature2Title,
      description: t.feature2Desc
    },
    {
      title: t.feature3Title,
      description: t.feature3Desc
    },
    {
      title: t.feature4Title,
      description: t.feature4Desc
    },
  ]

  return (
    <section className="py-6 sm:py-8 md:py-16 px-4 sm:px-6 md:px-10 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full blueprint-grid opacity-10"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-5 sm:gap-6 md:gap-10 items-center relative z-10">
        {/* Image side */}
        <Animation direction="right" delay={100} className="w-full md:w-1/2 relative">
          <div className="relative overflow-hidden group">
            <img 
              alt="Engineering precision and technical facility" 
              className="w-full h-[200px] sm:h-[280px] md:h-[400px] lg:h-[550px] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 border border-outline-variant/20" 
              src="/assets/images/about-image.png"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <Animation delay={300} direction="up">
            <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 lg:-bottom-8 -left-2 sm:-left-4 md:-left-6 lg:-left-8 bg-surface-container p-3 sm:p-4 md:p-6 lg:p-8 border border-outline-variant/20 max-w-[160px] sm:max-w-xs hover:shadow-glow transition-shadow duration-300">
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 block group-hover:scale-110 transition-transform duration-300">
                engineering
              </span>
              <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.4em] text-on-surface-variant uppercase">
                {t.techDivision}
              </p>
              <p className="text-on-surface font-headline font-bold text-xs sm:text-base md:text-lg lg:text-xl uppercase mt-0.5 sm:mt-1 lg:mt-2">
                {t.certExperts}
              </p>
            </div>
          </Animation>
        </Animation>

        {/* Content side */}
        <div className="w-full md:w-1/2">
          <Animation delay={200} direction="left">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.4em] text-xs">
              {t.aboutLabel}
            </span>
          </Animation>
          
          <Animation delay={300} direction="up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline font-bold uppercase tracking-tight mt-3 sm:mt-4 md:mt-6 mb-4 sm:mb-6 md:mb-8 leading-[1.1]">
              {t.aboutTitle}
            </h2>
          </Animation>
          
          <Animation delay={400} direction="up">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-on-surface-variant text-xs sm:text-sm md:text-base lg:text-lg max-w-lg xl:max-w-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <p>
                {t.aboutDesc}
              </p>
              <p>
                {t.aboutDesc2}
              </p>
            </div>
          </Animation>
          
          <Animation delay={500} direction="up" className="border-t border-outline-variant/20 pt-3 sm:pt-4 md:pt-6 lg:pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {features.map((feature, index) => (
                <Animation key={index} delay={600 + (index * 100)} direction="up" className="group cursor-pointer">
                  <h5 className="text-on-surface font-headline font-bold text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h5>
                  <p className="text-on-surface-variant text-[10px] sm:text-xs leading-relaxed mt-1 sm:mt-1.5 lg:mt-2 group-hover:text-on-surface transition-colors duration-300">
                    {feature.description}
                  </p>
                </Animation>
              ))}
            </div>
          </Animation>
        </div>
      </div>
    </section>
  )
}
