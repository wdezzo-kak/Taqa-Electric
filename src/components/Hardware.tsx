import Animation from './Animation'

interface HardwareItemProps {
  name: string
  subtitle: string
  image: string
  delay?: number
}

function HardwareItem({ name, subtitle, image, delay = 0 }: HardwareItemProps) {
  return (
    <Animation delay={delay} direction="up" className="group">
      <div className="bg-surface-container h-[200px] md:h-[260px] lg:h-[300px] xl:h-[340px] flex items-center justify-center p-4 md:p-6 lg:p-8 transition-all duration-500 group-hover:scale-105 relative overflow-hidden border border-outline-variant/10 group-hover:border-primary/30">
        <img 
          alt={name} 
          className="hardware-image w-auto h-auto max-w-[70%] max-h-[120px] md:max-h-[150px] lg:max-h-[180px] xl:max-h-[220px] drop-shadow-2xl grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-110 group-hover:max-w-[85%] group-hover:max-h-[160px] md:group-hover:max-h-[200px] lg:group-hover:max-h-[240px] xl:group-hover:max-h-[280px] transition-all duration-500" 
          src={image}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <Animation delay={delay + 200} direction="up">
        <h4 className="font-headline font-bold uppercase mt-4 md:mt-5 lg:mt-6 text-base md:text-lg lg:text-xl text-center group-hover:text-primary transition-colors duration-300">
          {name}
        </h4>
        <p className="text-center text-[10px] tracking-widest text-on-surface-variant uppercase font-bold mt-1 md:mt-2 group-hover:text-on-surface transition-colors duration-300">
          {subtitle}
        </p>
      </Animation>
    </Animation>
  )
}

interface HardwareProps {
  t: {
    hardwareTitle: string
    hardwareSubtitle: string
    hw1Name: string
    hw1Sub: string
    hw2Name: string
    hw2Sub: string
    hw3Name: string
    hw3Sub: string
    hw4Name: string
    hw4Sub: string
  }
}

export default function Hardware({ t }: HardwareProps) {
  const hardwareItems = [
    {
      name: t.hw1Name,
      subtitle: t.hw1Sub,
      image: '/assets/images/product-solar-panel.webp'
    },
    {
      name: t.hw2Name,
      subtitle: t.hw2Sub,
      image: '/assets/images/product-Residential-inverter.webp'
    },
    {
      name: t.hw3Name,
      subtitle: t.hw3Sub,
      image: '/assets/images/product-battery.webp'
    },
    {
      name: t.hw4Name,
      subtitle: t.hw4Sub,
      image: '/assets/images/product-agricultural-inverter.webp'
    },
  ]

  return (
    <section className="py-8 md:py-16 px-4 md:px-10 bg-background overflow-hidden blueprint-grid relative">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-tertiary/3 rounded-full blur-[100px] pointer-events-none"></div>
      
      <Animation direction="up">
        <div className="text-center mb-8 md:mb-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-headline font-bold uppercase tracking-tight">
            {t.hardwareTitle}
          </h2>
          <p className="text-on-surface-variant tracking-[0.3em] uppercase text-xs mt-3 md:mt-4 font-bold">
            {t.hardwareSubtitle}
          </p>
        </div>
      </Animation>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8 xl:gap-10 max-w-7xl mx-auto relative z-10">
        {hardwareItems.map((item, index) => (
          <HardwareItem key={index} {...item} delay={100 + (index * 150)} />
        ))}
      </div>
    </section>
  )
}
