interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  imageSize?: 'small' | 'medium' | 'large' | 'extra-large';
}

const MenuItem = ({ name, description, price, image, imageSize = 'medium' }: MenuItemProps) => {
  return (
    <div className="group py-6 border-b border-border/50 last:border-b-0 h-full flex flex-col">
      <div className="flex flex-col items-center gap-3 flex-1 min-h-[80px]">
        {image && (
          <div className="flex-shrink-0">
            <img
              src={image}
              alt={name}
              className={`
                ${imageSize === 'small' ? 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28' : 
                  imageSize === 'large' ? 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56' :
                  imageSize === 'extra-large' ? 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72' :
                  'w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40'
                } 
                rounded-lg object-cover shadow-md
              `}
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1 flex flex-col justify-center items-center text-center min-h-[80px]">
          <h3 className="menu-item-name group-hover:text-primary transition-colors duration-300 text-base sm:text-base leading-tight min-h-[24px] flex items-center">
            {name}
          </h3>
          {name === "Patatas Gajo" && (
            <p className="text-muted-foreground font-body text-xs sm:text-xs mt-1 tracking-wide uppercase relative">
              EL OTRO DÍA SE CHINÓ TU NOVIA PORQUE NO TENÍAMOS ASÍ QUE AHORA YA HAY
              <img src="/src/assets/logo-circle.png" alt="" className="absolute w-2 h-2 opacity-5 -right-3 top-0" />
            </p>
          )}
          <p className="menu-item-desc mt-1 text-xs sm:text-sm leading-tight min-h-[36px] flex items-center">{description}</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-full flex-shrink-0">
          <span className="menu-item-price whitespace-nowrap text-base sm:text-base font-semibold">{price}</span>
          {/* Elemento decorativo */}
          <div className="flex justify-center mt-1">
            <div className="w-8 h-0.5 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
