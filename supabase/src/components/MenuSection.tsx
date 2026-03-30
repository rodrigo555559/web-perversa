interface MenuSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  logoSilhouette?: string;
  siluetaImage?: string;
}

const MenuSection = ({ id, title, subtitle, children, image, imageAlt, reverse, logoSilhouette, siluetaImage }: MenuSectionProps) => {
  return (
    <section id={id} className={`${id === 'postres' ? 'pt-2 pb-16 sm:pt-4 sm:pb-20 md:pt-6 md:pb-28' : 'py-16 sm:py-20 md:py-28'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {image ? (
          <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-start`}>
            <div className="lg:w-2/5 w-full">
              <div className="sticky top-24">
                <img
                  src={image}
                  alt={imageAlt || title}
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-3/5 w-full">
              <div className="mb-8 sm:mb-10">
                <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{title}</h2>
                {subtitle && (
                  <p className="text-muted-foreground font-body text-xs sm:text-sm mt-3 tracking-wide uppercase">
                    {subtitle}
                  </p>
                )}
                <div className="w-12 sm:w-16 h-0.5 bg-primary mt-4" />
              </div>
              {children}
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8 sm:mb-10 text-center">
              <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative">
                {id === 'hamburguesas' ? (
                  <span className="relative inline-block">
                    Hamburguesas
                    <img src={siluetaImage} alt="" className="absolute w-6 h-6 sm:w-8 sm:h-8 opacity-30 -top-6 sm:-top-6 left-1/2 transform -translate-x-1/2" style={{transform: 'translateX(-50%)'}} />
                  </span>
                ) : id === 'smash' ? (
                  <span className="relative inline-block">
                    Smash Burge
                    <span className="relative inline-block">
                      rs
                      <img src={siluetaImage} alt="" className="absolute w-6 h-6 sm:w-8 sm:h-8 opacity-30 -top-6 sm:-top-6 left-0" />
                    </span>
                  </span>
                ) : (
                  title
                )}
              </h2>
              {subtitle && (
                <p className="text-muted-foreground font-body text-xs sm:text-sm mt-3 tracking-wide uppercase">
                  {subtitle}
                </p>
              )}
              {id === 'hamburguesas' && (
                <p className="text-muted-foreground font-body text-xs sm:text-sm mt-2 tracking-wide uppercase relative">
                  NO SE POR QUÉ TANTA INSISTENCIA CON LO DE BURGERS DE AUTOR, LAS NUESTRAS TAMBIÉN LAS PENSÓ UN TÍO
                  <img src={logoSilhouette} alt="" className="absolute w-3 h-3 opacity-10 top-0 right-0" />
                </p>
              )}
              {id === 'hamburguesas' && (
                <p className="text-muted-foreground font-body text-xs sm:text-sm mt-2 tracking-wide uppercase relative">
                  NO SE POR QUÉ TANTA INSISTENCIA CON LO DE <span className="relative inline-block">
                      B
                      <img src={siluetaImage} alt="" className="absolute w-4 h-4 opacity-25 -top-3 left-1" style={{transform: 'rotate(-10deg)'}} />
                    </span> URGERS DE AUTOR
                </p>
              )}
              {id === 'postres' && (
                <p className="text-muted-foreground font-body text-xs sm:text-sm mt-2 tracking-wide uppercase relative">
                  SI LUCAS DICE QUE LAS SUYAS SON CASERAS LAS NUESTRAS TAMBIÉN QUE NOS LAS VENDE EL MISMO
                  <img src={logoSilhouette} alt="" className="absolute w-3 h-3 opacity-10 top-0 right-0" />
                </p>
              )}
              {id === 'postres' && (
                <p className="text-muted-foreground font-body text-xs sm:text-sm mt-2 tracking-wide uppercase relative">
                  SI LUCAS DICE QUE LAS SUYAS SON <span className="relative inline-block">
                      C
                      <img src={siluetaImage} alt="" className="absolute w-4 h-4 opacity-25 -top-3 left-1" style={{transform: 'rotate(10deg)'}} />
                    </span> ASERAS LAS NUESTRAS TAMBIÉN
                </p>
              )}
              <div className="w-12 sm:w-16 h-0.5 bg-primary mt-4 mx-auto" />
              {/* Elementos decorativos */}
              <div className="flex justify-center mt-3 gap-2">
                <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
                <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
                <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
              </div>
            </div>
            <div className="max-w-2xl mx-auto px-2 sm:px-0">{children}</div>
          </>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
