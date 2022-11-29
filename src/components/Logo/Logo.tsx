import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/img/pizza-logo.svg";
import style from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <Link to="/" className={style.root}>
      <LogoSvg />
      <div>
        <h1>React Pizza</h1>
        <p>the most delicious pizza in the universe</p>
      </div>
    </Link>
  );
};

export default Logo;
