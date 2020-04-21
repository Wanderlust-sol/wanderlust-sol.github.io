import { combineReducers } from "redux";
import mode from "Redux/Reducers/mode";
import menu from "Redux/Reducers/menu";
import menuHover from "Redux/Reducers/menuHover";

const rootReducer = combineReducers({
  mode,
  menu,
  menuHover
});

export default rootReducer;
