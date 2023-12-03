import styles from './card.module.scss'

import { FaCartShopping  } from "react-icons/fa6";
import Image from "next/image"

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
      rate: 3.9,
      count: 120
  }
}

export default function Card(): JSX.Element {
  const { id, title, price, description, category, image, rating } = product

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image 
          src={image}
          alt={title}
          layout='responsive'
          width={170}
          height={170}
        />
      </div>
      <div className={styles.card_info}>
        <h2>{title}</h2>
        <div className={styles.card_info_price}>
          <p>${price}</p>
          <Image src="/cards-exito.png" alt="logo" width={25} height={25} />
        </div>
      </div>
      <button>
        Agregar <FaCartShopping size={20}/>
      </button>
    </div>
  )
}