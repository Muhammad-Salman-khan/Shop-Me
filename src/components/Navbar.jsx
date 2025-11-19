import { Popover } from "@mui/material";
import { useCart } from "../context/ContextCart.jsx";
import { useTheme } from "../context/ContextTheme.jsx";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { switchTheme } = useTheme();
  const { Cart, ClearCart, RemoveFromCart } = useCart();
  const TotalLength = Cart?.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const TotalPrice = Cart?.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0).toFixed(2);
  return (
    <>
      <header
        className="bg-gray-100 dark:bg-slate-950 dark:text-white text-black 
  shadow-md p-4 flex justify-between items-center dark:border-b-2 dark:border-b-gray-600"
      >
        {/* LEFT: Logo */}
        <h1 className="text-2xl font-bold text-blue-600">ShopMate</h1>

        {/* RIGHT: Theme + Cart */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={switchTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white
      transition-colors duration-300"
          >
            <svg
              id="theme-icon-light"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>

          {/* Cart + Dropdown */}
          <div className="relative">
            <button
              className="cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <ShoppingCart className="text-2xl text-gray-700 dark:text-white" />
              {TotalLength > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 
            flex items-center justify-center rounded-full"
                >
                  {TotalLength}
                </span>
              )}
            </button>

            {showDropdown && (
              <div
                className="absolute right-0 mt-2 w-80 bg-gray-100 text-black dark:bg-slate-950 
          dark:text-white border rounded shadow-lg z-50"
              >
                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2">Cart Items</h2>

                  {Cart.length === 0 ? (
                    <p className="text-gray-500 text-sm">Your cart is empty</p>
                  ) : (
                    <>
                      <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
                        {Cart.map((item) => (
                          <li
                            key={item.id}
                            className="flex justify-between items-center py-2"
                          >
                            <div>
                              <p className="font-semibold">{item.name}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {item.qty} × ${item.price}
                              </p>
                            </div>

                            <button
                              onClick={() => RemoveFromCart(item.id)}
                              className="text-sm text-red-500 hover:underline"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${TotalPrice}</span>
                      </div>

                      <button
                        onClick={() => ClearCart()}
                        className="mt-3 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
                      >
                        Clear Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
