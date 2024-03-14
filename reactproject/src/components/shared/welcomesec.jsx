import styles from './welcomesec.module.css';


export function Welcomesec(){
  return (
    <section className={styles.welcomeSec}>
    <div>
    <h1 className={styles.wlecomeMsg}>Welcome to our website!</h1>
    <p className={styles.welcomeDesc}>We have a new design that's fresh, modern, and easy to use.</p>
  </div>
  </section>
  )
}