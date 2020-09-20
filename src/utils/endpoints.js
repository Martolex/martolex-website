import { backendApi } from "../config";

export const getCategorytreeApi = backendApi + "categories/tree";

export const loginApi = backendApi + "auth/signIn";
export const categorySearchApi = (catId) =>
  backendApi + `books/cat/${catId}?limit=12`;
export const subCategorySearchApi = (catId, subCatId) =>
  `${backendApi}books/cat/${catId}/subCat/${subCatId}?limit=12`;
export const searchApi = (query) => `${backendApi}books/search${query}`;

export const productDetailsApi = (bookId) => `${backendApi}books/${bookId}`;

const userApi = `${backendApi}user`;
export const cartApi = `${userApi}/cart`;

export const bookReviewAPI = `${userApi}/books/review`;

export const updateCartQuantityApi = `${cartApi}/modifyQty`;

export const UserAddressesApi = `${userApi}/profile/addresses`;

export const ordersApi = {
  cod: `${userApi}/order/cod`,
  online: `${userApi}/order/online`,
  orderDetails: (orderId) => `${userApi}/order/${orderId}`,
  getOrders: `${userApi}/order/`,
  getOrderAddress: `${userApi}/order/getDeliveryAddress`,
  returnItem: (itemId) => `${userApi}/order/return/${itemId}`,
  cancelReturn: (itemId) => `${userApi}/order/return/${itemId}/cancelRequest`,
};

const authApiRoot = backendApi + "auth";

export const authApi = {
  root: authApiRoot,
  login: `${authApiRoot}/login`,
  signUp: `${authApiRoot}/signUp`,
};

export const bookUploadApi = {
  getBookNames: `${userApi}/books/getBookNames`,
  getBookDetails: (bookId) => `${userApi}/books/${bookId}`,
};

export const notFoundBookApi = `${backendApi}not-found-books`;
