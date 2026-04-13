import { useState, useRef, useEffect } from 'react';
import logoPerversa from "@/assets/logo-perversa.png";

interface NavBarProps {
  sections: { id: string; label: string }[];
}

const NavBar = ({ sections }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity">
          <img src={logoPerversa} alt="La Perversa" className="h-7 w-auto sm:h-9 md:h-10" />
          <span className="font-display text-base sm:text-lg md:text-xl font-bold text-primary hidden sm:inline">
            La Perversa
          </span>
        </a>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 sm:p-2.5 text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
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
            className="w-5 h-5 sm:w-6 sm:h-6"
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
        <div className="hidden md:flex items-center gap-5 sm:gap-6 lg:gap-8">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav-link text-xs sm:text-sm md:text-base hover:text-primary transition-colors duration-300">
              {s.label}
            </a>
          ))}
          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="nav-link text-xs sm:text-sm md:text-base hover:text-primary transition-colors duration-300 flex items-center gap-1"
            >
              Más
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-background/98 backdrop-blur-xl border border-border rounded-lg shadow-xl overflow-hidden animate-fade-in-up z-50">
                <a
                  href="#hamburguesas"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-b border-border/50 last:border-b-0"
                >
                  🍔 Hamburguesas
                </a>
                <a
                  href="#smash"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-b border-border/50 last:border-b-0"
                >
                  🔥 Smash Burgers
                </a>
                <a
                  href="#extras"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-b border-border/50 last:border-b-0"
                >
                  🍟 Para Picar
                </a>
                <a
                  href="#postres"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-b border-border/50 last:border-b-0"
                >
                  🍰 Postres
                </a>
                <a
                  href="#bebidas"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  🥤 Bebidas
                </a>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border md:hidden animate-fade-in-up">
            <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-2 sm:space-y-3">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 sm:py-3.5 text-sm sm:text-base font-medium text-primary hover:bg-primary/10 hover:text-primary/80 transition-all duration-200 rounded-lg px-3"
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
