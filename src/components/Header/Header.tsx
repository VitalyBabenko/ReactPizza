import { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Search from "../Search/Search";
import style from "./Header.module.scss";
import { useAppSelector } from "../../hooks/redux";
import { cartSelector } from "../../store/cart/selectors";
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";

const Header: FC = () => {
  const { cartItems } = useAppSelector(cartSelector);
  const isMounted = useRef(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem("cart", json);
    }

    isMounted.current = true;
  }, [cartItems]);

  return (
    <header className={style.root}>
      {pathname === "/cart" ? (
        <Logo />
      ) : (
        <>
          <Logo />
          <Search />
          <CartLink />
          <Burger />
        </>
      )}
    </header>
  );
};

export default Header;
