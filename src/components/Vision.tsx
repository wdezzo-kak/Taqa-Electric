import Animation from './Animation'

interface VisionProps {
  t: {
    visionLabel: string
    visionTitle: string
    visionQuote: string
    visionDesc: string
    visionDesc2: string
    visionStats1: string
    visionStats1Label: string
    visionStats2: string
    visionStats2Label: string
  }
}

export default function Vision({ t }: VisionProps) {
  return (
    <section className="py-8 md:py-16 px-4 md:px-10 bg-surface-container-low flex flex-col md:flex-row gap-8 md:gap-16 items-center relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[60px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Image side */}
      <Animation direction="left" delay={100} className="w-full md:w-1/2 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[60px]"></div>
        <div className="relative overflow-hidden group">
          <img 
            alt="Worker installing electrical components" 
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8dG7wMhQ2BoTlFU60p0hiPctxJ4d3f5_bPPxW4bQhGCePSiVakE6CKTa3eaPbz9jR6MOHS6ArdGlMCSGQqEpaUn6v-vnhMiTgkIZF4fn3e0h7TIRhje0hslTmosgBWrPEOpwPICQBsjZIolEDX_0lk5oJDz18QtmqWBStpWr7QeUJOickx85GmvEvLcZmc-TgQr43cub9JRM3uibeSyR5RFbq4Hxi7A2XeiyCJQ37YnzsgvT5ck9RmtT1jP1KlcCBeOTrmwxIOM_m"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
        </div>
        <Animation delay={400} direction="up">
          <div className="absolute bottom-0 left-0 bg-primary p-4 md:p-6 lg:p-8 clipped-corner translate-y-4 md:translate-y-6 lg:translate-y-8 md:translate-x-8 lg:translate-x-12 neon-glow-red hover:scale-105 transition-transform duration-300">
            <p className="font-headline font-bold text-lg md:text-xl lg:text-2xl uppercase leading-tight text-on-primary">
              {t.visionQuote}
            </p>
          </div>
        </Animation>
      </Animation>

      {/* Content side */}
      <div className="w-full md:w-1/2 relative z-10">
        <Animation delay={200} direction="right">
          <span className="text-tertiary font-headline font-bold uppercase tracking-[0.4em] text-xs">
            {t.visionLabel}
          </span>
        </Animation>
        
        <Animation delay={300} direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-headline font-bold uppercase tracking-tight mt-4 md:mt-6 mb-6 md:mb-8 leading-[1.1]">
            {t.visionTitle}
          </h2>
        </Animation>
        
        <Animation delay={400} direction="up">
          <div className="space-y-4 md:space-y-6 text-on-surface-variant text-sm md:text-base lg:text-lg max-w-lg xl:max-w-xl">
            <p>
              {t.visionDesc}
            </p>
            <p>
              {t.visionDesc2}
            </p>
          </div>
        </Animation>
        
        <Animation delay={500} direction="up" className="mt-6 md:mt-8 lg:mt-12 flex gap-6 md:gap-8 lg:gap-12">
          <div className="group">
            <h4 className="text-primary font-headline font-bold text-base md:text-lg lg:text-xl group-hover:text-tertiary transition-colors duration-300">{t.visionStats1}</h4>
            <p className="text-[10px] tracking-widest uppercase text-on-surface-variant font-bold mt-2">
              {t.visionStats1Label}
            </p>
          </div>
          <div className="w-px h-10 md:h-12 bg-outline-variant/30"></div>
          <div className="group">
            <h4 className="text-primary font-headline font-bold text-base md:text-lg lg:text-xl group-hover:text-tertiary transition-colors duration-300">{t.visionStats2}</h4>
            <p className="text-[10px] tracking-widest uppercase text-on-surface-variant font-bold mt-2">
              {t.visionStats2Label}
            </p>
          </div>
        </Animation>
      </div>
    </section>
  )
}
