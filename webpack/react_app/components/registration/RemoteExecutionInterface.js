import React from 'react';
import PropTypes from 'prop-types';
import { FieldLevelHelp } from 'patternfly-react';

import CommonForm from 'foremanReact/components/common/forms/CommonForm';
import { translate as __ } from 'foremanReact/common/I18n';

const RegistrationRemoteExecutionInterface = ({ isLoading }) => {
  const tooltipProps = text => ({
    buttonClass: 'field-help',
    placement: 'right',
    content: text,
  });

  return (
    <CommonForm
      label={__('Remote Execution Interface')}
      tooltipHelp={
        <FieldLevelHelp
          {...tooltipProps(
            __('Identifier of the Host interface for Remote execution')
          )}
        />
      }
    >
      <input
        type="text"
        name="remote_execution_interface"
        id="remote_execution_interface"
        className="form-control"
        disabled={isLoading}
      />
    </CommonForm>
  );
};

RegistrationRemoteExecutionInterface.propTypes = {
  isLoading: PropTypes.bool,
};

RegistrationRemoteExecutionInterface.defaultProps = {
  isLoading: false,
};

export default RegistrationRemoteExecutionInterface;
