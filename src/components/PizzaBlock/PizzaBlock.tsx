import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Pizza } from "../../store/pizza/types";
import { addItem } from "../../store/cart/slice";
import style from "./PizzaBlock.module.scss";
import { CartPizza } from "../../store/cart/types";
import { samePizzaInCartSelector } from "../../store/cart/selectors";
import { getSizedPizzaPrice } from "../../utils/getSizedPizzaPrice";
import PizzaSelector from "../PizzaSelector/PizzaSelector";
import { AddBtn } from "../Buttons";

export const pizzaTypes = ["thin", "traditional"];

const PizzaBlock: FC<{ pizza: Pizza }> = ({ pizza }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useAppDispatch();
  const thisPizzaInCart = useAppSelector(
    samePizzaInCartSelector(
      pizza.title,
      pizza.sizes[activeSize],
      pizzaTypes[activeType]
    )
  );
  const price = getSizedPizzaPrice(pizza, pizza.sizes[activeSize]);

  const addToCart = () => {
    const item: CartPizza = {
      id: pizza.id,
      title: pizza.title,
      price: price,
      imageUrl: pizza.imageUrl,
      type: pizzaTypes[activeType],
      size: pizza.sizes[activeSize],
      count: 1,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={style.root}>
      <Link to={`/pizza/${pizza.id}`}>
        <img src={pizza.imageUrl} alt="Pizza" />
        <h4>{pizza.title}</h4>
      </Link>
      <PizzaSelector
        pizza={pizza}
        activeType={activeType}
        setActiveType={setActiveType}
        activeSize={activeSize}
        setActiveSize={setActiveSize}
      />
      <p>from {price} $</p>
      <AddBtn onClick={addToCart} counter={thisPizzaInCart?.count} />
    </div>
  );
};

export default PizzaBlock;
