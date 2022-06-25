import React from "react";
import { Button, Card } from "react-bootstrap";
import { useGlobalContext } from "../context";
import Rating from "./Rating";

const SingleProduct = ({
  id,
  name,
  price,
  image,
  inStock,
  fastDelivery,
  rating,
}) => {
  /* using useGlobalContext() to consume below contex value */
  const { cart, addToCart, removeFromCart } = useGlobalContext();

  return (
    <Card style={{ width: "15rem", }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column justify-content-between align-items-start">
        <Card.Title title={name}>{name.length > 20 ? name.slice(0, 20) + ".." : name}</Card.Title>
        <Card.Subtitle className="my-2">
          <span>{"$ " + Number(price)}</span>
          <div className="my-1">{fastDelivery ? "Fast Delivery" : "4 days delivery"}</div>
          <Rating rating={rating} clickable={false} />
        </Card.Subtitle>
        {/* using some() to check if item in cart */}
        {cart.some((item) => item.id === id) ? (
          <Button variant="danger" onClick={() => removeFromCart(id)}>
            Remove from Cart
          </Button>
        ) : (
          <Button
            variant="primary"
            disabled={inStock === 0}
            onClick={() => addToCart(id)}
          >
            {inStock > 0 ? "Add to Cart" : "Out of Stock"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
