import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const ThemeContext = createContext();

const ThemeProviderContext = ({ children }) => {
  const [Theme, setTheme] = useState(localStorage.getItem("Theme") || "light");
  useEffect(() => {
    const root = document.documentElement;
    if (Theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("Theme", Theme);
    } else {
      root.classList.remove("dark");
      localStorage.setItem("Theme", Theme);
    }
  }, [Theme]);

  const switchTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ Theme, switchTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
export default ThemeProviderContext;
export const useTheme = () => {
  return useContext(ThemeContext);
};
