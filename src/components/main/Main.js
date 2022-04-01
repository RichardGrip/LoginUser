import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      navigate("/login");
    }
  }, []);

  return <h1>Main</h1>;
};

export default Main;
