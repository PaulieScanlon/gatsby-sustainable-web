import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { useMenu } from '../../hooks/useMenu'
import { isExternalLink } from '../../utils'

export interface IMenuItem {
  id: string
  label: string
  path: string
}

export const Navigation: FunctionComponent = () => {
  const {
    name,
    menuItems: { nodes },
  } = useMenu()

  return (
    <nav id="site-navigation" className="main-navigation">
      <h1>{name}</h1>
      <div className="menu-main-navigation-container">
        <ul id="primary-menu" className="menu">
          {nodes.map((item: IMenuItem) => {
            const { id, label, path } = item

            if (isExternalLink(path)) {
              return (
                <li key={id}>
                  <a href={path} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              )
            }

            return (
              <li key={id}>
                <Link to={path}>{label}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
