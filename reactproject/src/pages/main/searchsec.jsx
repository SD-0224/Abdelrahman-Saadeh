import { Searchbar } from '../../components/shared/searchbar';
import styles from './searchsec.module.css';
export function Searchsec(){
  return(
    <section className={styles.searchsec}>
  <Searchbar placeholder={"Search the website..."}/>
     <div className={styles.dropdown}>
          <label>Sort by:</label>
          <select>
          <option>Default</option>
            <option>Topic Title</option>
            <option>Author Name</option>
          </select>
        </div>
        <div className={styles.dropdown}>
          <label>Filter by:</label>
          <select>
          <option>Default</option>
            <option>Web Development Languages</option>
            <option>Frontend Frameworks and Libraries</option>
            <option>Backend Frameworks and Libraries</option>
            <option>Databases and APIs</option>
            <option>Web Development Concepts and Technologies</option>
          </select>
        </div>
  </section>
  )

}