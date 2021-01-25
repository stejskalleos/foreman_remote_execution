import React from 'react';
import PropTypes from 'prop-types';
import { FieldLevelHelp } from 'patternfly-react';

import CommonForm from 'foremanReact/components/common/forms/CommonForm';

import { translate as __ } from 'foremanReact/common/I18n';

const RexInterface = ({ isLoading, onChange }) => {

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
        onChange={e => onChange({remote_execution_interface: e.target.value})}
      />
    </CommonForm>
  );
};

RexInterface.propTypes = {
  isLoading: PropTypes.bool,
};

RexInterface.defaultProps = {
  isLoading: false,
};

// export const reducers = { registration: reducer };
export default RexInterface;
