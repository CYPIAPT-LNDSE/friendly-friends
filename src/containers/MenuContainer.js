import Menu from '../components/Menu.js';
import { connect } from 'react-redux';
import actions from "../actions";

const mapStateToProps = (state) => {
  return {}; // TODO - complete
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEvent: (event) => {
      dispatch(actions.initiateConversation());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
