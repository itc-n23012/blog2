import Head from 'next/head'
import { siteMeta } from 'lib/constants'
import { useRouter } from 'next/router'
import siteImg from 'images/ogp.jpg' // 汎用OGP画像
const {
  siteTitle,
  siteDesc,
  siteUrl,
  siteLocale,
  siteType,
  siteIcon
} = siteMeta

const Meta = props => {
  const title = props.pageTitle
    ? `${props.pageTitle} | ${siteTitle}`
    : siteTitle
  const desc = props.pageDesc ?? siteDesc

  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`

  // OGP画像
  const img = props.Img || siteImg.src
  const imgW = props.pageImgW || siteImg.width
  const imgH = props.pageImgH || siteImg.height
  const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />

      <meta name='description' content={desc} />
      <meta property='og:description' content={desc} />

      <link rel='canonical' href={url} />
      <meta property='og:url' content={url} />

      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:type' content={siteType} />
      <meta property='og:locale' content={siteLocale} />

      <link rel='icon' href={siteIcon} />
      <link rel='apple-touch-icon' href={siteIcon} />

      <meta property='og:image' content={imgUrl} />
      <meta property='og:image:width' content={imgW} />
      <meta property='og:image:height' content={imgH} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  )
}
export default Meta
