import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostById, getAllPosts, getUserById } from "@/lib/api"

type Props = {
  params: { id: string }
}

// SSG: Generate semua halaman artikel saat build time
export async function generateStaticParams() {
  const posts = await getAllPosts()
  // Return array of params objects
  return posts.map((post) => ({
    id: String(post.id),
  }))
}

// SEO: Title & description otomatis per artikel
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostById(params.id)
    return {
      title: post.title,
      description: post.body.slice(0, 160),
      openGraph: {
        title: post.title,
        description: post.body.slice(0, 160),
        type: "article",
      },
    }
  } catch {
    return { title: "Artikel Tidak Ditemukan" }
  }
}

export default async function PostDetailPage({ params }: Props) {
  let post, author

  try {
    post = await getPostById(params.id)
    author = await getUserById(post.userId)
  } catch {
    notFound() // Trigger 404 page jika artikel tidak ada
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-teal-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-teal-600">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Artikel #{params.id}</span>
      </nav>

      {/* Artikel header */}
      <span
        className="text-xs font-mono bg-teal-50 text-teal-700
                       px-3 py-1 rounded-full"
      >
        Artikel #{post!.id}
      </span>

      <h1 className="mt-4 text-3xl font-bold text-gray-900 leading-tight capitalize">
        {post!.title}
      </h1>

      {/* Author info */}
      <div className="mt-4 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full bg-teal-100 flex items-center
                        justify-content-center text-teal-700 font-bold text-sm
                         justify-center"
        >
          {author!.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{author!.name}</p>
          <p className="text-xs text-gray-500">{author!.email}</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-200" />

      {/* Konten artikel */}
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed text-lg">{post!.body}</p>
        {/* Simulasi konten panjang */}
        <p className="mt-6 text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quod, quia, quas quae quibusdam voluptate quos quidem
          nulla doloremque.
        </p>
      </div>

      {/* Back button */}
      <Link
        href="/blog"
        className="mt-12 inline-flex items-center gap-2 text-teal-600
                   hover:text-teal-800 font-medium"
      >
        ← Kembali ke Blog
      </Link>
    </div>
  )
}
