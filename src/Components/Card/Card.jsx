import styles from "./card.module.css";
import WhiteCurve from "./white wave.svg";
import WhiteCurves from "./white-wave.svg";

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
              src="/src/components/card/house.jpeg"
              alt="White curve"
            />
            <h1 className={styles.cardTitle}>Kensington Houses </h1>
            <p className={styles.houseAdded}>Added Date:15-12-2024</p>
            <p className={styles.houselocation}>Location: Johannesburg, Kensington </p>
            <button className={styles.cardButton}>Book House</button>
          </div>
          <div className={styles.WhiteCurves}>
        <img src={WhiteCurves} alt="White curve" /></div>
        </div>
      </div>
    </div>
  );
};
export default card;
