import { FC, useEffect, useRef, useState } from "react";
import style from "./Search.module.scss";
import searchIcon from "../../img/search-icon.svg";
import closeIcon from "../../img/close-icon.svg";
import { changeSearchValue } from "../../store/filter/filterSlice";
import { useAppDispatch } from "../../hooks/useRedux";
import useDebounce from "../../hooks/useDebounce";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedSearch = useDebounce(value);

  useEffect(() => {
    dispatch(changeSearchValue(debouncedSearch));
    // eslint-disable-next-line
  }, [debouncedSearch]);

  const clearInput = () => {
    setValue("");
    dispatch(changeSearchValue(""));
    inputRef.current?.focus();
  };

  return (
    <div className={style.root}>
      <img src={searchIcon} alt="search-icon" />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {value && <img onClick={clearInput} src={closeIcon} alt="close-icon" />}
    </div>
  );
};

export default Search;
