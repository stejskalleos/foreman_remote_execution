import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { translate as __ } from 'foremanReact/common/I18n';
import FormField from 'foremanReact/components/common/forms/FormField';

import {selectRexInterface} from './RegistrationSelectors'

const RexInterface = ({ isLoading, onChange }) => {
  const value = useSelector(selectRexInterface)

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
        defaultValue={value}
        onBlur={e => onChange({ key: 'remoteExecutionInterface', value: e.target.value })}
      />
    </FormField>
  );
};

RexInterface.propTypes = {
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
};

RexInterface.defaultProps = {
  isLoading: false,
  onChange: undefined,
};

export default RexInterface;
