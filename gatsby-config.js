module.exports = {
    siteMetadata: {
      title: ``,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Barlow\:400,500,600,700,900`,`Fraunces\:400,500,600,700,900`,
            `source sans pro\:300,400,400i,700`
          ],
          display: 'swap'
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `GatsbyJS`,
          short_name: `GatsbyJS`,
          start_url: `/`,
          icon: `src/images/icon.png`,
          display: `standalone`,
        },
      },
      `gatsby-plugin-react-helmet`,
    ]
}