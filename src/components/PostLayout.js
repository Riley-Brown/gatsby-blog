import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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
      }
    }
  }
`
