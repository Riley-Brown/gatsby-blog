import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "./listing.css"
import Img from "gatsby-image"
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
            cover_img
            thumbnail_img
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
            originalName
          }
        }
      }
    }
  }
`

const Listing = () => (
  <div className="posts">
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `web development`,
        `riley.gg`,
        `riley brown web developer`,
      ]}
    />
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark, allImageSharp }) =>
        allMarkdownRemark.edges.map(edge => (
          <article className="post" key={edge.node.frontmatter.slug}>
            <Link to={edge.node.frontmatter.slug}>
              {allImageSharp.edges.map(e =>
                e.node.fluid.originalName ===
                edge.node.frontmatter.cover_img ? (
                  <Img
                    fluid={e.node.fluid}
                    alt="featured image"
                    key={e.node.fluid.originalName}
                  />
                ) : null
              )}
            </Link>
            <Link to={edge.node.frontmatter.slug}>
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <h6>{edge.node.frontmatter.date}</h6>
            <p>{edge.node.excerpt}</p>
            <Link to={edge.node.frontmatter.slug} className="read-more">
              Read More »
            </Link>
          </article>
        ))
      }
    />
  </div>
)

export default Listing
