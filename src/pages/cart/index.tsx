import { Roboto_Flex } from 'next/font/google'
import { PaymentView } from '@/components/PaymentView'
import { ProductsList } from '@/components/ProductsList'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
      <header className='text-white'>
        <Header></Header>
      </header>
      <main className={`min-h-screen py-32 w-[100vw] sm:overflow-hidden md:flex-col md:flex md:justify-evenly lg:overflow-hidden lg:grid  h-fulll grid md:grid-cols-2 lg:grid-cols-2  bg-bgPrimary  ${roboto.className}`}>
        {/* Logo Column(Desktop)*/}
        <div className='grid  sm:flex h-full bg-bgPrimary text-white   lg:grid md:h-full items-start mt-8 justify-center'>
          <ProductsList />
        </div>
        {/* Form Column */}
        <div className=' text-white  md:h-full    grid  items-start justify-center bg-bgPrimary'>
          {/* Desktop Version*/}
          <div className=' hidden  md:flex lg:flex flex-col  sm:h-full h-full  w-[100vw] max-h-[540px] md:min-h-[540px] max-w-[476px] md:m-8 bg-bgPrimary rounded-lg'>
            <PaymentView></PaymentView>
          </div>
          {/* Mobile version*/}
          <div className=' flex   md:hidden sm:flex sm:mt-8 md:mt-8  lg:hidden flex-col  items-center justify-center h-[100vh] w-[100vw] sm:min-h-[540px] md:max-w-[476px]  bg-bgPrimary rounded-lg'>
            <PaymentView ></PaymentView>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}
