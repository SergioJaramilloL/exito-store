import styles from './checkout.module.scss'

import Head from 'next/head'
import Image from 'next/image';
import { FaPlus, FaMinus  } from "react-icons/fa6";


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

export default function Checkout(): JSX.Element {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <>
      <Head>
        <title>Carrito de compras</title>
        <meta name="description" content="Página donde se listan los productos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.checkout}>
        <h1>Carrito de compras</h1>

        <div className={styles.checkout_layout}>

          <section className={styles.checkout_list}>
            <div className={styles.checkout_product}>
              <div className={styles.checkout_product_details}>

                <div className={styles.checkout_product_image}>
                  <Image 
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    layout='responsive'
                    />
                </div>

                <div className={styles.checkout_product_info}>
                  <p>{category.toUpperCase()}</p>
                  <h2>{title}</h2>
                  <span>${price}</span>
                </div>

              </div>
              
              <div className={styles.checkout_product_quantity}>
                <FaMinus />
                <p>1</p>
                <FaPlus />
              </div>
            </div>
          </section>

          <section className={styles.checkout_ticket}>
            <div className={styles.checkout_ticket_info}>
              <p>Subtotal:</p>
              <p>Descuento en productos:</p>
              <p>Total:</p>
            </div>
            <div className={styles.checkout_ticket_total}>
              <p>$ {price}</p>
              <p>-$ {(price*0.1).toFixed(2)}</p>
              <p>$ {(price*0.9).toFixed(2)}</p>
            </div>
          </section>

        </div>

        <button className={styles.checkout_toPay}>
          Ir a pagar
        </button> 
      </main>
    </>
  )
} 