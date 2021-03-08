import React, { FunctionComponent } from 'react'
import { useMenu } from '../../hooks/useMenu'
import { useWp } from '../../hooks/useWp'

interface IHeaderProps {
  isMenuOpen: boolean

  onClick: () => void
}

export const Header: FunctionComponent<IHeaderProps> = ({ isMenuOpen, onClick }) => {
  const {
    allSettings: { generalSettingsTitle, generalSettingsUrl },
  } = useWp()

  const { name } = useMenu()

  return (
    <header id="masthead">
      <div className="logo">
        <a href="/" rel="home">
          <img
            alt={`${generalSettingsTitle} logo`}
            src={`${generalSettingsUrl}/wp-content/themes/susty-master/images/eco-chat.svg`}
          />
          <span className="screen-reader-text">{generalSettingsTitle}</span>
        </a>
      </div>
      <p>
        <a href="/" rel="home">
          {generalSettingsTitle}
        </a>
      </p>

      {isMenuOpen ? (
        <a id="susty-back-link" rel="home" href="" onClick={onClick}>
          ✖<span className="screen-reader-text">Close menu</span>
        </a>
      ) : (
        <a href="" onClick={onClick}>
          {name}
        </a>
      )}
    </header>
  )
}