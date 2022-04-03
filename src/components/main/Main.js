import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Table } from "antd";
import "antd/dist/antd.css";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      navigate("/login");
    }
  }, []);

  const [dataSource, setDataSource] = useState([]);

  React.useEffect(() => {
    fetch("https://test.relabs.ru/api/users/list")
      .then((response) => response.json())
      .then((data) => setDataSource(data.items));
  }, []);

  const columns = [
    {
      key: "id1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "id2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "id3",
      title: "Role",
      dataIndex: "role",
    },
    {
      key: "id4",
      title: "Data",
      dataIndex: "ctime",
    },
    {
      key: "id5",
      title: "Action",
      dataIndex: "",
      render: (el) => <Button onClick={() => isDelete(el)}>Delete</Button>,
    },
  ];

  const isDelete = (elDelete) => {
    const newData = dataSource.filter((el) => el.id !== elDelete.id);
    setDataSource(newData);
  };

  // (user) => user.id

  return (
    <div className="container2">
      <div className="menu">
        <span>Главная страница</span>
        <span>Авторизация</span>
        <span>Магазин</span>
      </div>
      <Divider />
      <div className="main">
        <div className="users">
          <Table
            key={dataSource.id}
            columns={columns}
            dataSource={dataSource}
            pagination={{ pageSize: "5" }}
          />
        </div>
        <div className="developments"></div>
      </div>
    </div>
  );
};

export default Main;
