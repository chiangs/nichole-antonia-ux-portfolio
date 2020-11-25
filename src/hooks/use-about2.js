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
            body
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes[0].frontmatter.body
}

export default useAbout2
