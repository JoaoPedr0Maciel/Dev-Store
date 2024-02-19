import { ReactNode } from "react";
import { ProductsProps } from "../pages/Home";

export type CartData = {
  id: string;
  title: string;
  price: number;
  cover: string;
  description: string;
  amount: number;
  total: number;
};

export type CartContextData = {
  cart: CartData[];
  cartAmount: number;
  addToCart: (myItem: ProductsProps) => void;
};

export type ChildrenProps = {
  children: ReactNode;
};
