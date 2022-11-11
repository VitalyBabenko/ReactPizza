import { FC } from "react";
import { Link } from "react-router-dom";
import trashIcon from "../img/trash.svg";
import cart from "../img/cart-icon-black.svg";
import CartItem from "../components/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { cartSelector, clearItems } from "../store/cart/cartSlice";
import CartEmpty from "../components/CartEmpty/CartEmpty";

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalPrice } = useAppSelector(cartSelector);
  const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);

  if (!totalPrice) return <CartEmpty />;
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <img src={cart} alt="" />
            Корзина
          </h2>
          <div onClick={() => dispatch(clearItems())} className="cart__clear">
            <img src={trashIcon} alt="remove" />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="content__items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartPizza={cartItem} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice}$</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
