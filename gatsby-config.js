module.exports = {
  siteMetadata: {
    title: `Agata Nowakowska`,
    description: `gongi`,
    author: `@tdudkowski`,
    siteUrl: `https://gatsby-ang.netlify.app`,
  },
  pathPrefix: "/gatsby-ang",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
