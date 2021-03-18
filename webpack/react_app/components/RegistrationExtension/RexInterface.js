import React from 'react';
import PropTypes from 'prop-types';

import { translate as __ } from 'foremanReact/common/I18n';

import {
  FormGroup,
  TextInput,
  Popover,
} from '@patternfly/react-core';

import { HelpIcon } from '@patternfly/react-icons';

const RexInterface = ({ isLoading, onChange, pluginValues }) => {
  const value = pluginValues?.remoteExecutionInterface || '';

  return (
    <FormGroup
      label={__('Remote Execution Interface')}
      fieldId='reg_rex_interface'
      labelIcon={
        <Popover bodyContent={<div>{__('Identifier of the Host interface for Remote execution')}</div>}>
          <button
            className='pf-c-form__group-label-help'
            onClick={e => e.preventDefault()}
          >
            <HelpIcon noVerticalAlign />
          </button>
        </Popover>
      }
    >
      <TextInput
        value={value}
        type="text"
        isDisabled={isLoading}
        id='reg_rex_interface_input'
        onChange={(v) => onChange({ remoteExecutionInterface: v })}
      />
    </FormGroup>
  );
};

// RexInterface.propTypes = {
//   isLoading: PropTypes.bool,
//   onChange: PropTypes.func,
// };

// RexInterface.defaultProps = {
//   isLoading: false,
//   onChange: undefined,
// };

export default RexInterface;
