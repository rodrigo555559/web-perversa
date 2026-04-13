import logoPerversa from "@/assets/logo-perversa.png";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <img
          src={logoPerversa}
          alt="La Perversa"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain mx-auto mb-4 sm:mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-primary font-bold mb-2">La Perversa</p>
        <p className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-[0.15em] sm:tracking-[0.2em] uppercase">
          Burgers & Smash
        </p>

        <div className="mt-6 sm:mt-8 font-body text-[10px] sm:text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} La Perversa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
