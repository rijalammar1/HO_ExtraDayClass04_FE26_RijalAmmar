"use client"

import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { useState } from "react"

export default function NewPostForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const supabase = createClient()

  const handleSubmit = async () => {
    if (title === "" || content === "") {
      alert("title and content must be filled")
      return
    }

    const { error } = await supabase.from("posts").insert([{ title, content }])

    if (error) {
      console.error(error)
    } else {
      setTitle("")
      setContent("")
      // Refresh page or update state
    }
  }
  return (
    <div className="space-y-3 p-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Judul post"
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Isi konten"
        className="w-full px-3 py-2 border rounded-lg"
      />

      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
      >
        Simpan Post
      </button>
      <Link
        href="/post"
        className="w-full block p-2 text-center py-2 bg-white border border-teal-500 text-teal=500 hover:text-white rounded-lg hover:bg-teal-600"
      >
        Back to post
      </Link>
    </div>
  )
}
