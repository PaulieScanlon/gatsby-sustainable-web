const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const {
    data: {
      allWpPage: { edges: pages },
    },
  } = await graphql(`
    query AllPages {
      allWpPage {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `)

  await Promise.all(
    pages.map(async (edge, index) => {
      const { id, uri } = edge.node
      await actions.createPage({
        component: resolve('./src/templates/wp-page-template.tsx'),
        path: uri,
        context: {
          id: id,
        },
      })
    }),
  )
}
