import { CreateMemory } from "@/components/CreateMemory";
import { Hero } from "@/components/Hero";
import { SignIn } from "@/components/SignIn";

export default function Home() {
  return (
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

        <SignIn />
        <Hero />
      </div>

      <div className="flex flex-col p-16">
        <CreateMemory />
      </div>
    </main>
  )
}
