require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
       {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "HASURA",
        fieldName: "hasura",
        url: process.env.API_URL,
        headers: {
          'x-hasura-admin-secret': process.env.API_KEY,
        },
        refetchInterval: 10 
      }
    }
    ]
}