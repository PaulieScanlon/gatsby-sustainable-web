import { graphql, useStaticQuery } from 'gatsby'

export const useWp = () => {
  const { wp } = useStaticQuery(graphql`
    query {
      wp {
        allSettings {
          generalSettingsTitle
          generalSettingsUrl
          generalSettingsDescription
        }
        seo {
          openGraph {
            defaultImage {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  `)

  return wp
}
