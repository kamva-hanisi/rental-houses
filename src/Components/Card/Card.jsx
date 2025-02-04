import styles from "./card.module.css";
import WhiteCurve from "./white wave.svg";

export const card = () => {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.WhiteCurve}>
        <img src={WhiteCurve} alt="White curve" />
        <div className={styles.textContainer}>
          <div className={styles.title}>Recently Added</div>
          <div className={styles.card}>
            <img
              className={styles.cardImage}
              src="/public/rental.png"
              alt="White curve"
            />
            <span className={styles.cardTitle}>King&apos;s Club</span>
            <br />
            <span className={styles.houseAdded}>Added Date:01-03-2017</span>
            <br />
            <span className={styles.house - location}>
              Location: Sano Thimi, Bhaltapur Nepal
            </span>
            <br />
            <button className={styles.cardButton}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default card;
