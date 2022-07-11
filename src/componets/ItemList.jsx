import { useEffect, useState } from "react";
import Item from "./Item";
import { data } from "./assets/items";

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setItems(data);
    }, 2000);
  });

  return (
    <>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
            stock={item.stock}
          />
        );
      })}
    </>
  );
};

export default ItemList;
