import styles from "./dropdown.module.css";

export function Dropdown({ label, options, stateonchange }) {
  return (
    <div className={styles.dropdown}>
      <label>{label}</label>
      <select onChange={stateonchange}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
