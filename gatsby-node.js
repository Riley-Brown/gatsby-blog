const path = require("path")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                slug
                cover_img
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve("./src/components/postLayout.js"),
          context: {
            slug: node.frontmatter.slug,
            cover_img: node.frontmatter.cover_img,
          },
        })
      })
      resolve()
    })
  })
}
