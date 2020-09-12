import { backendApi } from "../config";

export const getCategorytreeApi = backendApi + "categories/tree";
export const loginApi = backendApi + "auth/signIn";
export const categorySearchApi = (catId) => backendApi + `books/cat/${catId}`;
export const subCategorySearchApi = (catId, subCatId) =>
  `${backendApi}books/cat/${catId}/subCat/${subCatId}`;

export const productDetailsApi = (bookId) => `${backendApi}books/${bookId}`;

const userApi = `${backendApi}user`;
export const cartApi = `${userApi}/cart`;

export const updateCartQuantityApi = `${cartApi}/modifyQty`;

export const UserAddressesApi = `${userApi}/profile/addresses`;
