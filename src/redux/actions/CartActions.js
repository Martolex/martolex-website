import { cartApi, updateCartQuantityApi } from "../../utils/endpoints";
import { get, post, deleteCall } from "../../utils/requests";
import { startLoading, finishLoading } from "./LoadingActions";
export const SYNC_CART = "SYNC_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const syncCart = (items) => ({ type: SYNC_CART, payload: items });
const add = (item) => ({ type: ADD_TO_CART, payload: item });
const remove = (bookId) => ({ type: REMOVE_FROM_CART, payload: bookId });
const updateQuantity = (bookId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { bookId, quantity },
});

export const getCart = () => async (dispatch) => {
  try {
    const [cart] = await get(cartApi);
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

export const addToCart = (bookId, plan, qty) => async (dispatch) => {
  try {
    const [{ item: cartItem }] = await post(cartApi, true, {
      bookId,
      plan,
      qty,
    });
    console.log(cartItem);
    dispatch(add(cartItem));
  } catch (err) {}
};

export const removeFromCart = (bookId) => async (dispatch) => {
  try {
    console.log(bookId);
    dispatch(startLoading("cart"));
    const [res] = await deleteCall(cartApi, true, {
      bookId,
    });
    console.log(res);
    dispatch(remove(bookId));
    dispatch(finishLoading("cart"));
  } catch (err) {}
};