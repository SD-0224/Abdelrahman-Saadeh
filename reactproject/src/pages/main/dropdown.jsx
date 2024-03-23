import styles from './dropdown.module.css';

export function Dropdown({label ,options}){
  return(
          <div className={styles.dropdown}>
           <label>{label}</label>
           <select>
           {options.map((option , index)=>
           <option key={index}>{option}</option>)}
           </select>
         </div>
  )
}