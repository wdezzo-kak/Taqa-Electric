import { useState } from 'react'
import Animation from './Animation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    service: 'Solar Solutions',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-8 md:py-16 px-4 md:px-10 bg-surface-container-low relative overflow-hidden border-t border-outline-variant/10">
      <div className="absolute inset-0 blueprint-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <Animation delay={100} direction="up">
              <span className="text-primary font-headline font-bold uppercase tracking-[0.4em] text-xs">
                Partner with TAQA
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tighter mt-4 md:mt-6 mb-6 md:mb-8 leading-tight">
                INITIATE TECHNICAL <br/>CONSULTATION
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base lg:text-lg max-w-lg xl:max-w-xl mb-8 md:mb-10 lg:mb-12">
                Start your journey towards energy autonomy. Our engineering division is ready to architect a sustainable framework tailored to your specific industrial or residential requirements.
              </p>
            </Animation>
            <Animation delay={200} direction="up">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/70 ml-1">
                      Full Name
                    </label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary-container p-3 md:p-4 text-white font-body" 
                      placeholder="John Doe" 
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/70 ml-1">
                      Company Name
                    </label>
                    <input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary-container p-3 md:p-4 text-white font-body" 
                      placeholder="Acme Corp" 
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/70 ml-1">
                    Service Required
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary-container p-3 md:p-4 text-white font-body appearance-none"
                  >
                    <option>Solar Solutions</option>
                    <option>Industrial Grids</option>
                    <option>Agricultural Pumping</option>
                    <option>Technical Consultancy</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/70 ml-1">
                    Technical Brief / Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary-container p-3 md:p-4 text-white font-body min-h-[120px] md:min-h-[150px]" 
                    placeholder="Describe your power requirements..."
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-primary-container text-on-primary-container px-6 md:px-8 lg:px-10 py-3 md:p-4 lg:py-5 font-headline font-bold uppercase tracking-widest text-sm clipped-corner hover:scale-[1.02] transition-transform neon-glow-red w-full md:w-auto"
                >
                  SUBMIT REQUEST
                </button>
              </form>
            </Animation>
          </div>
          {/* Info Side */}
          <Animation delay={300} direction="up" className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-surface-container p-6 md:p-8 lg:p-10 xl:p-12 space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 border border-outline-variant/10">
              <div>
                <h4 className="text-white font-headline font-bold uppercase tracking-widest text-sm mb-4 md:mb-6 flex items-center gap-3">
                  <span className="w-6 md:w-8 h-px bg-primary"></span> Direct Technical HQ
                </h4>
                <div className="space-y-4 md:space-y-6 lg:space-y-8">
                  <a 
                    href="https://wa.me/249912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 md:gap-4 lg:gap-6 hover:text-primary-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary-container text-xl md:text-2xl lg:text-3xl">phone_in_talk</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">
                        Phone Line
                      </p>
                      <p className="text-base md:text-lg lg:text-2xl font-headline font-bold text-white tracking-tight">
                        +249 912 345 678
                      </p>
                    </div>
                  </a>
                  <a 
                    href="mailto:tech@taqa-electric.com"
                    className="flex gap-3 md:gap-4 lg:gap-6 hover:text-primary-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary-container text-xl md:text-2xl lg:text-3xl">alternate_email</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">
                        Email Terminal
                      </p>
                      <p className="text-base md:text-lg lg:text-2xl font-headline font-bold text-white tracking-tight lowercase">
                        tech@taqa-electric.com
                      </p>
                    </div>
                  </a>
                  <div className="flex gap-3 md:gap-4 lg:gap-6">
                    <span className="material-symbols-outlined text-primary-container text-xl md:text-2xl lg:text-3xl">location_on</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">
                        Operational Base
                      </p>
                      <p className="text-base md:text-lg lg:text-2xl font-headline font-bold text-white tracking-tight uppercase">
                        Al-Amarat, Khartoum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 md:pt-8 lg:pt-10 xl:pt-12 border-t border-outline-variant/10">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                    Engineers Online
                  </span>
                </div>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed italic">
                  Our technical staff is currently monitoring grid performance. Consultation responses typical within 4 operational hours.
                </p>
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  )
}
