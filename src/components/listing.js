import React from "react"
import { Link, StaticQuery, qraphql } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import "./listing.css"

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
            img
          }
        }
      }
    }
  }
`

const Listing = () => (
  <div className="posts">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(edge => (
          <article key={edge.node.frontmatter.slug}>
            {edge.node.frontmatter.img ? (
              <img src={edge.node.frontmatter.img} alt="" />
            ) : null}
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
