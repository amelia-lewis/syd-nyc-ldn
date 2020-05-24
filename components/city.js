import styles from './city.module.css'
import utilStyles from '../styles/utils.module.css'
import Clock from 'react-live-clock';

export default function City({ name, timezone }) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <Clock
        format={'h:mm a'}
        ticking={true}
        timezone={timezone} />
      
      <Clock
        format={'dddd, MMMM Mo'}
        ticking={true}
        timezone={timezone} />
    </div>
  )
}