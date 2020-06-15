import { combineReducers } from 'redux';
import jobInvocations from './jobInvocations/';
import targetingHosts from '../../components/TargetingHosts/TargetingHostsReducer';

export default combineReducers({
  jobInvocations,
  targetingHosts,
});
