import styles  from './products.module.scss'

import Head from 'next/head'

import Card from '@/components/card'
import { getApolloClient } from '@/utils/apolloClient'
import { GET_PRODUCTS } from '@/services/products'

export default function Products({ products }: any) {

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
  const apolloClient = getApolloClient()

  const { data } = await apolloClient.query({ query: GET_PRODUCTS })

  return {
    props: {
      products: data.products
    }
  }
}