import {  useState } from "react"
import pixLogo from '../../assets/svg/pix.svg'
import Image from "next/image"
import creditCardLogo from '../../assets/svg/CreditCard.svg'
import qrCode from '../../assets/svg/qrCode.svg'
import { Input } from "../Input"
import { Button } from "../Button"
import { Heading } from "../Heading"

export function PaymentView() {
  const [pageNumber, setpageNumber] = useState(1)


  function setTabOne() {
    console.log(pageNumber)
    setpageNumber(1)
  }

  function setTabTwo() {
    console.log(pageNumber)
    setpageNumber(2)
  }

  if (pageNumber === 1) {
    return (
      <>
        <span className="flex w-[80vw] max-w-[530px] mb-8 justify-start items-center">
          <Heading value="Pagamentos" h1={false}/>
        </span>
        
        <nav className="flex w-[80vw] rounded-t-md text-title border-bgForm max-w-[530px] z-0  border  overflow-hidden " aria-label="Tabs" role="tablist">
          <button
            type="button"
            className="  bg-bgSecondary h-[81px] border-b-white border-bgForm hover:opacity-70   min-w-0 flex-1 first:border-l-0 border-l border-b-2 py-4 px-4   text-sm font-medium text-center overflow-hidden  focus:z-10   active"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
            onClick={setTabOne}
          >
            <span className="h-full text-title gap-4 justify-center items-center w-full flex">
              <Image src={pixLogo} alt="Pix payment logo" />
              PIX
            </span>
          </button>

          <button
            type="button"
            className=" hover:opacity-70 h-[81px]   border-bgForm  min-w-0 flex-1 first:border-l-0 border-l border-b-0 py-4 px-4   text-sm font-medium text-center overflow-hidden  focus:z-10"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
            onClick={setTabTwo}
          >
            <span className="h-full text-white gap-4 justify-center items-center w-full flex">
              <Image src={creditCardLogo} alt="Pix payment logo" />
              Crédito
            </span>
          </button>

        </nav>

        <div className=" flex justify-center items-center border border-bgForm w-[80vw] h-full max-h-[381px] max-w-[530px]">
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
          >
            <Image src={qrCode} alt="Qr Code for payment"></Image>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
    <span className="flex w-[80vw] max-w-[530px] mb-8 justify-start items-center">
    <Heading value="Pagamentos" h1={false}/>
    </span>
      <nav className="flex rounded-t-md w-[80vw] max-w-[530px] z-0  border  overflow-hidden border-bgForm" aria-label="Tabs" role="tablist">
        <button
          type="button"
          className=" hover:opacity-70  h-[81px] border-bgForm relative min-w-0 flex-1 first:border-l-0 border-l border-b-0 py-4 px-4   text-sm font-medium text-center overflow-hidden  focus:z-10"
          id="bar-with-underline-item-1"
          data-hs-tab="#bar-with-underline-1"
          aria-controls="bar-with-underline-1"
          role="tab"
          onClick={setTabOne}
        >
          <span className="h-full text-white gap-4 justify-center items-center w-full flex">
            <Image src={pixLogo} alt="Pix payment logo" />
            PIX
          </span>
        </button>

        <button
          type="button"
          className="  bg-bgSecondary h-[81px] border-b-white border-bgForm hover:opacity-70  relative min-w-0 flex-1 first:border-l-0 border-l border-b-2 py-4 px-4   text-sm font-medium text-center overflow-hidden  focus:z-10   active"
          id="bar-with-underline-item-2"
          data-hs-tab="#bar-with-underline-2"
          aria-controls="bar-with-underline-2"
          role="tab"
          onClick={setTabTwo}
        >
          <span className="h-full text-white gap-4 justify-center items-center w-full flex">
            <Image src={creditCardLogo} alt="Pix payment logo" />
            Crédito
          </span>
        </button>

      </nav>

      <div className=" flex justify-center border-bgForm items-center border w-[80vw] h-full max-h-[381px] max-w-[530px] ">
        <div
          id="bar-with-underline-1"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-1"
          className="flex items-center flex-col gap-5 px-2"
        >
          <Input
            label="Número do Cartão"
            value="0000 0000 0000 0000"
            cardNumber
          />
          <span className="flex w-full justify-between  mb-5">
            <Input type="text" label="Validade" value="04/25" validateMonth />
            <Input type="number" label="CVC" value="000" cvc />
          </span>
          <span className="w-full flex max-w-[60vw]">
            <Button value="Finalizar Pagamento" />
          </span>
        </div>
      </div>
    </>
  )
}
