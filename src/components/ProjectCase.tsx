import Animation from './Animation'

interface ProjectCaseProps {
  t: {
    projectLabel: string
    projectQuote: string
    projectTitle: string
    projectDesc: string
    projectDesc2: string
    projectFeat1: string
    projectFeat2: string
    projectFeat3: string
    projectBtn: string
  }
}

export default function ProjectCase({ t }: ProjectCaseProps) {
  const features = [
    t.projectFeat1,
    t.projectFeat2,
    t.projectFeat3,
  ]

  return (
    <section className="py-8 md:py-16 px-4 md:px-10 bg-surface-container-low flex flex-col md:flex-row gap-8 md:gap-12 items-center overflow-hidden">
      {/* Image side */}
      <Animation direction="left" delay={100} className="w-full md:w-1/2 relative group">
        <div className="absolute -top-10 -left-10 w-40 lg:w-64 h-40 lg:h-64 bg-primary-container/20 blur-[60px] lg:blur-[80px]"></div>
        <div className="relative overflow-hidden">
          <img 
            alt="Northern Sudan 2MW Industrial Solar Grid" 
            className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZLuqDJf2UGFyOQbhC5Qa5ic0-oN4rkRS6UipdiozbM7jXwkQ77LdD6xgPFkb2iHoEB70TK-9KCybMFpcfw_4yrikLHTZBzHXOBCtRzQGDzLhteJoKTo2yBwrR43L3eCnvYUEVvhxMDDjhuUbziAPqxxGq04RCEtztGJbUP3ULZzLUY_S8euxQZiCCs1Q44q_2EWjzjm8TQjl6OUiX4V1Ixq2Pz1CeTVzbKNLLq0ktcLXxm8evoUiqR8OJZL4Gl9mRx869U_h9KsFT"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <Animation delay={400} direction="up">
          <div className="absolute bottom-0 left-0 bg-primary-container p-4 md:p-6 lg:p-8 xl:p-10 clipped-corner translate-y-2 md:translate-y-4 lg:translate-y-6 md:translate-x-6 lg:translate-x-12 neon-glow-red hover:scale-105 transition-transform duration-300">
            <p className="font-headline font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase leading-tight text-on-primary-container">
              {t.projectQuote}
            </p>
          </div>
        </Animation>
      </Animation>

      {/* Content side */}
      <div className="w-full md:w-1/2">
        <Animation delay={200} direction="right">
          <span className="text-tertiary font-headline font-bold uppercase tracking-[0.4em] text-xs">
            {t.projectLabel}
          </span>
        </Animation>
        
        <Animation delay={300} direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tighter mt-4 md:mt-6 mb-6 md:mb-8 leading-[0.95]">
            {t.projectTitle}
          </h2>
        </Animation>
        
        <Animation delay={400} direction="up">
          <div className="space-y-4 md:space-y-6 text-on-surface-variant text-sm md:text-base lg:text-lg max-w-lg xl:max-w-xl">
            <p>
              {t.projectDesc}
            </p>
            <p>
              {t.projectDesc2}
            </p>
          </div>
        </Animation>
        
        <Animation delay={500} direction="up" className="mt-6 md:mt-8 lg:mt-10">
          <ul className="space-y-3 md:space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-bold font-headline uppercase tracking-widest group cursor-pointer">
                <span className="w-4 md:w-6 h-[2px] bg-primary group-hover:w-8 md:hover:w-10 transition-all duration-300"></span> 
                <span className="group-hover:text-on-surface transition-colors duration-300">{feature}</span>
              </li>
            ))}
          </ul>
        </Animation>
        
        <Animation delay={600} direction="up" className="mt-8 md:mt-10 lg:mt-12">
          <button className="group bg-surface-container-high border border-outline-variant/30 text-on-surface px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 font-headline font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-primary-container hover:border-primary-container transition-all duration-300 clipped-corner">
            <span className="relative z-10">{t.projectBtn}</span>
          </button>
        </Animation>
      </div>
    </section>
  )
}
