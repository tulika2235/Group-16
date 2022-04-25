<<<<<<< HEAD
module.exports = {
  siteMetadata: {
    title: `SheCab`,
    description: `A service for women by women`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `Images`,
          path: `${__dirname}/src/assets/Images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
        name: `Videos`,
        path: `${__dirname}/src/assets/videos`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
      `gatsby-transformer-json`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `./src/data/`,
        },
      },
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          // Defaults used for gatsbyImageData and StaticImage
          defaults: {},
          // Set to false to allow builds to continue on image errors
          failOnError: true,
          // deprecated options and their defaults:
          base64Width: 20,
          forceBase64Format: `jpg`, 
          useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
          stripMetadata: true,
          defaultQuality: 50,
        },
      },
  ],
}
=======
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [],
}
>>>>>>> parent of e92e248 (Update in pages)
