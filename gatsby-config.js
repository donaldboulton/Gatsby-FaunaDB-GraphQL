require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby, FaunaDB and GraphQL app`,
    description: `Kick off your next, great Gatsby project with Fauna Database and GraphQL`,
    author: `https://turanszky.com/`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "FAUNADB",
        fieldName: "FaunaDB",
        url: process.env.GRAPHQL_ENDPOINT,
        headers: {
          Authorization: `Bearer ${process.env.DEVELOPER_FAUNADB_SERVER_SECRET}`,
        },
      },
    },
  ],
}
