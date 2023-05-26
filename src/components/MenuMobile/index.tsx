import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import  logo from '../../assets/explorerLogo.svg' 
import { Poppins } from 'next/font/google'
import logOutIcon from '../../assets/logOut.svg'
import favoriteIcon from '../../assets/Heart.svg'
import search from '../../assets/Search.svg'
import { Button } from '../Button'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure 
      as="nav" 
      className=" justify-between items-center fixed h-[102px] top-0 w-screen bg-bgSecondary"
    >
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8 h-full">
            <div className="relative flex h-full items-center justify-around">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-title hover:bg-gray-700 hover:text-white hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <span className={`flex gap-3 items-center font-bold text-xl text-title lg:hidden ${poppins.className}`}>
                        <Image src={logo} alt="App polygon logo" width={25} height={25}></Image>
                        food explorer
                    </span>
                     <span className={` hidden md:hidden sm:hidden gap-3 items-center font-bold text-2xl text-title lg:flex ${poppins.className}`}>
                        <Image src={logo} alt="App polygon logo" width={30} height={30}></Image>
                        food explorer
                    </span>
                </div>
                <div className="hidden w-full sm:ml-6 sm:block">
                  <div className="flex h-full items-center gap-8">
                    <Link className="flex  md:flex lg:flex sm:hidden items-center ml-8 font-normal text-base" href={'#'}>
                      Meus Favoritos
                    </Link>
                    <Link className="hidden md:hidden sm:flex  items-center ml-8 font-normal text-sm" href={'#'}>
                      <Image className='hover:opacity-70' src={favoriteIcon} alt="App polygon logo" width={25} height={25}></Image>
                    </Link>
                    <form action="" className="flex sm:hidden md:flex h-full w-full min-w-[250px] max-w-[410px] bg-bgForm gap-3 rounded-lg px-[16px] py-[14px]">
                      <Image src={search} alt="Search logo Icon" ></Image>
                      <input className="bg-transparent w-full outline-none font-normal text-base " placeholder="Busque pelas opções de pratos"></input>
                    </form>
                    <form action="" className="hidden text-sm md:hidden sm:flex h-full w-full min-w-[150px] max-w-[400px] bg-bgForm gap-3 rounded-lg px-[14px] py-[12px]">
                      <Image src={search} alt="Search logo Icon" width={30} height={30}></Image>
                      <input className="bg-transparent w-full outline-none font-normal text-base " placeholder="Busque pelas opções"></input>
                    </form>
                    <Link className="hidden md:hidden sm:flex  items-center font-normal text-sm" href={'#'}>
                      <Image className='hover:opacity-70' src={favoriteIcon} alt="App polygon logo"  ></Image>
                    </Link>
                    <span className="flex sm:hidden md:flex">
                    <Button value="Meu pedido " order  number={0}/>
                    </span>
                  </div>
                  
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <Link href={'#'} className="ml-8 hover:opacity-70" >
                  <Image src={logOutIcon} alt="LogOut Icon"></Image>
               </Link> 
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
