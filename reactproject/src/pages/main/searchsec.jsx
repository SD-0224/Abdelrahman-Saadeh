import { Searchbar } from "../../components/shared/searchbar";
import { Dropdown } from "./dropdown";
import styles from "./searchsec.module.css";
const sortOptions = ["Default", "Topic Title", "Author Name"];
const filterOptions = [
  "Default",
  "Web Development Languages",
  "Frontend Frameworks and Libraries",
  "Backend Frameworks and Libraries",
  "Databases and APIs",
  "Web Development Concepts and Technologies",
];
export function Searchsec({ onInputChange, onSortChange, onFilterChange }) {
  return (
    <section className={styles.searchsec}>
      <Searchbar
        onChange={onInputChange}
        placeholder={"Search the website..."}
      />
      <Dropdown
        stateonchange={onSortChange}
        label={"Sort by"}
        options={sortOptions}
      />
      <Dropdown
        stateonchange={onFilterChange}
        label={"Filter by"}
        options={filterOptions}
      />
    </section>
  );
}
