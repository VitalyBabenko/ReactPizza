import { FC } from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";
import {
  changeCurrentPage,
  filterSelector,
} from "../../store/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector(filterSelector);

  return (
    <ReactPaginate
      className={style.root}
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => dispatch(changeCurrentPage(e.selected + 1))}
      forcePage={currentPage - 1}
      pageRangeDisplayed={5}
      pageCount={3}
    />
  );
};

export default Pagination;
