import { graphql, useStaticQuery } from "gatsby"

const useAbout = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/About/" } } }
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

export default useAbout
