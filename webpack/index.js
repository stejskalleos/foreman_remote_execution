import { registerReducer } from 'foremanReact/common/MountingService';
import componentRegistry from 'foremanReact/components/componentRegistry';
import JobInvocationContainer from './react_app/components/jobInvocations';
import TargetingHosts from './react_app/components/TargetingHosts';
import RegistrationRemoteExecutionInterface from './react_app/components/registration/RemoteExecutionInterface';
import rootReducer from './react_app/redux/reducers';

const components = [
  { name: 'JobInvocationContainer', type: JobInvocationContainer },
  { name: 'TargetingHosts', type: TargetingHosts },
  {
    name: 'RegistrationRemoteExecutionInterface',
    type: RegistrationRemoteExecutionInterface,
  },
];

components.forEach(component => {
  componentRegistry.register(component);
});

registerReducer('foremanRemoteExecutionReducers', rootReducer);
