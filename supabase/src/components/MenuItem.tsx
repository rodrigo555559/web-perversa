interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
}

const MenuItem = ({ name, description, price, image }: MenuItemProps) => {
  const handleAddToCart = () => {
    // Aquí puedes añadir lógica de carrito
    alert(`Añadido al carrito: ${name} - ${price}`);
  };

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
        <div className="flex flex-col items-end gap-2">
          <span className="menu-item-price whitespace-nowrap">{price}</span>
          <button
            onClick={handleAddToCart}
            className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-sm hover:opacity-90 transition-opacity"
            data-element-type="menu-item"
            data-item-name={name}
            data-item-price={price}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
