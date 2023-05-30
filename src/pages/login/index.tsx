import { Logo } from '@/components/Logo'
import { Roboto_Flex, Poppins } from 'next/font/google'
import { Input } from '@/components/Input'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'

const roboto = Roboto_Flex({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'] , weight:['700','600']})

export default function Login() {
  return (
      <main className={`min-h-screen overflow-hidden h-fulll grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-screen bg-bgPrimary  ${roboto.className}`}>
       <div className='hidden  bg-bgPrimary text-white md:grid  lg:grid md:h-[100vh] items-center justify-center'> 
        <span className={`flex items-center gap-3 text-[42px] font-bold ${poppins.className}`}>
        <Logo></Logo>
        </span>
       </div>
       <div className=' text-white grid h-[100vh] items-center justify-center'>
        <div className=' flex flex-col items-center justify-center h-[100vh] w-[80vw] max-h-[540px] max-w-[476px] bg-bgContentForm rounded-lg'>
          <Heading h1 value='Faça login' ></Heading>
          <Input value='Exemplo: exemplo@exemplo.com.br' label='Email' />
          <Input value='No mínimo 6 caracteres' label='Senha' />
          <Button value='Entrar' />
        </div>
       </div>
      </main>
  )
}
