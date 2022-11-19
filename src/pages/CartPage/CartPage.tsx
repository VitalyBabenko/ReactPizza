import { FC } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearItems } from "../../store/cart/slice";
import CartEmptyPage from "../CartEmptyPage/CartEmptyPage";
import { getTotalPrice } from "../../utils/getTotalPrice";
import { getTotalCount } from "../../utils/getTotalCount";
import { cartSelector } from "../../store/cart/selectors";
import { ReactComponent as CartIcon } from "../../assets/img/cart-icon.svg";
import { ReactComponent as TrashIcon } from "../../assets/img/trash.svg";
import style from "./CartPage.module.scss";
import { BackHomeBtn } from "../../components/Buttons";

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(cartSelector);
  const totalPrice = getTotalPrice(cartItems);
  const totalCount = getTotalCount(cartItems);

  if (!totalCount) return <CartEmptyPage />;
  return (
    <div className={style.root}>
      <h2>
        <CartIcon className={style.cartIcon} />
        Shopping cart
      </h2>
      <div onClick={() => dispatch(clearItems())} className={style.clearAll}>
        <TrashIcon />
        <span>Clear all</span>
      </div>
      <div className={style.cartPizzas}>
        {cartItems.map((cartItem) => (
          <CartItem
            key={`${cartItem.id}${cartItem.size}${cartItem.type}`}
            cartPizza={cartItem}
          />
        ))}
      </div>
      <span className={style.totalCount}>
        Total pizzas: <b>{totalCount} items.</b>
      </span>
      <span className={style.totalPrice}>
        Order price: <b>{totalPrice}$</b>
      </span>
      <BackHomeBtn />
      <button className={style.order}>Pay now</button>
    </div>
  );
};

export default Cart;
