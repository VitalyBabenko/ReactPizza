import { FC } from "react";
import style from "./CartItem.module.scss";
import { CartPizza } from "../../store/cart/types";
import { useAppDispatch } from "../../hooks/redux";
import { addItem, minusCount, removeItem } from "../../store/cart/slice";
import { PlusBtn } from "../Buttons";

const CartItem: FC<{ cartPizza: CartPizza }> = ({ cartPizza }) => {
  const dispatch = useAppDispatch();

  const handlePlus = () => dispatch(addItem(cartPizza));
  const handleMinus = () => dispatch(minusCount(cartPizza.id));
  const handleRemoveItem = () => dispatch(removeItem(cartPizza.id));
  const totalPizzaPrice = (cartPizza.price * cartPizza.count).toFixed(2);

  return (
    <div className={style.root}>
      <img src={cartPizza.imageUrl} alt="Pizza" />
      <div className={style.info}>
        <h3>{cartPizza.title}</h3>
        <p>
          {cartPizza.type} dough, {cartPizza.size} cm.
        </p>
      </div>
      <div className={style.counter}>
        <PlusBtn
          className={style.minus}
          disabled={cartPizza.count === 1}
          onClick={handleMinus}
        />
        <b>{cartPizza.count}</b>
        <PlusBtn className={style.plus} onClick={handlePlus} />
      </div>
      <b className={style.price}>{totalPizzaPrice} $</b>
      <PlusBtn className={style.remove} onClick={handleRemoveItem} />
    </div>
  );
};

export default CartItem;
