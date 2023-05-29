import {Header} from '@/components/MenuMobile'
import { Roboto_Flex } from 'next/font/google'
import { Poppins } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })

export default function Home() {
  return (
    <>
    <header className='text-white'>
      <Header></Header>
    </header>
    <main
      className={`text-white  bg-bgPrimary flex min-h-screen flex-col items-center justify-between p-24 `}
    >
    </main>
    </>
  )
}
