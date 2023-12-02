import styles from './header.module.scss';

import Image from 'next/image';


export default function Header() {
  return(
    <header className='header'>
      <Image src="/exito-logo.svg" alt="logo" width={80} height={31} />
    </header>
  )
}