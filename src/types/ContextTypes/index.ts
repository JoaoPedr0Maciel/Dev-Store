import { ReactNode } from "react";
import { ProductsProps } from "../HomeTypes";

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
  removeItemCart: (product: CartData) => void;
  totalCart: (item: CartData[]) => void;
  total: string;
};

export type ChildrenProps = {
  children: ReactNode;
};
