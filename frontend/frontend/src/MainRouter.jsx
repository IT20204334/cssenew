import React from "react";
import { Routes, Route } from "react-router-dom";
import Order from "./Pages/Order";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Order />} />
    </Routes>
  );
}
