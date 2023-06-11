import Image from "next/image"
import orderIcon from '../../assets/svg/Receipt.svg'
import { Poppins } from "next/font/google"
import { MouseEventHandler } from "react"


interface ButtonProps {
    number?: number
    order?: boolean
    value: string
    onclick?: MouseEventHandler
}

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })

export function Button({ onclick, number, order, value }: ButtonProps) {
    if (order) {
        return (
            <button className={`flex hover:opacity-80 h-12 w-[215px] items-center  bg-bgbutton gap-3 rounded-lg justify-center py-[14px] bg-redButton ${poppins.className}`}>
                <Image src={orderIcon} alt="App polygon logo" width={30} height={30}></Image>
                <span>
                    {value} ({number})
                </span>
            </button>
        )
    }
    return (
        <button onClick={onclick} className={`flex  h-12 hover:opacity-80 w-[80vw]  max-w-[348px]  items-center bg-bgbutton gap-3 rounded-lg justify-center py-[14px] bg-redButton ${poppins.className}`}>
            <span>
                {value}
            </span>
        </button>
    )
}