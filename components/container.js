import styles from 'styles/container.module.css'

const Container = ({ children, large = false }) => {
  return (
    <div className={large ? styles.default : styles.default}>
      {children}
    </div>
  )
}

export default Container
