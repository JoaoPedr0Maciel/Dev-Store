import { createContext, useContext, useState } from "react";
import { ProductsProps } from "../pages/Home";

import {
  CartContextData,
  CartData,
  ChildrenProps,
} from "../types/contextTypes";

export const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: ChildrenProps) => {
  const [cart, setCart] = useState<CartData[]>([]);

  const addToCart = (myItem: ProductsProps) => {
    const indexItem = cart.findIndex((item) => item.id === myItem.id);
    if (indexItem === -1) {
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;

      cartList[indexItem].amount =
        cartList[indexItem].amount * cartList[indexItem].price;
      return;
    }

    let data = {
      ...myItem,
      amount: 1,
      total: myItem,
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
