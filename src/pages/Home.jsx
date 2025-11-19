import { useContext } from "react";
import { ProductContext } from "../context/ContextProduct.jsx";
import GridLayer from "../components/GridLayer.jsx";
import ProductCard from "../components/ProductCard.jsx";

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <GridLayer>
      {products.map((products) => (
        <ProductCard key={products.id} products={products} />
      ))}
    </GridLayer>
  );
};

export default Home;
