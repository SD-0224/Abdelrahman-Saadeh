import styles from './buttonion.module.css';

export function Buttonion({label , icon ,...props}){
  return(
<button className={styles.headBtn} {...props}>
<ion-icon name={icon}></ion-icon> 
{label}
</button>

  )
}