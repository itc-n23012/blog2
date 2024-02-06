import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'components/two-column'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import Image from 'next/image'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

const Schedule = props => {
  return (
    <Container>
      <Meta
        pageTitle={props.title}
        pageDesc={props.description}
        pageImg={props.eyecatch.url}
        pageImgW={props.eyecatch.width}
        pageImgH={props.eyecatch.height}
      />
      <article>
        <PostHeader
          title={props.title}
          subtitle='Blog Article'
          publish={props.publish}
        />
        <figure>
          <Image
            src={props.eyecatch.url}
            alt=''
            layout='responsive'
            width={props.eyecatch.width}
            height={props.eyecatch.height}
            sizes='(min-width: 1152px) 1152px, 100vw'
            priority='blur'
            blurDateURL={props.eyecatch.blurDateURL}
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={props.content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={props.categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}
export default Schedule

export const getStaticProps = async () => {
  const slug = 'micro'

  const post = await getPostBySlug(slug)

  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDateURL = base64
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description
    }
  }
}
