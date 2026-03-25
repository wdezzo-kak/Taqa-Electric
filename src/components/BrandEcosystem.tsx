const brands = ['JINKO SOLAR', 'MAXPOWER', 'INVT', 'GO GREEN', 'SIEMENS']

export default function BrandEcosystem() {
  return (
    <section className="py-4 md:py-6 px-4 md:px-10 bg-background overflow-hidden relative">
      {/* Background line */}
      <div className="border-t border-outline-variant/10 pt-4 md:pt-6 relative z-10">
        {/* Marquee animation container */}
        <div className="flex animate-marquee gap-8 md:gap-16 opacity-30 grayscale hover:opacity-50 hover:grayscale-0 transition-all duration-500 items-center">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div key={index} className="font-headline font-bold tracking-widest uppercase text-base md:text-xl whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors duration-300">
              {brand}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
