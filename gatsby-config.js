module.exports = {
  siteMetadata: {
    title: `Victor Fuentes Frontend Engineer`,
    description: `Victor Fuentes is a web developer born and bred in Chicago.`,
    author: `MrFuentastic`,
    siteUrl: `https://www.mrfuentastic.com`,
    keywords: `Victor Fuentes, MrFuentastic, web developer, full stack developer, frontend engineer, ux engineer, software engineer, chicago web developer, chicago full stack developer, chicago software engineer, chicago frontend engineer, chicago ux engineer,`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
