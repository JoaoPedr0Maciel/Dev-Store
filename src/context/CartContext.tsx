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
  const [total, setTotal] = useState("");

  const addToCart = (myItem: ProductsProps) => {
    const indexItem = cart.findIndex((item) => item.id === myItem.id);
    if (indexItem !== -1) {
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalCart(cartList);
      return;
    }

    let data = {
      ...myItem,
      amount: 1,
      total: myItem.price,
    };

    setCart((products) => [...products, data]);
    totalCart([...cart, data]);
  };

  const removeItemCart = (product: CartData) => {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem].amount > 1) {
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;
      setCart(cartList);
      totalCart(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
    totalCart(removeItem);
  };

  const totalCart = (item: CartData[]) => {
    let myCart = item;
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    const formatResult = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setTotal(formatResult);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addToCart,
        removeItemCart,
        totalCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
