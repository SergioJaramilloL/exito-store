import styles from './productDetail.module.scss';

import Head from 'next/head';
import Image from 'next/image';
import { FaCartShopping  } from "react-icons/fa6";

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

export default function ProductDetail(): JSX.Element {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <>
      <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.detail}>
        <p className={styles.detail_breadcrumbs}>
          inicio / productos / <strong>{product.title}</strong>
        </p>
        <div className={styles.detail_content}>
          <h1>{title}</h1>
          <h2>{category}</h2>

          <article className={styles.detail_product}>
            <section className={styles.detail_image}>
              <Image 
                src={image} 
                alt={title} 
                width={500} 
                height={500} 
                layout='responsive'
              />
            </section >
            <section className={styles.detail_info}>

              <div className={styles.detail_info_price}>
                <p>${price}</p>
                <Image src="/cards-exito.png" alt="logo" width={25} height={25} />
              </div>

              <div className={styles.detail_info_rating}>
                Calificación: <span>{rating.rate}</span>
              </div>  

              <div className={styles.detail_info_description}>
                Descripción: <br/>
                <span>{description}</span>
              </div> 

              <button>
                Agregar <FaCartShopping size={20}/>
              </button> 
            </section>
          </article>

        </div>
      </main>
    </>
  );
}

