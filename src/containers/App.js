import App from '../components/App.js';
import { connect } from 'react-redux';
import actions from "../actions";

const mapStateToProps = (state) => {
  let callToAction, message = null;
  switch(state.currentState.status) {
    case "message":
      message = state.messages[state.currentState.value];
      break;
    case "cta":
      callToAction = state.ctas[state.currentState.value];
      break;
    default:
      break;
  }
  return {
    message,
    callToAction
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: ({ action, value }) => {
      dispatch(actions.setCurrentState(action, value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
