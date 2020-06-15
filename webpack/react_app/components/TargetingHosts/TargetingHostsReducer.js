import Immutable from 'seamless-immutable';

import {
  ADD_SELECTED_TARGETING_HOST,
  REMOVE_SELECTED_TARGETING_HOST,
  SELECT_ALL_TARGETING_HOSTS,
} from './TargetingHostsConsts';

const initialState = Immutable({
  selectedHosts: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_TARGETING_HOST:
      return state.merge({
        selectedHosts: [...state.selectedHosts, action.payload.host],
      });
    case REMOVE_SELECTED_TARGETING_HOST:
      return state.set('selectedHosts', [
        ...state.selectedHosts.filter(h => h !== action.payload.host),
      ]);
    case SELECT_ALL_TARGETING_HOSTS:
      return state.merge(action.payload);
    default:
      return state;
  }
};
