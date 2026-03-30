interface MenuSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
}

const MenuSection = ({ id, title, subtitle, children, image, imageAlt, reverse }: MenuSectionProps) => {
  return (
    <section id={id} className="py-16 sm:py-20 md:py-28">
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
                <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">{title}</h2>
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
              <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">{title}</h2>
              {subtitle && (
                <p className="text-muted-foreground font-body text-xs sm:text-sm mt-3 tracking-wide uppercase">
                  {subtitle}
                </p>
              )}
              <div className="w-12 sm:w-16 h-0.5 bg-primary mt-4 mx-auto" />
            </div>
            <div className="max-w-2xl mx-auto px-2 sm:px-0">{children}</div>
          </>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
