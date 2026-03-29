import logoPerversa from "@/assets/logo-perversa.png";

interface NavBarProps {
  sections: { id: string; label: string }[];
}

const NavBar = ({ sections }: NavBarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logoPerversa} alt="La Perversa" className="h-10 w-auto" />
          <span className="font-display text-xl font-bold text-primary hidden sm:inline">
            La Perversa
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav-link">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
