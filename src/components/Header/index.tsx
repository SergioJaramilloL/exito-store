import styles from './header.module.scss';

import Image from 'next/image';
import { FaCartShopping, FaBell, FaUser  } from "react-icons/fa6";

export default function Header(): JSX.Element {
  return(
    <header className={styles.header}>
      <Image src="/exito-logo.svg" alt="logo" width={100} height={35} />
      <div className={styles.header_icons}>
        <FaUser size={20}/>
        <FaBell size={20}/>
        <FaCartShopping size={20}/>
      </div>
    </header>
  )
}