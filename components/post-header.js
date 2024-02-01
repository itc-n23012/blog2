import styles from 'styles/post-header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import ConvertDate from 'components/convert-date'

const PostHeader = (props = { publish: '' }) => {
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{props.subtitle}</p>
      <h1 className={styles.title}>{props.title}</h1>
      {props.publish && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon={faClock} size='ls' color='var(--gray-25)' />
          <ConvertDate dateISO={props.publish} />
        </div>
      )}
    </div>
  )
}
export default PostHeader
