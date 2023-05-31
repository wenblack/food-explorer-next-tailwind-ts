import { useEffect, useState } from "react"
import pixLogo from '../../assets/svg/pix.svg'
import Image from "next/image"
import creditCardLogo from '../../assets/svg/CreditCard.svg'

export function PaymentView () {
  const [pageNumber, setpageNumber] = useState(1)
  

  function setTabOne(){
    console.log(pageNumber)
    setpageNumber(1)
  }

  function setTabTwo(){
    console.log(pageNumber)
    setpageNumber(2)
  }

  if(pageNumber === 1){
     return (
  <>
  <nav className="flex w-[530px] z-0  border  overflow-hidden dark:border-gray-700" aria-label="Tabs" role="tablist">
    <button 
      type="button" 
      className=" hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 active" 
      id="bar-with-underline-item-1" 
      data-hs-tab="#bar-with-underline-1" 
      aria-controls="bar-with-underline-1" 
      role="tab"
      onClick={setTabOne}
    >
      <span className="h-full text-white gap-4 justify-center items-center w-full flex">
        <Image src={pixLogo} alt="Pix payment logo"/>
        PIX
      </span>
    </button>
  
    <button 
      type="button" 
      className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400" 
      id="bar-with-underline-item-2" 
      data-hs-tab="#bar-with-underline-2" 
      aria-controls="bar-with-underline-2" 
      role="tab"
      onClick={setTabTwo}
    >
      <span className="h-full text-white gap-4 justify-center items-center w-full flex">
        <Image src={creditCardLogo} alt="Pix payment logo"/>
        Crédito
        </span>
    </button>
  
  </nav>

    <div className=" flex justify-center items-center border border-gray-700 h-[381px] w-[530px]">
    <div 
      id="bar-with-underline-1" 
      role="tabpanel" 
      aria-labelledby="bar-with-underline-item-1"
    >
      <p className="text-gray-500 dark:text-gray-400">
        This is the <em className="font-semibold text-gray-800 dark:text-gray-200">Pix</em> item's tab body.
      </p>
    </div>  
  </div>
  </>
  )
  }
  return (
  <>
  <nav className="flex w-[530px] z-0  border  overflow-hidden dark:border-gray-700" aria-label="Tabs" role="tablist">
    <button 
      type="button" 
      className=" hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 active" 
      id="bar-with-underline-item-1" 
      data-hs-tab="#bar-with-underline-1" 
      aria-controls="bar-with-underline-1" 
      role="tab"
      onClick={setTabOne}
    >
      <span className="h-full text-white gap-4 justify-center items-center w-full flex">
        <Image src={pixLogo} alt="Pix payment logo"/>
        PIX
      </span>
    </button>
  
    <button 
      type="button" 
      className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400" 
      id="bar-with-underline-item-2" 
      data-hs-tab="#bar-with-underline-2" 
      aria-controls="bar-with-underline-2" 
      role="tab"
      onClick={setTabTwo}
    >
      <span className="h-full text-white gap-4 justify-center items-center w-full flex">
        <Image src={creditCardLogo} alt="Pix payment logo"/>
        Crédito
        </span>
    </button>
  
  </nav>

  <div className=" flex justify-center items-center border border-gray-700 h-[381px] w-[530px]">
    <div 
      id="bar-with-underline-1" 
      role="tabpanel" 
      aria-labelledby="bar-with-underline-item-1"
    >
      <p className="text-gray-500 dark:text-gray-400">
        This is the <em className="font-semibold text-gray-800 dark:text-gray-200">Credit Card</em> item's tab body.
      </p>
    </div>  
  </div>
  </>
  )
}
