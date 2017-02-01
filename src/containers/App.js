import App from '../components/App.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  let callToAction, message = null;
  switch(state.currentState.status) {
    case "talking":
      message = state.messages[state.currentState.value];
      break;
    case "callToAction":
      callToAction = state.callToAction[state.currentState.value];
      break;
    default:
      break;
  }
  return {
    message,
    callToAction
  };
};

export default connect(mapStateToProps)(App);
