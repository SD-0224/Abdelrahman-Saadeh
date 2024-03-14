import styles from './laycontainer.module.css';

export function Layoutcontainer ({className, children}){
  return(
<div className={`${styles.laycontainer} ${className}`}>
{children}
</div>

  )
}