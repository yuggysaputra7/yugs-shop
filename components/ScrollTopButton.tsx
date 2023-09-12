import React, { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
const ScrollTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleScroll = () => {
    const yOffset: number = window.pageYOffset;
    if (yOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        showButton ? "opacity-150" : "opacity-0"
      } fixed right-4 bottom-4 z-50 p-4 rounded-3xl text-white bg-greenShop text-2xl`}
    >
      <BsFillArrowUpSquareFill />
    </button>
  );
};

export default ScrollTopButton;
