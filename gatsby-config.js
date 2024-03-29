module.exports = {
  pathPrefix: "/gatsby-clean-portfolio",
  siteMetadata: {
    title: `David Wachlin - Software Developer`,
    description: `He's pretty cool you should give him a job`,
    url: "https://ugglr.github.io/gatsby-clean-portfolio/",
    twitterUsername: "@real_carlw",
    author: `@real_carlw`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1",
        version: "1.0",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //Replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
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
        name: `gatsby-clean-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#154FFF`,
        theme_color: `#154FFF`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
