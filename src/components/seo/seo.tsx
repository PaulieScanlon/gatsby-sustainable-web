import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { useWp } from '../../hooks/useWp'

interface ISeoProps {
  seo: {
    opengraphTitle: string
    opengraphDescription: string
    opengraphType: string
    opengraphUrl: string
    canonical: string
  }
}

export const Seo: FunctionComponent<ISeoProps> = ({
  seo: { opengraphTitle, opengraphDescription, opengraphType, opengraphUrl, canonical },
}) => {
  const {
    allSettings: { generalSettingsUrl, generalSettingsLanguage },
    seo: {
      openGraph: { defaultImage },
    },
  } = useWp()

  const {
    siteMetadata: { siteUrl },
  } = useSiteMetadata()

  return (
    <Helmet>
      <html lang={generalSettingsLanguage} />
      <title>{opengraphTitle}</title>
      <link rel="canonical" href={`${generalSettingsUrl}${canonical}`} />
      <meta name="description" content={opengraphDescription} />
      <meta name="image" content={defaultImage.mediaItemUrl} />
      <meta name="image:alt" content={defaultImage.alt} />
      {/* <meta name="keywords" content={keywords ? keywords.join(', ') : null} /> */}

      {/* Facebook */}
      <meta property="og:type" content={opengraphType} />
      <meta property="og:title" content={opengraphTitle} />
      <meta property="og:url" content={`${generalSettingsUrl}${opengraphUrl}`} />
      <meta property="og:description" content={opengraphDescription} />
      <meta property="og:image" content={defaultImage.mediaItemUrl} />
      <meta property="og:image:alt" content={defaultImage.alt} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={opengraphTitle} />
      <meta name="twitter:url" content={`${generalSettingsUrl}${opengraphUrl}`} />
      <meta name="twitter:description" content={opengraphDescription} />
      <meta name="twitter:image" content={defaultImage.mediaItemUrl} />
      <meta name="twitter:image:alt" content={defaultImage.alt} />

      {/* favicon */}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${siteUrl}/images/favicon-16x16.png`}
        data-react-helmet="true"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${siteUrl}/images/favicon-32x32.png`}
        data-react-helmet="true"
      />
    </Helmet>
  )
}
