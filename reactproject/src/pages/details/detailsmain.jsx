import { Detailscard } from './detailscard';
import { Detailcontainer } from './detailscontianer';
import styles from './detailsmain.module.css';

export function Detailsmain({detailsinfo}){
  return(
<div className={styles.detailmain}>
  <Detailcontainer details={detailsinfo}/>
  <Detailscard detailscrd={detailsinfo}/>
</div>

  )
}