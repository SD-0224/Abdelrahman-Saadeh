import styles from './detailstopics.module.css';

export function Detailstopics({detailtopics}){
  return(
    <section className={styles.topicscontainer}>
    <div className={styles.toptopic}>
      <p className={styles.topictitle}>{detailtopics.topic}Sub Topics</p>
    </div>
    <div>
      <p><span className= {styles.checkicon}><ion-icon name="checkmark-circle-outline"></ion-icon></span>
        {detailtopics.subtopics[0]}</p>
    </div>
    <div>
      <p><span className= {styles.checkicon}><ion-icon name="checkmark-circle-outline"></ion-icon></span>
      {detailtopics.subtopics[1]}</p>
    </div>
    <div>
      <p><span className= {styles.checkicon}><ion-icon name="checkmark-circle-outline"></ion-icon></span>
      {detailtopics.subtopics[2]}</p>
    </div>
    <div>
      <p><span className= {styles.checkicon}><ion-icon name="checkmark-circle-outline"></ion-icon></span>
      {detailtopics.subtopics[3]}</p>
    </div>
    <div>
      <p><span className= {styles.checkicon}><ion-icon name="checkmark-circle-outline"></ion-icon></span>
      {detailtopics.subtopics[4]}</p>
    </div>
    <div className={styles.bottomtopic}>
      <p><span className= {styles.checkicon}><ion-icon name="checkmark-circle-outline"></ion-icon></span>
      {detailtopics.subtopics[5]}</p>
    </div>

  </section>

  )
}