import { combineReducers } from 'redux';
import { reducers as rexInterface } from './RexInterface';

export default combineReducers({
  ...rexInterface,
});
