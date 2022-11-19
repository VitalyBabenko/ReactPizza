import { FC } from "react";
import style from "./NotFoundBlock.module.scss";

const NotFoundBlock: FC = () => {
  return (
    <h1 className={style.root}>
      <span>😕</span>
      <p>Nothing found</p>
    </h1>
  );
};

export default NotFoundBlock;
