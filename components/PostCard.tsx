import Link from "next/link"
import { Post } from "@/types"

type Props = {
  post: Post
}

export default function PostCard({ post }: Props) {
  // Potong body jadi preview 120 karakter
  const preview = post.body.slice(0, 129) + "..."
  return (
    <Link href={`/blog/${post.id}`}>
      <article
        className="bg-white rounded-xl border border-gray-100 p-6
                 hover:shadow-md hover:border-teal-200
                 transition-all duration-200 h-full"
      >
        {/* Nomor artikel */}
        <span
          className="text-xs font-mono text-teal-600 bg-teal-50
                   px-2 py-1 rounded-full"
        >
          #{post.id}
        </span>
        {/* Judul */}
        <h2
          className="mt-3 text-lg font-semibold text-gray-900
                   line-clamp-2 capitalize"
        >
          {post.title}
        </h2>

        {/* Preview body */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">{preview}</p>

        {/* Read more */}
        <span className="mt-4 inline-block text-sm text-teal-600 font-medium">
          Baca selengkapnya →
        </span>
      </article>
    </Link>
  )
}
