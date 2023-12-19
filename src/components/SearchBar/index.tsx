import styles from './searchBar.module.scss';

import { ChangeEvent } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function SearchBar ({ search, onSearch }: any): JSX.Element {
  return (
    <div className={styles.searchBar}>
      <input
        placeholder='Buscar en exito.com'
        onChange={ (event: ChangeEvent<HTMLInputElement>) => onSearch(event.target.value) }
        value={search}
      />
      <button>
        <FaMagnifyingGlass size={15}/>
      </button>
    </div>
  )
}