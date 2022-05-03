require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Flying Embers`,
    description: `Flying Embers - online store organic alcohol drinks ✅ Organic kombucha drinks ✅ Alcoholic Kombucha ✅ buy to kombucha alcohol in Flying Embers ✅ Born in Ojai - Brewed in Ventura, CA ★ Best light alcohol drinks`,
    siteUrl: `https://www.flyingembers.io`,
    author: `lenharta`,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.GATSBY_SHOPIFY_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
  ],
}
