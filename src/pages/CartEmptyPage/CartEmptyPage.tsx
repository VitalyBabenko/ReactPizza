import { FC } from "react";
import style from "./CartEmptyPage.module.scss";
import emptyCartImg from "../../assets/img/empty-cart.png";
import { BackHomeBtn } from "../../components/Buttons";

const CartEmpty: FC = () => {
  return (
    <div className={style.root}>
      <h2>Cart is empty 😕</h2>
      <p>
        You probably haven't ordered pizza yet.
        <br />
        To order pizza, go to the main page.
      </p>
      <img src={emptyCartImg} alt="Empty cart" />
      <BackHomeBtn />
    </div>
  );
};

export default CartEmpty;
