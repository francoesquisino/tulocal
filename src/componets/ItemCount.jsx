import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);
  function sumar() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }
  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <Card style={{ width: "18rem" }} className="card">
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <div className="botonera justify-content-center">
          <Button className="button" variant="primary" onClick={restar}>
            -
          </Button>
          <Card.Text className="cardText ">{count}</Card.Text>
          <Button className="button" variant="primary" onClick={sumar}>
            +
          </Button>
        </div>
        <Button className="addCards" variant="primary" onClick={sumar}>
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCount;
