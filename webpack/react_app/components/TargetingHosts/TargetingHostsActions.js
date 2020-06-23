import { get } from 'foremanReact/redux/API';
import { withInterval } from 'foremanReact/redux/middlewares/IntervalMiddleware';
import { TARGETING_HOSTS } from './TargetingHostsConsts';

export const getData = url =>
  withInterval(get({ key: TARGETING_HOSTS, url }), 1000);
