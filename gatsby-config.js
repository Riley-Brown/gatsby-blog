module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/categories",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      },
    },
    "gatsby-transformer-remark",
    "gatsby-remark-copy-linked-files",
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
  ],
}
