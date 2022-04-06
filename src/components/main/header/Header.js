import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <span onClick={() => navigate("/")}>Главная страница</span>
      <span onClick={() => navigate("/login")}>Авторизация</span>
      <span onClick={() => navigate("/store")}>Магазин</span>
    </div>
  );
};

export default Header;
