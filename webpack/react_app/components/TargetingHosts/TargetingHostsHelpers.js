import { getURI } from 'foremanReact/common/urlHelpers';

export const getApiUrl = (searchQuery, pagination) =>
  getURI()
    .search('')
    .addQuery('search', searchQuery)
    .addQuery('page', pagination.page)
    .addQuery('per_page', pagination.perPage)
    .addQuery('format', 'json');
