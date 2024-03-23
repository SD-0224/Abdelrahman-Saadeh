import styles from './ratingstars.module.css';

export function Ratingstars(){
  return(
    <div className={styles.rating}>
              <span className={styles.str}><ion-icon name="star"></ion-icon></span>
              <span className={styles.str}><ion-icon  name="star"></ion-icon></span>
              <span className={styles.str}><ion-icon  name="star"></ion-icon></span>
              <span className={styles.str}><ion-icon  name="star"></ion-icon></span>
              <span className={styles.str}><ion-icon  name="star-outline"></ion-icon></span>
            </div>
  )
}