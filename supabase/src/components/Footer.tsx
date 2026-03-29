import logoPerversa from "@/assets/logo-perversa.png";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <img
          src={logoPerversa}
          alt="La Perversa"
          className="w-20 h-20 object-contain mx-auto mb-6 opacity-60"
        />
        <p className="font-display text-2xl text-primary font-bold mb-2">La Perversa</p>
        <p className="font-body text-xs text-muted-foreground tracking-[0.2em] uppercase">
          Burgers & Smash
        </p>
        <div className="mt-8 font-body text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} La Perversa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
