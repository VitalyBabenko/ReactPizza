import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./Buttons.module.scss";
import { ReactComponent as ArrowLeft } from "../../assets/img/arrow-left.svg";
import { ReactComponent as PlusIcon } from "../../assets/img/plus.svg";

interface ButtonProps {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const BackHomeBtn: FC<ButtonProps> = ({
  width,
  height,
  className,
  onClick,
}) => {
  return (
    <Link
      style={{ width: width, height: height }}
      className={className ? `${className} ${style.backHome}` : style.backHome}
      onClick={onClick}
      to="/"
    >
      <ArrowLeft />
      Come back
    </Link>
  );
};

interface AddBtnProps extends ButtonProps {
  counter?: number | undefined;
}

export const AddBtn: FC<AddBtnProps> = ({
  width,
  height,
  className,
  onClick,
  counter,
}) => {
  return (
    <button
      style={{ width: width, height: height }}
      className={className ? `${className} ${style.addBtn}` : style.addBtn}
      onClick={onClick}
    >
      <PlusIcon />
      <span>Add</span>
      {counter && <i>{counter}</i>}
    </button>
  );
};

export const PlusBtn: FC<ButtonProps> = ({ onClick, className, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      <PlusIcon />
    </button>
  );
};
