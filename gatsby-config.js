require("dotenv").config({
    // path: `.env.${process.env.GA_ID}`,
    path: `.env`, // or '.env'
})

module.exports = {
    siteMetadata: {
        title: `Gongi Gram | Agata Nowakowska-Duk`,
        description: `gongi tybetańskie we Wrocławiu, dźwiękoterapia, kąpiel w dźwiękach, koncert gongów tybetańskich`,
        author: `Tadeusz Dudkowski | http://dygresje.info`,
        siteUrl: `http://gongi-gram.pl/`,
    },
    pathPrefix: "/gatsby-ang",
    plugins: [
        "dotenv",
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                // options: {
                //     trackingId: process.env.GA_ID,
                //     head: true,
                //     anonymize: true,
                // },
                trackingIds: [
                    process.env.GA_ID,  // Google Analytics / GA
                    // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    // optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
            },
        },
    ],
};