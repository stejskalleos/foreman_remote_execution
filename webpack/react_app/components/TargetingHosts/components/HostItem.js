import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ActionButtons } from 'foremanReact/components/common/ActionButtons/ActionButtons';
import HostStatus from './HostStatus';
import { updateSelectedHosts } from '../TargetingHostsActions';
import { selectSelectedHosts } from '../TargetingHostsSelectors';

const HostItem = ({ name, id, link, status, actions }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const selectedHosts = useSelector(selectSelectedHosts);

  const hostLink = link ? (
    <a href={link}>{name}</a>
  ) : (
    <a href="#" className="disabled">
      {name}
    </a>
  );

  const handleCheckbox = e => {
    setSelected(e.target.checked);
    dispatch(updateSelectedHosts(id, e.target.checked));
  };

  useEffect(() => {
    setSelected(selectedHosts.some(h => h === id));
  }, [selectedHosts, id]);

  return (
    <tr id={`targeting-host-${name}`}>
      <td className="ca">
        <input type="checkbox" checked={selected} onChange={handleCheckbox} />
      </td>
      <td className="host_name">{hostLink}</td>
      <td className="host_status">
        <HostStatus status={status} />
      </td>
      <td className="host_actions">
        <ActionButtons buttons={[...actions]} />
      </td>
    </tr>
  );
};

HostItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  actions: PropTypes.array,
};

HostItem.defaultProps = {
  actions: [],
};

export default HostItem;
