import { Heading } from "../Heading"
import { Button } from "../Button"
import { useRouter } from "next/router"

export function NotConnectedView() {
  const router = useRouter()
  return (
    <main className='flex bg-bgPrimary px-8 text-white gap-32 flex-col text-center h-screen w-screen items-center justify-center'>
      <Heading h1 value='Ops! Parece que você não efetuou login na plataforma 😓'></Heading>
      <Button value='Voltar para a tela de Login' onclick={() => { router.push('/') }} />
    </main>
  )
}