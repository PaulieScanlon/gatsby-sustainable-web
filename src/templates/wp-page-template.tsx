import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { Fragment, FunctionComponent } from 'react'
import { Seo } from '../components/seo'

interface IPageTemplate {
  data: any
}

const WpPageTemplate: FunctionComponent<IPageTemplate> = ({ data: { page } }) => {
  const { id, featuredImage, title, content, seo } = page

  const {
    node: { altText, localFile },
  } = featuredImage || { node: { altText: '', localFile: null } }

  return (
    <Fragment>
      <Seo seo={seo} />
      <h1>{title}</h1>
      {localFile ? <GatsbyImage alt={altText} image={getImage(localFile)} /> : null}
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
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 50
                layout: FULL_WIDTH
                width: 550
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
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
