import './Header.css'
import { SearchBox, IconButton } from '@fluentui/react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <IconButton
          iconProps={{ iconName: 'WaffleOffice365' }}
          className="app-launcher"
          ariaLabel="App launcher"
        />
        <div className="header-brand">
          <span className="brand-text">Vaven</span>
        </div>
      </div>
      <div className="header-center">
        <SearchBox
          placeholder="Search"
          className="search-box"
          underlined={false}
        />
      </div>
      <div className="header-right">
        <IconButton
          iconProps={{ iconName: 'Robot' }}
          text="Copilot"
          className="copilot-btn"
          ariaLabel="Copilot"
        />
        <IconButton
          iconProps={{ iconName: 'Ringer' }}
          className="header-icon-btn"
          ariaLabel="Notifications"
        />
        <IconButton
          iconProps={{ iconName: 'Link' }}
          className="header-icon-btn"
          ariaLabel="Link"
        />
        <IconButton
          iconProps={{ iconName: 'Settings' }}
          className="header-icon-btn"
          ariaLabel="Settings"
        />
        <IconButton
          iconProps={{ iconName: 'Help' }}
          className="header-icon-btn"
          ariaLabel="Help"
        />
        <div className="user-avatar">VJ</div>
      </div>
    </header>
  )
}

export default Header
