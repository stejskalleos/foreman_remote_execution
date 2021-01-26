import React from 'react';
import PropTypes from 'prop-types';

import FormField from 'foremanReact/components/common/forms/FormField';

import { translate as __ } from 'foremanReact/common/I18n';

const RexInterface = ({ isLoading, onChange }) => {
  return (
    <FormField
      label={__('Remote Execution Interface')}
      labelHelp={__('Identifier of the Host interface for Remote execution')}
    >
      <input
        type="text"
        name="remote_execution_interface"
        id="remote_execution_interface"
        className="form-control"
        disabled={isLoading}
        onChange={e => onChange({remote_execution_interface: e.target.value})}
      />
    </FormField>
  );
};

RexInterface.propTypes = {
  isLoading: PropTypes.bool,
};

RexInterface.defaultProps = {
  isLoading: false,
};

export default RexInterface;
