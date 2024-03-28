import styles from "./detailscard.module.css";
export function Detailscard({ detailscrd }) {
  return (
    <section className={styles.detailscard}>
      <img src={`/${detailscrd.image}`} className={styles.detailogo} />
      <div className={styles.cardtitle}>
        <p>
          {detailscrd.topic}
          <strong /> by <a href="">{detailscrd.name}</a>
        </p>
      </div>
      <div className={styles.favoritebox}>
        <label className={styles.buttonlabel}>
          Interested about this topic?
        </label>
        <br />
        <button id="fav-button" className={styles.favoritebtn}>
          Add to Favorites{" "}
          <span className={styles.heartcrd}>
            <ion-icon name="heart-outline"></ion-icon>
          </span>
        </button>
        <p className={styles.cardfooter}>Unlimted Credits</p>
      </div>
    </section>
  );
}
