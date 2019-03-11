import React from "react"
import { Link, StaticQuery, qraphql } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Listing = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(edge => (
          <article key={edge.node.frontmatter.slug}>
            <h2>{edge.node.frontmatter.title}</h2>
            <h6>{edge.node.frontmatter.date}</h6>
            <p>{edge.node.excerpt}</p>
            <Link to={edge.node.frontmatter.slug}>Read More</Link>
          </article>
        ))
      }
    />
  </div>
)

export default Listing