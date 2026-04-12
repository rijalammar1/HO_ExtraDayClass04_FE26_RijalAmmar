import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/api"
import PostCard from "@/components/PostCard"

export const metadata: Metadata = {
  title: "Blog",
  description: "Semua artikel di NextBlog",
}

// Server Component: bisa async dan fetch data langsung!
export default async function BlogPage() {
  const posts = await getAllPosts()

  const categories = [
    { userId: "1", name: "Kategori A" },
    { userId: "2", name: "Kategori B" },
    { userId: "3", name: "Kategori C" },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap mb-8">
        <Link
          href="/blog"
          className="px-4 py-2 rounded-full bg-teal-600 text-white text-sm"
        >
          Semua
        </Link>

        {categories.map((cat) => (
          <Link
            key={cat.userId}
            href={`/blog/category/${cat.userId}`}
            className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-teal-50 hover:text-teal-700"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="mt-2 text-gray-500">{posts.length} artikel tersedia</p>
      </div>

      {/* Grid artikel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 12).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
