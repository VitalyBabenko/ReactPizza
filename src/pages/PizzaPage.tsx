import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pizza } from "../store/pizza/types";

const PizzaPage: FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza>();

  useEffect(() => {
    const getPizza = async () => {
      try {
        const { data } = await axios.get<Pizza>(
          `http://localhost:3001/pizzas/${id}`
        );
        setPizza(data);
      } catch {
        alert("error");
      }
    };
    getPizza();
  }, []);

  if (!pizza) return <h1>Loading...</h1>;
  return (
    <div>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>{pizza.price} $</p>
    </div>
  );
};

export default PizzaPage;
