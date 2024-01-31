import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

const Schedule = props => {
  return (
    <Container>
      <h1>{props.title}</h1>
    </Container>
  )
}
export default Schedule

export const getStaticProps = async () => {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}
