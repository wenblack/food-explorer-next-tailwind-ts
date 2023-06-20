
import { Roboto_Flex } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import arrouLeftIcon from '../../assets/svg/CaretLeft.svg'
import Image, { ImageProps, StaticImageData } from 'next/image'
import saladImage from '../../assets/images/salad.png'
import { IngredientsList } from '@/components/IngredientsList'
import { useState } from 'react'
import { Heading } from '../Heading'


const roboto = Roboto_Flex({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['700', '600', '500', '400'] })

interface ProductProps {
  name: string
  description: string
  imgUrl: string | StaticImageData
  price: string

}

export default function Product({ description, imgUrl, name, price }: ProductProps) {
  const [total, setTotal] = useState(1)

  function sub(e: any) {
    e.preventDefault()
    if (total === 1) {
      return
    }
    setTotal(total - 1)
  }
  function add(e: any) {
    e.preventDefault()
    setTotal(total + 1)
  }
  return (
    <div className={` flex  flex-col bg-bgSecondary rounded-lg w-[300px] h-[512px] justify-center items-center  gap-4   ${roboto.className}`}>
      {/* Logo Column(Desktop)*/}
      <span className={`flex   items-center justify-center`}>
        <Link href={'/details'} className='hover:opacity-70'>
          <Image alt='product Image' src={imgUrl}></Image>
        </Link>
      </span>
      {/* Form Column */}
      <section className=' text-white flex  justify-center  text-center items-center     '>
        <div className={`flex flex-col  gap-4   justify-center items-center  ${poppins.className} `}>
          <Link href={'/details'} className='hover:opacity-70 text-2xl flex    justify-center  font-medium  pl-8 lg:pl-0 md:pl-8' > {name}</Link>
          <p className='  font-normal  text-[14px]    px-8 lg:px-0 '>{description}</p>

          <h3 className={`flex items-center justify-center   ${roboto.className} text-priceBlue text-[32px] leading-[56px]  `} >R$ {price}</h3>
          <span className={`flex  gap-4  items-center justify-center   ${roboto.className}  text-3xl w-[208px]  `}>
            <span className='flex w-[100px] items-center justify-between'>
              <button className='hover:opacity-70' onClick={sub}>-</button>
              {
                total === 1 ? '01' : total
              }
              <button className='hover:opacity-70' onClick={add}>+</button>
            </span>
            <button className='hover:opacity-70 bg-redButton block px-4 text-title h-[56px] w-[100px] rounded-lg text-lg' type='submit'>incluir</button>
          </span>
        </div>
      </section >
    </div >
  )
}
