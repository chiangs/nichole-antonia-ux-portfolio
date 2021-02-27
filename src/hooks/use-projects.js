import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            publish: { eq: true }
            page_link: { regex: "/projects/" }
          }
        }
      ) {
        nodes {
          frontmatter {
            tags
            title
            order
            description
            page_link
            prototype_link
            hero_image
          }
          htmlAst
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes
}

export default useProjects
