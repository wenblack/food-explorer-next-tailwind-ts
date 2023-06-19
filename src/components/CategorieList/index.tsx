import { Heading } from "../Heading";
import Product from "../Product";
import saladImage from '../../assets/images/salad.png'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export function CategorieList (){

 function scrollLeft(){
    let value = document.getElementById("hide")
    if(value){
      value.scrollLeft += 100;
    }
  }
  function scrollRight(){
    let value = document.getElementById("hide")
    if(value){
      value.scrollLeft -= 100;
    }
  }


    function linearGradient(arg0: number, deg: any, arg2: any, arg3: number, arg4: any, arg5: number, A0F: any, arg7: number): import("csstype").Property.Background<string | number> | undefined {
        throw new Error("Function not implemented.");
    }

    return(
    <section className='flex  flex-col mb-8  w-screen   mt-32'>
        <span className='flex ml-16 w-screen mb-16  '>
        <Heading h1 value='Pratos Principais'/>
        </span>
        <div className='flex w-screen  h-full'>
          <button 
            onClick={scrollRight} 
            className=' flex    justify-center items-center  text-white w-[116px]  ' 
            >
            <ArrowLeftIcon width={40}></ArrowLeftIcon>
          </button>
          <ul id='hide' className='flex w-full overflow-x-scroll overflow-visible  gap-6  '>
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
          <button onClick={scrollLeft} className='flex justify-center items-center bg-transparent text-white w-[116px]'>
            <ArrowRightIcon width={40}></ArrowRightIcon>
          </button>
        </div>
      </section>

    )
}