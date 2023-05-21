'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null);

  function onMediaSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      setPreview(null);
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);
    setPreview(previewURL);
  }

  return (
    <>
      <input
        type="file"
        accept="image/*"
        id="media"
        name="coverUrl"
        className="invisible h-2"
        onChange={onMediaSelected}
      />
      {
        preview &&
          <img src={preview} alt=""
            className="w-full bg-purple-950 aspect-video rounded-lg object-contain mb-2"
          />
      }
    </>
  )
}
