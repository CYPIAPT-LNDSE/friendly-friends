import model from "../resources/model.js";

export const SET_CURRENT_STATE = "SET_CURRENT_STATE";
export const INITIATE_CONVERSATION = "INITIATE_CONVERSATION";
export const MAKE_RESPONSE = "MAKE_RESPONSE";

function setCurrentState(newState, value) {
  return {
    type: SET_CURRENT_STATE,
    status: newState,
    value: value
  };
}

function initiateConversation() {
  return {
    type: INITIATE_CONVERSATION,
    status: "talking",
    value: 1
  };
}

function makeResponse(responseId) {
  return {
    type: MAKE_RESPONSE,
    value: responseId
  };
}

export default {
  setCurrentState,
  initiateConversation,
  makeResponse
};