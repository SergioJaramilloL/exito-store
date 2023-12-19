import styles  from './products.module.scss';

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import Card from '@/components/card';
import { getApolloClient } from '@/utils/apolloClient';
import { GET_PRODUCTS } from '@/services/products';

import SearchBar from '@/components/SearchBar';

function searchOnProducts(arrProducts: any, search: string) {
  const searchLower = search.toLowerCase();

  return arrProducts.filter((product: any) => {
    const titleMatch = product.title.toLowerCase().includes(searchLower);
    const categoryMatch = product.category.toLowerCase().includes(searchLower);

    return titleMatch || categoryMatch;
  })
}

export default function Products({ products }: any) {
  const [ productsToRender, setProductsToRender ] = useState(products)
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    if(search === '') {
      setProductsToRender(products)
    } else {
      const productsFiltered = searchOnProducts(products, search)
      setProductsToRender(productsFiltered)
    }
  }, [search])

  return (
    <>
      <Head>
        <title>Productos</title>
        <meta name="description" content="Página donde se listan los productos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.home}>
        <p className={styles.home_breadcrumbs}><Link href='/'>Inicio</Link> / <Link href='/productos'><strong>Productos</strong></Link></p>
        <SearchBar
          onSearch={setSearch}
          search={search}
        />
        <h1>Productos éxito</h1>
        {productsToRender.length > 0 ? (
          <div className={styles.home_gallery}>
            {productsToRender.map((item: any) => ( <Card key={item.id} product={item}/>))}
          </div>
        ): (
          <p>No hay productos con esas especificaciones</p>
        )}
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