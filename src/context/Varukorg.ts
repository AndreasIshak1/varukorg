import { createContext } from "react";
import { ICartItems } from "../models/ICartItems";
export interface DasItems {
  itemList: ICartItems[];
}

export const Varukorg = createContext<ICartItems[]>([{
  name: "",
  price: 0,
  isAdded: false,
}]);