import { graphql, useStaticQuery } from "gatsby"

const useWorksWith = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/Works with/" } } }
      ) {
        nodes {
          frontmatter {
            title
            number_to_show
            list
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes[0].frontmatter
}

export default useWorksWith
