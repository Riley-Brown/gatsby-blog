import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import "./postLayout.css"

export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          className="post"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
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
        date
        slug
        img
      }
    }
  }
`
