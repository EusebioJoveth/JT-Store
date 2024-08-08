import { CartItem } from "./cart-item";

export interface Cart {
  items: CartItem[];
  count: number;
  total: number;
}
