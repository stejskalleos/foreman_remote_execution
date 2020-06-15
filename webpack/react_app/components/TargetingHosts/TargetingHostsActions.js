import { get } from 'foremanReact/redux/API';
import { withInterval } from 'foremanReact/redux/middlewares/IntervalMiddleware';
import {
  TARGETING_HOSTS,
  ADD_SELECTED_TARGETING_HOST,
  REMOVE_SELECTED_TARGETING_HOST,
  SELECT_ALL_TARGETING_HOSTS,
} from './TargetingHostsConsts';

export const getData = url =>
  withInterval(get({ key: TARGETING_HOSTS, url }), 1000);

export const updateSelectedHosts = (host, selected) => ({
  type: selected ? ADD_SELECTED_TARGETING_HOST : REMOVE_SELECTED_TARGETING_HOST,
  payload: {
    host,
  },
});

export const selectAllHosts = hosts => ({
  type: SELECT_ALL_TARGETING_HOSTS,
  payload: {
    selectedHosts: hosts,
  },
});
