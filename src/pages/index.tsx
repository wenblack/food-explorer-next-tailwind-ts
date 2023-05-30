import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`min-h-screen flex  w-screen bg-bgPrimary ${roboto.className}`}>
      <header className='text-white'>
        <Header></Header>
      </header>
      <main 
      >
      </main>
      <footer className='bottom-0  self-end'>
        <Footer></Footer>
      </footer>
    </div>
  )
}
