import React from "react";
import { Routes, Route } from "react-router-dom";
import SingleOrder from "./Pages/SingleOrder";
import View from "./Pages/View";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/SingleOrder/:id" element={<SingleOrder />} />
      <Route path="/" element={<View />} />
    </Routes>
  );
}
