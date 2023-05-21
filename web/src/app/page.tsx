import { cookies } from "next/headers";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dayjs from "dayjs";
import ptBr from 'dayjs/locale/pt-br';

import { CreateMemory } from "@/components/CreateMemory";
import { api } from "@/lib/api";

dayjs.locale(ptBr);

interface IMemory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token');

  if (!isAuthenticated) {
    return <CreateMemory />
  }

  const token = cookies().get('token')?.value;
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const memories: IMemory[] = response.data;

  if (memories.length === 0) {
    return <CreateMemory />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {
        memories.map(memory => (
          <div key={memory.id} className="space-y-4">
            <time className={`
              flex items-center gap-2 text-sm text-gray-50 -ml-8
              before:h-px before:w-6 before:bg-gray-100
            `}>
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>

            <img src={memory.coverUrl} width={592} height={280} alt=""
              className="w-full aspect-video object-contain rounded-lg bg-purple-950"
            />

            <p className="text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>

            <Link
              href={`/memories/${memory.id}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              Ler mais
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))
      }
    </div>
  )
}
