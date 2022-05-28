import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CodeBasket from "./pages/CodeBasket";
import Home from "./pages/Home";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="code" element={<CodeBasket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
