import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <form className="flex flex-1 flex-col gap2">
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

        <input type="file" id="media" className="invisible h-2" />

        <textarea name="content" spellCheck={false}
          className={`
            w-full flex-1 resize-none rounded bg-transparent text-lg p-2
            leading-relaxed text-gray-100 placeholder:text-gray-400 border border-gray-400
            focus:ring-0
          `}
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
      </form>
    </div>
  )
}
