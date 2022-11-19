import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { changeCategory } from "../../store/filter/slice";

import style from "./Categories.module.scss";

const categories = [
  "All",
  "Meaty",
  "Vegetarian",
  "Grill",
  "Acute",
  "Pepperoni",
];

const Categories: FC<{ categoryId: Number }> = ({ categoryId }) => {
  const dispatch = useAppDispatch();
  return (
    <ul className={style.root}>
      {categories.map((value, i) => (
        <li
          key={value}
          onClick={() => dispatch(changeCategory(i))}
          className={categoryId === i ? style.active : ""}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
