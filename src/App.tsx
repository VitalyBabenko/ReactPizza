import { Route, Routes } from "react-router-dom";
import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PizzaPage from "./pages/PizzaPage";
import "./scss/app.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<PizzaPage />} />
        <Route path="*" element={<NotFoundBlock />} />
      </Route>
    </Routes>
  );
}

export default App;
