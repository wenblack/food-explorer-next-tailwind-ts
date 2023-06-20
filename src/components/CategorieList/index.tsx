import { Heading } from "../Heading"
import Product from "../Product"
import saladImage from '../../assets/images/salad.png'
import leftIcon from '../../assets/svg/CaretLeft.svg'
import rightIcon from '../../assets/svg/CaretRight.svg'
import Image from "next/image"
interface CategorieListProps {
  id: string
}

export function CategorieList({ id }: CategorieListProps) {

  function scrollLeft() {
    let value = document.getElementById(String(id))
    if (value) {
      value.scrollLeft += 116
    }
  }
  function scrollRight() {
    let value = document.getElementById(String(id))
    if (value) {
      value.scrollLeft -= 116
    }
  }

  return (
    <section className='flex  flex-col mb-8  w-screen '>
      <span className='flex ml-16 lg:ml-28 w-screen mb-10   '>
        <Heading h1 value='Pratos Principais' />
      </span>
      <div className='flex w-screen  h-full'>
        <button
          onClick={scrollRight}
          className=' hidden md:flex lg:flex   justify-center items-center  text-white w-[116px]  '
        >
          <Image src={leftIcon} alt="Arrow left Icon" />
        </button>
        <ul id={id} className='flex scrollable overflow-x-scroll overflow-visible  gap-4 md:gap-6 lg:gap-6 mx-8 lg:mx-0 md:mx-0 '>
          <li >
            <Product
              price='25,97'
              imgUrl={saladImage}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.'
              name='Salada Ravanello'
            />
          </li>
          <li >
            <Product
              price='25,97'
              imgUrl={saladImage}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.'
              name='Salada Ravanello'
            />
          </li>
          <li >
            <Product
              price='25,97'
              imgUrl={saladImage}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.'
              name='Salada Ravanello'
            />
          </li>
          <li>
            <Product
              price='25,97'
              imgUrl={saladImage}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.'
              name='Salada Ravanello'
            />
          </li>
          <li>
            <Product
              price='25,97'
              imgUrl={saladImage}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.'
              name='Salada Ravanello'
            />
          </li>
          <li>
            <Product
              price='25,97'
              imgUrl={saladImage}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.'
              name='Salada Ravanello'
            />
          </li>
        </ul>
        <button onClick={scrollLeft} className='hidden pr-4 md:flex  justify-center items-center bg-transparent text-white w-[116px]'>
          <Image src={rightIcon} alt="Arrow right Icon" />
        </button>
      </div>
    </section>

  )
}