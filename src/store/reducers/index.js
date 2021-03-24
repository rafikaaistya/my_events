import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import event from "./event";

const appReducer = combineReducers({
  event,
  form: formReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
