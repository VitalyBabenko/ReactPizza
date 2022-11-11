export type CartPizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export interface CartState {
  totalPrice: number;
  cartItems: CartPizza[];
}
