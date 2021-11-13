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
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
    ],
};