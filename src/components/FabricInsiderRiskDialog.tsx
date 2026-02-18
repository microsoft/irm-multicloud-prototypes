import './FabricInsiderRiskDialog.css'
import { PrimaryButton, DefaultButton, IconButton } from '@fluentui/react'

interface FabricInsiderRiskDialogProps {
  isOpen: boolean
  onClose: () => void
  onOpenPolicyPanel: () => void
  onOpenInformAdminsDialog: () => void
}

const FabricInsiderRiskDialog = ({ isOpen, onClose, onOpenPolicyPanel, onOpenInformAdminsDialog }: FabricInsiderRiskDialogProps) => {
  if (!isOpen) return null

  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <div className="dialog-header">
          <h2>Detect exfiltration of Fabric data using Insider Risk Management</h2>
          <IconButton
            iconProps={{ iconName: 'Cancel' }}
            ariaLabel="Close"
            onClick={onClose}
          />
        </div>
        
        <div className="dialog-content">
          <p className="dialog-subtitle">
            Monitor and detect potential data exfiltration from Microsoft Fabric using Microsoft Purview Insider Risk Management.
          </p>

          <div className="dialog-section">
            <h3>What we detected</h3>
            <p className="insights-intro">
              Recent activity scans identified the following Fabric and Power BI related exfiltration activities:
            </p>
            <ul className="insights-list">
              <li><strong>0.5%</strong> of users downloaded Power BI reports</li>
              <li><strong>0.5%</strong> of users removed or downgraded sensitivity labels of Power BI artifacts</li>
              <li><strong>0.4%</strong> of users enabled external sharing of Microsoft Fabric data</li>
              <li><strong>0.4%</strong> of users are sharing lakehouse data with people outside the organization</li>
              <li><strong>0.4%</strong> of users removed or downgraded sensitivity labels of Microsoft Fabric lakehouses</li>
            </ul>
          </div>

          <div className="dialog-section">
            <h3>Why it matters</h3>
            <p>
              Use Insider Risk Management from Microsoft Purview to detect and investigate potential data theft 
              from Microsoft Fabric. Insider Risk Management helps you identify risky activities involving Fabric 
              lakehouses, warehouses, and semantic models, including downloading reports, sharing lakehouse data 
              with people outside the organization, and removing sensitivity labels.
            </p>
          </div>

          <div className="dialog-section">
            <h3>How to fix it</h3>
            <div className="fix-option">
              <div className="fix-option-content">
                <span className="fix-option-text">
                  Create a policy in Insider Risk Management for Fabric data theft and data leaks in one click.
                </span>
              </div>
              <PrimaryButton className="fix-option-button" onClick={onOpenPolicyPanel}>Get started</PrimaryButton>
            </div>
            <div className="or-divider">OR</div>
            <div className="fix-option">
              <div className="fix-option-content">
                <span className="fix-option-text">
                  Don't have access to Purview? Request Purview Insider Risk Management admins to create a policy to detect Fabric data theft and data leaks.
                </span>
              </div>
              <PrimaryButton className="fix-option-button" onClick={onOpenInformAdminsDialog}>Get started</PrimaryButton>
            </div>
          </div>

          <div className="dialog-actions">
            <PrimaryButton onClick={() => window.open('https://purview.microsoft.com/insiderriskmgmt', '_blank')}>Go to Insider Risk Management</PrimaryButton>
            <DefaultButton onClick={onClose}>Close</DefaultButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FabricInsiderRiskDialog
