import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Add from "./Add.jsx";
import Edit from "./Edit.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Add />} />
        <Route path="/update/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
