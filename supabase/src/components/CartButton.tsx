import { useState } from 'react';

const CartButton = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (itemName: string, itemPrice: string) => {
    setCartItems([...cartItems, `${itemName} - ${itemPrice}`]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        data-element-type="cart-button"
        data-cart-items={cartItems.length}
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
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {cartItems.length}
          </span>
        )}
      </button>
      
      {cartItems.length > 0 && (
        <div className="absolute bottom-16 right-0 bg-background border border-border rounded-lg shadow-lg p-4 w-64">
          <h3 className="font-semibold mb-2">Carrito ({cartItems.length})</h3>
          <div className="space-y-1">
            {cartItems.map((item, index) => (
              <div key={index} className="text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
          <button className="mt-3 w-full bg-primary text-primary-foreground py-2 rounded text-sm hover:opacity-90 transition-opacity">
            Proceder al pago
          </button>
        </div>
      )}
    </div>
  );
};

export default CartButton;
