import { createContext } from "react";
import { CartProduct } from "../Interfaces/products";

export const CartContext = createContext<
  [CartProduct[], React.Dispatch<React.SetStateAction<CartProduct[]>>]
>([[], () => {}]);
