import styles from "./searchbar.module.css";
export function Searchbar({ placeholder, onChange }) {
  return (
    <div className={styles.searchBar}>
      <ion-icon name="search-outline"></ion-icon>
      <input
        className={styles.inputfield}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
