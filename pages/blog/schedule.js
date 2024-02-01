import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'

const Schedule = props => {
  return (
    <Container>
      <article>
        <PostHeader
          title={props.title}
          subtitle='Blog Article'
          publish={props.publish}
        />
      </article>
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
