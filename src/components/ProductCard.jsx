import React from "react";
import { Button } from "@mui/material";
import { useCart } from "../context/ContextCart.jsx";
import { useProduct } from "../context/ContextProduct.jsx";

const ProductCard = ({ products }) => {
  const { Cart, AddToCart } = useCart();
  console.log(Cart);

  return (
    <>
      <div
        id={products.id}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-3 sm:p-4 flex flex-col h-full transition-transform duration-300 hover:shadow-lg"
      >
        {/* Image */}
        <div className="mb-3">
          <img
            src={products.image}
            alt={`${products.name} Product`}
            className="w-full h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 object-cover rounded-2xl"
          />
        </div>

        {/* Rating & Category */}
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-red-500 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="mr-3">{products.rating}</span>
          <span>{products.category}</span>
        </div>

        {/* Title */}
        <h2 className="text-sm sm:text-base md:text-lg text-gray-900 dark:text-white font-semibold hover:text-blue-500 dark:hover:text-blue-400 mb-1 line-clamp-2">
          {products.name}
        </h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm leading-snug mb-3 grow line-clamp-3">
          {products.description}
        </p>

        {/* Price + Button */}
        <div className="mt-auto">
          <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
            ${products.price.toFixed(2)}
          </div>
          <Button
            onClick={() => AddToCart(products)}
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#2563eb",
              fontWeight: 600,
              borderRadius: "0.75rem",
              textTransform: "none",
              paddingY: "0.6rem",
              fontSize: "0.95rem",
              "&:hover": {
                backgroundColor: "#1e40af",
                boxShadow: "0 0 10px rgba(37,99,235,0.4)",
              },
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
