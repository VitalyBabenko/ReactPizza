import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { cartSelector } from "../../store/cart/selectors";
import { getTotalCount } from "../../utils/getTotalCount";
import { getTotalPrice } from "../../utils/getTotalPrice";
import { ReactComponent as CartIcon } from "../../assets/img/cart-icon.svg";
import style from "./CartLink.module.scss";

const CartLink: FC = () => {
  const { cartItems } = useAppSelector(cartSelector);
  const totalPrice = getTotalPrice(cartItems);
  const totalCount = getTotalCount(cartItems);

  return (
    <Link to="/cart" className={style.root}>
      <span>{totalPrice} $</span>
      <div className={style.delimiter}></div>
      <CartIcon />
      <span>{totalCount}</span>
    </Link>
  );
};

export default CartLink;
