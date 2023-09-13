import React, { createContext, useState, useContext, ReactNode } from "react";
import { Alert } from "@material-tailwind/react";
interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
  quantity: number;
}
export interface CartItem extends Product {
  quantity: number;
}

interface CartContextProps {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: number) => void;
  getTotalUniqueItems: () => number;
  updateQuantity: (itemId: number, newQuantity: number) => void;
  getTotalPrice: () => number;
  getTotalQuantity: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const addToCart = (item: Product) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      return;
    }
    const newItem: CartItem = { ...item, quantity: 1 };
    setCart([...cart, newItem]);
  };

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const getTotalUniqueItems = () => {
    const uniqueItems = new Set(cart.map((item) => item.id));
    return uniqueItems.size;
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item as CartItem).quantity,
      0
    );
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + (item as CartItem).quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart as CartItem[],
        addToCart,
        removeFromCart,
        getTotalUniqueItems,
        updateQuantity,
        getTotalPrice,
        getTotalQuantity,
      }}
    >
      <>
        {showAlert && (
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-64 border border-white bg-red-500 text-white rounded-lg text-center p-2">
            <Alert variant="gradient">
              <span>
                Barang sudah ada di keranjang, silahkan pilih barang lain
              </span>
            </Alert>
          </div>
        )}
      </>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
