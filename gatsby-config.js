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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `general-copy`,
        path: `${__dirname}/general-copy`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lists`,
        path: `${__dirname}/lists`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/skills`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
            resolve: `gatsby-remark-external-links`,
            options: {
              target: "_blank",
              rel: "nofollow noopener",
            },
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
