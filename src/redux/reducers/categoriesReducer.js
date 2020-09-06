import { FETCH_CATEGORIES } from "../actions/CategoriesActions";

const initialState = [];
// console.log(FETCH_CATEGORIES);
const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      state = [...action.payload.categories];
      return state;
    default:
      return state;
  }
};

export default CategoriesReducer;
