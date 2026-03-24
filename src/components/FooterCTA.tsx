export default function FooterCTA() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-10 bg-primary-container relative overflow-hidden group">
      <div className="absolute inset-0 circuit-trace opacity-10"></div>
      <div className="relative z-10 text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-headline font-black uppercase tracking-tighter text-on-primary-container mb-6 md:mb-8 leading-none">
          BUILD THE FUTURE
        </h2>
        <p className="text-on-primary-container/90 text-sm md:text-base lg:text-lg font-medium mb-6 md:mb-8 max-w-2xl lg:max-w-3xl tracking-tight px-4">
          Connect with our engineering division for a comprehensive technical roadmap for your next industrial project in Sudan.
        </p>
        <button className="bg-white text-primary-container px-6 md:px-8 lg:px-10 xl:px-16 py-3 md:py-4 lg:py-5 xl:py-8 font-headline font-bold uppercase tracking-[0.2em] text-sm md:text-base lg:text-xl hover:scale-105 transition-transform clipped-corner shadow-2xl w-full md:w-auto max-w-sm">
          REQUEST TECHNICAL CONSULTATION
        </button>
      </div>
    </section>
  )
}
