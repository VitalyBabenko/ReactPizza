import { FC } from "react";
import { Pizza } from "../../store/pizza/types";
import style from "./PizzaSelector.module.scss";

type PizzaSelectorProps = {
  pizza: Pizza;
  activeType: number;
  setActiveType: (arg: number) => void;
  activeSize: number;
  setActiveSize: (arg: number) => void;
};

const pizzaTypes = ["thin", "traditional"];

const PizzaSelector: FC<PizzaSelectorProps> = ({
  pizza,
  activeType,
  setActiveType,
  activeSize,
  setActiveSize,
}) => {
  return (
    <div className={style.root}>
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
            {size} cm.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaSelector;
