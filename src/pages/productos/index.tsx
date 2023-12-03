import styles  from './products.module.scss'

import Head from 'next/head'

import Card from '@/components/card'
import { getAllProducts } from '@/services/products'

export default function Products({ products }: any) {
console.log("🚀 ~ file: index.tsx:9 ~ Products ~ products:", products)


  return (
    <>
      <Head>
        <title>Productos</title>
        <meta name="description" content="Página donde se listan los productos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.home}>
        <p className={styles.home_breadcrumbs}>inicio / <strong>productos</strong></p>
        <h1>Productos éxito</h1>
        <div className={styles.home_gallery}>
          {products.map((item: any) => ( <Card key={item.id} product={item}/>))}
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const response = await getAllProducts()

  return {
    props: {
      products: response.data
    }
  }
}