import { CardLoading } from '../../components/shared/CourseCard/Carddata';
import styles from './topicsgrid.module.css';

export function TopicsGrid(){
  return(
    <section className={styles.TopicsFound}>
    <CardLoading/>
    </section>
  )

}