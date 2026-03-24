import Animation from './Animation'

export default function Vision() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-10 bg-surface-container-low flex flex-col md:flex-row gap-8 md:gap-16 items-center">
      {/* Image side */}
      <Animation direction="left" delay={100} className="w-full md:w-1/2 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/10 blur-[60px]"></div>
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
          <div className="absolute bottom-0 left-0 bg-primary-container p-4 md:p-6 lg:p-8 clipped-corner translate-y-4 md:translate-y-6 lg:translate-y-8 md:translate-x-8 lg:translate-x-12 neon-glow-red hover:scale-105 transition-transform duration-300">
            <p className="font-headline font-bold text-lg md:text-xl lg:text-2xl uppercase leading-tight text-on-primary-container">
              Building the Grid of Sudan's Future.
            </p>
          </div>
        </Animation>
      </Animation>

      {/* Content side */}
      <div className="w-full md:w-1/2">
        <Animation delay={200} direction="right">
          <span className="text-tertiary font-headline font-bold uppercase tracking-[0.4em] text-xs">
            Our Vision
          </span>
        </Animation>
        
        <Animation delay={300} direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tighter mt-4 md:mt-6 mb-6 md:mb-8 leading-[0.95]">
            LIGHTING SUDAN'S <span className="text-gradient-red">FUTURE</span>
          </h2>
        </Animation>
        
        <Animation delay={400} direction="up">
          <div className="space-y-4 md:space-y-6 text-on-surface-variant text-sm md:text-base lg:text-lg max-w-lg xl:max-w-xl">
            <p>
              At TAQA ELECTRIC, we don't just supply power; we architect growth. Our vision is rooted in Sudan's vast potential for energy autonomy. We are bridging the gap between traditional energy limitations and a clean-tech future.
            </p>
            <p>
              By integrating world-class Jinko Solar technology with specialized industrial expertise, we provide the reliable backbone for the nation's agricultural, residential, and industrial evolution. From the fields to the factory floor, we deliver performance you can trust.
            </p>
          </div>
        </Animation>
        
        <Animation delay={500} direction="up" className="mt-6 md:mt-8 lg:mt-12 flex gap-6 md:gap-8 lg:gap-12">
          <div className="group">
            <h4 className="text-primary font-headline font-bold text-2xl md:text-3xl lg:text-4xl group-hover:text-tertiary transition-colors">150+</h4>
            <p className="text-[10px] tracking-widest uppercase text-on-surface-variant font-bold mt-2">
              Projects Completed
            </p>
          </div>
          <div className="w-px h-10 md:h-12 bg-outline-variant/30"></div>
          <div className="group">
            <h4 className="text-primary font-headline font-bold text-2xl md:text-3xl lg:text-4xl group-hover:text-tertiary transition-colors">0.0%</h4>
            <p className="text-[10px] tracking-widest uppercase text-on-surface-variant font-bold mt-2">
              Failure Rate
            </p>
          </div>
        </Animation>
      </div>
    </section>
  )
}
