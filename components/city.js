import styles from './city.module.css'
import utilStyles from '../styles/utils.module.css'
import Clock from 'react-live-clock';
import moment from 'moment-timezone';

export default function City({ name, timezone }) {    
  var hour = moment().tz(timezone).format('HH');
  var bgColor;
  var textColor;

  if (hour < 9 || hour > 22) {
    bgColor = "var(--color-night)";
    textColor = "white";
  } else if (hour > 18 && hour < 22) {
    bgColor = "var(--color-evening)";
    textColor = "white";
  } else {
    bgColor = "var(--color-day)";
    textColor = "var(--color-night)";
  }
  
  return (
    <div className={styles.card} style={{backgroundColor: bgColor, color: textColor}}>
      <h2 className={styles.name}>{name}</h2>

      <div className={styles.timeContainer}>
        <Clock
          className={styles.time}
          format={'h:mm'}
          ticking={true}
          timezone={timezone}
          onChange={date => console.log(date)} />
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