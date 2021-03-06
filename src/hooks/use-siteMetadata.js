import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          type
          author
          subject
          baseUrl
          logo
          imageAlt
          username
          siteUrl
          phone
          email
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
