import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();
const ContextCart = ({ children }) => {
  const [Cart, setCart] = useState(
    JSON.parse(localStorage.getItem("Cart")) || []
  );

  const AddToCart = (prod) => {
    setCart((perv) => {
      const existItem = perv.find((item) => item.id === prod.id);
      if (existItem) {
        return perv.map((item) =>
          item.id === prod.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...perv, { ...prod, quantity: 1 }];
    });
  };
  useEffect(() => {
    let Storage = localStorage.setItem("Cart", JSON.stringify(Cart));
    return () => Storage;
  }, [Cart]);
  const RemoveFromCart = (id) => {
    setCart((perv) => perv.filter((item) => item.id !== id));
  };
  const ClearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ Cart, AddToCart, ClearCart, RemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ContextCart;
export const useCart = () => {
  return useContext(CartContext);
};
