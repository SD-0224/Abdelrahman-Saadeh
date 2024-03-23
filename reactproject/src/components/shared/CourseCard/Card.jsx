import styles from './Card.module.css';
import { Ratingstars } from './ratingstars';

export function Card({courses}){
  console.log(courses.image)
  return(
    <div className={styles.coursecard}>
      <img className={styles.Logos} src={`/${courses.image}`} alt={courses.topic} />
      <div className={styles.cardInfo}>
        <p className={styles.courseDescrip}>{courses.category}</p>
        <p className={styles.courseTitle}>{courses.topic}</p>
        <Ratingstars/>
        <p className={styles.courseAuthor}>Author: {courses.name}</p>
      </div>
    </div>


  )
}