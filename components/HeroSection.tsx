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
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <img
          src={logoCircle}
          alt="La Perversa Logo"
          className="w-48 h-48 md:w-64 md:h-64 object-contain mx-auto mb-8"
        />
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary tracking-tight">
          La Perversa
        </h1>
        <p className="font-body text-sm md:text-base text-muted-foreground mt-4 tracking-[0.3em] uppercase">
          Burgers & Smash
        </p>
        <div className="mt-10">
          <a
            href="#hamburguesas"
            className="inline-block font-body text-xs uppercase tracking-[0.25em] font-semibold text-primary-foreground bg-primary px-8 py-3 hover:opacity-90 transition-opacity"
          >
            Ver Carta
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-8 bg-muted-foreground/40 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
