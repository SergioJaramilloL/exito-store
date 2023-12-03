import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import { wrapper } from '@/store'
import {Provider} from 'react-redux';

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <>
      <Provider store={store}>
        <Header />
          <Component {...props.pageProps} />
        <Footer />
      </Provider>
    </>
  )
}
