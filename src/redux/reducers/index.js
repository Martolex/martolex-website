import { combineReducers } from "redux";
import CategoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
});
export default rootReducer;
