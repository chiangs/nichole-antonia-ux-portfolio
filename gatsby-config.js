module.exports = {
  siteMetadata: {
    title: `Nichole Antonia`,
    description: `UX design portfolio of Nichole Antonia, Stavanger, Norway`,
    type: `Website`,
    author: `stephen.e.chiang@gmail.com`,
    subject: `UX design, portfolio, blog, contact`,
    baseUrl: `nichole-ux.design`,
    logo: `/logo.svg`,
    imageAlt: `Nichole Antonia, UX designer`,
    username: `@`,
    siteUrl: `https://www.nichole-ux.design`,
    phone: `+47 968 49 108`,
    email: `antonia.nichole.ux@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `ABeeZee`,
          },
          {
            family: `Poppins`,
            variants: [`300`, `400`, `600`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.js`),
      },
    },
  ],
}
