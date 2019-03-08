import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Archive = () => (
  <StaticQuery
    query={graphql`
      query BlogPostArchive {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          {allMarkdownRemark.edges.map(edge => (
            <li>{edge.node.frontmatter.title}</li>
          ))}
        </aside>
      </>
    )}
  />
)

export default Archive
