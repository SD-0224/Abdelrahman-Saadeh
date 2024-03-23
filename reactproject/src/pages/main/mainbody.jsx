import { Footer } from '../../components/shared/footer';
import styles from './mainbody.module.css';
import { Searchresutls } from './searchresutls';
import { Searchsec } from './searchsec';
import { TopicsGrid } from './topicsgrid';
export function Mainbody(){
  return(
    <main className={styles.mainpage}>
<Searchsec/>
<Searchresutls/>
<TopicsGrid/>
<Footer/>
    </main>
  )
}