import logoCircle from "@/assets/logo-circle.png";
import heroBurger from "@/assets/hero-burger.jpg";


const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Hamburguesa gourmet"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up pb-20 sm:pb-24 md:pb-32">
        <div className="relative inline-block mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
          <img
            src={logoCircle}
            alt="La Perversa Logo"
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-contain mx-auto drop-shadow-2xl"
          />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary tracking-tight mb-3 sm:mb-4 drop-shadow-lg">
          La Perversa
        </h1>
        <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mt-2 sm:mt-3 tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase font-medium">
          Burgers & Smash
        </p>
        <p className="font-body text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground/80 mt-2 sm:mt-3 tracking-[0.1em] sm:tracking-[0.15em] uppercase max-w-md mx-auto leading-relaxed">
          Ayer no fuiste al gimnasio, hoy no fuiste al gimnasio y por qué no, vamos a pedir aquí
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-primary/40"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-8 h-0.5 bg-primary/40"></div>
          </div>
        </div>
        <div className="mt-8 sm:mt-10">
          <a
            href="#hamburguesas"
            className="inline-block font-body text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-primary-foreground bg-primary px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30"
          >
            Ver Carta
          </a>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12">
          <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary tracking-wide">
            PIDE LLAMANDO AL
          </p>
          <a href="tel:+34681822981" className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-primary tracking-tight mt-2 sm:mt-3 block hover:text-primary/80 transition-colors">
            +34 681 82 29 81
          </a>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 bg-secondary/50 rounded-lg max-w-md mx-auto backdrop-blur-sm">
          <h3 className="font-display text-base sm:text-lg md:text-xl text-primary font-bold mb-3 sm:mb-4">🍔 Horario Perverso 🍔</h3>
          <div className="font-body text-[10px] sm:text-xs md:text-sm text-foreground space-y-1 sm:space-y-2">
            <p className="text-muted-foreground">Lunes: Cerrado (día para echarnos unos brawl stars)</p>
            <p className="text-muted-foreground">Martes: Cerrado (aún recuperándonos)</p>
            <p>Miércoles: 20:30 - 00:30</p>
            <p>Jueves: 20:30 - 00:30</p>
            <p>Viernes: 13:30 - 16:00 y 20:30 - 01:00</p>
            <p>Sábado: 13:30 - 16:00 y 20:30 - 01:00</p>
            <p>Domingo: 13:30 - 16:00 y 20:30 - 01:00</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-6 sm:h-8 md:h-10 bg-muted-foreground/40 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
