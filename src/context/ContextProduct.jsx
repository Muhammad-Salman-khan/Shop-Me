import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const ProductContext = createContext();
const ContextProduct = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const Fetched = async () => {
      try {
        const res = await fetch(`/api/products`, { signal });
        if (!res.ok)
          throw new Error(` faild to fetched products ${res.status}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(`fetch Faild: ${error}`);
          setError(error.message || "Something went wrong");
          setLoading(false);
        }
      }
    };
    Fetched();
    return () => controller.abort();
  }, []);

  return (
    <>
      <ProductContext.Provider value={{ products, loading, error }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ContextProduct;
