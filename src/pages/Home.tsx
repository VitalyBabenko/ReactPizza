import { FC, useEffect, useRef, useState } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import PizzaBlockLoader from "../components/PizzaBlock/PizzaBlockLoader";
import Sort, { sortList } from "../components/Sort/Sort";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { filterSelector, setFilters } from "../store/filter/filterSlice";
import { pizzasSelector } from "../store/pizza/pizzasSlice";
import NotFoundPage from "./NotFoundPage";
import { Sorts, SortType } from "../store/filter/types";
import { fetchPizzas } from "../store/pizza/asyncActions";

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pizzas, status } = useAppSelector(pizzasSelector);
  const { currentPage, categoryId, sort, searchValue } =
    useAppSelector(filterSelector);

  const getPizzas = async () => {
    dispatch(
      fetchPizzas({
        sortBy: sort.property,
        // category,
        // search: searchValue,
        currentPage: String(currentPage),
        category: categoryId,
      })
    );
  };

  useEffect(() => {
    getPizzas();
    window.scroll(0, 0);
  }, [currentPage, categoryId, sort, searchValue]);

  const pizzasList = pizzas.map((item) => (
    <PizzaBlock key={item.id} pizza={item} />
  ));
  const loaders = [...new Array(6)].map((_, i) => <PizzaBlockLoader key={i} />);

  if (status === "error") return <NotFoundPage />;
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "loading" ? loaders : pizzasList}
      </div>
      <Pagination />
    </>
  );
};

export default Home;
