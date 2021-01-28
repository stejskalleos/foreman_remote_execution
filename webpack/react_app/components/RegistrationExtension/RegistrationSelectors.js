const selectRegistration = state => state.registration;

export const selectRexInterface = state =>
  selectRegistration(state).remoteExecutionInterface || '';