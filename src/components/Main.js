import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Glasses from "../pages/Glasses";
import Ingridients from "../pages/Ingridients";
import BartenderBeginner from "../pages/BartenderBeginner";
import BartenderVeteran from "../pages/BartenderVeteran";
import CoctailDetails from "../pages/CoctailDetails";
import NavBar from "./NavBar";

function Main() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/glasses" element={<Glasses />} />
        <Route path="/ingridients" element={<Ingridients />} />
        <Route path="/bartender-beginner" element={<BartenderBeginner />} />
        <Route path="/bartender-veteran" element={<BartenderVeteran />} />
        <Route path="/coctail/:coctailId" element={<CoctailDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
