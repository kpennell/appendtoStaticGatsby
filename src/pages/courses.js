import React from "react"
import { Link,  StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



class CoursesPage extends React.Component {

  render() {
    const { data } = this.props

    //console.log(data.allMarkdownRemark.edges)


    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div>
      <Layout>
      <SEO title="Courses Page" />
      <h1>Courses Page</h1>

      {posts && (posts
          .map(({ node: post }) => (
            <div
              key={post.id}
            >
              <p>
                <Link to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>

                <span >{post.frontmatter.date}</span>
              </p>
              <p>
                {post.excerpt}
              </p>

              

       
        
   
            </div>
          )))}
          </Layout>
          </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query CoursesPageQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "single-course" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 40)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              
              
            }
          }
        }
      }
    }
    `}
    render={(data) => (
      <CoursesPage data={data} />
    )}
  />
)