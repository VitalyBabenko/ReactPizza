import { FC } from "react";
import NotFoundBlock from "../../components/NotFoundBlock/NotFoundBlock";
import style from "./NotFoundPage.module.scss";
import { BackHomeBtn } from "../../components/Buttons";

const NotFoundPage: FC = () => {
  return (
    <div className={style.root}>
      <NotFoundBlock />
      <BackHomeBtn />
    </div>
  );
};

export default NotFoundPage;
