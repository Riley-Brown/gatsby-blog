import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

export default class PostLayout extends Component {
  render() {
    return (
      <Layout>
        <h1>Post Layout</h1>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: { slug: { eq: "/second-post" } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
