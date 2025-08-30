import React, { useEffect, useState } from "react";
import "./popular.css";
import Item from "../items/Item";
const Popular = () => {
  const [popularProduct, setPopularProduct] = useState([]);
  useEffect(() => {
    fetch("https://backend-ecommerce-wrcm.onrender.com/popularinwomen")
      .then((response) => response.json())
      .then((data) => {
        setPopularProduct(data);
      });
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular_item">
        {popularProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
