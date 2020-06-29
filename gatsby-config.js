module.exports = {
  siteMetadata: {
    title: `Nichole Antonia`,
    description: `UX design portfolio of Nichole Antonia, Stavanger, Norway`,
    type: `Website`,
    author: `stephen.e.chiang@gmail.com`,
    subject: `UX design, portfolio, blog, contact`,
    baseUrl: `nichole-ux.design`,
    logo: `/`,
    imageAlt: `Nichole Antonia, UX designer`,
    username: `@`,
    siteUrl: `https://www.nichole-ux.design`,
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
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}
