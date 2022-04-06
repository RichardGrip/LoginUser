import React, { useState } from "react";
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
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      navigate("/login");
    }
  }, []);

  React.useEffect(() => {
    fetch("https://test.relabs.ru/api/users/list")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setDataSource(data.items);
        }, 2000);
      });
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
      render: () => <p>{dayjs(dataSource.ctime).format("DD.MM.YYYY HH:mm")}</p>,
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
    const newData = dataSource.filter((el) => el.id !== elDelete.id);
    setDataSource(newData);
  };

  return (
    <div className="container2">
      <Header />
      <Divider />
      <div className="main">
        <div className="users">
          <h1>Список пользователей</h1>
          {loading && <Skeleton active />}
          {dataSource.length ? (
            <Table
              key={dataSource.id}
              columns={columns}
              dataSource={dataSource}
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
