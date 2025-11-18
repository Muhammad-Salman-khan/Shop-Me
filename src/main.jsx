import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProduct from "./context/ContextProduct.jsx";
import ThemeProviderContext from "./context/ContextTheme.jsx";
import { BrowserRouter } from "react-router";
import ContextCart from "./context/ContextCart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProviderContext>
        <ContextProduct>
          <ContextCart>
            <App />
          </ContextCart>
        </ContextProduct>
      </ThemeProviderContext>
    </BrowserRouter>
  </StrictMode>
);
