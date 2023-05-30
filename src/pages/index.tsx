import { Footer } from '@/components/Footer'
import { Header } from '@/components/MenuMobile'
import { Roboto_Flex } from 'next/font/google'
import { Poppins } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })

export default function Home() {
  return (
    <div className='min-h-screen flex  w-screen bg-bgPrimary '>
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
