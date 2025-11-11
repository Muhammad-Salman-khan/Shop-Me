import { Alert, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import NotFound from "./pages/NotFound.jsx";
import ProductCard from "./components/ProductCard.jsx";
import GridLayer from "./components/GridLayer.jsx";
import { Link } from "react-router";
import Navbar from "./components/Navbar.jsx";

const App = () => {
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
  console.log(products);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
        <Stack
          sx={{
            width: {
              xs: "100%",
              sm: "80%",
              md: "60%",
              lg: "40%",
            },
          }}
          spacing={2}
        >
          <Alert
            severity="error"
            sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            {error}
          </Alert>
        </Stack>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen max-w-screen bg-white text-black dark:bg-slate-950 dark:text-white ">
        <Navbar />
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
      </div>
    </>
  );
};

export default App;
