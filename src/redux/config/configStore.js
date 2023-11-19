import { createStore } from "redux";
import { combineReducers } from "redux";
import home from "redux/modules/home";
import detail from "redux/modules/detail";

const rootReducer = combineReducers({
  home,
  detail,
});
const store = createStore(rootReducer);

export default store;
