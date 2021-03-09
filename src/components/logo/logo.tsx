import React, { Fragment, FunctionComponent } from 'react'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { useWp } from '../../hooks/useWp'

export const Logo: FunctionComponent = () => {
  const {
    allSettings: { generalSettingsTitle },
  } = useWp()

  const {
    siteMetadata: { siteUrl },
  } = useSiteMetadata()

  return (
    <Fragment>
      <img alt={`${generalSettingsTitle} logo`} src={`${siteUrl}/images/eco-chat.svg`} />
      <span className="screen-reader-text">{generalSettingsTitle}</span>
    </Fragment>
  )
}
