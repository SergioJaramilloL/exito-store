import styles from './productDetail.module.scss';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaCartShopping  } from "react-icons/fa6";
import { useDispatch } from 'react-redux';

import { getProductsById } from '@/services/products';
import { addProduct } from '@/store/cart/cart.actions';

export default function ProductDetail({ product }: any): JSX.Element {
  const dispatch = useDispatch();
  const { id, title, price, description, category, image, rating } = product;

  const handleAddProduct = (productPayload: any) => {
    dispatch(addProduct(productPayload));
  }

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

              <button onClick={() => handleAddProduct(product)}>
                Agregar <FaCartShopping size={20}/>
              </button> 
            </section>
          </article>

        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ params }: any) => {
  const response = await getProductsById(params.productId)
  
  return {
    props: {
      product: response.data
    }
  }
}