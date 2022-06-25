import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from "./../context";

const Header = () => {
  /* using useGlobalContext() to consume below contex value */
  const { amount, cart, removeFromCart, filterDispatch } = useGlobalContext();

  const navigate = useNavigate();

  const location = useLocation();

  // console.log(location.pathname); // debug

  return (
    <Navbar
      variant="dark"
      expand="md"
      style={{ backgroundColor: "#343a40", height: 80 }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        {/* Search Input Field */}\
        {/* using location.pathname to show Search Input field only inside Home Page */}
        {location.pathname === "/" && (
          <Navbar.Collapse style={{ width: 500, flexGrow: "unset" }}>
            <FormControl
              type="search"
              placeholder="Search a product..."
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                filterDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Collapse>
        )}
        {/* Cart Dropdown */}
        <Dropdown>
          {/* Cart Dropdown Toggle Btn */}
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart fontSize="25px" />
            <Badge bg="inherit">{amount}</Badge>
          </Dropdown.Toggle>
          {/* Cart Dropdown Menu */}
          <Dropdown.Menu align="end" style={{ width: 370 }}>
            {cart.length !== 0 ? (
              <>
                {/* using map() to create Cart Item */}
                {cart.map((item) => {
                  const { id, name, price, image } = item;
                  return (
                    <div className="cartItem" key={id}>
                      <img className="cartItem-img" src={image} alt={name} />
                      <div className="cartItem-details">
                        <span>{`${name}`}</span>
                        <span>{"$ " + Number(price)}</span>
                      </div>
                      <AiFillDelete
                        style={{ fontSize: "20px", cursor: "pointer" }}
                        onClick={() => removeFromCart(id)}
                      />
                    </div>
                  );
                })}
                <Button
                  style={{
                    display: "block",
                    width: "95%",
                    margin: "0 auto",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/cart")}
                >
                  Go To Cart
                </Button>
              </>
            ) : (
              <span style={{ paddingLeft: "20px" }}>Cart is empty !</span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
