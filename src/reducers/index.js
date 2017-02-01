import { combineReducers } from "redux";

const currentStateReducer = (state = { status: "idle", value: "" }, action) => {
  switch (action.type) {
    case "setCurrentState":
      return {
        status: action.status,
        value: action.value
      };
      break;
    default:
      return state
  }
}

const value = (state, action) => {}

const rootReducer = combineReducers({
  currentState: currentStateReducer
});

// set current state
// set current value


export default rootReducer;
