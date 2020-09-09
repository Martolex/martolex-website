import { SET_LOADING, FINISH_LOADING } from "../actions/LoadingActions";

const { SYNC_CART, UPDATE_QUANTITY } = require("../actions/CartActions");

const initialState = { loading: false, items: [] };

const updateItem = (items, bookId, qty) => {
  const item = items.find((item) => item.book.id === bookId);
  if (item) {
    item.qty = qty;
  }

  return [...items];
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return action.payload.type == "cart"
        ? { ...state, loading: true }
        : state;
    case "FINISH_LOADING":
      return action.payload.type == "cart"
        ? { ...state, loading: false }
        : state;
    case "SYNC_CART":
      return { loading: false, items: [...action.payload] };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: updateItem(
          state.items,
          action.payload.bookId,
          action.payload.quantity
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
