import React from 'react';
import { addGlobalFill } from 'foremanReact/components/common/Fill/GlobalFill';

import RexInterface from './react_app/components/RegistrationExtension/RexInterface';


addGlobalFill(
  'host-registration-form-advanced-fields',
  'foreman-remote-exectuion-rex-interface',
  <RexInterface key="registration-rex-interface" />,
  100
);
