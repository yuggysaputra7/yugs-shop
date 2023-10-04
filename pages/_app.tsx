import { AppProps } from "next/app";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import NavbarItem from "@/components/NavbarItem";
import { CartProvider } from "@/context/CartContext";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  let [darkMode, setDarkMode] = useState<boolean>(false);

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    let detectedDarkMode = localStorage.getItem("darkMode");
    if (detectedDarkMode === "true") {
      setDarkMode(true);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  return (
    <div
      className={
        darkMode ? "bg-darkMode text-darkBlue" : " bg-white text-black"
      }
    >
      <CartProvider>
        <NavbarItem darkMode={darkMode} handleClick={handleToggleDarkMode} />
        <Component {...pageProps} darkMode={darkMode} />
      </CartProvider>
      <footer
        className={`text-white py-4 bottom-0 left-0 w-full ${
          darkMode ? "bg-darkMode" : "bg-greenShop"
        }`}
      >
        <div className="container mx-auto text-center">
          <p>&copy; 2023. Created By : Yuggy Saputra</p>
          <p>Built using Next Js & Tailwind</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
