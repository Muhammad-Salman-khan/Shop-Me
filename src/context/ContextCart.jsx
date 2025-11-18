import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();
const ContextCart = ({ children }) => {
  const [Cart, setCart] = useState([]);
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
  return (
    <CartContext.Provider value={{ Cart, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextCart;
export const useCart = () => {
  return useContext(CartContext);
};
