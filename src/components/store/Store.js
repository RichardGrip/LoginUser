import React from "react";
import "./Store.css";
import { data } from "./mockData";
import Header from "../main/header/Header";

const Store = () => {
  return (
    <div>
      <header className="storeHeader">
        <div className="container3">
          <Header />
        </div>
      </header>
      <div className="container3">
        <main className="mainStore">
          {data.map((el) => {
            return (
              <div className="block" key={el.id}>
                <img className="foto" src={el.img} alt={el.name} />
                <div className="priceSale">
                  <p className="price">{el.price}</p>
                  <p className="old">{el.sale}</p>
                </div>
                <p>{el.sale2}</p>
                <div className="name">{el.name}</div>
                <div>
                  <span className="star">★★★★★</span>
                  {el.like}
                </div>
                <div className="credit">{el.credit}</div>
                <button className="buttonStore">В корзину</button>
              </div>
            );
          })}
        </main>
      </div>
      <footer></footer>
    </div>
  );
};

export default Store;
