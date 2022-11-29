import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { filterSelector } from "../../store/filter/selectors";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import style from "./Burger.module.scss";

const Burger: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { categoryId } = useAppSelector(filterSelector);

  useEffect(() => setIsOpen(false), [categoryId]);

  return (
    <div className={style.root}>
      <label
        className={isOpen ? style.burgerOpened : null}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={style.top}></div>
        <div className={style.middle}></div>
        <div className={style.bottom}></div>
      </label>

      {isOpen && (
        <div className={style.popup}>
          <div className={style.searchBlock}>
            <Search />
            <button onClick={() => setIsOpen(false)}>search</button>
          </div>

          <Categories categoryId={categoryId} />
        </div>
      )}
    </div>
  );
};

export default Burger;
