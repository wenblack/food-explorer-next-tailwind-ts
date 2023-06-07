import { Logo } from '@/components/Logo'
import { Roboto_Flex } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { Input } from '@/components/Input'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { PaymentView } from '@/components/PaymentView'
import { ProductsList } from '@/components/ProductsList'

const roboto = Roboto_Flex({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'] , weight:['700','600','500']})

export default function Login() {
  return (
      <main className={`min-h-screen sm:overflow-auto md:flex-col md:flex md:justify-evenly lg:overflow-hidden lg:grid  h-fulll grid md:grid-cols-2 lg:grid-cols-2  w-screen bg-bgPrimary  ${roboto.className}`}>
       {/* Logo Column(Desktop)*/}
       <div className=' grid  h-[100vh]   bg-bgPrimary text-white   lg:grid md:h-full items-start mt-8 justify-center'> 
        <ProductsList />
       </div>
        {/* Form Column */}
       <div className=' text-white md:h-full  grid h-[100vh] items-start justify-center bg-bgPrimary'>
         {/* Desktop Version*/}
        <div className=' hidden md:flex lg:flex flex-col   h-[100vh] w-[100vw] max-h-[540px] md:min-h-[540px] max-w-[476px] md:m-8 bg-bgPrimary rounded-lg'>
          <PaymentView></PaymentView>
        </div>
        {/* Mobile version*/}
        <div className=' flex md:hidden sm:flex  lg:hidden flex-col  items-center justify-center h-[100vh] w-[100vw] sm:min-h-[540px] md:max-w-[476px]  bg-bgPrimary rounded-lg'>
            <PaymentView></PaymentView>  
        </div>
       </div>
      </main>
  )
}
