import Animation from './Animation'

interface StatsBarProps {
  t: {
    stats1: string
    stats2: string
    stats3: string
    stats4: string
    statsVal1: string
    statsVal2: string
    statsVal3: string
    statsVal4: string
  }
}

export default function StatsBar({ t }: StatsBarProps) {
  const stats = [
    { value: t.statsVal1, label: t.stats1, color: 'text-primary' },
    { value: t.statsVal2, label: t.stats2, color: 'text-tertiary' },
    { value: t.statsVal3, label: t.stats3, color: 'text-white' },
    { value: t.statsVal4, label: t.stats4, color: 'text-primary-container' },
  ]

  return (
    <div className="w-full bg-surface-container-lowest py-4 md:py-6 lg:py-8 overflow-hidden relative">
      <div className="absolute inset-0 diagonal-stripes opacity-30"></div>
      <div className="flex flex-wrap whitespace-nowrap gap-4 md:gap-6 lg:gap-12 items-center justify-around px-4 md:px-8 lg:px-10 relative z-10">
        {stats.map((stat, index) => (
          <Animation key={index} delay={index * 100} direction="scale" className="flex flex-col text-center md:text-left group">
            <span className={`${stat.color} text-xl md:text-2xl lg:text-3xl xl:text-4xl font-headline font-black group-hover:scale-110 transition-transform duration-300`}>
              {stat.value}
            </span>
            <span className="text-[10px] tracking-[0.3em] text-on-surface-variant uppercase font-bold group-hover:text-on-surface transition-colors duration-300">
              {stat.label}
            </span>
          </Animation>
        ))}
      </div>
    </div>
  )
}
