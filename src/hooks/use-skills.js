import { graphql, useStaticQuery } from "gatsby"

const useSkills = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/Skills/" } } }
      ) {
        nodes {
          frontmatter {
            title
            skillbar {
              label_1
              label_2
              level
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes[0].frontmatter
}

export default useSkills
