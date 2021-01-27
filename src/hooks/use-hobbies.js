import { graphql, useStaticQuery } from "gatsby"

const useHobbies = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/Hobbies/" } } }
      ) {
        nodes {
          frontmatter {
            number_to_show
            list
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes[0].frontmatter.list
}

export default useHobbies
