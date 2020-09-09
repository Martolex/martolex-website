import { getCartItemsApi } from "../../utils/endpoints";
import { get } from "../../utils/requests";
export const SYNC_CART = "SYNC_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const syncCart = (items) => ({ type: SYNC_CART, payload: items });
const add = (item) => ({ type: ADD_TO_CART, payload: item });
const remove = (item) => ({ type: ADD_TO_CART, payload: item });
const updateQuantity = (item, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { item, quantity },
});

export const getCart = () => async (dispatch) => {
  try {
    const [cart] = await get(getCartItemsApi);
    console.log(cart);
  } catch (err) {
    console.log(err);
  }
};
