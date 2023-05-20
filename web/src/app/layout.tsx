import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import { cookies } from "next/headers";
import { Hero } from '@/components/Hero';
import { Profile } from '@/components/Profile';
import { SignIn } from '@/components/SignIn';
import './globals.css'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' });

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree'
});

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = cookies().has('token');

  return (
    <html lang="en">
      <body className={`
        ${roboto.variable} ${baiJamjuree.variable} font-sans
        text-gray-100 bg-gray-900
      `}>

        <main className="grid min-h-screen grid-cols-2">
          <div className={`
            flex flex-col items-start justify-between px-28 py-16
            relative overflow-hidden border-r border-gray-50/10
          `}>

            <div className={`
              absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50
              -translate-y-1/2 translate-x-1/2 rounded-full blur-full
            `}/>

            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {
              isAuthenticated ? <Profile /> : <SignIn />
            }

            <Hero />
          </div>

          <div className="flex flex-col p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
