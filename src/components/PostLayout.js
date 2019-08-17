import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import "./postLayout.css"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default class PostLayout extends Component {
  render() {
    console.log(this.props)
    const { markdownRemark } = this.props.data
    const { location } = this.props

    return (
      <Layout location={location}>
        <SEO
          title={markdownRemark.frontmatter.title}
          image={this.props.data.file.childImageSharp.fluid.src}
          description={markdownRemark.excerpt}
        />
        <div className="single-post">
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div className="post-info">
            <span>By {markdownRemark.frontmatter.author}</span>
            <span>{markdownRemark.frontmatter.date}</span>
          </div>
          <Img fluid={this.props.data.file.childImageSharp.fluid} />
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($cover_img: String!) {
    markdownRemark(frontmatter: { cover_img: { eq: $cover_img } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
        cover_img
        author
      }
    }
    file(relativePath: { eq: $cover_img }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
