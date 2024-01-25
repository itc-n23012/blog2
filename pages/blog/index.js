import Hero from 'components/hero'
const Blog = () => {
  const props3 = { title: 'Blog', subtitle: 'Recent Posts' }
  return (
    <>
      <Hero {...props3} />
    </>
  )
}

export default Blog
