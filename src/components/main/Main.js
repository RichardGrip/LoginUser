import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Table, Skeleton } from "antd";
import Header from "./header/Header";
import dayjs from "dayjs";
import Socket from "./socket/Socket";
import "antd/dist/antd.css";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  const [dataSource2, setDataSource2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      navigate("/login");
    }
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("https://test.relabs.ru/api/users/list");
        const json = await response.json();
        setDataSource(json.total);
        const response1 = await fetch(
          `https://test.relabs.ru/api/users/list?limit=${dataSource}`
        );
        const json1 = await response1.json();
        setLoading(false);
        setDataSource2(json1.items);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    })();
  }, [dataSource]);

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
      render: () => (
        <p>{dayjs(dataSource2.ctime).format("DD.MM.YYYY HH:mm")}</p>
      ),
    },
    {
      key: "id5",
      title: "Action",
      dataIndex: "",
      render: (el) => (
        <Button type="primary" danger onClick={() => isDelete(el)}>
          Delete
        </Button>
      ),
    },
  ];

  const isDelete = (elDelete) => {
    const newData = dataSource2.filter((el) => el.id !== elDelete.id);
    setDataSource2(newData);
  };

  return (
    <div className="container2">
      <Header />
      <Divider />
      <div className="main">
        <div className="users">
          <h1>Список пользователей</h1>
          {loading && <Skeleton active />}
          {dataSource2.length ? (
            <Table
              key={dataSource2.id}
              columns={columns}
              dataSource={dataSource2}
              pagination={{ pageSize: "5" }}
            />
          ) : loading ? null : (
            <h1>You deleted all users!</h1>
          )}
        </div>
        <div className="developments">
          <Socket />
        </div>
      </div>
    </div>
  );
};

export default Main;
