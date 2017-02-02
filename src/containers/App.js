import App from "../components/App.js";
import { connect } from "react-redux";
import actions from "../actions";

const mapStateToProps = (state) => {
  let callToAction, message, isPlaying = null;
  switch(state.action.status) {
    case "message":
      message = state.messages[state.action.value];
      break;
    case "cta":
      callToAction = state.callToAction[state.action.value];
      break;
    case "playing":
      isPlaying = true;
      break;
    default:
      break;
  }
  return {
    message,
    callToAction,
    isPlaying
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: ({ action, value }) => {
      dispatch(actions.setAction(action, value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
