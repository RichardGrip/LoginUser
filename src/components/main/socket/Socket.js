import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./Socket.css";

const Socket = () => {
  const [sockets, setSockets] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://test.relabs.ru/event");
    ws.onopen = () => console.log("ws opened");
    ws.onclose = () => console.log("ws closed");
    ws.onmessage = (event) => {
      setSockets((prevState) => [...prevState, JSON.parse(event.data)]);
    };
    return () => {
      ws.close();
    };
  }, []);

  console.log(sockets);

  return (
    <div>
      {sockets?.map((el) => (
        <p key={el.ctime}>{el.ctime}</p>
      ))}
    </div>
  );
};

export default Socket;
