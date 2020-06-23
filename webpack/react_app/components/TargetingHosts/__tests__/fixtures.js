export const HostItemFixtures = {
  renders: {
    name: 'Host1',
    link: '/host1',
    status: 'success',
    actions: [],
  },
};

export const HostStatusFixtures = {
  renders: {
    status: 'success',
  },
};

export const TargetingHostsFixtures = {
  renders: {
    status: '',
    items: [
      {
        name: 'host',
        link: '/link',
        status: 'success',
        actions: [],
      },
    ],
    autoRefresh: 'false',
  },
  'renders with error': {
    status: 'ERROR',
    items: [
      {
        name: 'host',
        link: '/link',
        status: 'success',
        actions: [],
      },
    ],
    autoRefresh: 'false',
  },
  'renders with loading': {
    status: '',
    items: [],
    autoRefresh: 'true',
  },
};
