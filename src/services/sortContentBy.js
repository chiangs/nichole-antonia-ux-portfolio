const sortContentBy = (collection, propName) => {
  return collection.sort(
    (a, b) => a.frontmatter[propName] - b.frontmatter[propName]
  )
}

export default sortContentBy
