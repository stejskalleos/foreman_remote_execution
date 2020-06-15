import React from 'react';
import { useSelector } from 'react-redux';
import { translate as __ } from 'foremanReact/common/I18n';
import { ActionButtons } from 'foremanReact/components/common/ActionButtons/ActionButtons';
import { selectSelectedHosts } from '../TargetingHostsSelectors';

const DownloadButton = () => {
  const selectedHosts = useSelector(selectSelectedHosts);
  const buttonStyles = selectedHosts.length === 0 ? 'disabled' : '';

  const downloadOutputPath = format =>
    `${window.location.pathname}/download_outputs?host_ids=${encodeURIComponent(
      selectedHosts
    )}&format=${format}`;

  return (
    <div>
      <ActionButtons
        buttons={[
          {
            title: __('Download as PDF'),
            action: {
              id: 'targeting-hosts-download-pdf',
              'data-method': 'get',
              href: downloadOutputPath('pdf'),
              className: buttonStyles,
            },
          },
          {
            title: __('Download as Text'),
            action: {
              id: 'targeting-hosts-download-text',
              'data-method': 'get',
              href: downloadOutputPath('text'),
              className: buttonStyles,
            },
          },
        ]}
      />
    </div>
  );
};

export default DownloadButton;
