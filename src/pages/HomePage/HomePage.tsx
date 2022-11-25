import { FC, useEffect } from "react";
import Categories from "../../components/Categories/Categories";
import Pagination from "../../components/Pagination/Pagination";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import PizzaBlockLoader from "../../components/PizzaBlock/PizzaBlockLoader";
import Sort from "../../components/Sort/Sort";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchPizzas } from "../../store/pizza/asyncActions";
import { filterSelector } from "../../store/filter/selectors";
import { pizzasSelector } from "../../store/pizza/selectors";
import style from "./HomePage.module.scss";
import NotFoundBlock from "../../components/NotFoundBlock/NotFoundBlock";
import ErrorPage from "../ErrorPage/ErrorPage";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { pizzas, status } = useAppSelector(pizzasSelector);
  const { currentPage, categoryId, sort, searchValue } =
    useAppSelector(filterSelector);

  const getPizzas = async () => {
    const sortBy = sort.property.replace("-", "");
    const order = sort.property.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? String(categoryId) : undefined;
    const title = searchValue ? searchValue : undefined;

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        title,
        page: currentPage,
      })
    );
  };

  useEffect(() => {
    getPizzas();
    window.scroll(0, 0);
  }, [currentPage, categoryId, sort, searchValue]);

  const pizzasList =
    pizzas.length > 0 ? (
      pizzas.map((item) => <PizzaBlock key={item.id} pizza={item} />)
    ) : (
      <NotFoundBlock />
    );
  const loaders = [...new Array(6)].map((_, i) => <PizzaBlockLoader key={i} />);

  if (status === "error") return <ErrorPage />;
  return (
    <div className={style.root}>
      <Categories categoryId={categoryId} />
      <Sort sort={sort} />
      <h2>All pizzas</h2>
      <div className={style.pizzas}>
        {status === "loading" ? loaders : pizzasList}
      </div>
      <Pagination
        currentPage={currentPage}
        categoryId={categoryId}
        searchValue={searchValue}
      />
    </div>
  );
};

export default Home;
