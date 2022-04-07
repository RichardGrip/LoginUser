import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
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

  return (
    <>
      <h1>События</h1>
      <div className="sub">
        <table className="table2">
          <tr>
            <th className="th">Время</th>
            <th className="th">События</th>
          </tr>
          <tr>
            <td className="td">
              {sockets?.map((el) => (
                <p key={el.ctime}>
                  {dayjs.unix(1649357592).format("DD.MM.YYYY HH:mm")}
                </p>
              ))}
            </td>
            <td className="td">
              {sockets?.map((el) => (
                <p key={el.event}>{el.event}</p>
              ))}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Socket;
