import styles from './checkout.module.scss';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaPlus, FaMinus, FaTrash  } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';

import { addProduct, removeProduct } from '@/store/cart/cart.actions';

export default function Checkout(): JSX.Element {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { products, total, totalProducts } = useSelector((state: any) => state.cart);

  const handleAddProduct = (productPayload: any) => {
    dispatch(addProduct(productPayload));
  }

  const handleRemoveProduct = (productPayload: any) => {
    dispatch(removeProduct(productPayload));
  }

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
            <p>{totalProducts} productos</p>
            {products.length > 0 && products.map((product: any) => {
              const { id, title, price, category, image, quantity } = product;

              return (
                <React.Fragment key={id}>
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
                      {quantity === 1 ? (
                        <FaTrash onClick={() => handleRemoveProduct(product)}/>
                      ) : (
                        <FaMinus onClick={() => handleRemoveProduct(product)}/>
                      )}
                      <p>{quantity}</p>
                      <FaPlus onClick={() => handleAddProduct(product)}/>
                    </div>
                  </div>
                </React.Fragment>
              )}
            )}
          </section>

          <section className={styles.checkout_ticket}>
            <div className={styles.checkout_ticket_info}>
              <p>Subtotal:</p>
              <p>Descuento en productos:</p>
              <p>Total:</p>
            </div>
            <div className={styles.checkout_ticket_total}>
              <p>$ {total.toFixed(2)}</p>
              <p>-$ {(total*0.1).toFixed(2)}</p>
              <p>$ {(total*0.9).toFixed(2)}</p>
            </div>
          </section>

        </div>

        <button className={styles.checkout_toPay} onClick={() => push(`/pay`)}>
          Ir a pagar /<strong>Total: $ {(total*0.9).toFixed(2)}</strong>
        </button> 
      </main>
    </>
  )
} 