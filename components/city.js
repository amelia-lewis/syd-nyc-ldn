import styles from './city.module.css'
import utilStyles from '../styles/utils.module.css'
import Clock from 'react-live-clock';

export default function City({ name, timezone }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>

      <div className={styles.timeContainer}>
        <Clock
          className={styles.time}
          format={'h:mm'}
          ticking={true}
          timezone={timezone} />
        <Clock
          className={styles.meridiem}
          format={'A'}
          ticking={true}
          timezone={timezone} />
      </div>
      
      <Clock
        className={styles.date}
        format={'dddd, MMMM Mo'}
        ticking={true}
        timezone={timezone} />
    </div>
  )
}