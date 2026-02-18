# Insider Risk Management - Pay-as-You-Go Awareness Product Specification

## Document Information
- **Version:** 1.0
- **Date:** February 9, 2026
- **Status:** Draft
- **Product:** Microsoft Purview - Insider Risk Management

---

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [PAYG Usage Report](#payg-usage-report)
3. [Purview Home - Recommendations](#purview-home-recommendations)
4. [Policy Health Recommendations](#policy-health-recommendations)
5. [Policy Details Panel](#policy-details-panel)
6. [Navigation & Information Architecture](#navigation--information-architecture)
7. [Technical Requirements](#technical-requirements)

---

## Executive Summary

### Overview
This specification outlines the design and requirements for new Pay-as-You-Go (PAYG) awareness features in Microsoft Purview Insider Risk Management. The features aim to drive adoption of PAYG capabilities by surfacing insights, recommendations, and policy management tools across the user experience.

### Goals
1. **Increase PAYG Awareness**: Educate users about non-M365 monitoring capabilities
2. **Drive PAYG Adoption**: Provide clear paths to set up Azure subscriptions
3. **Simplify Policy Management**: Enable one-click indicator additions for PAYG subscribers
4. **Surface Usage Insights**: Show activity percentages for non-M365 data sources

### Target Users
- Compliance Administrators
- Security Administrators
- Insider Risk Management Analysts
- IT Decision Makers

---

## PAYG Usage Report

### Overview
A dedicated reporting page that highlights non-Microsoft 365 activity percentages and drives users to enable PAYG billing for comprehensive monitoring.

**Screenshot:** `[Insert PAYG Usage Report page screenshot]`

### Key Features

#### 1. 24% Insight Message
**Visual:** Colorful analytics illustration with prominent percentage

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PAYG-001 | Display percentage of users with non-M365 activities | P0 | ✅ Implemented |
| PAYG-002 | Highlight percentage with yellow background | P1 | ✅ Implemented |
| PAYG-003 | Include "View details" link to open side panel | P1 | ✅ Implemented |
| PAYG-004 | Use custom analytics SVG illustration (128x128) | P2 | ✅ Implemented |

**Content:**
```
Do you know that 24% of your users were active on 
non-Microsoft 365 apps?
```

#### 2. Analytics Visualization
**Purpose:** Visual representation of data analytics and monitoring

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PAYG-005 | Display colorful SVG with charts and data points | P2 | ✅ Implemented |
| PAYG-006 | Size: 128x128 pixels | P2 | ✅ Implemented |
| PAYG-007 | Include bar charts, line charts, and pie chart elements | P2 | ✅ Implemented |

#### 3. Insights Side Panel
**Trigger:** Click "View details" link

**Screenshot:** `[Insert PAYG Insights Panel screenshot]`

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PAYG-010 | Show breakdown of 13 non-M365 activities | P0 | ✅ Implemented |
| PAYG-011 | Display percentages for each activity (14%-22% range) | P1 | ✅ Implemented |
| PAYG-012 | Include activities: Box, Dropbox, Google Drive, GitHub, OneDrive Personal, Slack, Teams Personal, Zoom, Webex, SharePoint Personal, Gmail, Outlook.com, Yahoo Mail | P1 | ✅ Implemented |
| PAYG-013 | Show informational message about PAYG requirement | P1 | ✅ Implemented |

**Activity Data:**
- Box: 22%
- Dropbox: 21%
- Google Drive: 20%
- GitHub: 19%
- OneDrive Personal: 18%
- Slack: 17%
- Teams Personal: 16%
- Zoom: 16%
- Webex: 15%
- SharePoint Personal: 15%
- Gmail: 15%
- Outlook.com: 14%
- Yahoo Mail: 14%

#### 4. Recommendation Cards
**Layout:** 2-column grid

**Screenshot:** `[Insert recommendation cards screenshot]`

**Card 1: Get Started with PAYG**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PAYG-020 | Title: "Get started" | P0 | ✅ Implemented |
| PAYG-021 | Description about enabling PAYG billing | P1 | ✅ Implemented |
| PAYG-022 | "Get started" primary button | P0 | ✅ Implemented |
| PAYG-023 | White background with border | P2 | ✅ Implemented |

**Card 2: Create Data Leaks Policy**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PAYG-024 | Title: "Create data leaks policy" | P0 | ✅ Implemented |
| PAYG-025 | Description about monitoring non-M365 apps | P1 | ✅ Implemented |
| PAYG-026 | "Create policy" primary button | P0 | ✅ Implemented |
| PAYG-027 | Opens policy creation panel on click | P0 | ✅ Implemented |

---

## Purview Home - Recommendations

### Overview
A landing page featuring trial and recommendation cards that guide users toward key compliance features and PAYG capabilities.

**Screenshot:** `[Insert Purview Home page screenshot]`

### Key Features

#### Trials and Recommendations Section

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| HOME-001 | Display 4 recommendation cards in grid layout | P0 | ✅ Implemented |
| HOME-002 | Use Microsoft CDN SVG images (176px height) | P1 | ✅ Implemented |
| HOME-003 | Include divider line after header | P2 | ✅ Implemented |
| HOME-004 | White background cards with subtle shadow | P2 | ✅ Implemented |

#### Card Specifications

**Card 1: Start Purview trial**
- **Image:** RecoPurviewOnboarding.svg from Microsoft CDN
- **Header:** "Start Purview trial"
- **Description:** Information about Microsoft Purview trial

**Card 2: Increase detection precision**
- **Image:** RecoShieldProgress.svg from Microsoft CDN
- **Header:** "Increase detection precision"
- **Description:** Information about detection improvements

**Card 3: Investigation needed**
- **Image:** RecoDocumentExclamation.svg from Microsoft CDN
- **Header:** "Investigation needed"
- **Description:** Alert investigation guidance

**Card 4: Create data leaks policy**
- **Image:** Custom analytics SVG
- **Header:** "Create data leaks policy for non-Microsoft 365 apps"
- **Action:** "Create data leaks policy" button
- **Behavior:** Opens policy creation panel

**Styling Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| HOME-010 | Card preview: 176px min-height | P1 | ✅ Implemented |
| HOME-011 | Card header: 18px/600 weight, bottom border (24px offset) | P1 | ✅ Implemented |
| HOME-012 | Card content: 14px text, 16px line-height | P2 | ✅ Implemented |
| HOME-013 | Card footer: Top border for action buttons | P2 | ✅ Implemented |

---

## Policy Health Recommendations

### Overview
A comprehensive policy management interface showing policy health status, warnings, recommendations, and enabling quick actions for policy enhancement.

**Screenshot:** `[Insert Policy Health Recommendations page screenshot]`

### Key Features

#### 1. Policy Statistics Cards
**Layout:** Single card with 3 metrics separated by vertical dividers

**Screenshot:** `[Insert stat cards screenshot]`

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| HEALTH-001 | Display 3 metrics in single card with dividers | P0 | ✅ Implemented |
| HEALTH-002 | Metric 1: Policy warnings (red left border) | P0 | ✅ Implemented |
| HEALTH-003 | Metric 2: Policy recommendations (blue left border) | P0 | ✅ Implemented |
| HEALTH-004 | Metric 3: Healthy policies (green left border) | P0 | ✅ Implemented |
| HEALTH-005 | Fixed card height: 60px | P2 | ✅ Implemented |
| HEALTH-006 | Value font: 24px/600 weight | P2 | ✅ Implemented |
| HEALTH-007 | Label font: 12px | P2 | ✅ Implemented |

**Metric Values:**
- Policy warnings: 9
- Policy recommendations: 1
- Healthy policies: 2

#### 2. Policy Tabs
**Options:** User Policies / Agent Policies

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| HEALTH-010 | Two tabs: User Policies, Agent Policies | P1 | ✅ Implemented |
| HEALTH-011 | Active tab: Blue underline (#0078d4) | P2 | ✅ Implemented |
| HEALTH-012 | Include icons for each tab | P2 | ✅ Implemented |

#### 3. Toolbar Actions

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| HEALTH-020 | Create policy button (Primary) | P0 | ✅ Implemented |
| HEALTH-021 | Start scoping activity button (Default) | P1 | ✅ Implemented |
| HEALTH-022 | Refresh button (Icon only) | P2 | ✅ Implemented |
| HEALTH-023 | Search box (right-aligned) | P1 | ✅ Implemented |
| HEALTH-024 | Items count display | P2 | ✅ Implemented |

#### 4. Policy Table

**Screenshot:** `[Insert policy table screenshot]`

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| HEALTH-030 | Display 10 policies in table | P0 | ✅ Implemented |
| HEALTH-031 | Columns: Checkbox, Policy name, Status, Users in scope, Active alerts, Confirmed alerts, Actions taken, Effectiveness | P0 | ✅ Implemented |
| HEALTH-032 | Sortable column headers with icons | P1 | ✅ Implemented |
| HEALTH-033 | Row hover state | P2 | ✅ Implemented |
| HEALTH-034 | Checkboxes for multi-select | P1 | ✅ Implemented |

**Status Badge Specifications:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| HEALTH-040 | Display colored dot before status text | P1 | ✅ Implemented |
| HEALTH-041 | Red dot for warnings (#d13438) | P1 | ✅ Implemented |
| HEALTH-042 | Green dot for healthy (#107c10) | P1 | ✅ Implemented |
| HEALTH-043 | Black text for all statuses (#323130) | P1 | ✅ Implemented |
| HEALTH-044 | Format: "X warning, Y recommendation" with comma | P1 | ✅ Implemented |

**Policy Data:**

| Policy Name | Status | Users in Scope | Active Alerts | Effectiveness |
|---|---|---|---|---|
| Data Leaks - NonPAYG tenant | 1 warning, 1 recommendation | 6 | 14 | 0% |
| Data Leaks - PAYG tenant | 1 warning, 1 recommendation | 6 | 14 | 0% |
| DataLeakPolicy | 1 warning | 0 | 1 | 0% |
| DoNotDelete - EmailFromSelf | 1 warning, 1 recommendation | 0 | 0 | 0% |
| Email exfiltration policy | 1 warning | 0 | 0 | 0% |
| UI test 2 | 1 warning | 0 | 1 | 0% |
| Non-Microsoft 365 data theft (quick policy) | Healthy | 0 | 0 | 0% |
| Scope testing | 2 warnings | 0 | 0 | 0% |
| SensitivityLabelUpdated-Kamika | Healthy | 0 | 1 | 0% |
| Test LH 234 | 1 warning | 0 | 1 | 0% |

---

## Policy Details Panel

### Overview
A side panel that opens when clicking on policy names, showing health status, troubleshooting tips, and contextual recommendations based on PAYG subscription status.

**Screenshot:** `[Insert Policy Details Panel screenshot]`

### Key Features

#### 1. Policy Metadata

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PANEL-001 | Display Created by, Created on, Last alert, Last edited on, Last edited by | P0 | ✅ Implemented |
| PANEL-002 | Format dates consistently | P2 | ✅ Implemented |
| PANEL-003 | Bottom border separator | P2 | ✅ Implemented |

**Sample Data:**
- Created by: Admin
- Created on: 3/10/2023
- Last alert: No alerts yet
- Last edited on: 5/26/2023 4:47 AM
- Last edited by: Admin

#### 2. Panel Tabs

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PANEL-010 | Two tabs: Policy health, Policy settings | P0 | ✅ Implemented |
| PANEL-011 | Active tab: Blue underline | P2 | ✅ Implemented |

#### 3. Policy Health Status

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PANEL-020 | Heading: "This policy hasn't generated any alerts recently" | P1 | ✅ Implemented |
| PANEL-021 | Green checkmark: "Triggering event is configured correctly" | P1 | ✅ Implemented |
| PANEL-022 | Orange warning: "Triggering event hasn't occurred for any users" | P1 | ✅ Implemented |

#### 4. Troubleshooting Tips

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PANEL-030 | Section heading: "Troubleshooting tips" | P1 | ✅ Implemented |
| PANEL-031 | Bulleted list with 4 tips | P1 | ✅ Implemented |

**Tips:**
1. Address any action items below
2. Add indicators to detect more user activities
3. Lower indicator thresholds so users don't have to perform as many activities per day
4. Increase the number of users included in the policy

#### 5. Recommendations (Non-PAYG Tenant)

**Screenshot:** `[Insert non-PAYG recommendation screenshot]`

**For tenants WITHOUT PAYG subscription:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PANEL-040 | Lightning bolt icon with heading | P1 | ✅ Implemented |
| PANEL-041 | Heading: "Extend the policy to non-Microsoft 365 data sources" | P0 | ✅ Implemented |
| PANEL-042 | Description about detecting risky activities | P1 | ✅ Implemented |
| PANEL-043 | Recommendation text listing data sources inline | P1 | ✅ Implemented |
| PANEL-044 | Data sources: Cloud storage (Box, Dropbox, Google Drive), Cloud services (Azure, AWS), Microsoft Fabric (Power BI, Lakehouse) | P0 | ✅ Implemented |
| PANEL-045 | "Get started" primary button | P0 | ✅ Implemented |
| PANEL-046 | Gray background card (#f3f2f1) | P2 | ✅ Implemented |

**Content:**
```
Extend the policy to non-Microsoft 365 data sources

Your policies can detect risky activities across cloud storage, 
cloud services, and Microsoft Fabric data sources.

Recommendation: Set up an Azure subscription to enable monitoring 
for Cloud storage (Box, Dropbox, Google Drive), Cloud services 
(Azure, AWS), and Microsoft Fabric (Power BI, Lakehouse).

[Get started]
```

#### 6. Recommendations (PAYG Tenant)

**Screenshot:** `[Insert PAYG recommendation screenshot]`

**For tenants WITH PAYG subscription:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PANEL-050 | Lightning bolt icon with heading | P1 | ✅ Implemented |
| PANEL-051 | Heading: "Extend the policy to non-Microsoft 365 data sources" | P0 | ✅ Implemented |
| PANEL-052 | "Pay-as-you-go" badge (blue, with rocket icon) | P1 | ✅ Implemented |
| PANEL-053 | Description about extending coverage | P1 | ✅ Implemented |
| PANEL-054 | Recommendation about adding indicators with default thresholds | P1 | ✅ Implemented |
| PANEL-055 | "Add indicators now" primary button | P0 | ✅ Implemented |
| PANEL-056 | One-click indicator addition | P0 | ✅ Implemented |

**Content:**
```
Extend the policy to non-Microsoft 365 data sources [Pay-as-you-go badge]

Extend your policy coverage to detect risky activities across 
cloud storage, cloud services, and Microsoft Fabric data sources.

Recommendation: Add indicators for Cloud storage (Box, Dropbox, 
Google Drive), Cloud services (Azure, AWS), and Microsoft Fabric 
(Power BI, Lakehouse) with default thresholds by clicking the 
button below.

[Add indicators now]
```

#### 7. Panel Footer Actions

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| PANEL-060 | "Edit policy" primary button | P0 | ✅ Implemented |
| PANEL-061 | "Close" default button | P0 | ✅ Implemented |
| PANEL-062 | Top border separator | P2 | ✅ Implemented |

---

## Navigation & Information Architecture

### Sidebar Navigation

**Screenshot:** `[Insert sidebar screenshot]`

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| NAV-001 | Header: "IRM PAYG Awareness" | P0 | ✅ Implemented |
| NAV-002 | 8 navigation items total | P0 | ✅ Implemented |
| NAV-003 | Fluent UI icons for each item | P1 | ✅ Implemented |
| NAV-004 | Construction badges for placeholder pages | P2 | ✅ Implemented |
| NAV-005 | Active page highlighting | P1 | ✅ Implemented |

**Navigation Structure:**

1. **Insider Risk Management Analytics** (BarChartVertical icon)
2. **Fabric Governance Hub** (FabricDataConnectionLibrary icon)
3. **PAYG Usage Report** (ReportDocument icon)
4. **Purview Home - Recommendations** (Home icon)
5. **Policy Health Recommendations** (Health icon)
6. **Exfil Objective in DSPM** (Shield icon) 🚧
7. **User Analytics in DSPM** (People icon) 🚧
8. **Defender** (DefenderTVM icon) 🚧

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| NAV-010 | Move Policy Health after Purview Home | P1 | ✅ Implemented |
| NAV-011 | Remove construction badge from Policy Health | P1 | ✅ Implemented |
| NAV-012 | Maintain construction badges on placeholder pages | P2 | ✅ Implemented |

---

## Technical Requirements

### UI Framework

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| TECH-001 | React 18.2.0 with TypeScript | P0 | ✅ Implemented |
| TECH-002 | Fluent UI React components | P0 | ✅ Implemented |
| TECH-003 | Fluent UI Fabric Core CSS for icons | P1 | ✅ Implemented |
| TECH-004 | Vite 5.0.8 build tool | P1 | ✅ Implemented |

### Component Architecture

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| TECH-010 | Functional components with hooks | P0 | ✅ Implemented |
| TECH-011 | useState for state management | P0 | ✅ Implemented |
| TECH-012 | Props-based component communication | P0 | ✅ Implemented |
| TECH-013 | CSS modules for styling | P1 | ✅ Implemented |

### Color Palette

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| TECH-020 | Primary blue: #0078d4 | P0 | ✅ Implemented |
| TECH-021 | Teal (Fabric theme): #038387 | P1 | ✅ Implemented |
| TECH-022 | Warning red: #d13438 | P1 | ✅ Implemented |
| TECH-023 | Healthy green: #107c10 | P1 | ✅ Implemented |
| TECH-024 | Background gray: #faf9f8 | P2 | ✅ Implemented |
| TECH-025 | Border gray: #e1dfdd | P2 | ✅ Implemented |

### External Resources

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| TECH-030 | Microsoft CDN for official SVG images | P1 | ✅ Implemented |
| TECH-031 | Fluent UI Fabric Core CSS (11.0.0) | P1 | ✅ Implemented |
| TECH-032 | Custom SVG illustrations for analytics | P2 | ✅ Implemented |

### Accessibility

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| ACC-001 | ARIA labels for icon buttons | P0 | ✅ Implemented |
| ACC-002 | Semantic HTML structure | P0 | ✅ Implemented |
| ACC-003 | Keyboard navigation support | P1 | ✅ Implemented |
| ACC-004 | Sufficient color contrast ratios | P1 | ✅ Implemented |

### Responsiveness

**Requirements:**

| Requirement ID | Description | Priority | Status |
|---|---|---|---|
| RESP-001 | Support for standard desktop resolutions | P0 | ✅ Implemented |
| RESP-002 | Grid layouts for card arrangements | P1 | ✅ Implemented |
| RESP-003 | Flexible panel widths (Medium) | P1 | ✅ Implemented |

---

## User Flows

### Flow 1: Non-PAYG User Discovers PAYG Capabilities

1. User navigates to **PAYG Usage Report**
2. Sees 24% insight message with analytics visualization
3. Clicks "View details" to see breakdown of non-M365 activities
4. Clicks "Get started" in recommendation card
5. Guided to Azure subscription setup

**Success Metrics:**
- Click-through rate on "View details"
- Click-through rate on "Get started"
- Azure subscription setup completion rate

### Flow 2: PAYG User Adds Indicators to Policy

1. User navigates to **Policy Health Recommendations**
2. Views policies with "1 warning, 1 recommendation" status
3. Clicks on "Data Leaks - PAYG tenant" policy name
4. Side panel opens showing policy health
5. Sees "Extend the policy to non-Microsoft 365 data sources" recommendation with Pay-as-you-go badge
6. Clicks "Add indicators now" button
7. Indicators added to policy with default thresholds

**Success Metrics:**
- Panel open rate
- Click-through rate on "Add indicators now"
- Indicator addition success rate

### Flow 3: Discover PAYG Recommendations from Purview Home

1. User navigates to **Purview Home - Recommendations**
2. Views 4 recommendation cards
3. Clicks "Create data leaks policy" card
4. Policy creation panel opens
5. User creates policy for non-M365 apps

**Success Metrics:**
- Card click-through rate
- Policy creation completion rate

---

## Appendix

### Screenshot Checklist

- [ ] PAYG Usage Report - Full page view
- [ ] PAYG Usage Report - 24% insight detail
- [ ] PAYG Insights Panel - Side panel with activity breakdown
- [ ] PAYG Usage Report - Recommendation cards
- [ ] Purview Home - Full page with 4 cards
- [ ] Purview Home - Individual card close-ups
- [ ] Policy Health Recommendations - Full page view
- [ ] Policy Health Recommendations - Stat cards detail
- [ ] Policy Health Recommendations - Policy table
- [ ] Policy Details Panel - Non-PAYG tenant view
- [ ] Policy Details Panel - PAYG tenant view
- [ ] Policy Details Panel - Pay-as-you-go badge detail
- [ ] Sidebar Navigation - Full sidebar view
- [ ] Sidebar Navigation - Active page state

### Known Limitations

1. Mock data used for all percentages and policy information
2. No backend integration for actual Azure subscription setup
3. One-click indicator addition is simulated (no actual policy modification)
4. Construction badges indicate placeholder pages with no implementation

### Future Enhancements

1. **Real-time Usage Analytics**: Connect to actual usage data for dynamic percentages
2. **Azure Subscription Integration**: Complete flow for Azure subscription linking
3. **Policy Templates**: Pre-configured policy templates for common scenarios
4. **Cost Estimation**: Show estimated costs before enabling PAYG indicators
5. **Multi-tenant Support**: Compare usage across multiple tenants
6. **Historical Trends**: Show usage trends over time
7. **Customizable Dashboards**: Allow users to customize their view
8. **Notification System**: Alert users about new recommendations

---

## Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | Feb 9, 2026 | PM Team | Initial specification created |

