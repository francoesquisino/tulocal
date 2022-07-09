import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";

function ItemListContainer({ text }) {
  return (
    <div className="ItemList">
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
