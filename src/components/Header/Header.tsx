import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/pizza-logo.svg";
import cartIcon from "../../img/cart-icon-white.svg";
import Search from "../Search/Search";
import style from "./Header.module.scss";
import { useAppSelector } from "../../hooks/useRedux";
import { cartSelector } from "../../store/cart/cartSlice";

const Header: FC = () => {
  const { totalPrice, cartItems } = useAppSelector(cartSelector);

  const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <header className={style.root}>
      <Link to="/" className={style.logo}>
        <img width="38" src={logo} alt="Pizza logo" />
        <div>
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </Link>
      <Search />
      <Link to="/cart" className={style.cart}>
        <span>{totalPrice} ₽</span>
        <div className={style.delimiter}></div>
        <img src={cartIcon} alt={"cart-icon"} />
        <span>{totalCount}</span>
      </Link>
    </header>
  );
};

export default Header;
