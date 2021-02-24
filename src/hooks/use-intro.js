import { graphql, useStaticQuery } from "gatsby"

const useIntro = () => {
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
          htmlAst
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes[0].htmlAst
}

export default useIntro
