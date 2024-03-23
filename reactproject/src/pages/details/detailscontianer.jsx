import { Ratingstars } from '../../components/shared/CourseCard/ratingstars';
import { Layoutcontainer } from '../../components/shared/Layoutcontiner';
import styles from './detailscontainer.module.css';
import { Detailstopics } from './detailstopics';

export function Detailcontainer({details}){
  console.log(details)
  return (
    <div>
    <Layoutcontainer className={styles.detailcont}>
    <div className={styles.detailsdescrip}>
      <div>
        <p className={styles.detailscoursename}>{details.category}</p>
        <p className={styles.detailscoursetitle}>{details.topic}</p>
       <Ratingstars/>
       </div>
     <p className={styles.detailscoursedescrip}>
     {details.description}
      </p>
        </div>
              </Layoutcontainer>
    
    </div>
    
  )
}