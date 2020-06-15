import React from 'react';
import PropTypes from 'prop-types';
import { translate as __ } from 'foremanReact/common/I18n';
import { LoadingState, Alert } from 'patternfly-react';
import { STATUS } from 'foremanReact/constants';
import HostItem from './components/HostItem';
import DownloadButton from './components/DownloadButton';
import SelectHosts from './components/SelectHosts';

const TargetingHosts = ({ apiStatus, items }) => {
  if (apiStatus === STATUS.ERROR) {
    return (
      <Alert type="error">
        {__(
          'There was an error while updating the status, try refreshing the page.'
        )}
      </Alert>
    );
  }

  return (
    <LoadingState loading={!items.length && apiStatus === STATUS.PENDING}>
      <div>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th width="40px" className="ca">
                <SelectHosts />
              </th>
              <th className="col-md-8">{__('Host')}</th>
              <th>{__('Status')}</th>
              <th>{__('Actions')}</th>
            </tr>
          </thead>
          <tbody>
            {items.map(host => (
              <HostItem
                key={host.name}
                id={host.id}
                name={host.name}
                link={host.link}
                status={host.status}
                actions={host.actions}
              />
            ))}

            {!items.length && (
              <tr>
                <td colSpan="3">{__('No hosts found.')}</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3">&nbsp;</th>
              <th>
                <DownloadButton />
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </LoadingState>
  );
};

TargetingHosts.propTypes = {
  apiStatus: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default TargetingHosts;
