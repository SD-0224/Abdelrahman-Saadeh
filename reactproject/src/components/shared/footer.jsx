import styles from './footer.module.css';

export function Footer(){
  return(
    <footer className={styles.fotr}>
      Developed with <span className={styles.heart}><ion-icon  name="heart"></ion-icon></span>&#169;2023
    </footer>
  )
}