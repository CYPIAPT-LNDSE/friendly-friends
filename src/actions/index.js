
export const SET_CURRENT_STATE = "SET_CURRENT_STATE";
export const INITIATE_CONVERSATION = "INITIATE_CONVERSATION";

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



export default {
  setAction,
  initiateConversation
};
