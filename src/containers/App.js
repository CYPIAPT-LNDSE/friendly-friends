import App from '../components/App.js';
import { connect } from 'react-redux';
import actions from "../actions";

const mapStateToProps = (state) => {
  let callToAction, message = null, welcome = false;
  let username = state.action.username
  switch(state.action.status) {
    case "message":
      message = state.messages[state.action.value];
      break;
    case "cta":
      callToAction = state.callToAction[state.action.value];
      break;
    case "welcome":
      welcome = true;
      break;
    default:
      break;
  }
  return {
    message,
    callToAction,
    welcome,
    username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: ({ action, value }) => {
      dispatch(actions.setAction(action, value));
    },
    initiateConversation: (value) => {
      dispatch(actions.initiateConversation(value));
    },
    setUsername: (value) => {
      dispatch(actions.setUsername(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
