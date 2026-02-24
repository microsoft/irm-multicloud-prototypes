# Insider Risk Management Dashboard

A Microsoft Purview-style Insider Risk Management dashboard built with React, TypeScript, and Vite.

## � Setup for First-Time Users

If you received this project as a ZIP file, follow these steps:

### Prerequisites
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)

### Installation Steps

```powershell
# 1. Extract the ZIP file to a folder (e.g., D:\Prototypes)

# 2. Open PowerShell or Command Prompt in the extracted folder

# 3. Install dependencies (only needed once)
npm install

# 4. Start the development server
npm run dev

# 5. Open your browser to http://localhost:5173
```

**That's it!** The application will be running at **http://localhost:5173**

To stop the server, press `Ctrl+C` in the terminal.

---

## 🚀 Quick Start (If Already Set Up)

To run the demo:

```powershell
# 1. Open PowerShell in this directory

# 2. Start the development server
npm run dev

# 3. Open your browser to http://localhost:5173
```

## Features

- 📊 **Analytics Dashboard** - View risk activity statistics and insights
- 🔍 **Interactive Components** - Expandable sections, collapsible sidebar, and detail panels
- 🎨 **Microsoft Fluent Design** - Authentic UI using official Fluent UI React components
- 📱 **Responsive Layout** - Three-panel layout with header, sidebar, and main content
- 🎯 **Mock Data** - Pre-populated with sample insider risk activities including Box, Dropbox, Google Drive, Amazon S3, Power BI, and Microsoft Fabric
- ✨ **Fluent UI Components** - Icons, buttons, navigation, message bars, and more
- 💼 **Pay-as-you-go Badge** - Featured recommendation for non-Microsoft 365 apps

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Top navigation bar
│   │   ├── Sidebar.tsx         # Left navigation sidebar
│   │   ├── MainContent.tsx     # Main analytics view
│   │   └── DetailsPanel.tsx    # Right details panel
│   ├── data/
│   │   └── mockData.ts         # Mock risk activity data
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Components

### Header
Top navigation bar with search functionality and user controls.

### Sidebar
Collapsible navigation panel with menu items and related solutions.

### MainContent
Main analytics view displaying:
- Risk activity statistics
- Expandable sections for different risk types
- Recommendations for policy setup

### DetailsPanel
Right-side panel showing:
- Detailed activity breakdowns
- Expandable sections
- Action buttons

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Fluent UI** - Microsoft's official React component library
- **CSS** - Component styling with Fluent UI theming

## Customization

### Adding New Risk Activities

Edit `src/data/mockData.ts` to add or modify risk activities:

```typescript
export const riskActivities = {
  dataLeak: [
    { percentage: '1.1%', label: 'Your activity description' }
  ]
}
```

### Styling

Each component has its own CSS file for easy customization. Colors follow Microsoft's design system:
- Primary: `#0078d4`
- Accent: `#00bcf2`, `#e3008c`
- Neutral: `#323130`, `#605e5c`, `#f3f2f1`

## Deploying Changes to Microsoft GitHub Repository

This project is hosted at [microsoft/irm-multicloud-prototypes](https://github.com/microsoft/irm-multicloud-prototypes) and published to [https://microsoft.github.io/irm-multicloud-prototypes/](https://microsoft.github.io/irm-multicloud-prototypes/).

### Prerequisites: Elevating Access

Before you can push changes to the Microsoft GitHub repository, you need write access. Follow these steps:

1. **Request elevated access** at:
   👉 https://repos.opensource.microsoft.com/orgs/microsoft/repos/irm-multicloud-prototypes

2. Wait for the access request to be approved.

3. Once approved, add the Microsoft repo as a remote (only needed once):
   ```powershell
   git remote add microsoft https://github.com/Microsoft/irm-multicloud-prototypes.git
   ```

### Pushing Code Changes

After making code changes, commit and push to both remotes:

```powershell
# Commit your changes
git add .
git commit -m "Your commit message"

# Push to your personal repo
git push

# Push to Microsoft repo (requires elevated access)
git push microsoft main
```

### Deploying to GitHub Pages

After pushing, build and deploy to update the live site:

```powershell
npm run build
npx gh-pages -d dist -r https://github.com/microsoft/irm-multicloud-prototypes.git -f
```

The live site will update within 1-2 minutes at [https://microsoft.github.io/irm-multicloud-prototypes/](https://microsoft.github.io/irm-multicloud-prototypes/).

## License

MIT
