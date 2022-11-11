import { FC } from "react";
import { Link } from "react-router-dom";

const CartEmpty: FC = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Корзина пустая 😕</h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src="/img/empty-cart.png" alt="Empty cart" />
        <Link className="button button--black" to="/">
          Вернуться назад
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
