module.exports = {
  siteMetadata: {
    title: `Gongi Gram | Agata Nowakowska-Duk`,
    description: `gongi tybetańskie we Wrocławiu, dźwiękoterapia, kąpiel w dźwiękach, koncert gongów tybetańskich`,
    author: `Tadeusz Dudkowski | http://dygresje.info`,
    siteUrl: `http://gongi-gram.pl/`,
  },
  pathPrefix: "/gatsby-ang",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-2105423-16`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
};
