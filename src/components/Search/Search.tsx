import { FC, useEffect, useRef, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/img/search-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/img/close-icon.svg";
import style from "./Search.module.scss";
import { changeCurrentPage, changeSearchValue } from "../../store/filter/slice";
import { useAppDispatch } from "../../hooks/redux";
import useDebounce from "../../hooks/useDebounce";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedSearch = useDebounce(value);

  useEffect(() => {
    dispatch(changeSearchValue(debouncedSearch));
    dispatch(changeCurrentPage(1));
    // eslint-disable-next-line
  }, [debouncedSearch]);

  const clearInput = () => {
    setValue("");
    dispatch(changeSearchValue(""));
    inputRef.current?.focus();
  };

  return (
    <div className={style.root}>
      <SearchIcon />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search pizza..."
      />
      {value && <CloseIcon onClick={clearInput} />}
    </div>
  );
};

export default Search;
