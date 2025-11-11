import { useContext } from "react";
import { ProductContext } from "../context/ContextProduct.jsx";
import GridLayer from "../components/GridLayer.jsx";
import ProductCard from "../components/ProductCard.jsx";

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <GridLayer>
      {products.map(
        ({
          id,
          name,
          description,
          price,
          quantity,
          category,
          rating,
          image,
        }) => (
          <ProductCard
            key={id}
            name={name}
            description={description}
            price={price}
            quantity={quantity}
            category={category}
            rating={rating}
            image={image}
          />
        )
      )}
    </GridLayer>
  );
};

export default Home;
