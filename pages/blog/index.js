import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
const Blog = () => {
  const props3 = { title: 'Blog', subtitle: 'Recent Posts' }
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero {...props3} />
    </Container>
  )
}

export default Blog
