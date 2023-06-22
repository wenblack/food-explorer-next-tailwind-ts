import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Roboto_Flex } from 'next/font/google'
import { CategorieList } from '@/components/CategorieList'
import { HeroSection } from '@/components/HeroSection'
import { NotConnectedView } from '@/components/NotConnectedView'
import { useEffect, useState } from 'react'
import { LoadingView } from '@/components/LoadingView'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Home() {
  const [islogged,setisLogged] = useState(false)
  const [disconnected, setDisconnected] = useState(false)


  useEffect(()=>{
    let result = localStorage.getItem('logged')
     
    if(result === 'true'){
      setisLogged(true)
      console.log('LocalStorage é '+result)
    }else if (result === null){
      setDisconnected(true)
      console.log('LocalStorage é '+result)
    } else{
      console.log('LocalStorage é '+result)
    }

  })

  if (disconnected) {
    return (
      <NotConnectedView/>
      )
    }
  
  if(!islogged){
    return(
      <div className={` flex overflow-hidden  min-h-[100vh] w-full   flex-col  max-w-screen bg-bgPrimary ${roboto.className}`}>
      <header className=' flex top-0   text-white '>
        <Header></Header>
      </header>
      <main className='flex flex-col overflow-x-hidden  w-screen mt-32 '>
        <HeroSection></HeroSection>
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


  return (
    <LoadingView/>
  )
}
