import Social from 'components/social'
import styles from 'styles/contact.module.css'

const Contact = () => {
  return (
    <div clssName={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize='30px' />
      <address>cube@web.mail.address</address>
    </div>
  )
}

export default Contact
