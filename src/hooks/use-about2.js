import { graphql, useStaticQuery } from "gatsby"

const useAbout2 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/About 2/" } } }
      ) {
        nodes {
          frontmatter {
            title
          }
          htmlAst
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes[0].htmlAst
}

export default useAbout2
