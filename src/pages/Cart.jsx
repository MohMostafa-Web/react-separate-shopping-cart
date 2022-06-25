import { useEffect } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import Rating from "../components/Rating";
import { useGlobalContext } from "../context";

const Cart = () => {
  /* using useGlobalContext() to consume below contex value */
  const { cart, amount, total, removeFromCart, changeItemQty, getTotal } =
    useGlobalContext();

  /* using useEffect() to run getTotal() if State "cart" changes*/
  useEffect(() => {
    getTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <>
      {/* Cart List */}
      <ListGroup style={{ width: "78%", padding: "20px" }}>
        {/* using map() to create Cart Item */}
        {cart.map((item) => {
          const { id, name, price, image, inStock, rating, qty } = item;
          return (
            // Cart Item
            <ListGroup.Item key={id}>
              <Row className="align-items-center justify-content-around">
                {/* Item Image */}
                <Col md={2}>
                  <img style={{ maxWidth: "100%" }} src={image} alt={name} />
                </Col>
                {/* Item Name */}
                <Col md={2}>
                  <span>{name}</span>
                </Col>
                {/* Item Price */}
                <Col md={2}>
                  <span>{"$ " + Number(price)}</span>
                </Col>
                <Col md={2} className="my-1 my-md-0">
                  <Rating rating={rating} />
                </Col>
                {/* Select Item Qty */}
                <Col xs={6} md={2}>
                  <Form.Select
                    size="sm"
                    value={qty}
                    onChange={(e) => changeItemQty(id, e.target.value)}
                  >
                    {Array.from({ length: inStock }).map((_, i) => (
                      <option key={i} value={`${i + 1}`}>{`${i + 1}`}</option>
                    ))}
                  </Form.Select>
                </Col>
                {/* Delete Button */}
                <Col xs={6} md={2}>
                  <Button className="btn-light">
                    <AiFillDelete
                      style={{ fontSize: "20px", cursor: "pointer" }}
                      onClick={() => removeFromCart(id)}
                    />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {/* Summary */}
      <div className="side summary">
        <h2>Subtotal ({amount}) items</h2>
        <h5>Total: $ {total}</h5>
        <Button disabled={amount === 0}>Proceed to Checkout</Button>
      </div>
    </>
  );
};

export default Cart;
