import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
  setCartItems((prev) => {
    const existingItem = prev.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      return prev.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...prev, { ...item, quantity: 1 }];
  });
};

  const increaseQuantity = (name) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.name === name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (name) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.name === name
        ? {
            ...item,
            quantity: Math.max(1, item.quantity - 1),
          }
        : item
    )
  );
};

  const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalCost,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;