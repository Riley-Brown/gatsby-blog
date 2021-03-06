import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import Header from "./header"
import "./layout.css"
// import Archive from "./archive"
import Navbar from "./Navbar"

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        # file(relativePath: { regex: "/fullscreen/" }) {
        #   childImageSharp {
        #     fluid(maxWidth: 1000) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Navbar />
        {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1140,
            width: "90%",
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
