/* Cart Reducer */
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CART":
      return { ...state, cart: action.payload };
    case "INCREASE_AMOUNT":
      return { ...state, amount: state.amount + 1 };
    case "DECREASE_AMOUNT":
      return { ...state, amount: state.amount - 1 };
    case "UPDATE_TOTAL":
      return { ...state, total: action.payload };
    case "UPDATE_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

/* Filter Reducer */
export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byOutStock: !state.byOutStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "CLEAR_FILTERS":
      return { ...state, sort: "", byOutStock: false, byFastDelivery: false, byRating: 0 };
    default:
      return state;
  }
};
