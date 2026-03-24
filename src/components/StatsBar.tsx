import Animation from './Animation'

export default function StatsBar() {
  const stats = [
    { value: '99.9%', label: 'Grid Reliability', color: 'text-primary' },
    { value: '500k+', label: 'Panels Installed', color: 'text-tertiary' },
    { value: '25+', label: 'Years of Expertise', color: 'text-white' },
    { value: 'KRT', label: 'Operational HQ', color: 'text-primary-container' },
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
