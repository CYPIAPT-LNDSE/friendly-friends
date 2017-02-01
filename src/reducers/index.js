import { combineReducers } from 'redux';

const currentState = () => "callToAction"

const rootReducer = combineReducers({
  currentState: currentState
});



export default rootReducer;
