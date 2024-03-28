import { Footer } from "../../components/shared/footer";
import styles from "./mainbody.module.css";
import { Searchresutls } from "./searchresutls";
import { Searchsec } from "./searchsec";
import { TopicsGrid } from "./topicsgrid";
export function Mainbody({ searChange, sortChange, filterChange }) {
  return (
    <main className={styles.mainpage}>
      <Searchsec
        onInputChange={searChange}
        onFilterChange={filterChange}
        onSortChange={sortChange}
      />
      <Searchresutls />
      <TopicsGrid />
      <Footer />
    </main>
  );
}
