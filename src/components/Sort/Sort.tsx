import { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { changeSort } from "../../store/filter/slice";
import { Sorts, SortType } from "../../store/filter/types";
import { ReactComponent as ArrowTop } from "../../assets/img/arrow-top.svg";
import style from "./Sort.module.scss";

export const sortList: SortType[] = [
  { name: "popularity", property: Sorts.RATING },
  { name: "price: cheap first", property: Sorts.PRICE_ASC },
  { name: "price: expensive first", property: Sorts.PRICE_DESC },
  { name: "alphabet", property: Sorts.TITLE },
];

const Sort: FC<{ sort: SortType }> = ({ sort }) => {
  const dispatch = useAppDispatch();
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
        <ArrowTop />
        <b>Sorting by:</b>
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
