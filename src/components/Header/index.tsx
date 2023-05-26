import Image from "next/image";
import  logo from '../../assets/explorerLogo.svg' 
import { Roboto_Flex } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Link from "next/link";
import search from '../../assets/Search.svg'
import { Button } from "../Button";
import logOutIcon from '../../assets/logOut.svg'

const roboto = Roboto_Flex({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })



export function Header (){
    return(
        <header className={`fixed ${roboto.className} items-center justify-center flex gap-8 flex-row w-screen top-0 bg-bgSecondary py-6`}>
            <span className={`flex gap-3 items-center font-bold text-2xl text-title ${poppins.className}`}>
                <Image src={logo} alt="App polygon logo" width={30} height={30}></Image>
                food explorer
            </span>
            
            <Link className="flex items-center ml-8 font-normal text-base" href={'#'}>
                    Meus Favoritos
            </Link>
            
            <form action="" className="flex h-12 w-full max-w-xs bg-bgForm gap-3 rounded-lg px-[16px] py-[14px]">
                <Image src={search} alt="Search logo Icon" width={30} height={30}></Image>
                <input className="bg-transparent w-full outline-none font-normal text-base " placeholder="Busque pelas opções de pratos"></input>
            </form>
            
            <Button value="Meu pedido " order  number={0}/>
            
            <Link href={'#'} className="ml-8" >
            <Image src={logOutIcon} alt="LogOut Icon"></Image>
            </Link>
        </header>
    )
}

