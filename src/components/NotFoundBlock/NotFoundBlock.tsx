import { FC } from "react";
import style from "./NotFoundBlock.module.scss";

const NotFoundBlock: FC = () => {
  return (
    <h1 className={style.notFoundBlock}>
      <span>😕</span>
      <p>Ничего не найдено</p>
    </h1>
  );
};

export default NotFoundBlock;
