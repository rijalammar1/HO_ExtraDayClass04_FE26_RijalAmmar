// app/blog/category/[userId]/page.tsx
import { notFound } from "next/navigation"
import { getPostsByUserId, getUserById } from "@/lib/api"
import PostCard from "@/components/PostCard"
import type { Metadata } from "next"

type Props = { params: { userId: string } }

export async function generateStaticParams() {
  // Generate untuk userId 1-10
  return Array.from({ length: 10 }, (_, i) => ({
    userId: String(i + 1),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ userId: string }>
}): Promise<Metadata> {
  const { userId } = await params

  const user = await getUserById(Number(userId))

  return {
    title: user ? `Artikel oleh ${user.name}` : "Penulis tidak ditemukan",
    description: user
      ? `Semua artikel yang ditulis oleh ${user.name}`
      : "Data penulis tidak tersedia",
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ userId: string }>
}) {
  const { userId } = await params // ✅ WAJIB

  const [posts, author] = await Promise.all([
    getPostsByUserId(userId),
    getUserById(Number(userId)),
  ])

  if (!author) notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm text-teal-600 font-medium">Penulis</span>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">{author.name}</h1>

        <p className="text-gray-500">{posts.length} artikel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
