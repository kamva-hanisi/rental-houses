import styles from './Footer.module.css'
import WhiteCurve from "./white-wave.svg";

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.WhiteCurve}>
            <img src={WhiteCurve} alt="White curve" />

        </div>
      
    </div>
  )
}

export default Footer
