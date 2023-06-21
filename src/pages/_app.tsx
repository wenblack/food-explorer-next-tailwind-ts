import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CounterContextProvider } from '@/contexts/Usercontext'


export default function App({ Component, pageProps }: AppProps) {
  return (
      <CounterContextProvider>
        <Component {...pageProps} />
      </CounterContextProvider>
     )
}
