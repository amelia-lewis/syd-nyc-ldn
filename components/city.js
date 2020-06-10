import styles from './city.module.css'
import Clock from 'react-live-clock';
import moment from 'moment-timezone';

export default function City({ name, timezone }) {    
  var hour = moment().tz(timezone).format('HH');
  var bgColor;
  var textColor;

  if (hour < 7) {
    bgColor = "var(--color-midnight)";
    textColor = "white";
  } else if (hour >= 7 && hour < 9) {
    bgColor = "var(--color-morning)";
    textColor = "white";
  } else if (hour >= 18 && hour < 22) {
    bgColor = "var(--color-evening)";
    textColor = "white";
  }  else if (hour >= 22) {
    bgColor = "var(--color-night)";
    textColor = "white";
  } else {
    bgColor = "var(--color-day)";
    textColor = "var(--color-night)";
  }
  
  return (
    <div className={styles.card} style={{backgroundColor: bgColor, color: textColor}}>
      <div>
        <h2 className={styles.name}>{name}</h2>
        <Clock
          className={styles.timezone}
          format={'zz UTC Z'}
          ticking={true}
          timezone={timezone} />
      </div>

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