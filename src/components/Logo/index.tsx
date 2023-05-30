import Image from "next/image";
import logo from '../../assets/explorerLogo.svg'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })


export function Logo (){
    return (
    <span className={` hidden md:hidden sm:hidden gap-3 items-center font-bold text-2xl text-title lg:flex ${poppins.className}`}>
                    <Image src={logo} alt="App polygon logo" width={30} height={30}></Image>
                    food explorer
                  </span>
    )
}