import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import "./postLayout.css"
// import Img from "gatsby-image"

export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    console.log(this.props.data)
    return (
      <Layout location={location}>
        <div className="single-post">
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div className="post-info">
            <span>{markdownRemark.frontmatter.author}</span>
            <span>{markdownRemark.frontmatter.date}</span>
          </div>
          <img src={markdownRemark.frontmatter.cover_img} alt="" />
          {/* <Img fluid={this.props.data.file.childImageSharp.fluid} /> */}

          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
        cover_img
        author
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
`
