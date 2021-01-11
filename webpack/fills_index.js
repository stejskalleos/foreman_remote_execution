import React from 'react';
import { addGlobalFill } from 'foremanReact/components/common/Fill/GlobalFill';

import RegistrationRemoteExecutionInterface from './react_app/components/registration/RemoteExecutionInterface';

addGlobalFill(
  'host-registration-form',
  '[rex]interface',
  <RegistrationRemoteExecutionInterface key="registration-rex-interface" />,
  100
);
