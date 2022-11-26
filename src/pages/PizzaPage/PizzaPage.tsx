import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PizzaSelector from "../../components/PizzaSelector/PizzaSelector";
import { Pizza } from "../../store/pizza/types";
import { getSizedPizzaPrice } from "../../utils/getSizedPizzaPrice";
import style from "./PizzaPage.module.scss";
import { AddBtn, BackHomeBtn } from "../../components/Buttons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CartPizza } from "../../store/cart/types";
import { addItem } from "../../store/cart/slice";
import { pizzaTypes } from "../../components/PizzaBlock/PizzaBlock";
import { samePizzaInCartSelector } from "../../store/cart/selectors";

const PizzaPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [pizza, setPizza] = useState<Pizza>();
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const thisPizzaInCart = useAppSelector(
    samePizzaInCartSelector(
      pizza?.title,
      pizza?.sizes[activeSize],
      pizzaTypes[activeType]
    )
  );

  useEffect(() => {
    const fetchPizza = async (id: string | undefined) => {
      const { data } = await axios.get(
        `https://6380caf6786e112fe1ba2b6e.mockapi.io/pizzas/${id}`
      );
      setPizza(data);
    };
    fetchPizza(id);
  }, []);

  if (!pizza) return <h1>Loading...</h1>;
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
      <BackHomeBtn />
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <span>{pizza.ingredients}</span>
      <div className={style.selector}>
        <PizzaSelector
          pizza={pizza}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          activeType={activeType}
          setActiveType={setActiveType}
        />
      </div>
      <p>from {getSizedPizzaPrice(pizza, pizza.sizes[activeSize])} $</p>

      <AddBtn onClick={addToCart} counter={thisPizzaInCart?.count} />
    </div>
  );
};

export default PizzaPage;
