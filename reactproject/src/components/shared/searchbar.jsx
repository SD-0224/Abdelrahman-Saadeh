import styles from './searchbar.module.css';
export function Searchbar ({placeholder}){
  return(
<div className={styles.searchBar}>
<ion-icon name="search-outline"></ion-icon>
     <input type="text" placeholder={placeholder}/>
</div>

  )
}