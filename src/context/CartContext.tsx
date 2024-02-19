import { createContext, useContext, useState } from "react";
import { ProductsProps } from "../types/HomeTypes";
import {
  CartContextData,
  CartData,
  ChildrenProps,
} from "../types/ContextTypes";

export const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: ChildrenProps) => {
  const [cart, setCart] = useState<CartData[]>([]);

  const addToCart = (myItem: ProductsProps) => {
    const indexItem = cart.findIndex((item) => item.id === myItem.id);
    if (indexItem !== -1) {
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      return;
    }

    let data = {
      ...myItem,
      amount: 1,
      total: myItem.price,
    };

    setCart((products) => [...products, data]);
  };

  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
