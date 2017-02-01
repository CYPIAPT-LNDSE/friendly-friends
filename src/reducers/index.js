import { combineReducers } from "redux";
import * as actions from "../actions";
import model from "../resources/model.js";

const currentStateReducer = (state = { status: "idle", value: "" }, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_STATE:
    case actions.INITIATE_CONVERSATION:
      return {
        status: action.status,
        value: action.value
      };
    case actions.MAKE_RESPONSE:
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
};

const messagesReducer = (state = model.messages, action) => {
  return state;
};

const ctasReducer = (state = model.ctas, action) => {
  return state;
}

const rootReducer = combineReducers({
  currentState: currentStateReducer,
  ctas: ctasReducer,
  messages: messagesReducer
});

// set current state
// set current value


export default rootReducer;
