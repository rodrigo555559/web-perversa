import RotatingText from "@/components/RotatingText";

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
    <section id={id} className={`${id === 'postres' ? 'pt-2 pb-12 sm:pt-4 sm:pb-16 md:pt-6 md:pb-20 lg:pb-28' : 'py-12 sm:py-16 md:py-20 lg:py-28'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {image ? (
          <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 sm:gap-8 lg:gap-16 items-start`}>
            <div className="lg:w-2/5 w-full">
              <div className="sticky top-24">
                <img
                  src={image}
                  alt={imageAlt || title}
                  className="w-full aspect-square object-cover rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-3/5 w-full">
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{title}</h2>
                {subtitle && (
                  <p className="text-muted-foreground font-body text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-3 tracking-wide uppercase">
                    {subtitle}
                  </p>
                )}
                <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-primary mt-3 sm:mt-4" />
              </div>
              {children}
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6 sm:mb-8 md:mb-10 text-center">
              <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl relative">
                {id === 'hamburguesas' ? (
                  <span className="relative inline-block">
                    Hamburguesas
                    <img src={siluetaImage} alt="" className="absolute w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 opacity-30 -top-4 sm:-top-5 md:-top-6 left-1/2 transform -translate-x-1/2" style={{transform: 'translateX(-50%)'}} />
                  </span>
                ) : id === 'smash' ? (
                  <span className="relative inline-block">
                    Smash Burge
                    <span className="relative inline-block">
                      rs
                      <img src={siluetaImage} alt="" className="absolute w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 opacity-30 -top-4 sm:-top-5 md:-top-6 left-0" />
                    </span>
                  </span>
                ) : (
                  title
                )}
              </h2>
              {subtitle && (
                <p className="text-muted-foreground font-body text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-3 tracking-wide uppercase">
                  {subtitle}
                </p>
              )}
                            {id === 'hamburguesas' && (
                <div className="relative">
                  <RotatingText 
                    phrases={[
                      "NO SE POR QUÉ TANTA INSISTENCIA CON LO DE BURGERS DE AUTOR, LAS NUESTRAS TAMBIÉN LAS PENSÓ UN TÍO"
                    ]}
                    className="text-muted-foreground font-body text-[9px] sm:text-xs md:text-sm mt-2 tracking-wide uppercase"
                  />
                  <img src={logoSilhouette} alt="" className="absolute w-2 h-2 sm:w-3 sm:h-3 opacity-10 top-0 right-0" />
                </div>
              )}
              {id === 'postres' && (
                <div className="relative">
                  <RotatingText 
                    phrases={[
                      "SI LUCAS DICE QUE LAS SUYAS SON CASERAS LAS NUESTRAS TAMBIÉN QUE NOS LAS VENDE EL MISMO"
                    ]}
                    className="text-muted-foreground font-body text-[9px] sm:text-xs md:text-sm mt-2 tracking-wide uppercase"
                  />
                  <img src={logoSilhouette} alt="" className="absolute w-2 h-2 sm:w-3 sm:h-3 opacity-10 top-0 right-0" />
                </div>
              )}
              <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-primary mt-3 sm:mt-4 mx-auto" />
              {/* Elementos decorativos */}
              <div className="flex justify-center mt-2 sm:mt-3 gap-2">
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
