// app/page.tsx
import Link from "next/link"
import { getAllPosts } from "@/lib/api"
import PostCard from "@/components/PostCard"

export default async function Home() {
  const posts = await getAllPosts()
  const featuredPosts = posts.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linier-to-br from-teal-50 to-white">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <span
            className="inline-block bg-teal-100 text-teal-700 text-sm
                           font-medium px-4 py-1 rounded-full mb-4"
          >
            Next.js 14 App Router
          </span>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Selamat datang di <span className="text-teal-600">NextBlog</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Blog modern dibangun dari nol menggunakan Next.js 14, TypeScript,
            dan Tailwind CSS.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-teal-600 text-white px-8 py-3 rounded-full
                         font-medium hover:bg-teal-700"
            >
              {" "}
              Lihat Semua Artikel
            </Link>
            <Link
              href="/about"
              className="bg-white border border-gray-200 text-gray-700
                         px-8 py-3 rounded-full font-medium hover:border-teal-300"
            >
              Tentang Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Artikel Terbaru</h2>
          <Link
            href="/blog"
            className="text-teal-600 font-medium hover:underline"
          >
            Lihat semua →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}
