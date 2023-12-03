import styles from './card.module.scss'

import { FaCartShopping  } from "react-icons/fa6";
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { addProduct } from '@/store/cart/cart.actions';

export default function Card({ product }: any): JSX.Element {
  const { push } = useRouter();
  const dispatch = useDispatch();

  const { id, title, price,  image } = product

  const handleAddProduct = (productPayload: any) => {
    dispatch(addProduct(productPayload));
  }

  return (
    <div className={styles.card}>
      <div className={styles.card_image} onClick={() => push(`/productos/${id}`)}>
        <Image 
          src={image}
          alt={title}
          layout='responsive'
          width={170}
          height={170}
        />
      </div>
      <div>
        <div className={styles.card_info} onClick={() => push(`/productos/${id}`)}>
          <h2>{title}</h2>
          <div className={styles.card_info_price}>
            <p>${price}</p>
            <Image src="/cards-exito.png" alt="logo" width={25} height={25} />
          </div>
        </div>
        <button onClick={() => handleAddProduct(product)}>
          Agregar <FaCartShopping size={20}/>
        </button>
      </div>
    </div>
  )
}