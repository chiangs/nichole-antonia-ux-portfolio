import { graphql, useStaticQuery } from "gatsby"

const useAbout = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/About 1/" } } }
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

export default useAbout
