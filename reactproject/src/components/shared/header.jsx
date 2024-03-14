import { Layoutcontainer } from "./Layoutcontiner";
import { Buttonion } from "./buttonion";
import styles from "./header.module.css";

export function Header () {
return(
  <header className={styles.header}>
    <Layoutcontainer className={styles.headerBar}>
      <a class="Web-topics" href="">Web Topics</a>
      <nav>
      <Buttonion icon={"moon-outline"} label={"Dark Mode"}/>
      <Buttonion icon={"heart-outline"} label={"Favorite"}/>
      </nav>
      </Layoutcontainer>
    </header>


)

}