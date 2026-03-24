const brands = ['JINKO SOLAR', 'MAXPOWER', 'INVT', 'GO GREEN', 'SIEMENS']

export default function BrandEcosystem() {
  return (
    <section className="py-4 md:py-6 px-4 md:px-10 bg-background overflow-hidden">
      <div className="border-t border-outline-variant/10 pt-4 md:pt-6">
        {/* Marquee animation container */}
        <div className="flex animate-marquee gap-8 md:gap-16 opacity-40 grayscale items-center">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div key={index} className="font-headline font-bold tracking-widest uppercase text-base md:text-xl whitespace-nowrap">
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
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
