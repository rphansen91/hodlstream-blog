require("dotenv").config({
  path: `.env.server.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Hodl Stream`,
    description: `Flow with the markets. Build your portfolio today.`,
    author: `@rphansen91`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-material-ui',
    'gatsby-plugin-svg-sprite',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111446637-1",
      }
    },
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
        background_color: `#005c97`,
        theme_color: `#005c97`,
        display: `minimal-ui`,
        icon: `src/images/icon_1024.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "BlockQl",
        // This is field under which it's accessible
        fieldName: "blockQl",
        // Url to query from
        url: "https://laqr73ujn2.execute-api.us-east-1.amazonaws.com/dev/graphql",
      },
    },
    {
      resolve: 'gatsby-plugin-static-folders',
      options: {
        folders: [
          './src/images',
        ]
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'hodlstream.com',
          protocol: 'https',
          hostname: 'www.hodlstream.com',
      },
    },
 
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
