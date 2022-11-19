import { FC } from "react";
import style from "./ErrorPage.module.scss";

const ErrorPage: FC = () => {
  return (
    <div className={style.root}>
      <span>404</span>
      <h2>Server error 😕</h2>
      <p>
        An error occured in the application and your page could not be served.
        if you are the application owner, check your logs for details.
      </p>
    </div>
  );
};

export default ErrorPage;
