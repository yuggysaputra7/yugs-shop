import React from "react";
import { useCart } from "../context/CartContext";
import { CartItem } from "../context/CartContext";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidTrash } from "react-icons/bi";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

interface Product {
  id: number;
}

const Cart: React.FC = () => {
  const { cart } = useCart();
  const { removeFromCart, updateQuantity, getTotalPrice, getTotalQuantity } =
    useCart();
  const totalPrice = getTotalPrice();
  const totalQuantity = getTotalQuantity();

  const handleRemoveFromCart = (item: Product) => {
    removeFromCart(item.id);
  };

  const handleIncreaseQuantity = (item: CartItem) => {
    // <-- Use CartItem here
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    // <-- Use CartItem here
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div>
      <h2 className="text-xl text-center font-bold text-slate-800 mx-2 p-2">
        Cart Shop
      </h2>
      <Card className="w-full px-2 flex justify-center items-center">
        <List className="gap-4 border border-slate-400 rounded-lg">
          {cart.map((item) => (
            <ListItem key={item.id} className="border-b-2 border-gray-400 p-2 ">
              <ListItemPrefix>
                <Avatar
                  className="border border-slate-500 w-24 h-24 mx-6 p-4 rounded-xl object-fill"
                  variant="circular"
                  alt={item.image}
                  src={item.image}
                />
              </ListItemPrefix>
              <div className="w-48 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-sm"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-md text-green-500"
                >
                  $ {item.price}
                </Typography>
                <div className="flex items-center">
                  <button
                    onClick={() => handleRemoveFromCart({ id: item.id })}
                    className="mr-2 text-xl"
                  >
                    <BiSolidTrash className="text-red-500" />
                  </button>

                  <button
                    disabled={item.quantity === 1}
                    onClick={() => handleDecreaseQuantity(item)}
                    className={`mr-2 text-xl hover:text-red-500 ${
                      item.quantity === 1
                        ? "pointer-events-none text-gray-400"
                        : ""
                    }`}
                  >
                    <AiOutlineMinusCircle />
                  </button>

                  <span className="mr-2">{item.quantity}</span>

                  <button
                    onClick={() => handleIncreaseQuantity(item)}
                    className="mr-2 text-xl hover:text-red-500"
                  >
                    <AiOutlinePlusCircle />
                  </button>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
        <div>
          <h2 className=" text-green-500 font-bold p-2">
            Total Harga ({totalQuantity} Barang): $ {totalPrice}
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default Cart;
