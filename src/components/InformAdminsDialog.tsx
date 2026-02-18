import './InformAdminsDialog.css'
import { PrimaryButton, DefaultButton, IconButton, TextField } from '@fluentui/react'
import { useState } from 'react'

interface InformAdminsDialogProps {
  isOpen: boolean
  onClose: () => void
}

const InformAdminsDialog = ({ isOpen, onClose }: InformAdminsDialogProps) => {
  if (!isOpen) return null

  const [additionalRecipients, setAdditionalRecipients] = useState('')

  const defaultEmailMessage = `I would like to request the creation of an Insider Risk Management policy to detect and prevent data exfiltration from Microsoft Fabric.

✓ Detect risky Fabric activities
Monitor and detect potential data theft from Fabric lakehouses, warehouses, and semantic models by users near their resignation or termination date.

✓ Identify sensitive content exfiltration
Alert on activities such as downloading Power BI reports, sharing lakehouse data with people outside the organization, and removing or downgrading sensitivity labels.

✓ Support compliance and governance
Help protect our organization's data and meet compliance requirements by identifying risky behavior patterns involving Fabric data sources.

Please let me know if you need any additional information to set up this policy.`

  return (
    <div className="inform-dialog-overlay">
      <div className="inform-dialog-container">
        <div className="inform-dialog-header">
          <h2>Inform Purview Insider Risk Management admins</h2>
          <IconButton
            iconProps={{ iconName: 'Cancel' }}
            ariaLabel="Close"
            onClick={onClose}
          />
        </div>
        
        <div className="inform-dialog-content">
          <p className="inform-dialog-description">
            Looks like you don't have rights to set up Insider Risk Management policies to protect Fabric. You can send an email to all Purview Insider Risk Management admins to request a policy to detect Fabric data exfiltration.
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
            <PrimaryButton onClick={onClose}>Send email</PrimaryButton>
            <DefaultButton onClick={onClose}>Cancel</DefaultButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformAdminsDialog
