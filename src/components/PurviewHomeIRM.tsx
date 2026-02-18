import { useState } from 'react'
import './PurviewHomeIRM.css'
import { DefaultButton, Link } from '@fluentui/react'
import PolicyCreationPanel from './PolicyCreationPanel'

const PurviewHomeIRM = () => {
  const [isPolicyPanelOpen, setIsPolicyPanelOpen] = useState(false)

  return (
    <main className="purview-home-content">
      <div className="purview-section">
        <div className="section-header">
          <h2>Trials and recommendations</h2>
          <Link href="#">View all trials and recommendations →</Link>
        </div>

        <div className="trials-grid">
          <div className="trial-card">
            <div className="card-preview">
              <img src="https://res.cdn.office.net/scc-resources/resources/ww/trial/static/RecoPurviewOnboarding.svg" alt="Purview setup" />
            </div>
            <div className="card-header">
              <h3>Purview setup</h3>
            </div>
            <div className="card-content">
              <h4>Get started with Purview Suite</h4>
              <p>Discover premium features and get interactive step-by-step guidance for setting up solutions such as Information Protection and Data Loss Prevention (DLP).</p>
            </div>
            <div className="card-footer">
              <DefaultButton>Get started</DefaultButton>
            </div>
          </div>

          <div className="trial-card">
            <div className="card-preview">
              <img src="https://res.cdn.office.net/scc-resources/resources/ww/trial/static/RecoShieldProgress.svg" alt="Adaptive Protection" />
            </div>
            <div className="card-header">
              <h3>Adaptive Protection</h3>
            </div>
            <div className="card-content">
              <h4>Automatically mitigate potential risks with Adaptive Protection</h4>
              <p>Data Loss Prevention & Insider Risk Management capabilities come together to help minimize risky activity early.</p>
              <Link href="#" className="read-more-link">Read more...</Link>
            </div>
            <div className="card-footer">
              <DefaultButton>Turn on Adaptive Protection</DefaultButton>
              <Link href="#">Learn more</Link>
            </div>
          </div>

          <div className="trial-card">
            <div className="card-preview">
              <img src="https://res.cdn.office.net/scc-resources/resources/ww/trial/static/RecoDocumentExclamation.svg" alt="Insider Risk Management" />
            </div>
            <div className="card-header">
              <h3>Insider Risk Management</h3>
            </div>
            <div className="card-content">
              <h4>97% of your alerts aren't resolved</h4>
              <p>We noticed you haven't triaged any alerts in the last month. Start reviewing your alerts queue today.</p>
            </div>
            <div className="card-footer">
              <DefaultButton>Review alerts</DefaultButton>
            </div>
          </div>

          <div className="trial-card">
            <div className="card-preview">
              <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '176px', width: 'auto'}}>
                <g clipPath="url(#clip0_irm_card)">
                  <rect x="40.75" y="46" width="72.25" height="51.75" rx="5" fill="url(#paint0_linear_irm)"/>
                  <circle cx="41.875" cy="46.375" r="25.875" fill="url(#paint10_radial_irm)"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M41.875 72.25C56.1654 72.25 67.75 60.6654 67.75 46.375C67.75 46.2498 67.7491 46.1248 67.7473 46L45.75 46C42.9886 46 40.75 48.2386 40.75 51V72.226C41.123 72.2419 41.4981 72.25 41.875 72.25Z" fill="url(#paint13_radial_irm)"/>
                  <circle cx="59.6562" cy="81.3086" r="5.25" fill="#6FB12F"/>
                  <circle cx="73.4141" cy="67.8086" r="5.25" fill="#0083F5"/>
                  <circle cx="89.0781" cy="81.2812" r="5.25" fill="#FFB900"/>
                  <path d="M109.992 46.4126C109.548 49.6844 106.743 52.206 103.349 52.206C99.8145 52.206 96.9186 49.4699 96.6641 46H108C108.708 46 109.381 46.1472 109.992 46.4126Z" fill="#F272A7"/>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_irm" x1="108.621" y1="42.7247" x2="60.3763" y2="144.688" gradientUnits="userSpaceOnUse">
                    <stop offset="0.367698" stopColor="#E7E7E7"/>
                    <stop offset="0.713542" stopColor="#C9F5FF"/>
                  </linearGradient>
                  <radialGradient id="paint10_radial_irm" cx="0" cy="0" r="1" gradientTransform="matrix(-41.1134 108.622 -104.718 -14.3086 57.1134 0.315213)" gradientUnits="userSpaceOnUse">
                    <stop offset="0.127989" stopColor="#E6D5D0"/>
                    <stop offset="0.473293" stopColor="#FCF1E8"/>
                  </radialGradient>
                  <radialGradient id="paint13_radial_irm" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.0652 65.3251) rotate(-45.3951) scale(62.1635 76.6984)">
                    <stop offset="0.187649" stopColor="#FFD84E"/>
                    <stop offset="0.369792" stopColor="#FE843A"/>
                  </radialGradient>
                  <clipPath id="clip0_irm_card">
                    <rect width="128" height="128" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="card-header">
              <h3>Insider Risk Management</h3>
            </div>
            <div className="card-content">
              <h4>24% of your users exfiltrated non-Microsoft 365 data in the past one month</h4>
              <p>Create a policy to monitor and protect against insider threats from non-Microsoft 365 data sources.</p>
            </div>
            <div className="card-footer">
              <DefaultButton onClick={() => setIsPolicyPanelOpen(true)}>Create data leaks policy</DefaultButton>
            </div>
          </div>
        </div>
      </div>

      <div className="purview-section">
        <div className="section-header">
          <h2>Knowledge Center</h2>
          <Link href="#">Go to Knowledge Center →</Link>
        </div>

        <div className="knowledge-grid">
          <div className="knowledge-card">
            <div className="knowledge-image">
              <svg width="100%" height="160" viewBox="0 0 290 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="290" height="160" fill="#F3F2F1"/>
                <rect x="10" y="10" width="270" height="140" fill="white"/>
                <rect x="20" y="20" width="80" height="4" fill="#E1DFDD"/>
                <rect x="20" y="30" width="250" height="100" fill="#FAFAFA"/>
              </svg>
            </div>
            <h4>Overview of the Reimagined Data Governance Experience in Microsoft Purview</h4>
            <p>Showcase how practice led solutions can help your organization accelerate business value with data.</p>
            <Link href="#">Learn more →</Link>
          </div>

          <div className="knowledge-card">
            <div className="knowledge-image">
              <svg width="100%" height="160" viewBox="0 0 290 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="290" height="160" fill="#E3F2FD"/>
                <rect x="20" y="20" width="250" height="120" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <h4>Register and scan Oracle database in Microsoft Purview</h4>
            <p></p>
            <Link href="#">Watch video ↗</Link>
          </div>

          <div className="knowledge-card">
            <div className="knowledge-image">
              <svg width="100%" height="160" viewBox="0 0 290 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="290" height="160" fill="url(#gradient2)"/>
                <defs>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="290" y2="160" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1E8E8E"/>
                    <stop offset="1" stopColor="#0F4C5C"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h4>Insider Risk Management</h4>
            <p>Learn about Insider Risk Management and how it can help protect your org.</p>
            <Link href="#">Watch video ↗</Link>
          </div>

          <div className="knowledge-card">
            <div className="knowledge-image">
              <svg width="100%" height="160" viewBox="0 0 290 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="290" height="160" fill="#F8F8F8"/>
                <circle cx="200" cy="80" r="40" fill="#FFB900" opacity="0.3"/>
                <circle cx="120" cy="80" r="35" fill="#7FBA00" opacity="0.4"/>
              </svg>
            </div>
            <h4>Communication Compliance</h4>
            <p>Learn how Communication Compliance can help detect potential regulatory violations.</p>
            <Link href="#">Watch video ↗</Link>
          </div>
        </div>
      </div>

      {isPolicyPanelOpen && (
        <PolicyCreationPanel onClose={() => setIsPolicyPanelOpen(false)} />
      )}
    </main>
  )
}

export default PurviewHomeIRM
