import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <p>{post.frontmatter.title}</p>
       <p> {post.html}  </p>
      />
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPage

export const BlogPageQuery = graphql`
  query BlogPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
