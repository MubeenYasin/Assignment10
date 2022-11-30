import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nave from '../component/nave/Nave'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Nave />
    <Component {...pageProps} />
  </>
}
