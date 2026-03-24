import React from 'react'
import Animation from './Animation'

interface ServiceCardProps {
  module: string
  title: React.ReactNode
  description: string
  icon: string
  iconColor: string
  buttonText: string
  accentColor: string
  isRtl?: boolean
  delay?: number
}

function ServiceCard({ module, title, description, icon, iconColor, buttonText, accentColor, isRtl = false, delay = 0 }: ServiceCardProps) {
  return (
    <Animation delay={delay} direction="up" className="h-full">
      <div className="group relative bg-surface-container p-5 md:p-8 h-full flex flex-col justify-between transition-all duration-500 hover:bg-surface-container-high hover:-translate-y-1">
        {/* Icon positioned in top-right with enough margin */}
        <div className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} md:top-6 ${isRtl ? 'md:left-6' : 'md:right-6'} opacity-20 group-hover:opacity-40 transition-all duration-300 z-0`}>
          <span className={`material-symbols-outlined ${iconColor} text-5xl md:text-6xl lg:text-7xl`}>
            {icon}
          </span>
        </div>
        
        <div className="relative z-10 pt-2">
          <span className="text-[10px] font-bold tracking-[0.4em] text-on-surface-variant uppercase mb-2 md:mb-3 block">
            {module}
          </span>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-headline font-bold uppercase leading-tight group-hover:text-primary-container transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <div className="relative z-10 mt-4">
          <p className="text-on-surface-variant text-sm leading-relaxed group-hover:text-on-surface transition-colors duration-300 line-clamp-4">
            {description}
          </p>
          <button className={`${accentColor} font-headline font-bold text-xs tracking-widest uppercase flex items-center gap-2 mt-4 group-hover:gap-3 transition-all duration-300`}>
            {buttonText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        
        <div className={`absolute -bottom-8 ${isRtl ? '-left-8' : '-right-8'} w-32 h-32 ${accentColor.replace('text-', 'bg-')}/10 blur-[50px] group-hover:${accentColor.replace('text-', 'bg-')}/20 transition-all duration-500`}></div>
      </div>
    </Animation>
  )
}

interface ServicesProps {
  t: {
    servicesLabel: string
    servicesTitle: string
    servicesSubtitle: string
    service1Module: string
    service1Title: string
    service1Desc: string
    service1Btn: string
    service2Module: string
    service2Title: string
    service2Desc: string
    service2Btn: string
    service3Module: string
    service3Title: string
    service3Desc: string
    service3Btn: string
  }
  lang?: 'en' | 'ar'
}

export default function Services({ t, lang = 'en' }: ServicesProps) {
  const isRtl = lang === 'ar'
  const services = [
    {
      module: t.service1Module,
      title: (
        <>
          {t.service1Title}
        </>
      ),
      description: t.service1Desc,
      icon: 'home_work',
      iconColor: 'text-tertiary',
      buttonText: t.service1Btn,
      accentColor: 'text-tertiary',
    },
    {
      module: t.service2Module,
      title: (
        <>
          {t.service2Title}
        </>
      ),
      description: t.service2Desc,
      icon: 'agriculture',
      iconColor: 'text-primary-container',
      buttonText: t.service2Btn,
      accentColor: 'text-primary-container',
    },
    {
      module: t.service3Module,
      title: (
        <>
          {t.service3Title}
        </>
      ),
      description: t.service3Desc,
      icon: 'factory',
      iconColor: 'text-white',
      buttonText: t.service3Btn,
      accentColor: 'text-white',
    },
  ]

  return (
    <section className="py-6 md:py-12 px-4 md:px-10 bg-background relative circuit-trace">
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-10 gap-4 md:gap-6">
        <Animation direction="left" className="max-w-xl lg:max-w-2xl">
          <span className="text-tertiary font-headline text-xs md:text-sm tracking-[0.5em] uppercase font-bold">
            {t.servicesLabel}
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tighter mt-2 md:mt-4">
            {t.servicesTitle}
          </h2>
        </Animation>
        <Animation delay={200} direction="right">
          <p className="text-on-surface-variant max-w-sm lg:max-w-md text-sm border-l-2 border-primary-container pl-4 leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </Animation>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`${index !== 0 && index !== 2 ? 'border-x border-y-0 md:border-x border-y-0 border-outline-variant/5' : 'border-y md:border-y-0 border-outline-variant/5'} h-full`}
          >
            <ServiceCard {...service} isRtl={isRtl} delay={300 + (index * 150)} />
          </div>
        ))}
      </div>
    </section>
  )
}
