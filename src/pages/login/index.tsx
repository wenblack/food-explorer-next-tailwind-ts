import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Login() {
  return (
    <div className={`min-h-screen flex  w-screen bg-bgPrimary ${roboto.className}`}>
      <main>
      </main>
    </div>
  )
}
