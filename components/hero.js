import styles from 'styles/hero.module.css'
const Hero = (props = { imageOn: false }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
      {props.imageOn && <figure> [画像] </figure>}
    </div>
  )
}

export default Hero
