import { useState } from 'react'
import './PolicyCreationPanel.css'
import { PrimaryButton, DefaultButton, IconButton, Icon, TextField, MessageBar, MessageBarType, Link } from '@fluentui/react'

interface PolicyCreationPanelProps {
  onClose: () => void
}

const PolicyCreationPanel = ({ onClose }: PolicyCreationPanelProps) => {
  const [policyName, setPolicyName] = useState('Non-Microsoft 365 data leaks (quick policy) - 2/4/2026')

  const indicators = [
    { text: 'Disabling Amazon S3 settings that block public access to data', bold: false, disabled: true },
    { text: 'Downloading content from Dropbox', bold: false, disabled: true },
    { text: 'Making Amazon S3 buckets publicly accessible', bold: false, disabled: true },
    { text: 'Elevating access to all Azure subscriptions and management groups', bold: false, disabled: false },
    { text: 'Downloading content from Box', bold: false, disabled: true },
    { text: 'Sharing Box files with people outside the organization', bold: false, disabled: true },
    { text: 'Sharing Google Drive files with people outside the organization', bold: false, disabled: true },
    { text: 'Downloading Power BI reports', bold: false, disabled: false },
    { text: 'Exporting Power BI reports', bold: false, disabled: false },
    { text: 'Removing sensitivity labels from Power BI artifacts', bold: false, disabled: false },
    { text: 'Downgrading sensitivity labels from Power BI artifacts', bold: false, disabled: false },
    { text: 'Enabling external sharing of Microsoft Fabric data', bold: false, disabled: false },
    { text: 'Sharing lakehouse data with people outside the organization', bold: false, disabled: false },
    { text: 'Removing sensitivity labels of lakehouses', bold: false, disabled: false },
    { text: 'Downgrading sensitivity labels of lakehouses', bold: false, disabled: false }
  ]

  return (
    <aside className="policy-creation-panel">
      <div className="policy-panel-header">
        <h2>Create a data leaks policy for non-Microsoft 365 apps</h2>
        <IconButton
          iconProps={{ iconName: 'Cancel' }}
          ariaLabel="Close"
          onClick={onClose}
        />
      </div>

      <div className="policy-panel-content">
        <div className="policy-header-info">
          <div className="badge-payg">
            <Icon iconName="Rocket" />
            <span>Pay-as-you-go</span>
          </div>
          <div className="completion-time">
            <Icon iconName="Clock" />
            <span>2 minutes to complete</span>
          </div>
        </div>

        <p className="policy-description">
          Data leaks can range from accidental oversharing of info outside your organization to data theft with malicious intent. Most organizations with insider risk programs have a data leaks policy in place.
        </p>

        <Link href="#" className="learn-link">How do quick policies work?</Link>

        <div className="policy-section">
          <p className="section-instruction">
            Review the policy name we suggested and make changes if needed.
          </p>
          
          <div className="form-field">
            <label className="field-label">
              Policy name <span className="required-asterisk">*</span>
            </label>
            <TextField
              value={policyName}
              onChange={(_e, newValue) => setPolicyName(newValue || '')}
            />
          </div>
        </div>

        <div className="policy-section">
          <h3 className="section-heading">Settings we filled in for you</h3>
          <p className="section-description">
            Settings below are based on the latest analytics scan. You can edit them later or
            click 'Customize' now to configure using the full policy wizard.
          </p>

          <div className="setting-item">
            <div className="setting-label">User scope</div>
            <div className="setting-value">Include all users and groups (Recommended for best coverage)</div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              Triggering event
              <Icon iconName="Info" className="info-icon" />
            </div>
            <div className="setting-value">
              User performs an exfiltration activity
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              Indicators
              <Icon iconName="Info" className="info-icon" />
              <div className="badge-payg inline-badge">
                <Icon iconName="Rocket" />
                <span>Pay-as-you-go</span>
              </div>
            </div>
          </div>

          <MessageBar
            messageBarType={MessageBarType.info}
            className="billing-message"
            messageBarIconProps={{ iconName: 'Rocket' }}
          >
            The following indicators are billed under pay-as-you-go. You'll be
            charged based on user activities processed.{' '}
            <Link href="#">Learn about pay-as-you-go billing</Link>.
          </MessageBar>

          <MessageBar
            messageBarType={MessageBarType.info}
            className="connection-info"
            messageBarIconProps={{ iconName: 'InfoSolid' }}
          >
            <div className="info-content">
              <div className="info-text">
                <div>
                  <strong>AWS, Dropbox, Box, Google Drive</strong> aren't connected yet. To use these
                  indicators, you must first connect from the Microsoft 365 Defender portal.{' '}
                  <Link href="#">Learn about connecting cloud apps</Link>
                </div>
              </div>
              <DefaultButton className="defender-button-inline">
                Go to Microsoft 365 Defender
              </DefaultButton>
            </div>
          </MessageBar>

          <ul className="indicators-list">
            {indicators.map((indicator, index) => (
              <li key={index} className={`${indicator.bold ? 'bold-indicator' : ''} ${indicator.disabled ? 'disabled-indicator' : ''}`}>
                {indicator.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="policy-panel-footer">
        <PrimaryButton>Create policy</PrimaryButton>
        <DefaultButton onClick={onClose}>Customize</DefaultButton>
      </div>
    </aside>
  )
}

export default PolicyCreationPanel
