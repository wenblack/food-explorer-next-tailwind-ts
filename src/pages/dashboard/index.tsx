import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Roboto_Flex } from 'next/font/google'
import { CategorieList } from '@/components/CategorieList'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Home() {


  return (
    <div className={` flex overflow-x-hidden  h-[100vh] w-[100vw]   flex-col  max-w-screen bg-bgPrimary ${roboto.className}`}>
      <header className='  text-white '>
        <Header></Header>
      </header>
      <main className='flex flex-col  w-screen '>
        <CategorieList></CategorieList>
      </main>
        
      <footer className=' bottom-0   self-end'>
        <Footer></Footer>
      </footer>
    </div>
  )
}
