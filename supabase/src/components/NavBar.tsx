import { useState } from 'react';
import logoPerversa from "@/assets/logo-perversa.png";

interface NavBarProps {
  sections: { id: string; label: string }[];
}

const NavBar = ({ sections }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <a href="#hero" className="flex items-center gap-2 sm:gap-3">
          <img src={logoPerversa} alt="La Perversa" className="h-8 w-auto sm:h-10" />
          <span className="font-display text-lg sm:text-xl font-bold text-primary hidden sm:inline">
            La Perversa
          </span>
        </a>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 sm:gap-8">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav-link text-sm sm:text-base">
              {s.label}
            </a>
          ))}
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden">
            <div className="px-4 py-4 space-y-3">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
