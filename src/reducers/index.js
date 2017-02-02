import { combineReducers } from "redux";
import * as actions from "../actions";
import model from "../resources/model.js";

const actionReducer = (state = { status: "welcome", value: "", username: "" }, action) => {
  switch (action.type) {
    case actions.SET_USER_NAME: {
      return {
        status: "idle",
        username: action.username
      }
    }
    case actions.SET_CURRENT_STATE:
      return Object.assign({}, state, {
        status: action.status,
        value: action.value
      });
    case actions.INITIATE_CONVERSATION:
      return Object.assign({}, state, {
        status: action.status,
        value: action.value
      });
    case actions.MAKE_RESPONSE:
      return Object.assign({}, state, { value: action.value });
    case actions.END_CONVERSATION:
      return { status: "idle", value: "" };
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
  action: actionReducer,
  callToAction: ctasReducer,
  messages: messagesReducer
});

// set current state
// set current value


export default rootReducer;
