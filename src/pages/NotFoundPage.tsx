import { FC } from "react";
import { Link } from "react-router-dom";
import NotFoundBlock from "../components/NotFoundBlock/NotFoundBlock";

const NotFoundPage: FC = () => {
  return (
    <>
      <NotFoundBlock />
      <Link to="/" />
    </>
  );
};

export default NotFoundPage;
