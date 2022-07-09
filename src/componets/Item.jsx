import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";

const Item = (item) => {
  const [count, setCount] = useState(1);
  function sumar() {
    if (count < item.stock) {
      setCount(count + 1);
    }
  }
  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Title>{item.price}</Card.Title>
        <div className="botonera justify-content-center">
          <Button className="button" variant="primary" onClick={restar}>
            -
          </Button>
          <Card.Text className="cardText ">{count}</Card.Text>
          <Button className="button" variant="primary" onClick={sumar}>
            +
          </Button>
        </div>

        <Button variant="primary">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
