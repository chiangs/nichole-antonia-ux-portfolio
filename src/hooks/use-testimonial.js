import { graphql, useStaticQuery } from "gatsby"

const useTestimonial = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/Testimonial/" } } }
      ) {
        nodes {
          frontmatter {
            body
            author
            author_title_and_organization
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes[0].frontmatter
}

export default useTestimonial
