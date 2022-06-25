import { createContext, useContext, useReducer } from "react";
import { productsData } from "./data";
import { cartReducer, filterReducer } from "./reducer";

/* AppContext */
const AppContext = createContext();

/* AppProvider */
export const AppProvider = ({ children }) => {
  /* using useReducer to manage cartState */
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: productsData,
    cart: [],
    amount: 0,
    total: 0,
  });
  /* using useReducer to manage filterState */
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    searchQuery: "",
    sort: "",
    byOutStock: false,
    byFastDelivery: false,
    byRating: 0,
  });

  const { products, cart } = cartState;

  // console.log(products); // debug
  // console.log(cart); // debug

  /* Create function to add item to cart */
  const addToCart = (id) => {
    const newCart = [...cart, ...products.filter((item) => item.id === id)];
    cartDispatch({ type: "UPDATE_CART", payload: newCart });
    cartDispatch({ type: "INCREASE_AMOUNT" });
  };

  /* Create function to remove item from cart */
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    cartDispatch({ type: "UPDATE_CART", payload: newCart });
    cartDispatch({ type: "DECREASE_AMOUNT" });
  };

  /* Create function to change item qty in cart */
  const changeItemQty = (id, qty) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.qty = Number(qty);
      }
      return item;
    });
    cartDispatch({ type: "UPDATE_CART", payload: newCart });
  };

  /* Create function to get total price of items in cart */
  const getTotal = () => {
    const total = cart.reduce(
      (accum, item) => accum + item.price * item.qty,
      0
    );
    // console.log(total); // debug
    cartDispatch({ type: "UPDATE_TOTAL", payload: total });
  };

  return (
    <AppContext.Provider
      value={{
        ...cartState,
        cartDispatch,
        addToCart,
        removeFromCart,
        changeItemQty,
        getTotal,
        ...filterState,
        filterDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* Custom Hook "useGlobalContext()" */
export const useGlobalContext = () => {
  return useContext(AppContext);
};
