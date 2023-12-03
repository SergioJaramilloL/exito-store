import styles  from './index.module.scss'

import Head from 'next/head'

import Card from '@/components/card'

export default function Home() {
  return (
    <>
      <Head>
        <title>Productos</title>
        <meta name="description" content="Página donde se listan los productos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <p className={styles.home_breadcrumbs}>inicio / <strong>productos</strong></p>
        <h1>Productos éxito</h1>
        <div className={styles.home_gallery}>
          {new Array(10).fill(0).map((_, index) => ( <Card key={index} />))}
        </div>
      </main>
    </>
  )
}
