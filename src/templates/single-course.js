import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from "gatsby-image"

const CoursePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <p>{post.frontmatter.title}</p>
       <p> {post.html}  </p>
       <Img fluid={post.frontmatter.image.childImageSharp.fluid}  />
      />
    </Layout>
  )
}

CoursePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CoursePage

export const CoursePageQuery = graphql`
  query CoursePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
