import Container from 'components/container'
import Hero from 'components/hero'
const Blog = () => {
  const props3 = { title: 'Blog', subtitle: 'Recent Posts' }
  return (
    <Container>
      <Hero {...props3} />
    </Container>
  )
}

export default Blog
