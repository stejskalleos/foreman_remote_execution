import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from 'foremanReact/components/SearchBar';
import Pagination from 'foremanReact/components/Pagination/PaginationWrapper';
import { useForemanSettings } from 'foremanReact/Root/Context/ForemanContext';
import { stopInterval } from 'foremanReact/redux/middlewares/IntervalMiddleware';

import TargetingHosts from './TargetingHosts';

import {
  selectItems,
  selectStatus,
  selectAutoRefresh,
  selectTotalHosts,
} from './TargetingHostsSelectors';
import { getApiUrl } from './TargetingHostsHelpers';
import { getData } from './TargetingHostsActions';
import { TARGETING_HOSTS } from './TargetingHostsConsts';

const WrappedTargetingHosts = () => {
  const dispatch = useDispatch();
  const { perPage, perPageOptions } = useForemanSettings();

  const autoRefresh = useSelector(selectAutoRefresh);
  const items = useSelector(selectItems);
  const status = useSelector(selectStatus);
  const totalHosts = useSelector(selectTotalHosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    perPage,
    perPageOptions,
  });
  const [apiUrl, setApiUrl] = useState(getApiUrl(searchQuery, pagination));

  const handleSearch = query => {
    const defaultPagination = { page: 1, perPage: pagination.perPage };
    dispatch(stopInterval(TARGETING_HOSTS));

    setApiUrl(getApiUrl(query, defaultPagination));
    setSearchQuery(query);
    setPagination(defaultPagination);
  };

  const handlePagination = args => {
    dispatch(stopInterval(TARGETING_HOSTS));

    setPagination(args);
    setApiUrl(getApiUrl(searchQuery, args));
  };

  useEffect(() => {
    dispatch(getData(apiUrl));

    if (autoRefresh === 'false') {
      dispatch(stopInterval(TARGETING_HOSTS));
    }

    return () => {
      dispatch(stopInterval(TARGETING_HOSTS));
    };
  }, [dispatch, apiUrl, autoRefresh]);

  useEffect(() => {
    if (autoRefresh === 'false') {
      dispatch(stopInterval(TARGETING_HOSTS));
    }
  }, [autoRefresh, dispatch]);

  return (
    <div id="targeting_hosts">
      <div className="row">
        <div className="title_filter col-md-6">
          <SearchBar
            onSearch={query => handleSearch(query)}
            data={{
              autocomplete: {
                id: 'targeting_hosts_search',
                url: '/hosts/auto_complete_search',
              },
            }}
          />
        </div>
      </div>
      <br />
      <TargetingHosts status={status} items={items} autoRefresh={autoRefresh} />
      <Pagination
        viewType="list"
        itemCount={totalHosts}
        pagination={pagination}
        onChange={args => handlePagination(args)}
        dropdownButtonId="targeting-hosts-pagination-dropdown"
      />
    </div>
  );
};

export default WrappedTargetingHosts;
