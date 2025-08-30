import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import new_collection from "../assets/new_collections";
import Item from "../items/Item";
const NewCollection = () => {
  const [new_collection, setnewCollection] = useState([]);
  useEffect(() => {
    fetch("https://backend-ecommerce-wrcm.onrender.com/newcollection")
      .then((response) => response.json())
      .then((data) => {
        setnewCollection(data);
      });
  }, []);
  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
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

export default NewCollection;
