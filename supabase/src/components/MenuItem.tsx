interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  imageSize?: 'small' | 'medium' | 'large' | 'extra-large';
  style?: React.CSSProperties;
  priceOld?: string;
  onQuickView?: () => void;
  rotatingPhrases?: string[];
}

import RotatingText from "@/components/RotatingText";

const MenuItem = ({ name, description, price, image, imageSize = 'medium', style, priceOld, onQuickView, rotatingPhrases }: MenuItemProps) => {
  return (
    <div className="group py-4 sm:py-6 border-b border-border/50 last:border-b-0 h-full flex flex-col hover:bg-primary/5 transition-colors duration-300 rounded-lg relative">
      <div className="flex flex-col items-center gap-2 sm:gap-3 flex-1 min-h-[80px]">
        {image && (
          <div className="flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300 cursor-pointer" style={style} onClick={onQuickView}>
            <img
              src={image}
              alt={name}
              className={`
                ${imageSize === 'small' ? 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24' : 
                  imageSize === 'large' ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52' :
                  imageSize === 'extra-large' ? 'w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-64 xl:h-64' :
                  'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32'
                } 
                rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300
              `}
              loading="lazy"
            />
            {onQuickView && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                  Ver detalles
                </div>
              </div>
            )}
          </div>
        )}
        <div className="flex-1 flex flex-col justify-center items-center text-center min-h-[80px] px-2">
          <h3 className="menu-item-name group-hover:text-primary transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-tight min-h-[24px] flex items-center font-semibold">
            {name}
          </h3>
          {name === "Patatas Gajo" && (
            <div className="relative">
              <RotatingText 
                phrases={rotatingPhrases || [
                  "EL OTRO DÍA SE CHINÓ TU NOVIA PORQUE NO TENÍAMOS ASÍ QUE AHORA YA HAY"
                ]}
                className="text-muted-foreground font-body text-[10px] sm:text-xs mt-1 tracking-wide uppercase"
              />
              <img src="/src/assets/logo-circle.png" alt="" className="absolute w-2 h-2 opacity-5 -right-3 top-0" />
            </div>
          )}
          <p className="menu-item-desc mt-1 text-[10px] sm:text-xs md:text-sm leading-tight min-h-[36px] flex items-center">{description}</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-full flex-shrink-0">
          <div className="flex items-center gap-2">
            {priceOld && (
              <span className="menu-item-price whitespace-nowrap text-sm sm:text-base text-muted-foreground line-through">{priceOld}</span>
            )}
            <span className="menu-item-price whitespace-nowrap text-sm sm:text-base md:text-lg font-bold text-primary">{price}</span>
          </div>
          {/* Elemento decorativo */}
          <div className="flex justify-center mt-1">
            <div className="w-6 h-0.5 bg-primary/20 rounded-full group-hover:w-8 group-hover:bg-primary/40 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
