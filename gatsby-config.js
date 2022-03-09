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
            `Barlow\:300,500,600,700,900`,
            `Fraunces\:300,500,700,600,900`,
            `source sans pro\:300,400,400i,700,900` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      }
    ]
}