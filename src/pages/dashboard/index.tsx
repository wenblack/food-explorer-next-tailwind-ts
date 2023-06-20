import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Roboto_Flex } from 'next/font/google'
import { CategorieList } from '@/components/CategorieList'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Home() {


  return (
    <div className={` flex overflow-x-hidden  h-[100vh] w-[100vw]   flex-col  max-w-screen bg-bgPrimary ${roboto.className}`}>
      <header className=' flex top-0   text-white '>
        <Header></Header>
      </header>
      <main className='flex flex-col  w-screen mt-32 '>
        <CategorieList id='main'></CategorieList>
        <CategorieList id='candies'></CategorieList>
        <CategorieList id='drinks'></CategorieList>
      </main>

      <footer className=' bottom-0 '>
        <Footer></Footer>
      </footer>
    </div>
  )
}
