import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  return site
}
