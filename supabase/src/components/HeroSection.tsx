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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 animate-fade-in-up">
        <img
          src={logoCircle}
          alt="La Perversa Logo"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain mx-auto mb-6 sm:mb-8"
        />
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-primary tracking-tight">
          La Perversa
        </h1>
        <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground mt-3 sm:mt-4 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
          Burgers & Smash
        </p>
        <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground mt-3 sm:mt-4 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
          Ayer no fuiste al gimnasio, hoy no fuiste al gimnasio y por qué no, vamos a pedir aquí
        </p>
        <div className="mt-4 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-primary/40"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-primary/40"></div>
          </div>
        </div>
        <div className="mt-8 sm:mt-10">
          <a
            href="#hamburguesas"
            className="inline-block font-body text-xs sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-primary-foreground bg-primary px-6 sm:px-8 py-2.5 sm:py-3 hover:opacity-90 transition-opacity"
          >
            Ver Carta
          </a>
        </div>
        <div className="mt-6 sm:mt-8">
          <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-wide">
            PIDE LLAMANDO AL
          </p>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight mt-2">
            +34 681 82 29 81
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-6 sm:h-8 bg-muted-foreground/40 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
