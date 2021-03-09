import React, { Fragment, FunctionComponent } from 'react'
import { useWp } from '../../hooks/useWp'

export const Logo: FunctionComponent = () => {
  const {
    allSettings: { generalSettingsTitle },
  } = useWp()

  return (
    <Fragment>
      <img alt={`${generalSettingsTitle} logo`} src="images/eco-chat.svg" />
      <span className="screen-reader-text">{generalSettingsTitle}</span>
    </Fragment>
  )
}
