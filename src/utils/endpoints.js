import { backendApi } from "../config";

export const getCategorytreeApi = backendApi + "categories/tree";
export const loginApi = backendApi + "auth/signIn";
export const categorySearchApi = (catId) => backendApi + `books/cat/${catId}`;
export const subCategorySearchApi = (catId, subCatId) =>
  `${backendApi}books/cat/${catId}/subCat/${subCatId}`;
