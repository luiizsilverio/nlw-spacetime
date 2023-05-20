'use client'
import { FormEvent } from "react";
import { Camera } from "lucide-react";
import { MediaPicker } from "./MediaPicker";
import Cookie from "js-cookie";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export function NewMemoryForm() {
  const router = useRouter();

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const fileToUpload = formData.get('coverUrl');
    let coverUrl = '';

    if (fileToUpload) {
      const uploadFormData = new FormData();
      uploadFormData.set('file', fileToUpload);

      const uploadResponse = await api.post('/upload', uploadFormData);

      coverUrl = uploadResponse.data.fileUrl;
    }

    const token = Cookie.get('token');

    await api.post('/memories', {
      coverUrl,
      content: formData.get('content'),
      isPublic: formData.get('isPublic'),
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    router.push('/');
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap2">
      <div className="flex items-center gap-4">
        <label htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="w-4 h-4" />
          Anexar mídia
        </label>

        <label htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input type="checkbox" name="isPublic" id="isPublic" value="true" />
          Tornar memória pública
        </label>
      </div>

      <MediaPicker />

      <textarea name="content" spellCheck={false}
        className={`
          w-full flex-1 resize-none rounded bg-transparent text-lg p-2
          leading-relaxed text-gray-100 placeholder:text-gray-400 border
          border-gray-400 ring-0 focus:border-green-500 outline-none
        `}
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />

      <button type="submit"
        className={`
          inline-block rounded-full bg-green-500 px-5 py-3 mt-3 self-end font-alt text-sm uppercase
          leading-none text-gray-900 hover:bg-green-600
        `}
      >
        Salvar
      </button>
    </form>
  )
}
