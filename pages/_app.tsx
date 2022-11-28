import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Nave from '../components/nave/nave'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div className='w-full'>
      <Nave />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}
