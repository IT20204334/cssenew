import React from "react";
import { Routes, Route } from "react-router-dom";
import Order from "./Pages/Order";
import Wel from "./Pages/wel";
import SingleOrder from "./Pages/SingleOrder";
import View from "./Pages/View";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Order />} />
      <Route path="/wel" element={<Wel />} />
      <Route path="/SingleOrder" element={<SingleOrder />} />
      <Route path="/view" element={<View />} />
    </Routes>
  );
}
