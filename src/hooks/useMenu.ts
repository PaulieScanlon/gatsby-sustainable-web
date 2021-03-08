import { graphql, useStaticQuery } from 'gatsby'

export const useMenu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    query {
      wpMenu {
        id
        name
        menuItems {
          nodes {
            id
            label
            path
          }
        }
      }
    }
  `)

  return wpMenu
}
