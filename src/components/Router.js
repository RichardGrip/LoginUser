import React from "react";
import Login from "./login/Login";
import Main from "./main/Main";
import Store from "./store/Store";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routerq = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/store" element={<Store />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routerq;
