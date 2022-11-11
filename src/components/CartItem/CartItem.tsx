import { FC } from "react";
import style from "./CartItem.module.scss";
import { CartPizza } from "../../store/cart/types";
import CartItemButton from "./CartItemButton/CartItemButton";
import { useAppDispatch } from "../../hooks/useRedux";
import { addItem, minusCount, removeItem } from "../../store/cart/cartSlice";

const CartItem: FC<{ cartPizza: CartPizza }> = ({ cartPizza }) => {
  const dispatch = useAppDispatch();

  const handleClickPlus = () => dispatch(addItem(cartPizza));
  const handleClickMinus = () =>
    cartPizza.count > 1 && dispatch(minusCount(cartPizza.id));
  const handleRemoveItem = () => dispatch(removeItem(cartPizza.id));

  return (
    <div className={style.root}>
      <img src={cartPizza.imageUrl} alt="Pizza" />
      <div className={style.info}>
        <h3>{cartPizza.title}</h3>
        <p>
          {cartPizza.type} тесто, {cartPizza.size} см.
        </p>
      </div>
      <div className={style.counter}>
        <CartItemButton id={"minus"} onClick={handleClickMinus} />
        <b>{cartPizza.count}</b>
        <CartItemButton id={"plus"} onClick={handleClickPlus} />
      </div>
      <b className={style.price}>{cartPizza.price * cartPizza.count} $</b>
      <CartItemButton id={"remove"} onClick={handleRemoveItem} />
    </div>
  );
};

export default CartItem;
