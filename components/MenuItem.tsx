interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
}

const MenuItem = ({ name, description, price, image }: MenuItemProps) => {
  return (
    <div className="group py-6 border-b border-border/50 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-sm object-cover flex-shrink-0"
            loading="lazy"
          />
        )}
        <div className="flex-1">
          <h3 className="menu-item-name group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="menu-item-desc mt-1">{description}</p>
        </div>
        <span className="menu-item-price whitespace-nowrap">{price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
