import styles from './header.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping, FaBell, FaUser  } from "react-icons/fa6";

export default function Header(): JSX.Element {
  return(
    <header className={styles.header}>
      <Link href="/productos">
        <Image src="/exito-logo.svg" alt="logo" width={100} height={35} />
      </Link>
      <div className={styles.header_icons}>
        <FaUser size={20}/>
        <FaBell size={20}/>
        <Link href="/checkout">
          <FaCartShopping size={20}/>
        </Link>
      </div>
    </header>
  )
}