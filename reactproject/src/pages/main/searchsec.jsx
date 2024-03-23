import { Searchbar } from '../../components/shared/searchbar';
import { Dropdown } from './dropdown';
import styles from './searchsec.module.css';
const sortOptions =['Default','Topic Title', 'Author Name'];
const filterOptions = ['Default','Web Development Languages','Frontend Frameworks and Libraries',
'Backend Frameworks and Libraries','Databases and APIs','Web Development Concepts and Technologies'
]
export function Searchsec(){
  return(
    <section className={styles.searchsec}>
  <Searchbar placeholder={"Search the website..."}/>
     <Dropdown label={'Sort by'}
     options={sortOptions}
     />
       <Dropdown label={'Filter by'}
       options={filterOptions}
       />
  </section>
  )

}