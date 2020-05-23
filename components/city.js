import styles from './city.module.css'
import utilStyles from '../styles/utils.module.css'

export default function City({ name }) {
  return (
    <div className={styles.city}>
      <h2>{name}</h2>
    </div>
  )
}