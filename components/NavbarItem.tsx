import React, { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import Toggler from "./Toggler";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
interface NavbarItemProps {
  darkMode: boolean;
  handleClick: () => void;
}
const NavbarItem: React.FC<NavbarItemProps> = ({ darkMode, handleClick }) => {
  const { getTotalUniqueItems } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const openCart = () => {
    setModalOpen(true);
  };

  const totalUniqueItems = getTotalUniqueItems();
  const cartIcon = "/shopping-cart.png";
  const logo = "/logo.png";

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:ml-8 lg:flex-row  lg:gap-4"></ul>
  );

  return (
    <div className="bg-greenShop fixed top-0 w-full z-10">
      <Navbar className=" mx-auto py-2 px-4 lg:px-6 lg:py-4 border-none bg-blueLogin text-white font-[Poppins]  ">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
          <div className="flex items-center">
            <Image
              src={logo}
              alt={logo}
              className="w-64"
              height={200}
              width={200}
            />
            <div className="hidden lg:block ml-10">{navList}</div>
          </div>

          <div className="flex justify-between gap-2 items-center lg:items-start   md:justify-end md:items-end">
            <Toggler darkMode={darkMode} handleClick={handleClick} />

            <div
              className="relative w-12 lg:w-16 h-12 lg:h-16 py-4 lg:mt-2 md:order-last cursor-pointer text-right" // Menambahkan properti 'text-right' untuk menggeser isi ke kanan
              onClick={openCart}
            >
              <Image src={cartIcon} alt={cartIcon} width={30} height={40} />

              <div className="absolute top-0 right-0 mr-1 mt-1">
                <span className="block font-bold text-white bg-red-500 rounded-full h-6 w-6 py-1 lg:py-0 lg:mr-4 text-center text-xs lg:text-base">
                  {totalUniqueItems}
                </span>
              </div>
            </div>
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <div>
          {openNav ? <div className="container mx-auto ">{navList}</div> : null}
        </div>
      </Navbar>
      <div className="font-[Poppins] ">
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          fullWidth
          maxWidth="sm"
          className="font-[Poppins]"
        >
          <Cart />

          <DialogActions>
            <Button
              onClick={closeModal}
              className="bg-greenShop text-white w-32 h-6"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default NavbarItem;
