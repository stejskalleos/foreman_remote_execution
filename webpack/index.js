import { registerReducer } from 'foremanReact/common/MountingService';
import componentRegistry from 'foremanReact/components/componentRegistry';
import JobInvocationContainer from './react_app/components/jobInvocations';
import TargetingHosts from './react_app/components/TargetingHosts';
import rootReducer from './react_app/redux/reducers';
import RexInterface from './react_app/components/RegistrationExtension/RexInterface';

const components = [
  { name: 'JobInvocationContainer', type: JobInvocationContainer },
  { name: 'TargetingHosts', type: TargetingHosts },
  {
    name: 'RexInterface',
    type: RexInterface,
  },
];

components.forEach(component => {
  componentRegistry.register(component);
});

registerReducer('foremanRemoteExecutionReducers', rootReducer);
