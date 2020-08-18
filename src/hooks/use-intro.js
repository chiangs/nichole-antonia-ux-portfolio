import { graphql, useStaticQuery } from "gatsby"

const useTermsAnalytics = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/Introduction/" } } }
      ) {
        nodes {
          frontmatter {
            title
            body
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes[0].frontmatter.body
}

export default useTermsAnalytics
