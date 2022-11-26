import { FC, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Search from "../Search/Search";
import style from "./Header.module.scss";
import { useAppSelector } from "../../hooks/redux";
import { getTotalPrice } from "../../utils/getTotalPrice";
import { getTotalCount } from "../../utils/getTotalCount";
import { cartSelector } from "../../store/cart/selectors";
import { ReactComponent as CartIcon } from "../../assets/img/cart-icon.svg";
import { ReactComponent as Logo } from "../../assets/img/pizza-logo.svg";

const Header: FC = () => {
  const { cartItems } = useAppSelector(cartSelector);
  const isMounted = useRef(false);
  const { pathname } = useLocation();
  const totalPrice = getTotalPrice(cartItems);
  const totalCount = getTotalCount(cartItems);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem("cart", json);
    }

    isMounted.current = true;
  }, [cartItems]);

  return (
    <header className={style.root}>
      <Link to="/" className={style.logo}>
        <Logo />
        <div>
          <h1>React Pizza</h1>
          <p>the most delicious pizza in the universe</p>
        </div>
      </Link>

      {pathname !== "/cart" && <Search />}
      {pathname !== "/cart" && (
        <Link to="/cart" className={style.cart}>
          <span>{totalPrice} $</span>
          <div className={style.delimiter}></div>
          <CartIcon />
          <span>{totalCount}</span>
        </Link>
      )}
    </header>
  );
};

export default Header;
