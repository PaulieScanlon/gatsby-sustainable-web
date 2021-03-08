import { graphql } from 'gatsby'
import React, { Fragment, FunctionComponent } from 'react'
import { Seo } from '../components/seo'

interface IPageTemplate {
  data: any
}

const WpPageTemplate: FunctionComponent<IPageTemplate> = ({ data: { page } }) => {
  const { id, title, content, seo } = page

  return (
    <Fragment>
      <Seo seo={seo} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div style={{ display: 'none' }}>{`page id: ${id}`}</div>
    </Fragment>
  )
}

// {
//   wpPage(id: {eq: "cG9zdDoxNA=="}) {
//     title
//   }
// }

export const query = graphql`
  query SinglePage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      id
      title
      content
      seo {
        opengraphSiteName
        opengraphUrl
        opengraphType
        opengraphTitle
        opengraphDescription
        opengraphPublisher
        canonical
      }
    }
  }
`

export default WpPageTemplate
