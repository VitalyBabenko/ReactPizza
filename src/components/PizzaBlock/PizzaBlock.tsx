import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { Pizza } from "../../store/pizza/types";
import { addItem, cartItemByIdSelector } from "../../store/cart/cartSlice";
import style from "./PizzaBlock.module.scss";
import { CartPizza } from "../../store/cart/types";

const pizzaTypes = ["тонкое", "традиционное"];

const PizzaBlock: FC<{ pizza: Pizza }> = ({ pizza }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useAppDispatch();
  const thisPizzaInCart = useAppSelector(cartItemByIdSelector(pizza.id));

  const addToCart = () => {
    const item: CartPizza = {
      id: pizza.id,
      title: pizza.title,
      price: pizza.price,
      imageUrl: pizza.imageUrl,
      type: pizzaTypes[activeType],
      size: pizza.sizes[activeSize],
      count: 1,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={style.pizzaBlock}>
      <Link to={`/pizza/${pizza.id}`}>
        <img src={pizza.imageUrl} alt="Pizza" />
        <h4>{pizza.title}</h4>
      </Link>
      <div className={style.selector}>
        <ul>
          {pizza.types.map((typeId) => (
            <li
              onClick={() => setActiveType(typeId)}
              key={typeId}
              className={activeType === typeId ? style.active : ""}
            >
              {pizzaTypes[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {pizza.sizes.map((size, i) => (
            <li
              onClick={() => setActiveSize(i)}
              key={size}
              className={activeSize === i ? style.active : ""}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={style.bottom}>
        <div className={style.price}>от {pizza.price} $</div>

        <button
          onClick={addToCart}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {thisPizzaInCart && <i>{thisPizzaInCart.count}</i>}
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
