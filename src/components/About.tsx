import Animation from './Animation'

export default function About() {
  const features = [
    {
      title: 'TECHNICAL PRECISION',
      description: 'Engineering-grade hardware from global leaders like Jinko Solar and INVT.'
    },
    {
      title: 'LOCAL EXPERTISE',
      description: "Deep understanding of Sudan's environmental and logistical landscape."
    },
    {
      title: 'END-TO-END SOLUTIONS',
      description: 'From initial audit and design to deployment and technical support.'
    },
    {
      title: 'SUSTAINABLE IMPACT',
      description: 'Reducing diesel reliance and powering a greener future for Sudanese industry.'
    },
  ]

  return (
    <section className="py-8 md:py-16 px-4 md:px-10 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full blueprint-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center relative z-10">
        {/* Image side */}
        <Animation direction="right" delay={100} className="w-full md:w-1/2 relative">
          <div className="relative overflow-hidden group">
            <img 
              alt="Engineering precision and technical facility" 
              className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 border border-outline-variant/20" 
              src="/about-image.png"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-primary-container/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <Animation delay={300} direction="up">
            <div className="absolute -bottom-4 md:-bottom-6 lg:-bottom-8 -left-4 md:-left-6 lg:-left-8 bg-surface-container p-4 md:p-6 lg:p-8 border border-outline-variant/20 max-w-xs shadow-2xl hover:shadow-[0_0_30px_rgba(211,47,47,0.2)] transition-shadow duration-300">
              <span className="material-symbols-outlined text-primary-container text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3 lg:mb-4 block group-hover:scale-110 transition-transform">
                engineering
              </span>
              <p className="text-[10px] font-bold tracking-[0.4em] text-on-surface-variant uppercase">
                Technical Division
              </p>
              <p className="text-white font-headline font-bold text-base md:text-lg lg:text-xl uppercase mt-1 lg:mt-2">
                Certified Industrial Experts
              </p>
            </div>
          </Animation>
        </Animation>

        {/* Content side */}
        <div className="w-full md:w-1/2">
          <Animation delay={200} direction="left">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.4em] text-xs">
              A DECADE OF INDUSTRIAL EXCELLENCE
            </span>
          </Animation>
          
          <Animation delay={300} direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tighter mt-4 md:mt-6 mb-6 md:mb-8 leading-[0.95]">
              ENGINEERING <br/><span className="text-gradient-red">SUDAN'S FUTURE</span>
            </h2>
          </Animation>
          
          <Animation delay={400} direction="up">
            <div className="space-y-4 md:space-y-6 text-on-surface-variant text-sm md:text-base lg:text-lg max-w-lg xl:max-w-xl mb-8 md:mb-10 lg:mb-12">
              <p>
                Founded on the principles of reliability and technical precision, TAQA ELECTRIC has grown into Sudan's premier energy engineering firm. Our journey began with a simple mission: to provide the hardware and expertise necessary for national progress. Today, we stand as the bridge between global innovation and local execution.
              </p>
              <p>
                We don't just supply components; we design ecosystems. Our engineers specialize in high-capacity industrial solar grids, robust residential systems, and specialized agricultural solutions that withstand the unique challenges of the Sahara. Every watt we manage is a testament to our commitment to Sudan's sustainable transformation.
              </p>
            </div>
          </Animation>
          
          <Animation delay={500} direction="up" className="border-t border-outline-variant/20 pt-4 md:pt-6 lg:pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <Animation key={index} delay={600 + (index * 100)} direction="up" className="group cursor-pointer">
                  <h5 className="text-white font-headline font-bold text-xs lg:text-sm tracking-widest uppercase group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h5>
                  <p className="text-on-surface-variant text-xs leading-relaxed mt-1 lg:mt-2 group-hover:text-on-surface transition-colors duration-300">
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
