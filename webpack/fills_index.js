import React from 'react';
import { addGlobalFill } from 'foremanReact/components/common/Fill/GlobalFill';

import RexInterface from './react_app/components/extensions/RexInterface';


addGlobalFill(
  'host-registration-form',
  '[rex]interface',
  <RexInterface key="registration-rex-interface" />,
  100
);
