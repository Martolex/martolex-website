import { getCartItemsApi, updateCartQuantityApi } from "../../utils/endpoints";
import { get, post } from "../../utils/requests";
import { startLoading, finishLoading } from "./LoadingActions";
export const SYNC_CART = "SYNC_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const syncCart = (items) => ({ type: SYNC_CART, payload: items });
const add = (item) => ({ type: ADD_TO_CART, payload: item });
const remove = (item) => ({ type: ADD_TO_CART, payload: item });
const updateQuantity = (bookId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { bookId, quantity },
});

export const getCart = () => async (dispatch) => {
  try {
    const [cart] = await get(getCartItemsApi);
    dispatch(startLoading("cart"));
    dispatch(syncCart(cart));
  } catch (err) {
    console.log(err);
  }
};

export const modifyCartItemQuantity = (bookId, plan, qty) => async (
  dispatch
) => {
  try {
    dispatch(startLoading("cart"));
    const [res] = await post(updateCartQuantityApi, true, {
      bookId,
      plan,
      qty,
    });
    dispatch(updateQuantity(bookId, qty));
    dispatch(finishLoading("cart"));
  } catch (err) {}
};
