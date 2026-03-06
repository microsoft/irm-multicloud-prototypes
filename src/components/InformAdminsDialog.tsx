import './InformAdminsDialog.css'
import { PrimaryButton, DefaultButton, IconButton, TextField, Icon } from '@fluentui/react'
import { useState } from 'react'

interface InformAdminsDialogProps {
  isOpen: boolean
  onClose: () => void
}

type View = 'picker' | 'inapp-success' | 'email'

const InformAdminsDialog = ({ isOpen, onClose }: InformAdminsDialogProps) => {
  const [view, setView] = useState<View>('picker')
  const [additionalRecipients, setAdditionalRecipients] = useState('')

  if (!isOpen) return null

  const defaultEmailMessage = `I would like to request the creation of an Insider Risk Management policy to detect and prevent data exfiltration from Microsoft Fabric.

✓ Detect risky Fabric activities
Monitor and detect potential data theft from Fabric lakehouses, warehouses, and semantic models by users near their resignation or termination date.

✓ Identify sensitive content exfiltration
Alert on activities such as downloading Power BI reports, sharing lakehouse data with people outside the organization, and removing or downgrading sensitivity labels.

✓ Support compliance and governance
Help protect our organization's data and meet compliance requirements by identifying risky behavior patterns involving Fabric data sources.

Please let me know if you need any additional information to set up this policy.`

  const handleClose = () => {
    setView('picker')
    setAdditionalRecipients('')
    onClose()
  }

  return (
    <div className="inform-dialog-overlay">
      <div className="inform-dialog-container">
        <div className="inform-dialog-header">
          <div className="inform-dialog-header-left">
            {view !== 'picker' && (
              <IconButton
                iconProps={{ iconName: 'Back' }}
                ariaLabel="Back"
                onClick={() => setView('picker')}
                className="inform-back-btn"
              />
            )}
            <h2>
              {view === 'picker' && 'Request Insider Risk Management admins'}
              {view === 'inapp-success' && 'Request sent'}
              {view === 'email' && 'Email IRM admins'}
            </h2>
          </div>
          <IconButton
            iconProps={{ iconName: 'Cancel' }}
            ariaLabel="Close"
            onClick={handleClose}
          />
        </div>

        <div className="inform-dialog-content">

          {/* ── Option Picker ── */}
          {view === 'picker' && (
            <>
              <p className="inform-dialog-description">
                You don't have rights to set up Insider Risk Management policies. Choose how you'd like to request an IRM admin to create a data leaks policy for Microsoft Fabric.
              </p>
              <div className="inform-options">
                <div className="inform-option" onClick={() => setView('inapp-success')}>
                  <div className="inform-option-icon">
                    <Icon iconName="Ringer" />
                  </div>
                  <div className="inform-option-body">
                    <div className="inform-option-title">Request IRM admin to create a policy</div>
                    <div className="inform-option-desc">Send an in-app request to IRM admins. The request will be visible to them in the IRM policies section of Microsoft Purview.</div>
                  </div>
                  <Icon iconName="ChevronRight" className="inform-option-chevron" />
                </div>
                <div className="inform-option" onClick={() => setView('email')}>
                  <div className="inform-option-icon">
                    <Icon iconName="Mail" />
                  </div>
                  <div className="inform-option-body">
                    <div className="inform-option-title">Request via email</div>
                    <div className="inform-option-desc">Send a pre-drafted email to all Purview Insider Risk Management admins requesting policy creation.</div>
                  </div>
                  <Icon iconName="ChevronRight" className="inform-option-chevron" />
                </div>
              </div>
              <div className="inform-dialog-actions">
                <DefaultButton onClick={handleClose}>Cancel</DefaultButton>
              </div>
            </>
          )}

          {/* ── In-app Request Success ── */}
          {view === 'inapp-success' && (
            <>
              <div className="inapp-success-body">
                <div className="inapp-success-icon">
                  <Icon iconName="CheckMark" />
                </div>
                <div className="inapp-success-title">Request sent to IRM admins</div>
                <p className="inapp-success-desc">
                  Your request to create a data leaks policy for Microsoft Fabric has been sent. IRM admins will see this request in the <strong>Policies</strong> section of Microsoft Purview Insider Risk Management and can action it from there.
                </p>
                <div className="inapp-success-detail">
                  <Icon iconName="Info" />
                  <span>You'll be notified once a policy has been created.</span>
                </div>
              </div>
              <div className="inform-dialog-actions">
                <PrimaryButton onClick={handleClose}>Done</PrimaryButton>
              </div>
            </>
          )}

          {/* ── Email Flow ── */}
          {view === 'email' && (
            <>
              <p className="inform-dialog-description">
                The following message will be sent to all Purview Insider Risk Management admins in your organization.
              </p>
              <div className="email-section">
                <label className="email-label">Email message</label>
                <textarea
                  className="email-textarea"
                  value={defaultEmailMessage}
                  rows={12}
                  readOnly
                />
              </div>
              <div className="recipients-section">
                <label className="recipients-label">Additional recipients (optional)</label>
                <TextField
                  multiline
                  rows={3}
                  placeholder="Add email addresses of additional recipients here."
                  value={additionalRecipients}
                  onChange={(_e, newValue) => setAdditionalRecipients(newValue || '')}
                />
              </div>
              <div className="inform-dialog-actions">
                <PrimaryButton onClick={handleClose}>Send email</PrimaryButton>
                <DefaultButton onClick={handleClose}>Cancel</DefaultButton>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default InformAdminsDialog
