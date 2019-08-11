module.exports = {
  pathPrefix: `/img`,
  siteMetadata: {
    title: `Riley.gg Web Dev Blog`,
    description: `A Web Development blog made with the Gatsby static site generator.`,
    author: `Riley Brown`,
    url: `https://www.blog.riley.gg`,
    image: `https://i.imgur.com/5uEfXe7.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Riley.gg Blog`,
        short_name: `Riley.gg Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/code.png`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              quality: 75,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              showLineNumbers: true,
            },
          },
        ],
      },
    },
  ],
}
