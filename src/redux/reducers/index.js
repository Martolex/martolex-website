import { combineReducers } from "redux";
import CategoriesReducer from "./categoriesReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  user: authReducer,
  cart: cartReducer,
});
export default rootReducer;
