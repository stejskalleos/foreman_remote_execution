import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../TargetingHostsSelectors';
import { selectAllHosts } from '../TargetingHostsActions';

const SelectHosts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllCheckbox = e => {
    if (e.target.checked) {
      dispatch(selectAllHosts([...items].map(h => h.id)));
    } else {
      dispatch(selectAllHosts([]));
    }

    setSelectAll(e.target.checked);
  };

  return (
    <input
      type="checkbox"
      checked={selectAll}
      onChange={handleSelectAllCheckbox}
    />
  );
};

export default SelectHosts;
