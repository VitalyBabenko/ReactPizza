import { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { changeSort } from "../../store/filter/filterSlice";
import { Sorts, SortType } from "../../store/filter/types";
import style from "./Sort.module.scss";

export const sortList: SortType[] = [
  { name: "популярности", property: Sorts.RATING },
  { name: "цене: в начале дешевые", property: Sorts.PRICE_ASC },
  { name: "цене: в начале дорогие", property: Sorts.PRICE_DESC },
  { name: "алфавиту", property: Sorts.TITLE },
];

const Sort: FC = () => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.filterReducer);
  const [popup, setPopup] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const onChangeSort = (item: SortType) => {
    dispatch(changeSort(item));
    setPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!e.path.includes(sortRef.current)) setPopup(false);
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={style.root}>
      <label>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setPopup(!popup)}>{sort.name}</span>
      </label>
      {popup && (
        <div className={style.popup}>
          <ul>
            {sortList.map((item, i) => (
              <li
                className={sort.name === item.name ? style.active : ""}
                key={item.name}
                onClick={() => onChangeSort(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
