
export const SET_CURRENT_STATE = "SET_CURRENT_STATE";
export const INITIATE_CONVERSATION = "INITIATE_CONVERSATION";
export const SET_USER_NAME = "SET_USER_NAME"

function setAction(newState, value) {
  return {
    type: SET_CURRENT_STATE,
    status: newState,
    value: value
  };
}

function initiateConversation(value) {
  return {
    type: INITIATE_CONVERSATION,
    status: "message",
    value: value
  };
}

function setUsername(value) {
  return {
    type: SET_USER_NAME,
    status: "idle",
    username: value
  };
}


export default {
  setAction,
  initiateConversation,
  setUsername
};
