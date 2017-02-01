import App from '../components/App.js';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return state.currentState
}

export default connect(mapStateToProps)(App);
