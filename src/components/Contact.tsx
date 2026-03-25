import { useState } from 'react'
import Animation from './Animation'

interface ContactProps {
  t: {
    contactLabel: string
    contactTitle: string
    contactSubtitle: string
    nameLabel: string
    namePlaceholder: string
    companyLabel: string
    companyPlaceholder: string
    serviceLabel: string
    serviceOpt1: string
    serviceOpt2: string
    serviceOpt3: string
    serviceOpt4: string
    messageLabel: string
    messagePlaceholder: string
    submitBtn: string
    contactHQ: string
    phoneLine: string
    emailTerminal: string
    locationBase: string
    location: string
    engineersOnline: string
    engineersMsg: string
  }
}

export default function Contact({ t }: ContactProps) {
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
    <section className="py-8 md:py-16 px-4 md:px-10 bg-surface-container-low relative overflow-hidden border-t border-primary/10">
      {/* Background elements */}
      <div className="absolute inset-0 blueprint-grid opacity-10"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-tertiary/5 rounded-full blur-[100px]"></div>
      
      {/* Decorative diagonal lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary/20 via-transparent to-tertiary/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <Animation delay={100} direction="up">
              <span className="text-primary font-headline font-bold uppercase tracking-[0.4em] text-xs">
                {t.contactLabel}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-headline font-bold uppercase tracking-tight mt-4 md:mt-6 mb-6 md:mb-8 leading-[1.1]">
                {t.contactTitle}
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base lg:text-lg max-w-lg xl:max-w-xl mb-8 md:mb-10 lg:mb-12">
                {t.contactSubtitle}
              </p>
            </Animation>
            <Animation delay={200} direction="up">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                      {t.nameLabel}
                    </label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input" 
                      placeholder={t.namePlaceholder} 
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                      {t.companyLabel}
                    </label>
                    <input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input" 
                      placeholder={t.companyPlaceholder} 
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    {t.serviceLabel}
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option>{t.serviceOpt1}</option>
                    <option>{t.serviceOpt2}</option>
                    <option>{t.serviceOpt3}</option>
                    <option>{t.serviceOpt4}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    {t.messageLabel}
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea" 
                    placeholder={t.messagePlaceholder}
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="group relative bg-primary text-on-primary px-6 md:px-8 lg:px-10 py-3 md:p-4 lg:py-5 font-headline font-bold uppercase tracking-widest text-sm clipped-corner hover:scale-[1.02] hover:shadow-glow-intense transition-all duration-300 w-full md:w-auto btn-glow"
                >
                  {t.submitBtn}
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 clipped-corner transition-opacity"></span>
                </button>
              </form>
            </Animation>
          </div>
          {/* Info Side */}
          <Animation delay={300} direction="up" className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-surface-container p-6 md:p-8 lg:p-10 xl:p-12 space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 border border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <div>
                <h4 className="text-on-surface font-headline font-bold uppercase tracking-widest text-sm mb-4 md:mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-primary"></span> {t.contactHQ}
                </h4>
                <div className="space-y-4 md:space-y-6 lg:space-y-8">
                  <a 
                    href="https://wa.me/249912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 md:gap-4 lg:gap-6 hover:text-primary transition-colors group"
                  >
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl lg:text-3xl group-hover:scale-110 transition-transform">phone_in_talk</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">
                        {t.phoneLine}
                      </p>
                      <p className="text-base md:text-lg lg:text-2xl font-headline font-bold text-on-surface tracking-tight" dir="ltr">
                        +249 912 345 678
                      </p>
                    </div>
                  </a>
                  <a 
                    href="mailto:tech@taqa-electric.com"
                    className="flex gap-3 md:gap-4 lg:gap-6 hover:text-primary transition-colors group"
                  >
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl lg:text-3xl group-hover:scale-110 transition-transform">alternate_email</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">
                        {t.emailTerminal}
                      </p>
                      <p className="text-base md:text-lg lg:text-2xl font-headline font-bold text-on-surface tracking-tight lowercase">
                        tech@taqa-electric.com
                      </p>
                    </div>
                  </a>
                  <div className="flex gap-3 md:gap-4 lg:gap-6">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl lg:text-3xl">location_on</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">
                        {t.locationBase}
                      </p>
                      <p className="text-base md:text-lg lg:text-2xl font-headline font-bold text-on-surface tracking-tight uppercase">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 md:pt-8 lg:pt-10 xl:pt-12 border-t border-primary/10">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                    {t.engineersOnline}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed italic">
                  {t.engineersMsg}
                </p>
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  )
}
