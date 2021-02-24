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
          htmlAst
        }
      }
    }
  `)

  return {
    testimonialFrontmatter: data.allMarkdownRemark.nodes[0].frontmatter,
    testimonialAst: data.allMarkdownRemark.nodes[0].htmlAst,
  }
}

export default useTestimonial
