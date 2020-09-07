import { combineReducers } from "redux";
import CategoriesReducer from "./categoriesReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  user: authReducer,
});
export default rootReducer;
