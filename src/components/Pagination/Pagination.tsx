import { FC, useEffect } from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";
import { changeCurrentPage } from "../../store/filter/slice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { pizzasSelector } from "../../store/pizza/selectors";
interface PaginationProps {
  currentPage: number;
  categoryId: number;
  searchValue: string;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  categoryId,
  searchValue,
}) => {
  const dispatch = useAppDispatch();
  const { totalCount } = useAppSelector(pizzasSelector);

  useEffect(() => {
    dispatch(changeCurrentPage(1));
    // eslint-disable-next-line
  }, [categoryId, searchValue]);

  return (
    <ReactPaginate
      className={style.root}
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => dispatch(changeCurrentPage(e.selected + 1))}
      forcePage={currentPage - 1}
      pageCount={Math.ceil(totalCount / 8)}
      renderOnZeroPageCount={() => null}
    />
  );
};

export default Pagination;
