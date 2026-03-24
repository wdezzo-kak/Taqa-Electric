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
      <div className="bg-surface-container h-[220px] md:h-[280px] lg:h-[320px] xl:h-[380px] flex items-center justify-center p-4 md:p-6 lg:p-8 xl:p-10 transition-all duration-500 group-hover:scale-105 relative overflow-hidden">
        <img 
          alt={name} 
          className="hardware-image w-full h-auto max-h-[140px] md:max-h-[160px] lg:max-h-[180px] xl:max-h-[220px] drop-shadow-2xl grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
          src={image}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Hover overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <Animation delay={delay + 200} direction="up">
        <h4 className="font-headline font-bold uppercase mt-4 md:mt-5 lg:mt-6 text-base md:text-lg lg:text-xl text-center group-hover:text-primary-container transition-colors duration-300">
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl7F-3SfRUkqx399Dtlv307C5Rg9dOM2L_M1icp5nDxfPJmJ0ZyyM90gsh6uR_WBDIWOiI_-hkc37et_cX6ZWUpCx8ZNBa4ZrpgDrYfLUPer4jUg6456hus37UKvQJIYctokeJFABnJnLtKvEotdGaURASCj6fWy6r5DQYXYhvEaiUt4ZMAZo2tXWYJw7_TOov97IGLyyUN-g0oKcZDyBEwxHuRgMTyfzJ2yoKw5msAWpSET_NuSX2ZgbJMamatsK4CAWZhj2XoQ7-'
    },
    {
      name: t.hw2Name,
      subtitle: t.hw2Sub,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqBDmaRkAFFFRNm6Phzh3i5lxChq3JQo_j2nd912k6A3iY7g3XNFx_ddBiGwf0M78V_2SbRbRHpd0h1ef4xQiBnI5ulEcpdtwnkTqZBahjwxRVZ4biwpRLSjKHOf74d--2rUY57b4QpSteYgB-dbp1eRbXHiCIBMv5Ko97J1gIs_dF39uGu5dRcnJyVvS4ybtj7Fpo4j2j_U7UNApz5p4aSejSGCj8u6YNdW2D0yL2QYeeqYhhCtkhQi779-_4FrtjMqty-I3UwiHy'
    },
    {
      name: t.hw3Name,
      subtitle: t.hw3Sub,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1fBjEvBLW-D16Z7NHCKNvNQDL9R8hXCfly_FITILJsD7-CsEHkQH6rbKCZv6Vq-aUeaOnGxmBnOAWspzMuJmb3qF2M0wsLomCeHI9fzeW5oZreaRFLMQWn1vKNrxWxLSAUfZB86qDUc7if1MmE8znPJMmVoVDXQ-_8F36DCeD_rhL80CfuKoo4QL0IdHK_VO_u2Q52BNSoxTg5Xh4zWj_ULWSbcU5-pp2zBqELhWhdAIjc60zPVV57VQ4BxACo67Wzkd5Vg_HiKMn'
    },
    {
      name: t.hw4Name,
      subtitle: t.hw4Sub,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfQHB-hMsKISuL9LJP_s4N9EDzEbHqM5webIhpZabQ2lIbe8f3rYWG7MEYkW3gSCeTWZdzmForOPuFVjcSQ7uViC5phLo18VRD8cHuGALOq1VKE1egpqzEACEQSFxH74d3AtDOpKss9MJvlp60dwSb6oeZAuqwN591y0y7ebHGtUDoQ8VIOTGcVfMgZ9mlghYzTaf2TSwib2f-O4KGJ2zHwSp-XeU67IR4AFdNCw0nC9isWm1DR1yZGOpLaPJkHVW9TKSc-a0wwHBU'
    },
  ]

  return (
    <section className="py-8 md:py-16 px-4 md:px-10 bg-background overflow-hidden blueprint-grid">
      <Animation direction="up">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-headline font-black uppercase tracking-tighter">
            {t.hardwareTitle}
          </h2>
          <p className="text-on-surface-variant tracking-[0.3em] uppercase text-xs mt-3 md:mt-4 font-bold">
            {t.hardwareSubtitle}
          </p>
        </div>
      </Animation>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8 xl:gap-10 max-w-7xl mx-auto">
        {hardwareItems.map((item, index) => (
          <HardwareItem key={index} {...item} delay={100 + (index * 150)} />
        ))}
      </div>
    </section>
  )
}
