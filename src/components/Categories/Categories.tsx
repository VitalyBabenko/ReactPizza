import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { changeCategory } from "../../store/filter/filterSlice";

import style from "./Categories.module.scss";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Пепперони",
];

const Categories: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useAppSelector((state) => state.filterReducer);
  return (
    <div className={style.root}>
      <ul>
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
    </div>
  );
};

export default Categories;
