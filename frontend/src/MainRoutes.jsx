import React from "react";
import { Routes, Route } from "react-router-dom";
import Order from "./Pages/Order";
import Wel from "./Pages/wel"

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Order />} />
        <Route path="/wel" element={<Wel />} />
    </Routes>
  );
}
