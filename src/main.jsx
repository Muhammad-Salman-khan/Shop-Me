import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProduct from "./context/ContextProduct.jsx";
import ThemeProviderContext from "./context/ContextTheme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderContext>
      <ContextProduct>
        <App />
      </ContextProduct>
    </ThemeProviderContext>
  </StrictMode>
);
