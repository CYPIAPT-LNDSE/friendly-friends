import App from '../components/App.js';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return {
    callToAction: state.currentState === "callToAction",
    message: state.currentState === "message"
  }
}

export default connect(mapStateToProps)(App);
