const systemLinks = ['Dashboard', 'Protocols', 'Hardware']
const supportLinks = ['Tech Ops', 'Case Studies', 'Legal']

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] w-full py-10 md:py-14 lg:py-20 px-6 lg:px-16 border-t border-outline-variant/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            <img 
              alt="TAQA" 
              className="h-6 md:h-7 lg:h-8 w-auto grayscale" 
              src="/logo.png"
            />
            <span className="text-base md:text-lg lg:text-xl font-bold text-white uppercase tracking-tighter font-headline">
              TAQA
            </span>
          </div>
          <p className="text-on-surface-variant/60 text-sm leading-relaxed max-w-xs">
            Sudan's leading solar engineering firm. Deploying reliable energy infrastructure for residential, agricultural, and industrial sectors.
          </p>
          <div className="text-primary font-bold font-headline uppercase tracking-widest text-[10px]">
            Sudan HQ • Al-Amarat, Khartoum
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-4">
            <h5 className="text-white font-headline font-bold uppercase tracking-widest text-xs mb-1 md:mb-2">
              Systems
            </h5>
            {systemLinks.map((link, index) => (
              <a 
                key={index}
                className="text-gray-500 hover:text-primary transition-colors text-xs uppercase tracking-widest" 
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <h5 className="text-white font-headline font-bold uppercase tracking-widest text-xs mb-1 md:mb-2">
              Support
            </h5>
            {supportLinks.map((link, index) => (
              <a 
                key={index}
                className="text-gray-500 hover:text-primary transition-colors text-xs uppercase tracking-widest" 
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <h5 className="text-white font-headline font-bold uppercase tracking-widest text-xs mb-1 md:mb-2">
            Contact Tech Ops
          </h5>
          <div className="bg-surface-container-low p-4 md:p-5 lg:p-6 border border-outline-variant/10">
            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2">
              Direct Technical Line
            </div>
            <div className="text-primary font-bold font-headline text-lg md:text-xl lg:text-2xl">
              +249 912 345 678
            </div>
          </div>
          <div className="text-[10px] text-gray-600 uppercase font-bold tracking-widest text-center md:text-left">
            © 2024 TAQA ELECTRIC | INDUSTRIAL PRECISION | SUDAN HQ
          </div>
        </div>
      </div>
    </footer>
  )
}
